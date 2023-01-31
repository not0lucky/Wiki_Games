import React,{useContext} from 'react'
import styled from 'styled-components'
import { Context } from '../utils/context'
import {useNavigate} from 'react-router-dom'

function UpcomingHome() {

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
                <Title>Upcoming Games</Title>
                <ShowMore onClick={()=> navigate('/UpcomingGames')}>Show more</ShowMore>
            </div>
            
            <UpcomingList>
                
                {upcomingFetched ? upcomingFetched.slice(0,4).map((item)=>(
                    <UpcomingCard key={item.id} onClick={()=> navigate('/Game/'+item.slug)}>
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
                        
                    </UpcomingCard>
                )): <h2>loading</h2>}
            </UpcomingList>
            
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
    }

`
const Title = styled.h1`
    font-weight: 600;
    font-size: 60px;
    
`

const UpcomingList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const ShowMore = styled.div`
    cursor: pointer;
    color: white;
    font-size: 15px;
    transition: all ease 0.3s;
    margin-right: 10px;

    &:hover{
        text-decoration: underline;
        color: #1f70c2;
    }
`

const UpcomingCard = styled.div`
    
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

export default UpcomingHome