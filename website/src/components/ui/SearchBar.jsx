import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        const trimmedQuery = searchQuery.trim();
        const queryString = new URLSearchParams();

        if (trimmedQuery) {
            queryString.set("search", trimmedQuery);
        }

        navigate(`/compare${queryString.toString() ? `?${queryString.toString()}` : ""}`);
    };

    return (
        <form className="group relative" onSubmit={handleSearch}>
            <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400"></i>
            <input 
                type="text"
                placeholder="Search a college"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full rounded-xl border-slate-300 bg-white py-5 pl-14 pr-10 shadow-sm outline-none transition-all duration-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 group-hover:shadow-md"
            />

            <div className="absolute right-2 top-2 bottom-2">
                <Button type="submit">Compare Colleges</Button>
            </div>
        </form>
    )
}

export default SearchBar;