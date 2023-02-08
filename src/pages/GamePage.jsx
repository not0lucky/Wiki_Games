import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'

function GamePage() {

  const navigate = useNavigate()

  useEffect(()=>{
    FetchGame()
    FetchImg()
    console.log('loadinggg',loading)
  },[])

  const [gameDetails,setGameDetails] = useState({})
  const [imgs,setImgs] = useState({})
  const [loading,setLoading] = useState(true)

  //Game ID
  const {id} = useParams()

  //Base URL
const base_url = "https://api.rawg.io/api/";

//API key
const apiKey = import.meta.env.VITE_API_KEY

const url = base_url+"games/"+id+"?key="+apiKey
const movieUrl = base_url+"games/"+id+"/screenshots?key="+apiKey

  const FetchGame = async () =>{
    try{
        const {data} = await axios.get(url)
        setGameDetails(data)
        setLoading(false)
        
        console.log('Detailsss gamess', gameDetails)
        return data
    }catch(err){
        console.log(err)
        return err
    }
  }

  const FetchImg = async () => {
    try{
        const {data} = await axios.get(movieUrl)
        setImgs(data.results)
        //setLoading(false)
        console.log('moviesss gamess', data.results)
        return data
    }catch(err){
        console.log(err)
        return err
    }
  }


  return (
    <>{loading == false  ?
      <Countainer  >
        <div className="bg"></div>


        <Content>  
            <Left>
              <Link onClick={()=> navigate('/')}>Back Home</Link>
                <Title>
                  {gameDetails.name}
                </Title>
                <Genres>
                  {gameDetails && gameDetails.genres.map((item)=>(
                    <p>{item.name}</p>
                  ))}
                </Genres>
                <About>
                  <h2 className="title">About</h2>
                  <p className='info'>{gameDetails.description_raw}</p>
                </About>
                <MoreInfo>
                  <Rows>
                    <RowL>
                        <p className='info-title'>Platforms</p>
                        <p className='info-body'> {gameDetails && gameDetails.platforms.map((item)=>(
                    <p >{item.platform.name}</p>
                  ))}</p>
                        <p className='info-title'>Genres</p>
                        <p className='info-body'> {gameDetails && gameDetails.genres.map((item)=>(
                    <p >{item.name}</p>
                  ))}</p>
                        <p className='info-title'>Developers</p>
                        <p className='info-body'> {gameDetails && gameDetails.developers.map((item)=>(
                    <p >{item.name}</p>
                  ))}</p>
                    </RowL>

                    <RowR>
                        <p className='info-title'>Rating</p>
                        <p className='info-body'> {gameDetails.rating}</p>
                        <p className='info-title'>Release Date</p>
                        <p className='info-body'> {gameDetails.released}</p>
                        <p className='info-title'>Publishers</p>
                        <p className='info-body'> {gameDetails && gameDetails.publishers.map((item)=>(
                    <p >{item.name}</p>
                  ))}</p>
                    </RowR>
                    </Rows>
                    <p className='info-title'>Tags</p>
                    <Tags> {gameDetails && gameDetails.tags.map((item)=>(
                    <p >{item.name}</p>
                  ))}</Tags>
                  <p className='info-title'>Website</p>
                        <a className='info-body' href={gameDetails.website} target="_blank"> {gameDetails.website}</a>
                </MoreInfo>
            </Left>
            <Right>
                <h2 >Screenshots</h2>
                <Pictures>
                      {imgs && imgs.map((item)=>(
                        <Snap src={item.image} key={item.id} width="180px" height="100px"/>
                      ))}
                </Pictures>
                <RightTitle>View Critics</RightTitle>
                <RightBut>
                  <a href={gameDetails.metacritic_url} target="_blank">Visit Metacritics</a>
                </RightBut>
                <RightTitle>View Website</RightTitle>
                <RightBut>
                  <a href={gameDetails.website} target="_blank">Visit Metacritics</a>
                </RightBut>
            </Right>
        </Content>
        
      </Countainer>
: <h1>loadingg</h1>}
    </>
  )
}

const Countainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  color: white;

  .bg{
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    background: linear-gradient(rgba(26,26,26,0.5),rgba(26,26,26,0.8),rgba(26,26,26,1)),url("https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg") top left  / cover;
     height: 55%;
     width: calc(100vw  - 250px);

     @media (max-width: 1200px) {
   
   background: none;
  }
    img{
      width:100%;
      height: calc(100vh - 160px);
      z-index: -4;
    }
 
  }

  

`

const Content = styled.div`
  position: relative;
  padding: 100px 65px;
  display: flex;
   @media (max-width: 1200px) {
   
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    //gap: 40px;
    
  }
`
const Link = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: #bbbbbb;
  font-size: 16px;
  margin-bottom: 110px;
`

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
  @media (max-width: 1200px) {
   text-align: center;
  }
`

const Genres = styled.div`
  display: flex;
  margin-bottom: 80px;
  gap:10px;
`

const About = styled.div`

  .title{
    font-size: 28px;
    margin-bottom:10px ;
    color: #6b6c6c;
  }

  .info{
    width: 550px;
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 50px;

    @media (max-width: 1200px) {
   width: 100%;

  }
  }
`

const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  

  .info-title{
    color: #6b6c6c;
    margin-bottom: 5px;
  }

  .info-body{
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    
  }

  a.info-body{
    cursor: pointer;
    color: white;
  }
`
const Tags = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  gap: 10px;
  margin-bottom: 25px;
    
`

const Rows = styled.div`
  display: flex;
  gap: 110px;
  @media (max-width: 1200px) {
   gap: 60px;
  }
`

const RowL =styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 330px;
  
  @media (max-width: 1200px) {
   width: 50%;
  }
`

const RowR = styled.div`
  @media (max-width: 1200px) {
   width: 50%;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 70px;
  width: 700px;

  @media (max-width: 1200px) {
   
    //justify-content: center;
    align-items: center;
    text-align: left;
    margin-right: 0px;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 160px;

   @media (max-width: 1200px) {
    width: 100vw;
   margin-top: 40px ;
   align-items: center;
  }
`

const Pictures = styled.div`
  margin-top: 30px;
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 15px ;
  column-gap: 10px;

   @media (max-width: 1200px) {
   
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
  }
`
const Snap = styled.img`
  border-radius: 10px;
`

const RightTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 20px;
  color: #6b6c6c;
`
const RightBut = styled.div`
  cursor: pointer;
  width: 100%;
  height: 70px;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #5086bc;
  border-radius: 10px;
  letter-spacing: 1.2px;
  transition: all ease 0.3s;
  

   &:hover{
        background-color: #1f70c2 ;
    }

    a{
      text-decoration: none;
      color: white;
    }

    @media (max-width: 1200px) {
   width: 50%;
   font-size: 16px;
  }
`

export default GamePage