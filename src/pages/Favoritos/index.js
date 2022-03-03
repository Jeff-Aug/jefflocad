import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './favoritos.css'


export default function Favoritos() {
    const [filmes, setFilmes] = useState([])
    
    useEffect(() => {
        
        const minhaLista = localStorage.getItem('filmes')
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])
    
    function handleDelete(id) {
        let filtroFlmes = filmes.filter((item) => {
            return (item.id !== id)
        })
        
        setFilmes(filtroFlmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFlmes))
        toast.success("Foi excluido com sucesso")
    }

    return (

        <div id='meus-filmes' >
            <h1> Minha Lista </h1>
            {filmes.length === 0 && <span> Vc ainda nao adcionou nenhum filme </span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id} >
                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filme/${item.id}`} > Ver Detalhes </Link>
                                <button onClick={() => handleDelete(item.id)} >Excluir</button>


                            </div>


                        </li>
                    )
                })}
            </ul>
        </div>
    )

}