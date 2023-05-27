import { Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer';
import RandomTask from './components/RandomTask';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/AboutUS' element={<AboutUs/>}></Route>
      <Route path='/RandomTask' element={<RandomTask/>}></Route>
    </Routes>
    <Footer/>
    

   
 
    </>
  
  );
}

export default App;
