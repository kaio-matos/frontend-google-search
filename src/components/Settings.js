import React from "react";

function Settings(props) {
    return (
        <section className={props.className}>
            <div>
                <p>Brasil</p>
            </div>
            <hr />
            <div className="linksFooter">
                <div>
                    <a href="#">Sobre</a>
                    <a href="#">Publicidade</a>
                    <a href="#">Negócios</a>
                    <a href="#">Como funciona a Pesquisa</a>
                </div>
                <div>
                    <a href="#">Privacidade</a>
                    <a href="#">Termos</a>
                    <a href="#">Definições</a>
                </div>
            </div>
        </section>)
}

export default Settings;