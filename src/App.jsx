import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './assets/Pages/Signup';
import Signin from './assets/Pages/Signin';
import Profile from './assets/Pages/Profile';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Header from './components/Header';
export default function App(){
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />   
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}