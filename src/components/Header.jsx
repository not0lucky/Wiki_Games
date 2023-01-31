import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()


  return (
    <>
    <Countainer>
        <Title onClick={()=> navigate('/')}>Wiki<span>Games</span></Title>
    </Countainer>
    </>
  )
}

const Countainer = styled.div`
    height: 130px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content:center;
`

const Title = styled.h1`
  cursor: pointer;
  color: white;
  font-size: 42px;

  span{
    color: #1864b0;
  }
`



export default Header