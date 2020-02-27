import React, {Component} from 'react';
import './article.scss';

class Article extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    render(){
        return (
            <article>
                <div className = "col-sm">
                    <div className="card" style={{width:"20rem"}}>
                        <img src = {this.props.data.img}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.data.title}</h5>
                            <p className="card-text">{this.props.data.text}</p>
                            <a href={this.props.data.link} className="btn btn-primary">Daugiau</a>
                            <p>Like: {this.state.counter}</p>
                            <a onClick={this.handleClick} href="#">Like</a>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Article;