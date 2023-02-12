import './app-info.css'

const AppInfo = ({ allMoviesCount, favouriteMoviesCount, favouriteLikesCount }) => {
  return (
    <div className='app-info'>
        <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
        <p className='fs-4 text-uppercase'>Sevimli Kinolar: {favouriteMoviesCount}</p>
        <p className='fs-4 text-uppercase'>Like bosilgan kinolar: {favouriteLikesCount}</p>
    </div>
  )
}

export default AppInfo