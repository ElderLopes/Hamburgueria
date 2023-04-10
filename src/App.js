import React, {useState, useRef} from "react";
// import axios from "axios"
import Burger from './assets/burger.svg'
import Trash from './assets/delete.svg'
import {
  Container,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
  Order,
  ContainerItens
} from "./styles";

const App = () => {
  // const [order, setOrder] = useState([]);
  // const inputName = useRef()
  // const inputAge = useRef()
  // async function addNewUser() {
  //   const {data : newUsers} = await axios.post("http://localhost:3001/order",
  //     {
  //       name: inputName.current.value,
  //       age: inputAge.current.value,
  //     })
  //   setOrder([...order, newUsers])
  // }
const order = [
  {id: Math.random(), order:"2 xsalada, 2 cocas", name:"elder"},
  {id: Math.random(), order:"2 xsalada, 2 cocas", name:"joao"},
  {id: Math.random(), order:"2 xsalada, 2 cocas", name:"maria"},
]
  return (
    <Container>
      <Image alt='Logo-Hamburgueria' src={Burger} />
      <H1>Faça seu pedido!</H1>
      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Pedido" />

        <InputLabel >Nome do Cliente</InputLabel>
        <Input placeholder="Nome do Cliente" />

        <Button>Novo Pedido</Button>
        
        <ul>
          {
            order.map(order => (
          <Order key={order.id}>
            <p>{order.order}</p> <p>{order.name}</p>
           <button><img alt= "imagem-delete" src={Trash}/></button>
            </Order>
          ))

          }

        </ul>
       
      </ContainerItens>
    </Container>

  )

}
export default App