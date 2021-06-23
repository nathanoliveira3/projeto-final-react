// import http from '../Http'
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// const Produto = () => {
//   const { id } = useParams()
//   const [produto, setProduto] = useState({})
//   useEffect(() => {
//     http.get('http://localhost:8000/produtos/'+id)
//       .then(response => setProduto(response.data))
//   }, [])
//   return (
//     <div>
//       <h1>{produto.nome}</h1>
//       <h1>{produto.descricao}</h1>
//       <h1>{produto.categoria}</h1>
//       <h1>{produto.preco}</h1>
//       <h1>{produto.estoque}</h1>
//     </div>
//   )
// }
// export default Produto
