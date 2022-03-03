import { Link } from 'react-router-dom'
import './erro.css'


export default function Error(){
    return(
        <div className='erro' >
        <h1> 404 </h1>
        <h2> Pagina nao encontrada </h2>
        <Link to='/' className='acessarhome'> Acessar Pagina inicial</Link>
    </div>
)
}