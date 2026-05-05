import React from 'react' 
import {BiLogoGithub,BiLogoLinkedin } from 'react-icons/bi'
import { FaMedium } from "react-icons/fa6";

const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>

      <div className='flex flex-col items-center justiy-center gap-8 p-5 text-center'>

        <img src='./profil1.jpeg' className='w-[250px] sm:w-[300px] rounded-full'/>

       <div className="space-y-1 sm:space-y-3">
        {/* İsim Alanı */}
        <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
          Onur Aktaş
        </h1>

        {/* Ünvan Alanı */}
        <h3 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl">
           Full-Stack Developer
        </h3>

        {/* Açıklama Alanı */}
        <p className="max-w-[500px] text-sm text-gray-500">
          İstanbul Altınbaş Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. 
          ASP.NET Core, React ve Node.js ekosistemlerinde modern ve ölçeklenebilir 
          Full-Stack web uygulamaları geliştiriyorum.
        </p>
      </div>

      <div className='flex gap-3'>
          <div className="flex gap-4">
    
            {/* GitHub Linki */}
            <a 
            href="https://github.com/Onurcan-Aktas" 
            target="_blank" 
            rel="noopener noreferrer"
            className='h-10 w-10 flex items-center justify-center cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white 
            transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'
            >
            <BiLogoGithub className='h-full w-full' />
            </a>

            {/* LinkedIn Linki */}
            <a 
            href="https://www.linkedin.com/in/onurcan-aktas/" 
            target="_blank" 
            rel="noopener noreferrer"
            className='h-10 w-10 flex items-center justify-center cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white 
            transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'
            >
            <BiLogoLinkedin className='h-full w-full' />
            </a>

            {/* Medium Linki */}
            <a 
            href="https://medium.com/@aktasonurcan" 
            target="_blank" 
            rel="noopener noreferrer"
            className='h-10 w-10 flex items-center justify-center cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white 
            transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'
            >
            <FaMedium className='h-full w-full' />
            </a>

          </div>
        </div>
      </div>
    </div>


    
  )
}

export default Home