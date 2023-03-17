
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Fav from './components/Fav'
function App() {
  return (
    <>
    <Header></Header>
  <Routes>
    
    <Route path='/' element={<Login></Login>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='/fav' element={<Fav></Fav>}></Route>
  </Routes>
    
    </>
  );
}

export default App;
