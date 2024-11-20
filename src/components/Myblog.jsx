import { useEffect, useMemo } from 'react'
import image from "../images/home-1.jpg";
import secondimage from "../images/home-2.jpg"
import thirdimage from "../images/home-3.jpg"
import {Link} from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';

// const messages = ()=> {
//   'messages'
//   'job hunt'
//   'support'
// }



const Myblog = () => {
  const messages = useMemo (() => ['accelerate', 'empower', 'support'], []);
    const [newmessage, setNewmessage] = useState(messages[0])
    const [index, setIndex] = useState(0)
  
    useEffect (() => {
      const interval = setInterval(() => {
        setIndex((index + 1) % messages.length)
  
      }, 2000);
      return () => clearInterval(interval);
    }, [messages.length, index])
    
    useEffect (() =>{
      setNewmessage(messages[index])
    }, [messages, index]);
   
  return (
    <>
    <div className='bg-stone-300 p-40 text-black'>
   <p className='text-center '>Your Simpler, Smarter Bank
   </p>
   <div className='text-center'><span>How can we</span> <span className='text-blue-900'> {newmessage}</span></div>
  
   <p className='text-center'>you today?</p>
   </div>
   <div className='parent bg-gray-600 grid grid-cols-3 gap-y-2'>
   <div className="blog p-10  w-90  ">
        <div className="bg-white">
    <img src={image} alt={image} width={500} height={500}></img>
    <div className="banking text-left bg-white p-10" >
      <h3 className="uppercase pb-4 font-bold">Trade Finance</h3>
        <p className="pb-4 text-xs">Banking solutions that are built on streamlining business processes</p>
        <div className="learn flex items-center justify-left gap-y-3"><Link className="text-blue-600 text-sm pr-2" to='/'>LEARN MORE </Link><FaLongArrowAltRight /></div>
    </div>
    </div>
    </div>
    <div className="blog p-10 w-90  ">
        <div className="bg-white">
    <img src={secondimage} alt={secondimage} width={500} height={500}></img>
    <div className="banking text-left bg-white p-10" >
      <h3 className="uppercase pb-4 font-bold">Trade Finance</h3>
        <p className="pb-4 text-xs">Banking solutions that are built on streamlining business processes</p>
        <div className="learn flex items-center justify-left gap-y-3"><Link className="text-blue-600 text-sm pr-2" to='/'>LEARN MORE </Link><FaLongArrowAltRight /></div>
    </div>
    </div>
    </div>
    <div className="blog p-10 w-90 ">
        <div className="bg-white">
    <img src={thirdimage} alt={thirdimage} width={500} height={500}></img>
    <div className="banking text-left bg-white p-10" >
      <h3 className="uppercase pb-4 font-bold">Trade Finance</h3>
        <p className="pb-4 text-xs">Banking solutions that are built on streamlining business processes</p>
        <div className="learn flex items-center justify-left gap-y-3"><Link className="text-blue-600 text-sm pr-2" to='/'>LEARN MORE </Link><FaLongArrowAltRight /></div>
    </div>
    </div>
    </div>
   </div>
    <div className="icons-parent p-10 bg-gray-600">
   <div className="icons p-10 bg-white grid grid-cols-3 gap-y-2">
    
    <div className="icon-box   bg-white flex items-center">
        <div className="image pr-5">
        <IoMdContact />
      </div>
      <div className="icon-txt">
      <h3>Banking Solutions</h3>
      <p>We help you achieve financial stability and success</p>
      </div>
    </div>
    <div className="icon-box  bg-white flex items-center">
        <div className="image pr-5">
        <FaLocationDot />
      </div>
      <div className="icon-txt">
      <h3>Banking Solutions</h3>
      <p>We help you achieve financial stability and success</p>
      </div>
    </div>
    <div className="icon-box  bg-white flex items-center">
        <div className="image  pr-5">
        <BiSolidContact className='w-4' />
      </div>
      <div className="icon-txt">
      <h3>Banking Solutions</h3>
      <p>We help you achieve financial stability and success</p>
      </div>
    </div>
    
   </div>
   </div>
   <footer className="footer p-10">
    <p className="border-b-4 py-4">Customer Service</p>
    <div className="support flex items-center justify-between">
        <div className="support-item flex items-center">
            <p className='border-r-2 pr-3'>Feedback & Support</p>
            <p className='border-r-2 px-3'>Savings Calculator</p>
            <p className='border-r-2 px-3'>Blog/Media</p>
            <p className='border-r-2 px-3'>FAQ</p>
        </div>
        <div className="social-media flex items-center justify-center">
        <FaInstagram className='pr-3 w-12' />
        <FaSquareXTwitter className='pr-3 w-12' />
        <FaFacebook className='pr-3 w-12' />
        <FaLinkedin className='pr-3 w-12' />
        <FaYoutube className='pr-3 w-12' />


        </div>
        <div className="call pt-3">
            <p>Call Us: +1-800-123-4567</p>
            <p>Email Us:  support@yourbank.com</p>
        </div>
    </div>
   </footer>
   </>
  )

}
export default Myblog