
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
            filter: 'all',
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

    filterHandler = (arr, filter) => {
        switch(filter) {
            case 'popular':
                return arr.filter(c => c.like)
                case 'mostViews':
                    return arr.filter(c => c.view > 800)
                    default: 
                    return arr
        }
    }
    updateSearchHandler = term => this.setState ({ term })

    updateFilterHandler = filter => this.setState({ filter })
    

    render() {
        const { data, term, filter } = this.state
        const allMoviesCount = data.length
        const favouriteMoviesCount = data.filter(c => c.favourite).length
        const favouriteLikesCount = data.filter(a => a.like).length
        const visibleData = this.filterHandler(this.serchHandler(data, term), filter) 

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
                <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
                </div>
                < MovieList onToggleProp={this.onToggleProp} data={visibleData} onDelete={this.onDelete} />
                <MovieAddForm addForm={this.addForm}/>
                </div>
            </div>
            )
    }
    
}

export default App