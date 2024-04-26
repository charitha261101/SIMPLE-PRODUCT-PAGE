import React from 'react';
import './App.css';
//import Producer1 from '../movie_react/src/components/Producer/Add Production.js';
import Pro1 from "./pro1";
//import Assignloc from './assignloc.js';
//import Departments from "./Departments.js"
//import {Dep1,Dep2AndDep3,Dep4AndDep5} from "./Departments.js";
//import Designations from './Designations.js';
import {Menu,Location,About,Contact} from "./pro1"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App(){
  return(
    /*<>
    <div className='grid'>
    <div className='grid1'>
    <Departments/>
    <Dep1/>
    </div>
    <div className='grid2'>
    <Dep2AndDep3/>
    </div>
    <div className='grid3'>
    <Dep4AndDep5/>
    </div>
    </div>
    </>*/
    <>
    <BrowserRouter>
    <Pro1/>
    <Routes>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Location' element={<Location/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
