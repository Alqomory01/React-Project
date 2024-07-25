import React from 'react'
import Image from '../images/unionbank.svg'
import { CiCircleChevDown } from "react-icons/ci";
import Navigation from './Navigation';


const Home = () => {
  return (
    <>
    <div>
    <ul className='list'>
      <li>BLOG</li>
      <li>ABOUT UBN</li>
      <li>INVESTORS RELATIONS</li>
      <li>CSI</li>
    </ul></div>
    <nav className='nav_bar2'>
        
        <ul className='list2'>
            <img src={Image} alt={Image} width={100}/>
            <li>TAKE A LOAN</li> 
            <li>DEBIT CARDS</li>
            <li>PERSONAL BUSINESS <CiCircleChevDown /></li>
            <li className='Bank'>BANK NAME</li>
            <li>INTERNET BANKING</li>
            <li>OPEN ACCOUNT</li>

        </ul>
        <div>
            <Navigation/>
        </div>

    </nav>
   <h1 className='bg-slate-950 text-white' >welcome here</h1>
    </>
  )
}

export default Home