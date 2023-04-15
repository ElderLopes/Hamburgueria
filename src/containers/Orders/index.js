import React, { useState, useRef, useEffect } from "react";
import Pedido from '../../assets/burger (1) 1.svg'
import Trash from '../../assets/delete.svg'
import axios from "axios"
import {
  Container,
  Image,
  H1,
  Button,
  ContainerOrder,
  DivCaixa,
 
} from "./styles";

const Orders = () => {

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

  useEffect(() => {
    async function fetchOrder() {
      const { data: newOrder } = await axios.get("http://localhost:3001/order")
      setOrder(newOrder);
    }
    fetchOrder()
  }, [order])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)

    const newOrder = order.filter(order => order.id !== orderId)
    setOrder(newOrder)
  }

  return (
    <Container>
      <Image alt='Logo-Hamburgueria' src={Pedido} />
      <H1>Pedidos</H1>

      <DivCaixa>
    
          {order.map(order => (
            <ContainerOrder key={order.id}>
              <p>{order.order}</p>
              <p className="pName">{order.clientName}</p>
              <div>
              <button  onClick={() => deleteOrder(order.id)}>
                <img alt="imagem-delete" src={Trash} />
              </button>
              </div>
           </ContainerOrder>
          ))}
       

      </DivCaixa>


      <Button to="/" onClick={addNewOrder}>Home</Button>
    </Container>

  )

}
export default Orders