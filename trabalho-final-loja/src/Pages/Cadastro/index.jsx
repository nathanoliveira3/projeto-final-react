import { useState } from "react"
import http from '../../http'
import Titulo from "../../Components/Titulo"
import { useHistory } from "react-router"

const Cadastro = () => {
    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [senha, setSenha] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')

    //const [clientes, setClientes] = useState([])

    /*const obterClientes = () => {
        http.get('cliente')
            .then(response => {
                setClientes(response.data)
            })
    }

    useEffect(() => {
        obterClientes()
    }, [])*/


    const history = useHistory();

    const salvar = (evento) => {
        evento.preventDefault()

        const novoCliente = {}

        novoCliente.nome = nome
        novoCliente.usuario = usuario
        novoCliente.email = email
        novoCliente.cpf = cpf
        novoCliente.telefone = telefone
        novoCliente.dataNascimento = nascimento
        novoCliente.senha = senha
        novoCliente.endereco = {}
        novoCliente.endereco.cep = cep
        novoCliente.endereco.numero = numero
        novoCliente.endereco.complemento = complemento        

        http.post('cliente', novoCliente)
            .then(response => {
                console.log(response.data)
                history.push('/login')
                
            })

        setNome('')
        setUsuario('')
        setEmail('')
        setCpf('')
        setTelefone('')
        setNascimento('')
        setSenha('')
        setCep('')
        setNumero('')
        setComplemento('')
    }

    return (
        <form onSubmit={salvar} className='col-6 mx-auto'>

            <Titulo>
                Cadastro do Usuário
            </Titulo>

            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input className="form-control" type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Usuário</label>
                <input className="form-control" type="text" value={usuario} onChange={(evento) => setUsuario(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" type="text" value={email} onChange={(evento) => setEmail(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">CPF</label>
                <input className="form-control" type="text" value={cpf} onChange={(evento) => setCpf(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Telefone</label>
                <input className="form-control" type="text" value={telefone} onChange={(evento) => setTelefone(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Data de nascimento</label>
                <input className="form-control" type="text" value={nascimento} onChange={(evento) => setNascimento(evento.target.value)} />
            </div>

            <div className="mb-5">
                <label className="form-label">Senha</label>
                <input className="form-control" type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
            </div>

            <h2 className="text-center">Endereço</h2>

            <div className="mb-3">
                <label className="form-label">CEP</label>
                <input className="form-control" type="text" value={cep} onChange={(evento) => setCep(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Numero</label>
                <input className="form-control" type="text" value={numero} onChange={(evento) => setNumero(evento.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Complemento</label>
                <input className="form-control" type="text" value={complemento} onChange={(evento) => setComplemento(evento.target.value)} />
            </div>

            <button className="btn btn-dark fw-bold d-grid gap-2 col-6 mx-auto my-5">Salvar</button>

        </form>
    )
}

export default Cadastro