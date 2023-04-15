import logo from '../../imagens/logo.svg'
import './estilo.css'

function Logo(){
    return (
    <nav>
        <img src={logo} alt='logo' className='logo-img'></img>
        <a className="logo"> SAEI </a>
        <ul className="nav-list">
        <li><a href="inicio.html">Inicio</a></li>
        <li><a href="notas.html">Notas</a></li>
        <li><a href="ocorrencias.html">Ocorrências</a></li>
        <li><a href="atividades.html">Atividades</a></li>
    </ul>
</nav>
     )
}

export default Logo;