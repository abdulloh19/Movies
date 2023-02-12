import { Component } from 'react'
import './movies-add-form.css'

class MovieAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      view: '',
    }
  }

  changeHandlerInput = e => {
    this.setState ({
      [e.target.name]: e.target.value,
    })
  }

  addFormHandler = e => {
    e.preventDefault()
    this.props.addForm({ name: this.state.name, view: this.state.view })
    this.setState ({
      name: '',
      view: '',
    })
  }
  render() {
    const { name, view } = this.state

    return (
      <div className='movie-add-form'>
        <h3>Yangi kino qoshish</h3>
        <form className='add-form d-flex' onSubmit={this.addFormHandler}>
          <input 
          type="text" 
          className='form-control new-post-label' 
          placeholder='Qanday kino?' 
          onChange={this.changeHandlerInput} 
          name='name' 
          value={name}
          />
          <input 
          type="number" 
          className='form-control new-post-label' 
          placeholder='Nechi marotaba korilgan' 
          onChange={this.changeHandlerInput} 
          name='view' 
          value={view} 
          />
          <button type='submit' className='btn btn-outline-dark'>Qoshish</button>
        </form>
      </div>
    )
  }
}

export default MovieAddForm