import React,{useContext,useState} from 'react'
import styled from 'styled-components'
import { Context } from '../utils/context'
import {GenreSideBar,PlatformSideBar} from './index'


function SideBar() {
 
  return (
    <>
       <Countainer>
        <GenreSideBar/>
        <PlatformSideBar/>
        </Countainer>
    </>
  )
}


const Countainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  width: 250px;
  
  @media (max-width: 768px) {
    
    width: 100%;
  }
`



export default SideBar