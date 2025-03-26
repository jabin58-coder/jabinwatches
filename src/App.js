import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import Signup from './components/Signup';
import Pagenotfound from './components/Pagenotfound';
import Signin from './components/Signin';
import 'bootstrap/dist/js/bootstrap.js'
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Payment';
import Navbar from './components/Navbar';
import CarouselComp from './components/CarouselComp'
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';


function App() {
  return ( 
  <Router>
    <div className="App">
      <header className=""> 
      <Navbar className='header'></Navbar>
      


    
         
      </header>
      <Routes>
      <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Addproduct' element={<Addproduct/>}/>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='/Pagenotfound' element={<Pagenotfound/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
      <Footer></Footer>
    
    </div>
  </Router>
    
  );
}

export default App;
