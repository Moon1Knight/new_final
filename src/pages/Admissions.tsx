import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

interface FormData {
  studentName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  grade: string;
  address: string;
}

const Admissions = () => {
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    grade: '',
    address: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return (
      formData.studentName &&
      formData.phone &&
      formData.dob &&
      formData.gender &&
      formData.grade 
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'admissions'), {
        ...formData,
        status: 'pending',
        timestamp: serverTimestamp(),
      });
      toast.success('Application submitted successfully! We will contact you soon.');
      setFormData({
        studentName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        grade: '',
        address: '',
      });
    } catch (error: any) {
      console.error('Submission error:', error);
      toast.error(
        error.code === 'permission-denied'
          ? 'Submission failed: Authorization required'
          : 'Submission failed. Please try again later.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold text-center mb-8">Admission Form</h1>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md space-y-6">
          <div>
            <label className="block mb-1 font-medium">Full Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number<span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Date of Birth<span className="text-red-500">*</span></label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Gender<span className="text-red-500">*</span></label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Grade<span className="text-red-500">*</span></label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select grade</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={`Grade ${i + 1}`}>
                  Grade {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Admissions;
