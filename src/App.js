import React from 'react';
import { ConvertKG } from './Pages/converterKgtoMetres';
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom";
import { Home } from './Pages/Home';
import { RollDiameter } from './Pages/rollDiameter';


export const App = () => {
  
    return (
        <div className="App" style={{width:"auto"}}>
            <Header/>
            <main className="container content">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/converterKgtoMetres" element={<ConvertKG/>} />
                <Route path="/rollDiameter" element={<RollDiameter/>} />
              </Routes>
            </main>
        </div>
      );
}