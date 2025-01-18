
import { useEffect, useState } from 'react'
import './App.css'
import Movie from './components/movie component/Movie'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
import MoviesHeading from './components/headigOfList/listHeading'
import SearchBox from './components/searchBox/SearchBox'
import RemoveMovie from './components/Remove Layer/RemoveLayer'
import AddFavLayer from './components/Layer/layer'
import RemoveLayer from './components/Remove Layer/RemoveLayer'
function App() {
    const apiKey = "5159b3db";
    
  const [movies , setMovies] = useState([]);
  const [favorite , setFavorite] = useState([]);
  const [searchValue , setSearchValue] = useState('Fury');


  const getMovies = async (Para)=>{

    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=5159b3db` ;
    let {data} = await axios.get(url) ;
    if(data.Search){
    setMovies(data.Search)

    }
  }
 
  useEffect(()=>{
    getMovies(searchValue)
  } ,[searchValue]) ;

  

  useEffect(()=>{
    const x =JSON.parse(localStorage.getItem('Favorite Movies List' ));
    if(x !== null) {setFavorite(x)};
  } ,[]);

  const saveToLocalStorge = (items)=>{
    localStorage.setItem('Favorite Movies List' , JSON.stringify(items))
  }
  // ****************************************

  const addFavoriteMovies = (movie)=>{
    const newFavoriteList = [...favorite , movie] ;
    setFavorite(newFavoriteList)  ;
    saveToLocalStorge(newFavoriteList)
  };

  const removeFavoriteMovie = (movie)=>{
    const newFavoriteList = favorite.filter(
      (favorite)=>favorite.imdbID !== movie.imdbID
    ) ;
    setFavorite(newFavoriteList);
    saveToLocalStorge(newFavoriteList)
  };
 




//  *********************************
return(
    <>
      <div className="container-fluid">
        <div className="row">
            <MoviesHeading  heading='movies'/>
            <SearchBox searchValue={searchValue}  change={setSearchValue} />
        </div>


        <div className="row flex-nowrap overflow-x-auto">
              <Movie movies={movies}
                     FavoriteComponent={AddFavLayer}
                     handelFavoriteClick={addFavoriteMovies} />
        </div>



          {/* ************************************************ */}


          <div className="row">
            <MoviesHeading  heading='favorite'/>
          </div>

          

          <div className="row flex-nowrap overflow-x-auto">
              <Movie movies={favorite} 
                     FavoriteComponent={RemoveLayer}  
                     handelFavoriteClick={removeFavoriteMovie} />
         </div>
         
          
      </div>
    </>
)
 
}

export default App
