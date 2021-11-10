import React from "react";

class batata {
    x1;
}

let x = new batata();

function Search(props) {
    return (
        <section className={props.className}>
            <img src="assets/google.png" />
            <div className="search-container">
                <div className="input">
                    <img src="assets/search.svg" />
                    <input type="text" />
                    <img src="assets/command.svg" />
                </div>
                <div className="extraInformation">
                    <div className="buttons">
                        <button>Pesquisa Google</button>
                        <button>Sinto-me com sorte</button>
                    </div>
                    <p>Disponibilizado pelo Google em: <a href="#">English</a> <a href="#">Português (Brasil)</a></p>
                </div>
            </div>
        </section>)
}

export default Search;