import logo from '../../imagens/logo.svg'
import './estilo.css'
import styled from 'styled-components';
import { Route, Routes, BrowserRouter,Link} from 'react-router-dom';

function Logo(){
    return (
    <>
    
    <header className='App-header'>
        <nav>
        <img src={logo} alt='logo' className='logo-img'></img>
        <a className="logo"> SAEI </a>
        
        <ul className="nav-list">
            <li><a href="inicio.html">Inicio</a></li>
            <li><a href="notas.html">Notas</a></li>
            <li><a href="ocorrencias.html">Ocorrências</a></li>
            <li><Link to="/">Atividades</Link></li>
        </ul>
        <Routes>
            <Route path='../pages' element={ <atividades />} />
        </Routes>
        </nav>
    </header>
    </>


     )
}

export default Logo;