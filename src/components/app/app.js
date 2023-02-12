
import { Component } from "react"
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from '../movie-list/movie-list'
import MovieAddForm from '../movies-add-form/movies-add-form'
import { v4 as uuidv4 } from 'uuid';



import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Empire of Osman', view: 787, favourite: false, like: false, id: 1 },
                {name: 'Ertugrul', view: 565, favourite: false, like: true, id: 2 },
                {name: 'Omar', view: 989, favourite: true, like: false, id: 3 },
            ],
            term: '',
        }
    }

    onDelete = id => {
        this.setState(({ data }) => ({
            data: data.filter(c => c.id !== id)
        }))
    }
    
    addForm = item => {
        const newItem = { name: item.name, view: item.view, id: uuidv4(), favourite: false, like: false }
        this.setState(({ data }) => ({
            data: [...data, newItem]
        }))
    }

    onToggleProp = (id, prop) => {
        console.log(prop)
        this.setState(({ data }) => ({
          data:  data.map(item => {
                if(item.id === id) {
                    return{ ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    serchHandler = (arr, term) => {
        if(term.length === 0) {
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
    }

    updateSearchHandler = term => this.setState ({ term })
    

    render() {
        const { data, term } = this.state
        const allMoviesCount = data.length
        const favouriteMoviesCount = data.filter(c => c.favourite).length
        const favouriteLikesCount = data.filter(a => a.like).length
        const visibleData = this.serchHandler(data, term)

        return (
            <div className="app font-monospace">
                <div className="content">
                <AppInfo
                 allMoviesCount={allMoviesCount} 
                 favouriteMoviesCount={favouriteMoviesCount} 
                 favouriteLikesCount={favouriteLikesCount}
                 />
                <div className='serch-panel'>
                <SearchPanel updateSearchHandler={this.updateSearchHandler} />
                <AppFilter />
                </div>
                < MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
                <MovieAddForm addForm={this.addForm}/>
                </div>
                
            </div>
            )
    }
    
}

export default App