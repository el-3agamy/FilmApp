const SearchBox = ({searchValue , change})=>(
    <>
        <div className="col">
            <input type="search"
                   value={searchValue} 
                   onChange={(e)=>change(e.target.value)}
                   className="form-control w-50 my-5" 
                   placeholder="search for your movie" />
        </div>
    </>
)


export default SearchBox ;