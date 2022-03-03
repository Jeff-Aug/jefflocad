import { Link } from 'react-router-dom';
import './styles.css';


export default function Header(){
    return(
        <header>
            <Link className='logo' to='/' > JeffLocas </Link>
            <Link className='favorito' to='/favoritos' > Salvos </Link>
        </header>
    )
}









