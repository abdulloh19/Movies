import './app.css'

import AppInfo from "../app-info/app-info"
import AppFilter from "../app-filter/app-filter"
import SearchPanel from "../search-panel/search-panel"
import MovieList from '../movie-list/movie-list'
import MovieAddForm from '../movies-add-form/movies-add-form'

const App = () => {

    return (
    <div className="app font-monospace">
        <div className="content">
        <AppInfo />
        <div className='serch-panel'>
        <SearchPanel />
        <AppFilter />
        </div>
        <MovieList />
        <MovieAddForm />
        </div>
        
    </div>)
}

export default App