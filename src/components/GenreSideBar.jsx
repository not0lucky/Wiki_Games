import React,{useContext,useState} from 'react'
import styled from 'styled-components'
import { Context } from '../utils/context'

function GenreSideBar() {


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

  const [genreVisible, setGenreVisible] = useState(3)
  
  
  const ShowHide = () => {
    if(genreVisible == 3){
      setGenreVisible(10)
    }else{
      setGenreVisible(3)
    }
  }

  return (
    <>
          <GenreCountainer>
            <GenreTitle>Genres</GenreTitle>
            <GenreList>
            {genresFetched && genresFetched.slice(0,genreVisible).map((item)=>(
              
              <GenreCard key={item.id}>
                <GenreImg src={item.image_background} height='35' width='35'/>
                <GenreName>{item.name}</GenreName>
              </GenreCard>

            ))}
            {genreVisible == 3 ? 
            <ButCard onClick={()=> ShowHide()}>
              <GenreName>Show More</GenreName>
            </ButCard>
            :
            <ButCard onClick={()=> ShowHide()}>
              <GenreName>Hide</GenreName>
            </ButCard>
            }
          </GenreList>
          </GenreCountainer>
        </>
  )
}


const GenreCountainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 25px;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }

`

const GenreTitle = styled.h2`
  font-size: 27px;
  font-weight: 700;
  margin: 20px 10px;
  color: white;

  @media (max-width: 768px) {
    font-size: 33px;
  }

`

const GenreList = styled.div`
display: flex;
    flex-direction: column;
   @media (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const GenreCard = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 200px;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  
  @media (max-width: 768px) {
    font-size: 53px;
    margin: 10px auto;
    gap: 20px;
    justify-content: center;
  }

`
const GenreImg = styled.img`
  border-radius: 10px;

`
const GenreName = styled.p`
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 18px;
  }

`

const ButCard = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 150px;
  gap: 10px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #1f70c2;
  
  @media (max-width: 768px) {
    font-size: 53px;
    margin: 10px auto;
    gap: 20px;
    justify-content: center;
  }
`


export default GenreSideBar