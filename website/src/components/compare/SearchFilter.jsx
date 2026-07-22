const SearchFilter = ({ search, onSearchChange }) => {
  return (
    <div className='flex items-center rounded-xl border border-slate-200 bg-white p-2 shadow'>
      <i className="ri-search-line ml-3 mr-3 text-xl text-slate-400"></i>

      <input 
        type="text" 
        placeholder="Search colleges...."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        className='flex-1 bg-transparent outline-none placeholder:text-slate-400'
      />
      
      <button className='rounded-lg p-2 transition hover:bg-slate-100'>
          <i className="ri-filter-3-line text-xl"></i>
      </button>
    </div>
  )
}

export default SearchFilter
