import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import { Context } from '../utils/context'
import {useNavigate} from 'react-router-dom'

function PopularGamesPage() {
  const navigate = useNavigate()

  const [view,setView]= useState(20)

  const ViewMore = () =>{
    if(view != 40){
      setView(prevState => prevState + 10)
    }
  }

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
      <Title>Popular Games</Title>
      <GamesList>
        {popularFetched ? popularFetched.slice(0,view).map((item)=>(
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
                                
                            <Button onClick={()=> navigate('/Game/'+item.slug)}>EXPLORE</Button>
                        </div>   
                            
                        </div>
                        
                    </PopularCard>
        )): <h1>loadinggg...</h1>}
        
      </GamesList>

      {view != 40 && <ShowButton onClick={()=> ViewMore()}>Read more</ShowButton>}

    </Countainer>
    </>
  )
}


const Countainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  padding: 100px 55px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 100px 0px;
  }

`
const Title = styled.h1`
    font-weight: 600;
    font-size: 60px;
    margin-bottom: 120px;
    @media (max-width: 768px) {
    text-align: center;
  }
`

const GamesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 40px;
  column-gap: 25px;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
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



const ShowButton = styled.div`
    cursor: pointer;
    height: 60px;
    width: 270px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1864b0;
    font-weight: 600;
    font-size: 20px;
    transition: all ease 0.3s;
    margin: 90px auto;

    &:hover{
        background-color: #1f70c2 ;
    }
`

export default PopularGamesPage