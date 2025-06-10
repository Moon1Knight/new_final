import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const SecondarySchool = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-[75rem]">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent "
        >
          Secondary School
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-purple-100"
        >
          <iframe
            src="/banner/ICSE_Curriculum.mp4"
            title="Secondary School Overview"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6 relative">
            <span className="border-b-4 border-purple-300 pb-1">Indian Certificate Of Secondary Education (ICSE) Examination</span>
          </h2>
          <p className="text-gray-700 leading-loose mb-6 text-justify tracking-wide first-letter:text-6xl first-letter:font-bold first-letter:text-purple-700 first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none">
            Students are prepared to take the ICSE Board exam, with Class IX serving as a foundation year for appearing in the Class X ICSE Examination.
          </p>
          <p className="text-gray-700 leading-loose mb-6 text-justify tracking-wide indent-12">
            The Council for the Indian School Certificate Examinations was established in 1958 by the University of Cambridge Local Examinations Syndicate with the assistance of the Inter-State Board for Anglo-Indian Education. It is registered under the Societies Registration Act No. XXI of 1860.
          </p>
          <p className="text-gray-700 leading-loose mb-6 text-justify tracking-wide indent-12">
            The Indian Certificate of Secondary Education has been designed to provide an examination in a course of general education, in accordance with the recommendations of the New Education Policy 1986, through the medium of English. Private candidates are not permitted to appear for this examination.
          </p>
          <p className="text-gray-700 leading-loose text-justify tracking-wide indent-12">
            While it is sometimes believed that obtaining high grades in the ICSE board is arduous due to the density of content and the extensive syllabus, the skill of a well-qualified teaching body and a well-researched teaching methodology adopted by a school play crucial roles. A significant part of ensuring our students' success lies with the school, where teachers provide the guidance, support, and inputs they need. At Avenues, we create an environment that nurtures learning, provides infrastructure, and fosters an atmosphere that boosts students' confidence, increases their thirst for knowledge, and prepares them to excel in Board Exams, utilizing their potential to the fullest and achieving success.
          </p>
        </motion.div>

        {/* Advantages Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6 relative">
            <span className="bg-gradient-to-r from-purple-100 to-purple-50 px-4 py-2 rounded-lg border-l-8 border-purple-500">Advantages of ICSE Syllabus</span>
          </h2>
          <div className="bg-gradient-to-r from-purple-25 to-white p-6 rounded-xl border-2 border-dashed border-purple-200">
            <ul className="space-y-6">
              <li className="flex items-start group">
                <span className="text-purple-600 mr-4 text-xl font-bold">▶</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Every subject taught in ICSE is covered in detail, providing students with thorough knowledge for better understanding
                </p>
              </li>
              <li className="flex items-start group">
                <span className="text-purple-600 mr-4 text-xl font-bold">▶</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  The certificate provided by the ICSE board is accepted worldwide, enabling students to enroll in foreign institutions for further studies
                </p>
              </li>
              <li className="flex items-start group">
                <span className="text-purple-600 mr-4 text-xl font-bold">▶</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Students studying under the ICSE curriculum gain a comprehensive understanding of the English language
                </p>
              </li>
              <li className="flex items-start group">
                <span className="text-purple-600 mr-4 text-xl font-bold">▶</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Studying under the ICSE syllabus helps develop management skills, preparing students for success in management fields
                </p>
              </li>
              <li className="flex items-start group">
                <span className="text-purple-600 mr-4 text-xl font-bold">▶</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  The syllabus enhances students' analytical skills by providing practical knowledge of the subjects they study
                </p>
              </li>
              <li className="flex items-start group">
                <span className="text-purple-600 mr-4 text-xl font-bold">▶</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  With an ICSE background, students can enter scholarship exams for studying abroad, showcasing their competence in international settings
                </p>
              </li>
              <li className="flex items-start group">
                <span className="text-purple-600 mr-4 text-xl font-bold">▶</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Students studying in the ICSE board are well-prepared to excel in exams like TOEFL due to their strong command of the English language
                </p>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CISCE Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6 text-center">
            <span className="inline-block border-t-4 border-b-4 border-purple-300 py-3 px-6 bg-gradient-to-r from-purple-50 to-white rounded-full">
              CISCE Unique Features And Areas Of Excellence
            </span>
          </h2>
          <div className="border-t-2 border-purple-100 pt-6">
            <p className="text-gray-700 leading-loose mb-6 text-justify tracking-wide first-letter:text-5xl first-letter:font-semibold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              The Council believes in maintaining high academic standards to ensure students excel in every sphere of life. It emphasizes the development and assessment of higher-order thinking skills and creativity, alongside nurturing soft virtues such as empathy, community service, gender equality, and environmental awareness.
            </p>
            <p className="text-gray-700 leading-loose mb-6 text-justify tracking-wide indent-12">
              The Council is actively involved in studying areas of concern in education to provide new insights, dispel myths, and provoke new responses to deliver more effective teaching-learning provisions.
            </p>
            <p className="text-gray-700 leading-loose mb-6 text-justify tracking-wide indent-12">
              The carefully planned academic curriculum ensures that students enjoy their school years through learning and discovery, acquiring a sound understanding of concepts.
            </p>
            <p className="text-gray-700 leading-loose mb-6 text-justify tracking-wide indent-12">
              The curriculum is challenging and on par with other international curricula, with continual review and incorporation of changes as needed. Students taking the ISC examinations are well-equipped to excel in various competitive examinations.
            </p>
            <p className="text-gray-700 leading-loose text-justify tracking-wide indent-12">
              Recognizing the need for hands-on training and "learning by doing," the Council has made it mandatory for students at ICSE levels to opt for an application-based subject, with 50% weightage given to theory marks and 50% to practicals.
            </p>
          </div>
        </motion.div>

        {/* Stress Reduction Measures */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6 relative">
            <span className="relative z-10 bg-white px-4">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-100 transform skew-y-1 rounded-lg"></span>
              <span className="relative">Stress Reduction Measures</span>
            </span>
          </h2>
          <p className="text-gray-700 leading-loose mb-8 text-justify tracking-wide first-letter:text-5xl first-letter:font-semibold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            In recent years, the Council has introduced measures to reduce stress during examinations:
          </p>
          <div className="bg-gradient-to-br from-gray-50 to-purple-25 p-8 rounded-xl border border-purple-100">
            <ul className="space-y-6">
              <li className="flex items-start group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-purple-600 mr-4 text-2xl font-bold min-w-max">◆</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Continuous and Comprehensive Evaluation (CCE) is promoted at the junior and middle levels, with compulsory provision of internal assessment to give due weightage to CCE, even at the secondary level
                </p>
              </li>
              <li className="flex items-start group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-purple-600 mr-4 text-2xl font-bold min-w-max">◆</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Flexibility in the choice of subjects at the secondary level helps integrate learning with abilities and talents, reducing stress
                </p>
              </li>
              <li className="flex items-start group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-purple-600 mr-4 text-2xl font-bold min-w-max">◆</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Students weak in Mathematics/Science can opt for other subjects to alleviate the stress of failure
                </p>
              </li>
              <li className="flex items-start group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-purple-600 mr-4 text-2xl font-bold min-w-max">◆</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  The Council offers a variety of subjects from which students can choose based on their aptitude and ability
                </p>
              </li>
              <li className="flex items-start group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-purple-600 mr-4 text-2xl font-bold min-w-max">◆</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Skill-based subjects have been introduced to make the curriculum more holistic and comprehensive
                </p>
              </li>
              <li className="flex items-start group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-purple-600 mr-4 text-2xl font-bold min-w-max">◆</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Internal Assessment components provide stress-free learning opportunities
                </p>
              </li>
              <li className="flex items-start group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-purple-600 mr-4 text-2xl font-bold min-w-max">◆</span>
                <p className="text-gray-700 leading-loose text-justify tracking-wide group-hover:text-gray-900 transition-colors duration-200">
                  Choice of Application-based subjects further reduces stress, particularly in handling Group III subjects
                </p>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 leading-loose mt-8 text-justify tracking-wide indent-12 border-t-2 border-purple-100 pt-6">
            These measures aim to ensure that students have a well-rounded educational experience and are equipped to excel in their academic pursuits.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default SecondarySchool;