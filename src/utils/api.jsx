import React , {useContext,useEffect} from 'react'
import {popularGamesGet,upcomingGamesGet,newGamesGet} from './constants'
import { Context } from './context'
import axios from 'axios'



const {gamesFetched,
    setGamesFetched,
    genresFetched,
    setGenresFetched,
    popularFetched,
    setPopularFetched,
    newFetched,
    setNewFetched,
    upcomingFetched,
    setUpcomingFetched
} = useContext(Context)



//Fetch Popular Games
export const FetchPopularGames = async () => {
    try{
        const {data} = await axios.get(popularGamesGet)
        setPopularFetched(data.results)
        return data
    }catch(err){
        console.log(err)
        return err
    }
}

//Fetch New Games
export const FetchNewGames = async () => {
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
export const FetchUpcomingGames = async () => {
    try{
        const {data} = await axios.get(upcomingGamesGet)
        setUpcomingFetched(data.results)
        return data
    }catch(err){
        console.log(err)
        return err
    }
}
