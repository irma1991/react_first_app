import React, {Component} from 'react';
import Article from "../article/Article";
import postai from "../../data/postai";
import Location from "../location/Location";
import './main.scss';

class Main extends Component{

    constructor() {
        super()
        this.state = {
            places:[] //tuscias state vietovems
        }
    }

    componentDidMount() {
        fetch("https://api.meteo.lt/v1/places")//gaunami duomenys iš API
            .then(response => response.json())
            .then(data => {
                this.setState({ //setinam duomenis i state
                    places: data
                })
                console.log(this.state.places)
            })

    }

    render(){
        const postData = postai.map(post => <Article data = {{key:post.id,
            title:post.title, text:post.text, img:post.img}}/>)
        const postLocation = this.state.places.map(places => <Location places = {places.name}/>)
        return(
            <main>
                <h2>Pagrindinis</h2>
                <div className = "row">
                    {postData}
                    {postLocation}
                </div>
            </main>
        )
    }
}

export default Main;