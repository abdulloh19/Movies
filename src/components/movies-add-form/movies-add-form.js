import './movies-add-form.css'

const MovieAddForm = () => {
  return (
    <div className='movie-add-form'>
      <h3>Yangi kino qoshish</h3>
      <form className='add-form d-flex'>
        <input type="text" className='form-control new-post-label' placeholder='Qanday kino?' />
        <input type="number" className='form-control new-post-label' placeholder='Nechi marotaba korilgan' />
        <button type='submit' className='btn btn-outline-dark'>Qoshish</button>
      </form>
    </div>
  )
}

export default MovieAddForm