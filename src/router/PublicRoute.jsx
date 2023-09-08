import React from 'react';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from './../views/Home'
import Create  from '../components/crud/Create';
import Edit from '../components/crud/Edit'
import Proyectos from './../views/Proyectos'


export default class PublicRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path='/create' element={<Create/>} />
                <Route path='/edit/:id' element={<Edit/>}/>
                <Route path='/proyectos' element={<Proyectos/>} />
            </Routes>
        </Router>
      );
    }
  }