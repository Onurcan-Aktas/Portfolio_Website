import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8'>

      <h1 className='text-center text-6xl font-light text-teal-600'>İletişime Geçin</h1>
      
      <form className='flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl'>
        <div className='flex flex-col gap-4'>
          <input type="text" placeholder='İsim' className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none 
          transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500'/>
        </div>

        <div className='flex flex-col gap-4'>
          <input type="text" placeholder='Soyisim' className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none 
          transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500'/>
        </div>

        <div className='flex flex-col gap-4'>
          <input type="text" placeholder='Email Adresi' className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none 
          transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500'/>
        </div>

        <textarea placeholder='Mesaj' className='h-32 w-full resize-none rounded-lg border-2 border-teal-400 px-4 py-3 
          text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500'></textarea>

        <button className='rounded-lg border-2 border-teal-400 bg-teal-500 px-6 py-3 font-semibold text-white 
        transition-all duration-200 hover:bg-teal-600'>Mesaj Alanı</button>

      </form>
    </div>
  )
}

export default Contact