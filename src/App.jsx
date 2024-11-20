import './App.css';
import styled from 'styled-components';
import Home from './components/Home';
import { Banner } from './components/Banner';
import {Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Home1 from './components/Home1';
import About from './components/About';
import Nav from './components/Nav'
import Myblog from './components/Myblog';
import { useState} from 'react';
import State from './components/State'
import {useEffect} from 'react';


function App() {
  const [step, setStep] = useState('next')

  const handleClick = () => {
    if (step < 3)setStep(step + 1)
  }
  const handlePrev = () => {
   if (step > 1) setStep(step - 1)
  }
  // const tempMovieData = [
  //   {
  //     imdbID: "tt1375666",
  //     Title: "Inception",
  //     Year: "2010",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  //   },
  //   {
  //     imdbID: "tt0133093",
  //     Title: "The Matrix",
  //     Year: "1999",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  //   },
  //   {
  //     imdbID: "tt6751668",
  //     Title: "Parasite",
  //     Year: "2019",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  //   },
  // ];

  const KEY = '92f1689b';
  // const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  // const [watched, setWatched] = useState(tempWatchedData);

  useEffect(function(){
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&S=interstellar`).then((res) => res.json()).then((data) => setMovies(data.search));

  }, [])

  useEffect(function(){
     async function fetchMovies(){
      const res  = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&S=interstellar`);
       
     const data = await res.json();
     console.log(data.search);
    }
    fetchMovies()
  }, []);

  // const messages = [
  //   "support",
  //   "accelerate",
  //   "Empower"
  // ]
  
  // const Myblog = ({messages}) => {
  //   const [mymessage, setMessage] = useState(messages[0])

 
  return (
    <>
    <Wrapper className='App'>
     <Home/>
     <Banner/>
     </Wrapper>
      <Nav/>
      <Myblog />
      <State handleClick={handleClick} handlePrev={handlePrev} step={step}/>
    
    <p>{movies}</p>
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
