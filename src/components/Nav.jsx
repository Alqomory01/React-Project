import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { FaLongArrowAltRight } from "react-icons/fa";


const Nav = () => {
  return (
    <>
    {/* <div>Nav</div> */}
    <Wrapper>
      
    <div className='nav mt-5 mb-4 shadow-md pb-5'>
      <div className="NIN text-left">
        <h3 className="uppercase pb-4 font-bold">Link NIN</h3>
        <p className="pb-4 text-xs">Link your NIN to your account.</p>
        <div className="learn flex items-center justify-left gap-y-3"><Link className="text-blue-600 text-sm pr-2" to='/'>LEARN MORE </Link><FaLongArrowAltRight /></div>
    </div>
      <div className="loan text-left">
      <h3 className="uppercase pb-4 font-bold">Apply For A Loan</h3>
        <p className="pb-4 text-xs">Union Bank offers a wide range of loans to make your vision a reality</p>
        <div className="learn flex items-center justify-left gap-y-3"><Link className="text-blue-600 text-sm pr-2" to='/'>LEARN MORE </Link><FaLongArrowAltRight /></div>
    </div>
    <div className="banking text-left">
      <h3 className="uppercase pb-4 font-bold">24/7 Banking</h3>
        <p className="pb-4 text-xs">360 banking platforms that provides safe access to banking services</p>
        <div className="learn flex items-center justify-left gap-y-3"><Link className="text-blue-600 text-sm pr-2" to='/'>LEARN MORE </Link><FaLongArrowAltRight /></div>
    </div>
    <div className="banking text-left">
      <h3 className="uppercase pb-4 font-bold">Trade Finance</h3>
        <p className="pb-4 text-xs">Banking solutions that are built on streamlining business processes</p>
        <div className="learn flex items-center justify-left gap-y-3"><Link className="text-blue-600 text-sm pr-2" to='/'>LEARN MORE </Link><FaLongArrowAltRight /></div>
    </div>
   <hr/>
    </div>
    </Wrapper>
    </>
  )
}

const Wrapper =styled.div`
.nav{
  
  margin-top:30px;
  display:flex;
  column-gap:30px;
 justify-content:space-around; 
 text-align:center;
 padding:20px 50px;
}`


export default Nav

