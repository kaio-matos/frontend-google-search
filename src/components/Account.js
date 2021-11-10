import React from "react";

function Account(props) {
    return (
        <section className={props.className}>
            <a href="#">Gmail</a>
            <a href="#">Imagens</a>
            <button><img src="assets/menu.svg" alt="" /></button>
            <button><img src="assets/photoUser.jpg" alt="" /></button>
        </section>
    )
}

export default Account;