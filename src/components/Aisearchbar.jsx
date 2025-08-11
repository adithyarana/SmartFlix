import React from 'react'
import { lang } from '../utils/languageconstant'
import { useSelector } from 'react-redux'

// this is the dynamic data cominmg form languafe constant that change the language form evey state change in redux after clicking the button

const Aisearchbar = () => {
  const languagechange = useSelector((lang)=>lang.config.Language)
  
  return (
    <div className='' >
      <form className='py-2 mt-4 px-4 w-[800px] flex m-auto gap-6'>
        <input className='w-full p-2 rounded-md border-white border-2' type="text" placeholder={lang[languagechange].placeholder} />
        <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded cursor-pointer flex items-center gap-2 opacity-80'>{lang[languagechange].search}</button>
      </form>
    </div>
  )
}

export default Aisearchbar