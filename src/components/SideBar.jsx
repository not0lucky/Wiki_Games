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
    width: 100vw;
    display: flex;
    flex-direction: column;
  
  }
  @media (max-width: 1200px) {

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //row-gap:40px;
    justify-items: center;
  }
`



export default SideBar