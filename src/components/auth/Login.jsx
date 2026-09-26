import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Form is submitted guysss ${email}`)
    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 p-7 border-emerald-600'>
            <form onSubmit={(e)=>submitHandler(e)} 
            className='flex flex-col items-center justify-center '>
                <input 
                className='required py-3 bg-transparent placeholder:text-gray-400 text-white px-5 border-2 border-emerald-600 rounded-full outline-none'
                type="email"
                placeholder='enter your email'
                value = {email}
                onChange = {(e)=>setEmail(e.target.value)}
                />
                <input 
                className='required py-3 px-5 mt-2 border-2 bg-transparent text-white placeholder:text-gray-400 border-emerald-600 rounded-full outline-none' 
                type="password" 
                placeholder='enter your password' 
                value = {password}
                onChange = {(e)=>setPassword(e.target.value)}
                />
                <button className='py-3 px-5 text-center w-57 mt-2 bg-emerald-600 text-white placeholder:text-white rounded-full outline-none'>Login</button>
            </form>
        </div>
    </div>  
  )
}

export default Login