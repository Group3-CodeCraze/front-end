import { Routes,Route, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer';
import RandomTask from './components/RandomTask';
import MyTasks from './components/MyTasks';
import Login from './components/login/login.js';


function App() {
  const { state } = useLocation();
  return (
    <>
    <Header username={state?.username}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/AboutUS' element={<AboutUs/>} />
      <Route path='/RandomTask' element={<RandomTask/>}/>
      <Route path='/MyTasks' element={<MyTasks/>}/>
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer/>
    

   
 
    </>
  
  );
}

export default App;
