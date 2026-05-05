import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Hamarat</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>It is an innovative, AI-powered kitchen assistant that combines the power of React, Node.js, and the Gemini API. By providing dynamic solutions tailored to user needs, it transforms daily kitchen processes into a smart and practical experience.</p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>Chat App</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>A high-performance messaging platform built with a modern tech stack to ensure seamless real-time communication. It leverages scalable architecture to deliver a fast, secure, and responsive user experience.</p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>BookLover</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>Built with React Native and the Expo ecosystem, BookLover is a modern mobile library application that offers users a seamless archiving experience. By combining a fluid interface with secure authentication processes, it allows you to keep your personal book collection in perfect order.</p>
        </div>

        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>CarBook</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>It is a practical reservation application designed to efficiently manage vehicle reservations and organize transportation resources. Developed using ASP.NET Core with Onion Architecture and CQRS, it provides a reliable, user-friendly platform to track and optimize fleet operations.</p>
        </div>


        <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
          <h1 className='text-3xl font-semibold'>OptiGlow</h1>
          <h3 className='text-xl text-gray-700'></h3>
          <p className='text-sm text-gray-600'>Developed using JavaScript and prompt engineering processes, this innovative desktop application protects eye health by dynamically optimizing screen brightness based on real-time content analysis. It adapts to the user's digital workspace to provide an automated and seamless visual experience.</p>
        </div>

        
        
      </div>
    </div>
  )
}

export default Projects