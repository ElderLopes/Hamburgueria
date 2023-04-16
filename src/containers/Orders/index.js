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
  ContainerItens2,


} from "./styles";

const Orders = () => {

  const [order, setOrder] = useState([]);
  const inputPedido = useRef()
  const inputName = useRef()

  // async function addNewOrder() {
  //   const { data: newOrder } = await axios.post("http://localhost:3001/order", {
  //     order: inputPedido.current.value,
  //     clientName: inputName.current.value
  //   });
  //   setOrder([...order, newOrder])


  // }
  async function addNewOrder() {
    const orderValue = inputPedido.current?.value;
    const clientNameValue = inputName.current?.value;
    if (!orderValue || !clientNameValue) {
      // lidar com o erro
      return;
    }
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: orderValue,
      clientName: clientNameValue,
    });
    setOrder([...order, newOrder]);
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
      <ul>

        {order.map(order => (
          <ContainerOrder key={order.id}>
            <ContainerItens2>
              <p>{order.order}</p>
              <p className="pName">{order.clientName}</p>
            </ContainerItens2>
            <button onClick={() => deleteOrder(order.id)} className='Trash'><img src={Trash} alt="trash" /></button>
          </ContainerOrder>
        ))
        }

      </ul>

      <Button to="/" onClick={addNewOrder}>Home</Button>
    </Container>

  )

}
export default Orders