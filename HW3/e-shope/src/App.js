import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";

import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';


const App = () => {

    return (
        <div className="App">
            <Header
                navbar={<Navbar/>}
            />

            <Body/>

            <Footer/>

        </div>
    );
}

export default App;