
import './App.css';
import React,{useState}  from 'react';
// import Nav from './nav';
// import Form from './form/form';
// import UseEffect from './UseEffect/UseEffect';
// import Formm from './Formm/Card';
// import Api from './api/Api';
// import Api222 from './api/Api222';
// import Api333 from './api/Api333';
// import Api444 from './api/Api444';
// import Api555 from './api/Api555';
// import Api666 from './api/Api666';
// import Api777 from './api/Api777';
// import Api888 from './api/Api888';
import Api from './api/Api';
import ProductDetails from './api/ProductDetails';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

function App() {
  // const [menu,setaMenu] = useState(false)
  // const navmenu=()=>{
  //      setaMenu(!menu)
       
  // }

  const [ul,setUl]=useState(false)
  const menufun=()=>{
      setUl(!ul)
  
  }
 

  
  return (
    <div className='app'>
        {/* <Nav/> */}
        {/* <Form/> */}
        {/* <UseEffect/> */}
        {/* <Formm/> */}
        {/* <Api/> */}
        {/* <Api222/> */}
        {/* <Api333/> */}
        {/* <Api444/> */}
        {/* <Api555/> */}
        {/* <Api666/> */}
        {/* <Api777/> */}
        <Router>
          
                <nav>
                    <div className="logo"><img src="./logo512.png" alt="" /></div>
                    <ul className={ul ? "ul active" :"ul"}>
                        <li><Link onClick={menufun} to="/" >Home</Link></li>
                    </ul>
                    <div className="menu">
                        <button onClick={menufun} id="menu_btn">Menu</button>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Api/>}/>
                    <Route path='/product/:id' element={<ProductDetails/>}/>
                </Routes>
            </Router>
    </div>
  );
  }

export default App;
