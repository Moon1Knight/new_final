import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const UpperPrimary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-[75rem]">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
        >
          Upper Primary
        </motion.h1>

        {/* Hero Video - Reduced Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 flex justify-center"
        >
          <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="/banner/upperprimaryschool.mp4"
              title="Upper Primary School Overview"
              className="w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <div className="border-l-4 border-purple-500 pl-6 mb-6">
            <p className="text-gray-700 leading-relaxed text-justify italic text-lg font-medium">
              "Our learning is centered around big concepts that inspire thought and action with a focus on intellectual, emotional, and social growth."
            </p>
          </div>
          
          <div className="space-y-6 text-justify">
            <p className="text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              Your child will spend their day learning from multiple teachers who are passionate about their unique subject areas. Behind the scenes, our team of educators work together to find synergies between the subjects to create an interdisciplinary, coherent, and challenging curriculum.
            </p>
            
            <p className="text-gray-700 leading-relaxed border-l-2 border-purple-200 pl-4 bg-purple-50 py-3 rounded-r-lg">
              Our learning is centered around big concepts that inspire thought and action with a focus on intellectual, emotional, and social growth. The approach in Upper Primary School is guided by a desire to honor our students' need for independence by empowering them to be their own advocates, to engage with teachers directly, to take ownership in their academic work, to solve their own problems, to provide support to each other, to transition between rooms and buildings on their own, and to choose their own cocurricular classes.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              A hallmark of our program is the emphasis we place on teaching students <span className="font-semibold text-purple-700 underline decoration-purple-300 decoration-2">how to learn</span>. We focus on teaching students the skills and strategies that promote growth and competence. When our Upper Primary Schoolers move on to their respective Secondary Schools after Grade 8, they are not only recognized for their academic work, but they are praised for their <span className="bg-yellow-100 px-1 rounded">mature emotional intelligence</span>. Our students are organized, articulate and they advocate for themselves – exactly what they need to navigate the high school years and beyond.
            </p>
          </div>
        </motion.div>

        {/* Curriculum Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-8">
            <h2 className="text-purple-600 text-2xl font-semibold mb-2 relative inline-block">
              Curriculum for the Upper Primary Level (Classes VI-VIII)
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            </h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-8 text-justify bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400">
            The curriculum for the Upper Primary Stage covers <span className="font-medium text-purple-700">English, Hindi (Second Language), Mathematics, Physics, Chemistry, Biology (under Science), History & Civics, Geography (under the subject History, Civics & Geography), Computer Studies and Arts Education</span>.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-gray-800 text-xl font-medium mb-3 flex items-center">
                <span className="w-2 h-8 bg-blue-500 mr-3 rounded"></span>
                Language Education
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Being the medium of instruction (first language) the focus of English language learning at this stage is on <span className="underline decoration-blue-300">oral and written expression, in a creative manner</span>. This would help develop a sense of appreciation and critical vision for different forms of literature among children. The emphasis of Second Language learning at this stage is to hone the skills and develop an interest in the language and literature.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h3 className="text-gray-800 text-xl font-medium mb-3 flex items-center">
                <span className="w-2 h-8 bg-green-500 mr-3 rounded"></span>
                Mathematics
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                The focus of Mathematics learning at this stage is to <span className="bg-green-200 px-1 rounded font-medium">consolidate and expand the learning through problem solving techniques</span>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <h3 className="text-gray-800 text-xl font-medium mb-3 flex items-center">
                <span className="w-2 h-8 bg-orange-500 mr-3 rounded"></span>
                Science & Social Studies
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Science at this stage branches out into <span className="font-semibold text-orange-700">Physics, Chemistry and Biology</span>, so as to help children understand the issues and concerns of these areas. In Social Studies, two core areas, <span className="underline decoration-orange-300">History & Civics and Geography</span>, have been identified.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="text-gray-800 text-xl font-medium mb-3 flex items-center">
                <span className="w-2 h-8 bg-purple-500 mr-3 rounded"></span>
                Technology & Arts
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Computer Studies curriculum focuses on acquisition of knowledge and skills in <span className="bg-purple-200 px-1 rounded font-medium">ICT</span> so as to enable students to use common software applications and technology to access and utilize information. The emphasis of Arts Education at this stage is on development of <span className="text-purple-700 font-semibold">creative expression and expression through visual art forms</span>. Arts Education follows a theme based approach in this curriculum, wherein efforts have been made to provide suggestions for integration of Arts Education with other curriculum areas.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Academics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6 text-center relative">
            Academics
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-purple-600"></div>
          </h2>
          
          <div className="space-y-6 text-justify">
            <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-400">
              Our Upper Primary School provides a <span className="font-bold text-purple-700">framework of academic challenge</span> that encourages students to explore real-world concepts and issues, challenge assumptions, think critically and acquire skills that they will need to apply throughout their educational and future professional journeys.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              The strength of our program stems from the belief that learning is more meaningful when students are provided opportunities to explore concepts through the lens of different subject areas. This is called <span className="bg-yellow-200 px-2 py-1 rounded font-semibold text-gray-800">interdisciplinary learning</span> and it is a hallmark of our approach. It is also the key to teasing out our students' innate creativity by providing them multiple avenues to approach problem-solving. We teach for the <span className="underline decoration-purple-400 decoration-2 font-medium">understanding of real-life concepts</span> rather than the simple regurgitation of knowledge.
            </p>
          </div>
        </motion.div>

        {/* Personality Development Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6 text-center relative">
            Personality in the Making
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-purple-600"></div>
          </h2>
          
          <div className="space-y-6 text-justify">
            <p className="text-gray-700 leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              Another strength of the academic program in our Upper Primary School is that teaching extends far beyond the content and concepts in a given subject area. We invest time to integrate the teaching of key skills that help our students become <span className="bg-green-100 px-1 rounded">better learners</span> as well as <span className="bg-blue-100 px-1 rounded">better people</span>. They include critical-thinking, reflection, organization, collaboration, affective, information literacy, communication, transfer, creative thinking, and media literacy skills.
            </p>
            
            <p className="text-gray-700 leading-relaxed border border-gray-200 p-4 rounded-lg bg-gray-50">
              We facilitate student learning in a variety of areas such as how they <span className="font-semibold text-purple-700">manage time and tasks effectively</span>, how they <span className="font-semibold text-blue-700">work with others</span>, how they <span className="font-semibold text-green-700">manage their state of mind</span> and how they <span className="font-semibold text-orange-700">use language to communicate</span>. These also help students become more aware of the learning process and understand their strengths and challenges as learners.
            </p>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed">
                In addition to the academic classes, your child will benefit greatly from our Life Skills program <span className="bg-white px-2 py-1 rounded-full font-bold text-purple-700 shadow-sm">"HAPPLE"</span> where they are provided time once a week to discuss topics relevant to navigating adolescence. We value the development of the <span className="underline decoration-purple-400 decoration-2 font-medium">whole child</span> and want to ensure that students lead balanced lives in and out of school, so students are provided time to learn about the importance of healthy relationships and personal wellness.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Co-curriculars Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6 text-center relative">
            Co-curriculars and Clubs
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-purple-600"></div>
          </h2>
          
          <div className="space-y-6 text-justify">
            <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-400">
              We know that learning is more meaningful when students can make <span className="font-semibold text-blue-700 underline decoration-blue-300">connections across subject areas</span> so we've structured our cocurricular classes to complement the programming of our academic day. We also recognize that <span className="bg-yellow-200 px-1 rounded">camaraderie</span> and <span className="bg-green-200 px-1 rounded">being part of a team</span> are both important parts of a Upper Primary schooler's life so we've purposely designed this program in a way that celebrates students' diverse interests and encourages new friendships.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Your child will be required to choose from a selection of activities and clubs. Each of these activities are <span className="font-medium text-purple-700 underline decoration-purple-300 decoration-2">enriching experiences</span> that bring real-life meaning to their learning, and are a great opportunity for our students to explore new interests or develop existing ones.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default UpperPrimary;