import SearchBar from "./SearchBar";

function Header({ onSearch }){
    return(
        <>
            <section id="header">
                <div className="container">
                    <div id="content-header" className="d-flex align-items-center">
                        <div id="logo">
                            <img src="/images/logo-2.webp" alt="What's the Weather Logo" />
                        </div>
                        <SearchBar onSearch={onSearch}></SearchBar>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;