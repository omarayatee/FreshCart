"use client"
import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaGift } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { useSession } from 'next-auth/react';



export default function FirstNav() {
   const { data: mySessionData, status } = useSession();
  return (<>
  <div className='border-b p-3 hidden md:flex'>
    <div className='w-[90%] mx-auto  flex justify-between '>
    <div className="left-side flex gap-4">
        <span className='flex gap-1 items-center text-[18px]/[20px] text-[#6A7282]'><CiDeliveryTruck className='text-[#16A34A]' />Free Shipping on Orders 500 EGP</span>
        <span className='flex gap-1 items-center text-[18px]/[20px] text-[#6A7282]'><FaGift className='text-[#16A34A]'/>New Arrivals Daily</span>
    </div>
    <div className="right-side flex gap-4">
        <span className='flex gap-1 items-center cursor-pointer text-[18px]/[20px]  text-[#6A7282] hover:text-[#16A34A] transition-all'><BsFillTelephoneFill /> +1 (800) 123-4567</span>
        <span className='flex gap-1 items-center cursor-pointer text-[18px]/[20px]  text-[#6A7282] hover:text-[#16A34A] transition-all'><IoMdMail /> support@freshcart.com</span>
        <div className='border-s-2'></div>
        {status === "unauthenticated" ? <div className='flex gap-4'>
          <span className='items-center cursor-pointer text-[18px]/[20px]  text-[#6A7282] hover:text-[#16A34A] transition-all'><Link href="/login" className='flex gap-1'><FaRegUser />Sign In</Link></span>
        <span className='items-center cursor-pointer text-[18px]/[20px]  text-[#6A7282] hover:text-[#16A34A] transition-all'><Link href="/register" className='flex gap-1'><FaUserPlus />Sign Up</Link></span>
        </div> : "" }
        
    </div>
  </div>
  </div>
  </>
  )
}
