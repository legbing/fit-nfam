import React from 'react';
import {
    Routes,
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Home from './home';
import Doctors from './doctors';

export default function App() {
    return (
        <Router>
            <Routes>
            <Route path = "/" element={<Home/>}></Route>
            <Route path = "/doctors" element={<Doctors/>}></Route>
            </Routes>
        </Router>
    )
}