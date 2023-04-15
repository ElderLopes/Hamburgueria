import React, { useState, useRef } from "react";
import Burger from '../../assets/burger.svg'
import axios from "axios"
import {
  Container,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
  ContainerItens
} from "./styles";

const Home = () => {

  const [order, setOrder] = useState([]);
  const inputPedido = useRef()
  const inputName = useRef()

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputPedido.current.value,
      clientName: inputName.current.value
    });
    setOrder([...order, newOrder])


  }

  return (
    <Container>
      <Image alt='Logo-Hamburgueria' src={Burger} />
      <H1>Faça seu pedido!</H1>
      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputPedido} placeholder="Pedido" />

        <InputLabel >Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome do Cliente" />

        <Button to="/ordens"  onClick={addNewOrder}>Novo Pedido</Button>



      </ContainerItens>
    </Container>

  )

}
export default Home