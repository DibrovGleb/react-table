import '../style/search.sass'

const SearchForm = () =>{
    return (
        <div id='search-container'>
            <div>
                <input type="search" />
                <button type="submit">Искать</button>
            </div>
            <button>Add new</button>
        </div>
    )
}

export default SearchForm