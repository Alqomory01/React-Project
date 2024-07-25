import './App.css';
import styled from 'styled-components';
import Home from './components/Home';
import { Banner } from './components/Banner';
import {Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Home1 from './components/Home1';
import About from './components/About';
import Nav from './components/Nav'



function App() {
  return (
    <>
    <Wrapper className='App'>
     <Home/>
     <Banner/>
     </Wrapper>
      <Nav/>

     <Routes>
      <Route path='/' element={App}/>
      <Route path='/home1' element={<Home1/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/about' element={<About />}/>
     </Routes>
    </>
    
  );
}
const Wrapper = styled.div`
width:100%;
*{
  margin:0;
  padding:0;
  list-style:none;
  text-decoration:none;
}
.Bank{
  background-color:white;
  border-radius:18px;
  color:black;
  padding:8px 25px;
}
.nav_bar2{
  background-color:#009FDF;
}
.list2{
  display:flex;
  color:white;
  justify-content:center;
}

a{
  color:white;
  font-weight:700;
}
li{
  padding:7px;
  margin:7px;
}
li:hover{
  background-color:#333333;
}
.list{
  display:flex;
  justify-content: right;
  Align-items:center;
  background-color:black;
  color:white;
  padding-right:80px;
  text-transform:capitalize;

}

`

export default App;
