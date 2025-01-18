import './Movie.css'

 const Movie = ({movies , handelFavoriteClick , FavoriteComponent} )=>{
    
   return(    
     <>
           {movies.map((item ,index)=>(
            <div key={index} className="imgContainer1 position-relative my-5">
                <img src={item.Poster} width="100%" height="300px"  alt="movie-cover" />
                <div onClick={()=>handelFavoriteClick(item)} className="layer  d-flex align-items-center justify-content-center position-absolute">
                        <FavoriteComponent />
                </div> 

            </div>
           ))}
        </> 
    );
}

    export default Movie ;
 