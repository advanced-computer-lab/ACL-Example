import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import SearchBar from'./components/SearchBar';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <SearchBar/>
    <Home />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

