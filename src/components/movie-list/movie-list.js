import './movie-list.css'
import './movie-list.css'

import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = ({ data, onDelete }) => {
  return (
  <ul className='movie-list'>
    {data.map(item => (
      <MovieListItem 
      key={item.id}
      name={item.name} 
      view={item.view} 
      favourite={item.favourite}
      onDelete={() => onDelete(item.id)} 
      />
    ))}
  </ul>
  )
}

export default MovieList