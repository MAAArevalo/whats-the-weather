import { useState } from "react";
import { SearchIcon } from "lucide-react";
function SearchBar({ onSearch }){

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search.trim()) return;

        onSearch(search);
        setSearch('');
    };
    return(
        <>
            <div id="search-bar" className="d-flex justify-content-center">
                <span id="search-logo"><SearchIcon size={20} /></span>
                <form onSubmit={handleSubmit}>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for a city (eg. Manila)" />
                </form>
            </div>
        </>
    );
}

export default SearchBar;