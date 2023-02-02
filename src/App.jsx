import { useState , useContext,useEffect} from 'react'
import AppContext from "./utils/context"
import {Routes,Route} from 'react-router-dom'
import { HomePage,GamePage,GenrePage,NewGamesPage,UpcomingGamesPage,PopularGamesPage,SearchResultPage } from './pages'
import { Header,SideBar } from './components'
import styled from 'styled-components'



function App() {


  useEffect(()=>{
    
  },[])

  return (
    <div>
      <AppContext>
        <Page>
      <Header/>
      <Countainer>
      <SideBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/Game/:id' element={<GamePage/>}></Route>
        <Route path='/Genre/:id' element={<GenrePage/>}></Route>
        <Route path='/PopularGames' element={<PopularGamesPage/>}></Route>
        <Route path='/NewGames' element={<NewGamesPage/>}></Route>
        <Route path='/UpcomingGames' element={<UpcomingGamesPage/>}></Route>
        <Route path='/SearchResult' element={<SearchResultPage/>}></Route>
      </Routes>
      </Countainer>
      </Page>
      </AppContext>
    </div>
  )
}

const Countainer = styled.div`
  background-color: #1a1a1a;
  display: flex;

   @media (max-width: 768px) {
    
    flex-direction: column;
  }

`

const Page = styled.div`


@media (max-width: 768px) {
  width: 100%;
  
  }
`

export default App
