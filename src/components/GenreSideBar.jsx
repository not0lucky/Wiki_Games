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
            {genresFetched && genresFetched.slice(0,genreVisible).map((item)=>(
              <GenreCard key={item.id}>
                <GenreImg src={item.image_background} height='35' width='35'/>
                <GenreName>{item.name}</GenreName>
              </GenreCard>
            ))}
            {genreVisible == 3 ? 
            <GenreCard onClick={()=> ShowHide()}>
              <GenreName>Show More</GenreName>
            </GenreCard>
            :
            <GenreCard onClick={()=> ShowHide()}>
              <GenreName>Hide</GenreName>
            </GenreCard>
            }
          </GenreCountainer>
        </>
  )
}


const GenreCountainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 25px;
`

const GenreTitle = styled.h2`
  font-size: 27px;
  font-weight: 700;
  margin: 20px 10px;
  color: white;
`

const GenreCard = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 200px;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  
`
const GenreImg = styled.img`
  border-radius: 10px;

`
const GenreName = styled.p`
  font-size: 15px;
`


export default GenreSideBar