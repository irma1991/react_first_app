import React from 'react';
import Article from "../article/Article";
import postai from "../../data/postai";
import './main.scss';

function Main(){
        const postData = postai.map(post => <Article data = {{key:post.id,
        title:post.title, text:post.text, img:post.img}}/>)
    return(
        <main>
            <h2>Pagrindinis</h2>
            <div className = "row">
                {postData}
            </div>
        </main>
    );
}

export default Main;