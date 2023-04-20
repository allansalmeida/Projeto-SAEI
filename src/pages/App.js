import './App.css';
import Logo from '../componentes/Logo'
import { Route, RouteObject, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("../imagens/fundo.png");


`

function App() {
  return (
    <div className='App'>
       
        <Logo></Logo>
    
    </div>
  ); 
}

export default App;
