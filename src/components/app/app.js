
import { Component } from "react"
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from '../movie-list/movie-list'
import MovieAddForm from '../movies-add-form/movies-add-form'


import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Empire of Osman', view: 787, favourite: false, id: 1 },
                {name: 'Ertugrul', view: 565, favourite: false, id: 2 },
                {name: 'Omar', view: 989, favourite: true, id: 3 },
            ]
        }
    }

   onDelete = id => {
   this.setState(({ data }) => ({
    data: data.filter(c => c.id !== id)
   }))
   
    }

    addForm = item => {
        // e.preventDefault()
        this.setState(({ data }) => ({
            data: [...data, item]
        }))
    }

    render() {
        const { data } = this.state
        return (
            <div className="app font-monospace">
                <div className="content">
                <AppInfo />
                <div className='serch-panel'>
                <SearchPanel />
                <AppFilter />
                </div>
                <MovieList data={data} onDelete={this.onDelete} />
                <MovieAddForm addForm={this.addForm}/>
                </div>
                
            </div>
            )
    }
    
}

export default App