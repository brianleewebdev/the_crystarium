import React from 'react';
//import {Router, Route, Switch, Link} from "react-router-dom";

export default class Header extends React.Component {


    render() {
        return(
            <header>
                <div className="row">
                    <div className="col-md-4">
                        <h1>The Crystarium</h1>
                    </div>
                    <div className="col-md-8">
                        <nav>

                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}