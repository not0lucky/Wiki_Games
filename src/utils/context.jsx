import { createContext , useState } from "react";

export const Context = createContext()

const AppContext = ({children}) => {
    
    const [gamesFetched, setGamesFetched] = useState('');
    const [genresFetched, setGenresFetched] = useState('');
    const [platformsFetched, setPlatformsFetched] = useState('');
    const [popularFetched,setPopularFetched] = useState('')
    const [newFetched,setNewFetched] = useState('')
    const [upcomingFetched,setUpcomingFetched] = useState('')
    const [searchFetched,setSearchFetched] = useState('')
    


    return(
        <Context.Provider value={{gamesFetched,setGamesFetched,genresFetched,setGenresFetched,popularFetched,setPopularFetched,newFetched,setNewFetched,upcomingFetched,setUpcomingFetched,platformsFetched, setPlatformsFetched,searchFetched,setSearchFetched}}>
            {children}
        </Context.Provider>
    )
}

export default AppContext