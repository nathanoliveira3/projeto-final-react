import { useState } from "react"

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

    const salvar = (evento) => {
        evento.preventeDefault()
        console.log('nada')
    }

    return (
        <form onSubmit={salvar} className='col-6 mx-auto'>

            <h1 className="text-center my-5">Cadastro Usuário</h1>

            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input className="form-control" type="text" value={nome} onChange={(evento) => setNome(evento.target.value)}/>
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
                <input className="form-control" type="text" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
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