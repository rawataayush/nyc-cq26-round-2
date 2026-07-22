import Button from "./Button";

const SearchBar = () => {
    return (
        <div className="group relative">
            <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400"></i>
            <input 
                type="text"
                placeholder="Search a college"
                className="w-full rounded-xl border-slate-300 bg-white py-5 pl-14 pr-10 shadow-sm outline-none transition-all duration-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 group-hover:shadow-md"
            />

            <div className="absolute right-2 top-2 bottom-2">
                <Button />
            </div>
        </div>
    )
}

export default SearchBar;