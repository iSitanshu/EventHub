import React from 'react'
import usemovieshowing from '../../Hooks/movieshowing'

const Temp = () => {
  const moviedata = usemovieshowing()

  return (
    <>
      <h1>Movie List</h1>
      {moviedata.map((movie, index) => (
        <div key={index}>
          <p>{movie.film_name}</p>
          <p>{movie.film_id}</p>
          {movie.film_trailer ? (
            <video width="320" height="240" controls autoPlay>
              <source src={movie.film_trailer} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No trailer available</p>
          )}
          <p>{movie.imdb_id}</p>
          
          {movie.images.poster && movie.images.poster["1"] && (
            <>
              <p>{movie.images.poster["1"].image_orientation}</p>
              <img 
                src={movie.images.poster["1"].medium.film_image} 
                alt={movie.film_name} 
              />
            </>
          )}
        </div>
      ))}
    </>
  )
}

export default Temp
