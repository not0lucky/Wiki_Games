import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import { Context } from '../utils/context'
import {useNavigate} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

function SearchBar() {

    const Style = { fontSize: "26px" }

    const [searchValue,setSearchValue] = useState('')

    const Search = async () => {
        if(searchValue != ''){
            navigate('/SearchResult/'+searchValue)
        }
    }

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
            <Title>Search For a Game</Title>
            <SearchForm>
                <SearchInput placeholder='type your game...' onChange={e => setSearchValue(e.target.value)}></SearchInput>
                <SearchButton onClick={() => Search()}>
                    <AiOutlineSearch style={Style}/>
                </SearchButton>
            </SearchForm>
        </Countainer>
    </>
  )
}

const Countainer = styled.div`
    margin-bottom: 70px;

`
const Title = styled.p`
    font-weight: 600;
    font-size: 60px;
    color: white;
    margin-bottom: 30px;
    
    @media (max-width: 768px) {
    text-align: center;
  }

`

const SearchForm = styled.form`
    width: 70%;
    border: 3px solid #2c2c2c;
    display: flex;
    align-items: center;
    border-radius: 50px;
    padding: 8px 10px;
    @media (max-width: 1200px) {
   
    width: 100%;
    
  }
`

const SearchInput = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    font-size:17px;
    padding-left: 20px;
    color: #dfdddd;
`
const SearchButton = styled.div`
    background-color: #2c2c2c;
    border: 0;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.4s ease;
    
    &:hover{
        background-color: #3a3a3a;
    }
`

export default SearchBar