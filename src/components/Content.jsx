import React from 'react'
import Row from './Row'
 import {movies, movies2} from './Data'


const content = () => {
  return (
    <div>
      <div className="content">
        <Row title="Tranding Now" posters={movies}  />
        <Row title="Top Picks" posters={movies2}  />
        <Row title="Most Popular" posters={movies2}  />
      </div>
    </div>
  )
}

export default content