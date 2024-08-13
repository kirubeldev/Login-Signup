import React, { useState } from 'react'
import logo from "../public/pclogo.jpg"
const Admin = () => {
  const [navd , setnavd] =useState(false)
  const handelnav = ()=>{
setnavd(!navd)
  }
  return (
    <div>
      <nav className='w-screen flex justify-between px-8 py-3 bg-slate-800 text-white items-center'>
<img src={logo} alt="" className='size-[64px] rounded-full'/>
        <ul className=' gap-6 hidden md:flex '>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
          <li  onClick={() => {
                localStorage.removeItem('user'); // Clear user info from localStorage
                window.location.href = '/'; // Redirect to login page
              }} className='cursor-pointer'>logout</li>
        </ul>
        <svg onClick={handelnav} className='md:hidden' width="26" height="27" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6699 0C11.996 0 13.2678 0.526784 14.2055 1.46447C15.1431 2.40215 15.6699 3.67392 15.6699 5C15.6699 6.32608 15.1431 7.59785 14.2055 8.53553C13.2678 9.47322 11.996 10 10.6699 10C9.34384 10 8.07207 9.47322 7.13439 8.53553C6.19671 7.59785 5.66992 6.32608 5.66992 5C5.66992 3.67392 6.19671 2.40215 7.13439 1.46447C8.07207 0.526784 9.34384 0 10.6699 0ZM10.6699 12.5C16.1949 12.5 20.6699 14.7375 20.6699 17.5V20H0.669922V17.5C0.669922 14.7375 5.14492 12.5 10.6699 12.5Z" fill="white"/>
</svg>

      </nav>
  { navd &&

    <div className='h-[90vh]'>

<div className='w-[65%] h-full flex justify-between flex-col bg-slate-400/20 rounded-md '>
<ul className='space-y-7 pl-5 pt-12 text-xl'>
<li>Home</li>
         <li>About</li>
         <li>Profile</li>
</ul>
<li   onClick={() => {
                localStorage.removeItem('user'); // Clear user info from localStorage
                window.location.href = '/'; // Redirect to login page
              }} className='text-xl cursor-pointer mb-4 ml-4 list-none'>logout</li>



</div>
    </div> } 




    </div>
  )
}

export default Admin
