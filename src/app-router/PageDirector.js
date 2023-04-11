import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home.js'

const PageDirector = () => {
    return (
        <Routes>
            <Route exact path={'/'} component={Home}/>
        </Routes>
    )
}
export default PageDirector;