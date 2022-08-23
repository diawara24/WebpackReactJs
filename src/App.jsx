import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/navigation/Menu';
import Home from './pages/Home';


export default function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
