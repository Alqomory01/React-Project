import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Nav = () => {
  return (
    <>
    {/* <div>Nav</div> */}
    <Wrapper>
    <div className='nav'>
    <Link to='/'>Main</Link>
    <Link to='/home1'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    </div>
    </Wrapper>
    </>
  )
}

const Wrapper =styled.div`
.nav{
  display:flex;
 justify-content:space-around; 
 text-align:center;
 padding:0 10px;
}`


export default Nav

