import styled from 'styled-components';
import {Link} from "react-router-dom"
export const Container = styled.div`

background: #0A0A10;
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
height: 100%;  
min-height: 100vh;

`
export const Image = styled.img`

margin-top: 10px;


`


export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;

text-align: left;

color: #FFFFFF;


`

export const DivCaixa = styled.div`
    
  button {
    background:none;
    border: none;
    cursor: pointer;
    width: 30px;
    order:3
  }
    img {
      width: 20px;
      height: 20px;
      color: black;
    }
  
`

export const ContainerOrder = styled.li`
        display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    width: 342px;
  
    p{
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: #FFFFFF;
      margin-left: 15px;
      order:1
    }

  .pName {
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
margin-left: 20px;
margin-left: 15px;
order:2
  }
    div{
      display: flex;
    flex-direction: row-reverse;
    }
`

export const Button = styled(Link)`

background: rgba(255, 255, 255, 0.14);
border-radius: 14px;
width: 342px;
height: 68px;
border: none;

font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px; 
color: white;
cursor: pointer;
margin-top: 130px;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
text-decoration: none;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}
`