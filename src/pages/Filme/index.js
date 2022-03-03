import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import api from '../../services/api'
import './filmeInfo.css'


export default function Filme() {
    const { id } = useParams()
    const history = useNavigate()

    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            const res = await api.get(`r-api/?api=filmes/${id}`)


            if (res.data.length === 0) {
                //tento acessar id que nao exite, mando para home
                history('/')
            }
            setFilme(res.data)
            setLoading(false)


        }
        loadFilme()
    }, [id, history])

    function salvarFilme(){
        const minhaLista = localStorage.getItem('filmes')
        let filmesSalvos = JSON.parse(minhaLista) || []

        //Se tiver algum filme salvo com esse mesmo id precisa ser ignorado

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id )

        if(hasFilme){
            toast.error('Voce ja tem esse salvo em sua lista')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('filmes',JSON.stringify(filmesSalvos))
        toast.success("Foi excluido com sucesso")

    }

    if (loading) {
        return (
            <div className='filme-info' >
                <h1 className='marge'> Carregando Dados... </h1>

            </div>
        )
    }

    return (
        <div className='fundo' >

            <div className='filme-info'>
                <h1 className='titulo'> {filme.nome} </h1>
                <img src={filme.foto} alt={filme.nome} />
                <h3> Sinopse </h3>
                {filme.sinopse}

                <div className='botoes' >
                    <button onClick={salvarFilme} > Salvar</button>
                    <button>
                        <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`} >
                            Trailer
                        </a>
                    </button>
                </div>
            </div>

        </div>
    )
}



