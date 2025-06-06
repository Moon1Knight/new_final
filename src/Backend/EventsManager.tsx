import React from 'react';
import { useState, useEffect, type ChangeEvent, type FormEvent, type FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
  Tooltip,
  Fade,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { cloudName, uploadPreset } from '../config/cloudinary';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  mainImage: string;
  additionalImages: string[];
  youtubeLink?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
}

interface FormData {
  title: string;
  description: string;
  date: string;
  mainImage: File | null;
  additionalImages: File[];
  youtubeLink: string;
}

const EventsManager: FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState<boolean>(false);
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previewEvent, setPreviewEvent] = useState<Event | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { currentUser } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    date: '',
    mainImage: null,
    additionalImages: [],
    youtubeLink: '',
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async (): Promise<void> => {
    try {
      const eventsCollection = collection(db, 'events');
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsList = eventsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Event[];
      setEvents(eventsList);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast.error('Failed to load events');
    }
  };

  const handleImageUpload = async (file: File): Promise<string | null> => {
    if (!file) return null;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file');
      return null;
    }
    
    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('Image size should be less than 10MB');
      return null;
    }
    
    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('upload_preset', uploadPreset);
      
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: uploadFormData,
        }
      );
      
      if (!response.ok) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'Upload failed');
      }
      
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image. Please try again.');
      return null;
    }
  };

  const handleClickOpen = (event: Event | null = null): void => {
    if (!currentUser) {
      toast.error('Please log in to manage events');
      return;
    }
    if (event) {
      setEditingEvent(event);
      setFormData({
        title: event.title,
        description: event.description,
        date: event.date,
        mainImage: null,
        additionalImages: [],
        youtubeLink: event.youtubeLink || '',
      });
    } else {
      setEditingEvent(null);
      setFormData({
        title: '',
        description: '',
        date: '',
        mainImage: null,
        additionalImages: [],
        youtubeLink: '',
      });
    }
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    setEditingEvent(null);
    setImagePreview(null);
    setFormData({
      title: '',
      description: '',
      date: '',
      mainImage: null,
      additionalImages: [],
      youtubeLink: '',
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    console.log('Form submitted with data:', formData);
    console.log('Current user:', currentUser);
    
    if (!currentUser) {
      toast.error('Please log in to add events');
      return;
    }

    // Validation
    if (!formData.title.trim()) {
      toast.error('Please enter a title');
      return;
    }
    
    if (!formData.description.trim()) {
      toast.error('Please enter a description');
      return;
    }
    
    if (!formData.date) {
      toast.error('Please select a date');
      return;
    }

    if (!formData.mainImage && !editingEvent) {
      toast.error('Please select a main image for the event');
      return;
    }

    try {
      setIsLoading(true);
      console.log('Starting event submission...');

      let mainImageUrl: string | null | undefined = editingEvent?.mainImage;
      
      // Upload main image if new file is selected
      if (formData.mainImage) {
        console.log('Uploading main image...');
        mainImageUrl = await handleImageUpload(formData.mainImage);
        if (!mainImageUrl) {
          toast.error('Failed to upload main image');
          return;
        }
        console.log('Main image uploaded:', mainImageUrl);
      }

      // Upload additional images if any
      let additionalImageUrls: string[] = editingEvent?.additionalImages || [];
      if (formData.additionalImages.length > 0) {
        console.log('Uploading additional images...');
        const uploadPromises = formData.additionalImages.map(file => handleImageUpload(file));
        const uploadResults = await Promise.all(uploadPromises);
        additionalImageUrls = uploadResults.filter((url): url is string => url !== null);
        console.log('Additional images uploaded:', additionalImageUrls);
      }

      const eventData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        date: formData.date,
        mainImage: mainImageUrl,
        additionalImages: additionalImageUrls,
        youtubeLink: formData.youtubeLink.trim() || '',
        updatedAt: new Date().toISOString(),
      };

      console.log('Event data to save:', eventData);

      if (editingEvent) {
        console.log('Updating existing event...');
        await updateDoc(doc(db, 'events', editingEvent.id), eventData);
        toast.success('Event updated successfully!');
      } else {
        console.log('Creating new event...');
        const docRef = await addDoc(collection(db, 'events'), {
          ...eventData,
          createdAt: new Date().toISOString(),
          createdBy: currentUser.uid,
        });
        console.log('Event created with ID:', docRef.id);
        toast.success('Event added successfully!');
      }

      // Reset form and close dialog
      setFormData({
        title: '',
        description: '',
        date: '',
        mainImage: null,
        additionalImages: [],
        youtubeLink: '',
      });
      setOpen(false);
      setImagePreview(null);
      
      // Refresh events list
      await fetchEvents();
      
    } catch (error) {
      console.error('Error saving event:', error);
      toast.error(`Failed to ${editingEvent ? 'update' : 'add'} event. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log('Main image selected:', file.name, file.size, file.type);
      setFormData({ ...formData, mainImage: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAdditionalFilesChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (files.length > 5) {
        toast.warning('You can only upload up to 5 additional images');
        return;
      }
      console.log('Additional images selected:', files.length);
      setFormData({ ...formData, additionalImages: Array.from(files) });
    }
  };

  const handleDeleteClick = (event: Event): void => {
    setEventToDelete(event);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = async (): Promise<void> => {
    if (!currentUser || !eventToDelete) {
      toast.error('Please log in to delete events');
      return;
    }

    try {
      await deleteDoc(doc(db, 'events', eventToDelete.id));
      setEvents(events.filter(event => event.id !== eventToDelete.id));
      toast.success('Event deleted successfully!');
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Failed to delete event. Please make sure you have permission.');
    } finally {
      setDeleteConfirmOpen(false);
      setEventToDelete(null);
    }
  };

  const handlePreviewClick = (event: Event): void => {
    setPreviewEvent(event);
  };

  const handleClosePreview = (): void => {
    setPreviewEvent(null);
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }} className="events-manager-container">
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 }
      }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
          Event Management
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => handleClickOpen()}
          sx={{ 
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            width: { xs: '100%', sm: 'auto' }
          }}
        >
          Add Event
        </Button>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {events.map((event) => (
            <Box 
              key={event.id}
              sx={{
                width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.33% - 16px)', lg: 'calc(25% - 18px)' },
                '@media (max-width: 600px)': {
                  paddingLeft: '12px',
                  paddingRight: '12px',
                },
              }}
            >
              <Card 
                className="event-card"
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                  },
                  maxWidth: '350px',
                }}
              >
                <CardMedia
                  component="div"
                  sx={{ 
                    height: 180,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover .overlay': {
                      opacity: 1,
                    },
                  }}
                  onClick={() => handlePreviewClick(event)}
                >
                  <img 
                    src={event.mainImage}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    className="event-image"
                  />
                  <Box 
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      cursor: 'pointer',
                    }}
                  >
                    <VisibilityIcon sx={{ color: 'white', fontSize: 32 }} />
                  </Box>
                </CardMedia>
                <CardContent className="event-content" sx={{ flexGrow: 1, p: 2.5 }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    noWrap 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    gutterBottom
                    sx={{ fontSize: '0.85rem' }}
                  >
                    {new Date(event.date).toLocaleDateString()}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    className="event-description"
                    sx={{ 
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      mb: 2,
                      height: '4.5em',
                      lineHeight: 1.5,
                    }}
                  >
                    {event.description}
                  </Typography>
                </CardContent>
                <CardActions 
                  className="event-actions"
                  sx={{ 
                    justifyContent: 'flex-end', 
                    p: 2,
                    pt: 0,
                    gap: 1,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Tooltip title="Preview" arrow TransitionComponent={Fade}>
                    <IconButton
                      size="small"
                      onClick={() => handlePreviewClick(event)}
                      className="preview-button"
                      sx={{ 
                        color: 'info.main',
                        '&:hover': {
                          backgroundColor: 'rgba(3, 169, 244, 0.08)',
                        },
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit" arrow TransitionComponent={Fade}>
                    <IconButton
                      size="small"
                      onClick={() => handleClickOpen(event)}
                      className="edit-button"
                      sx={{ 
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        },
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete" arrow TransitionComponent={Fade}>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteClick(event)}
                      className="delete-button"
                      sx={{ 
                        color: 'error.main',
                        '&:hover': {
                          backgroundColor: 'rgba(244, 67, 54, 0.08)',
                        },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Preview Dialog */}
      <Dialog 
        open={Boolean(previewEvent)} 
        onClose={handleClosePreview}
        maxWidth="md"
        fullWidth
        className="preview-dialog"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '12px',
            overflow: 'hidden',
          }
        }}
      >
        <DialogTitle 
          className="preview-dialog-title"
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            pb: 1,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {previewEvent?.title}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClosePreview}
            aria-label="close"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent 
          dividers
          className="preview-dialog-content"
          sx={{ p: { xs: 2, sm: 3 } }}
        >
          <Box sx={{ mb: 3 }} className="main-image-container">
            <img
              src={previewEvent?.mainImage}
              alt={previewEvent?.title}
              style={{
                width: '400px',
                height: 'auto',
                maxHeight: '400px',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
              className="preview-main-image"
            />
          </Box>
          {previewEvent && previewEvent.additionalImages && previewEvent.additionalImages.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Additional Images
              </Typography>
              <ImageList 
                cols={isMobile ? 1 : isTablet ? 2 : 3} 
                gap={12}
                sx={{ overflow: 'hidden' }}
              >
                {previewEvent.additionalImages.map((image, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={image}
                      alt={`Additional ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        aspectRatio: '16/9',
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          )}
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Description
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              whiteSpace: 'pre-line',
              mb: 3,
              lineHeight: 1.7,
            }}
            className="event-full-description"
          >
            {previewEvent?.description}
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            gutterBottom
            className="event-date"
          >
            Date: {previewEvent?.date && new Date(previewEvent.date).toLocaleDateString()}
          </Typography>
          {previewEvent?.youtubeLink && (
            <Button
              variant="outlined"
              startIcon={<PlayArrowIcon />}
              href={previewEvent.youtubeLink}
              target="_blank"
              sx={{ 
                mt: 2,
                borderRadius: '8px',
                textTransform: 'none',
              }}
              className="youtube-button"
            >
              Watch Video
            </Button>
          )}
        </DialogContent>
      </Dialog>

      {/* Add/Edit Event Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        className="event-form-dialog"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '12px',
            overflow: 'visible',
          }
        }}
      >
        <DialogTitle 
          className="event-form-title"
          sx={{ 
            borderBottom: '1px solid',
            borderColor: 'divider',
            pb: 1,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {editingEvent ? 'Edit Event' : 'Add New Event'}
          </Typography>
        </DialogTitle>
        <DialogContent className="event-form-content" sx={{ p: { xs: 2, sm: 3 } }}>
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ mt: 2 }}
            className="event-form"
            id="event-form"
          >
            <TextField
              fullWidth
              label="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              sx={{ mb: 3 }}
              className="form-field title-field"
              InputProps={{
                sx: { borderRadius: '8px' }
              }}
            />
            <TextField
              fullWidth
              label="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              multiline
              rows={4}
              sx={{ mb: 3 }}
              className="form-field description-field"
              InputProps={{
                sx: { borderRadius: '8px' }
              }}
            />
            <TextField
              fullWidth
              type="date"
              label="Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 3 }}
              className="form-field date-field"
              InputProps={{
                sx: { borderRadius: '8px' }
              }}
            />
            <Box sx={{ mb: 3 }} className="main-image-upload">
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
                Main Image {!editingEvent && '(Required)'}
              </Typography>
              <Box 
                sx={{ 
                  border: '1px dashed',
                  borderColor: 'divider',
                  p: 2,
                  borderRadius: '8px',
                  backgroundColor: 'background.paper',
                }}
                className="upload-container"
              >
                <input
                  accept="image/*"
                  type="file"
                  onChange={handleFileChange}
                  required={!editingEvent}
                  className="file-input"
                  style={{ marginBottom: '8px' }}
                />
                {(imagePreview || editingEvent?.mainImage) && (
                  <Box sx={{ mt: 2, position: 'relative' }} className="image-preview-container">
                    <img
                      src={imagePreview || editingEvent?.mainImage}
                      alt="Preview"
                      style={{
                        width: '100%',
                        maxHeight: '200px',
                        objectFit: 'contain',
                        borderRadius: '8px',
                      }}
                      className="image-preview"
                    />
                  </Box>
                )}
              </Box>
            </Box>
            <Box sx={{ mb: 3 }} className="additional-images-upload">
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
                Additional Images (Optional, up to 5)
              </Typography>
              <Box 
                sx={{ 
                  border: '1px dashed',
                  borderColor: 'divider',
                  p: 2,
                  borderRadius: '8px',
                  backgroundColor: 'background.paper',
                }}
                className="upload-container"
              >
                <input
                  accept="image/*"
                  type="file"
                  multiple
                  onChange={handleAdditionalFilesChange}
                  className="file-input"
                />
              </Box>
            </Box>
            <TextField
              fullWidth
              label="YouTube Video Link (Optional)"
              value={formData.youtubeLink}
              onChange={(e) => setFormData({ ...formData, youtubeLink: e.target.value })}
              placeholder="https://www.youtube.com/watch?v=..."
              sx={{ mb: 2 }}
              className="form-field youtube-field"
              InputProps={{
                sx: { borderRadius: '8px' }
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions 
          sx={{ 
            p: 2, 
            px: 3, 
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
          className="event-form-actions"
        >
          <Button 
            onClick={handleClose}
            variant="outlined"
            sx={{ 
              borderRadius: '8px', 
              textTransform: 'none',
              px: 3,
            }}
            className="cancel-button"
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            form="event-form"
            variant="contained" 
            disabled={isLoading}
            sx={{ 
              borderRadius: '8px', 
              textTransform: 'none',
              px: 3,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            className="submit-button"
          >
            {isLoading ? (
              <CircularProgress size={24} />
            ) : editingEvent ? (
              'Update Event'
            ) : (
              'Add Event'
            )}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
        className="delete-dialog"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '12px',
            overflow: 'hidden',
          }
        }}
      >
        <DialogTitle 
          sx={{ 
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
          className="delete-dialog-title"
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            Delete Event
          </Typography>
        </DialogTitle>
        <DialogContent className="delete-dialog-content" sx={{ pt: 3, pb: 2 }}>
          <Typography>
            Are you sure you want to delete this event? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions 
          sx={{ 
            p: 2, 
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
          className="delete-dialog-actions"
        >
          <Button 
            onClick={() => setDeleteConfirmOpen(false)}
            variant="outlined"
            sx={{ 
              borderRadius: '8px', 
              textTransform: 'none',
            }}
            className="cancel-delete-button"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleDeleteConfirm} 
            color="error"
            variant="contained"
            sx={{ 
              borderRadius: '8px', 
              textTransform: 'none',
            }}
            className="confirm-delete-button"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Global styles for consistency */}
      <style>{`
        .file-input {
          width: 100%;
        }
        
        @media (max-width: 600px) {
          .event-grid-item {
            padding-left: 12px;
            padding-right: 12px;
          }
          
          .events-grid {
            margin-left: -12px;
            margin-right: -12px;
          }
        }
      `}</style>
    </Box>
  );
}

export default EventsManager;