import './movie-list.css'

import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = () => {
  return <div className='movie-list'>
    <MovieListItem name='hakozo' />
    <MovieListItem name='Empire of Osman' />
    <MovieListItem name='sulton' />
    <MovieListItem name='ABdulloh' />
  </div>
}

export default MovieList