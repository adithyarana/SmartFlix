import React from 'react'
import {auth} from '../utils/firebase.jsx'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { useSelector } from 'react-redux'

const Header2 = () => {

    const navigate = useNavigate();
    const user = useSelector((state)=>state.user.user);
    console.log("user data ", user);
    

    const handleSignOut = ()=>{
       signOut(auth).then(()=>{
        navigate('/')
        toast.success('Sign Out Successfull')
       }).catch((error)=>{
        toast.error(error.message)
       })
    }
  return (
    <div className='flex items-center gap-3 justify-end p-4 '>
        <img className='w-10 h-10 object-contain rounded-full' src={user?.photoURL} 
        alt="userimg" />

        <button onClick={handleSignOut} className='bg-red-600 text-sm hover:bg-red-700 text-white py-2 px-4 rounded cursor-pointer'>Sign Out</button>
    </div>
  )
}

export default Header2