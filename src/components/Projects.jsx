import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Hamarat</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>Hamarat is an intelligent application that leverages the Gemini and OpenAI APIs for dynamic content generation and adaptation. It seamlessly transforms your ideas into refined text, streamlining your creative workflow with the power of advanced AI.</p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Chat App</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>A high-performance messaging platform built with a modern tech stack to ensure seamless real-time communication. It leverages scalable architecture to deliver a fast, secure, and responsive user experience.</p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>BookLover</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>BookLover is a modern mobile library application built with React Native and the Expo ecosystem to provide a seamless cataloging experience. It features a smooth, intuitive user interface and secure authentication to keep your personal book collection perfectly organized.</p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>CarBook</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>CarBook is a streamlined reservation application designed to efficiently manage vehicle bookings and organize transportation resources. Built with practical utility in mind, it provides a reliable and user-friendly platform for tracking and optimizing fleet operations.</p>
        </div>


        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>OptiGlow</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>An innovative desktop application designed to protect eye health by dynamically adjusting screen brightness based on real-time content analysis. It provides an automated, seamless visual experience that adapts to the user's digital environment.</p>
        </div>

        
        
      </div>
    </div>
  )
}

export default Projects