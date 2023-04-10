import styled from 'styled-components';

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
export const ContainerItens = styled.div`

padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;

`

export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;

text-align: left;

color: #FFFFFF;


`
export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -0.408px;
  color: #EEEEEE;
  text-align: left;
  margin-left: 25px;
  
`

export const Input = styled.input`

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;

font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;

color: #FFFFFF;


`
export const Button = styled.button`

width: 342px;
height: 68px;
margin-top: 76px;
background: #D93856;

font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;

align-items: center;
text-align: center;

color: #FFFFFF;

cursor: pointer;
`
export const Order = styled.li`
    
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    color: #FFFFFF;

    button{
      background: transparent;
      border:none;
      cursor: pointer;
    }
    

`


