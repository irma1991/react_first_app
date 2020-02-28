import React from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import About from "../about/About";
import Search from "../search/Search";
import Footer from "../footer/Footer";
import './app.scss';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; // npm install react-router-dom (instalinam, kad veiktu routai

function App() {
    return (
        <div className="container">
            <Header/>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/main">Pagrindinis</Link>
                        </li>
                            <li>
                                <Link to="/about">Apie projekta</Link>
                            </li>
                            <li>
                                <Link to="/search">Paieska</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/search">
                            <Search/>
                        </Route>
                        <Route path="/main">
                            <Main/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
