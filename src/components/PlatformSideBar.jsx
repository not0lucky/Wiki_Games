import React,{useContext,useState} from 'react'
import styled from 'styled-components'
import { Context } from '../utils/context'

function PlatformSideBar() {

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
          <PlatformCountainer>
            <PlatformTitle>Platforms</PlatformTitle>
            <PlatformList>
            {platformsFetched && platformsFetched.slice(0,genreVisible).map((item)=>(
              <PlatformCard key={item.id}>
                <PlatformImg src={item.image_background} height='35' width='35'/>
                <PlatformName>{item.name}</PlatformName>
              </PlatformCard>
            ))}
            {genreVisible == 3 ? 
            <ButCard onClick={()=> ShowHide()}>
              <PlatformName>Show More</PlatformName>
            </ButCard>
            :
            <ButCard onClick={()=> ShowHide()}>
              <PlatformName>Hide</PlatformName>
            </ButCard>
            }
            </PlatformList>
          </PlatformCountainer>
        
    </>
  )
}


const PlatformCountainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0px 25px 25px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }

`

const PlatformTitle = styled.h2`
  font-size: 27px;
  font-weight: 700;
  margin: 20px 10px;
  color: white;
  @media (max-width: 768px) {
    font-size: 33px;
  }
`

const PlatformList = styled.div`
display: flex;
    flex-direction: column;
   @media (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const PlatformCard = styled.div`
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
const PlatformImg = styled.img`
  border-radius: 10px;

`
const PlatformName = styled.p`
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

export default PlatformSideBar