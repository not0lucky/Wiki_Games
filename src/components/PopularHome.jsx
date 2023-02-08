import React,{useContext,useState} from 'react'
import styled from 'styled-components'
import { Context } from '../utils/context'
import {useNavigate} from 'react-router-dom'

function PopularHome() {

    const navigate = useNavigate()

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
  return (
    <>
        <Countainer>
            <div className="top">
                <Title>Popular Games</Title>
                <ShowMore onClick={()=> navigate('/PopularGames')}>Show more</ShowMore>
            </div>
            
            <PopularList>
                
                {popularFetched ? popularFetched.slice(0,4).map((item)=>(
                    <PopularCard key={item.id} onClick={()=> navigate('/Game/'+item.slug)}>
                        <img src={item.background_image} width='280px' height='150px'/>
                        <div className='info'>
                            <h2>{item.name}</h2>
                            <div className='genres'>
                                <div className="genres-list">
                                {item.genres.map((item)=>(
                                   <p className='genre-name'>{item.name}</p>
                                ))}    
                                </div>
                                
                            <Button>EXPLORE</Button>
                        </div>   
                            
                        </div>
                        
                    </PopularCard>
                )): <h2>loading</h2>}
            </PopularList>
            
        </Countainer>
    </>
  )
}

const Countainer = styled.div`
    width: 100%;
    color: white;
    margin-bottom: 120px;
    .top{
        display: flex;
        margin-bottom: 60px;
       align-items: baseline;
       justify-content: space-between;

       @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-bottom: 100px;
  }
    }

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1200px) {
   width: 100%;
   
    
  }
`
const Title = styled.h1`
    font-weight: 600;
    font-size: 60px;
    
    @media (max-width: 768px) {
    text-align: center;
  }
`

const PopularList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }

  @media (max-width: 1200px) {
   
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
    
  }

`

const ShowMore = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-size: 15px;
    transition: all ease 0.3s;
    margin-right: 10px;

    &:hover{
        text-decoration: underline;
        color: #1f70c2;
    }

    @media (max-width: 768px) {
    font-size: 18px;
    text-decoration: underline;
  }
`

const PopularCard = styled.div`
    
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: #2c2c2c;
    height: 390px;
    width: 280px;

    

    .info{
        position: relative;
        height: calc(390px - 150px);
        margin: 15px ;
        h2{
            font-size: 22px;
        }
    }

    .genres{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 15px;
        bottom: 0;
        font-size:15px;
    }
    .genres-list{
        display: flex;
        gap: 10px;

        .genre-name{
            transition: all ease 0.3s;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`
const Button = styled.div`
    cursor: pointer;
    height: 50px;
    width: 120px;
    border-radius: 25px;
    border: 1px solid #5086bc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 15px;
    transition: all ease 0.3s;

    &:hover{
        background-color: #1f70c2 ;
        color: white;
    }
`

export default PopularHome
