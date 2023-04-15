import './App.css';
import Logo from './componentes/Logo'
import { Route, RouteObject } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <div className='App'>
       <header className='App-header'>
        <Logo></Logo>
      </header>
    </div>
  ); 
}

export default App;
