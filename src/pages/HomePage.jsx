import React,{useContext,useEffect} from 'react'
import { Context } from '../utils/context'
import axios from 'axios'
import { PopularHome,NewHome,UpcomingHome,SearchBar } from '../components'
import { upcomingGamesGet,popularGamesGet,newGamesGet,gameGenresGet,gamePlatformsGet } from '../utils/constants'
import styled from 'styled-components'




function HomePage() {

    const {gamesFetched,
    setGamesFetched,
    genresFetched,
    setGenresFetched,
    platformsFetched, 
    setPlatformsFetched,
    popularFetched,
    setPopularFetched,
    newFetched,
    setNewFetched,
    upcomingFetched,
    setUpcomingFetched
} = useContext(Context)



    useEffect(()=>{
       
        FetchPopularGames()
        FetchGenres()
        FetchNewGames()
        FetchUpcomingGames()
        FetchPlatforms()
},[])

   //Fetch Popular Games
 const FetchPopularGames = async () => {
    try{
        const {data} = await axios.get(popularGamesGet)
        setPopularFetched(data.results)
        console.log('popular gamess', data.results)
        console.log('popularrr fetched',popularFetched )
        return data
    }catch(err){
        console.log(err)
        return err
    }
    
}

//Fetch New Games
 const FetchNewGames = async () => {
     try{
        const {data} = await axios.get(newGamesGet)
        setNewFetched(data.results)
        return data
    }catch(err){
        console.log(err)
        return err
    }
}

//Fetch Upcoming Games
 const FetchUpcomingGames = async () => {
    try{
        const {data} = await axios.get(upcomingGamesGet)
        setUpcomingFetched(data.results)
        return data
    }catch(err){
        console.log(err)
        return err
    }
}

//Fetch Genres
 const FetchGenres = async () => {
    try{
        const {data} = await axios.get(gameGenresGet)
        setGenresFetched(data.results)
        console.log('genress',data.results)
        return data
    }catch(err){
        console.log(err)
        return err
    }
}

//Fetch Platforms
 const FetchPlatforms = async () => {
    try{
        const {data} = await axios.get(gamePlatformsGet)
        setPlatformsFetched(data.results)
        return data
    }catch(err){
        console.log(err)
        return err
    }
}
    
  return (
    <>
        <Countainer>
            <SearchBar />
            <PopularHome/>
            <NewHome/>
            <UpcomingHome/>
        </Countainer>
    </>
  )
}

const Countainer = styled.div`
    display: flex;  
    flex-direction: column;
    background-color: #1a1a1a;
    padding: 30px 45px;
`
export default HomePage