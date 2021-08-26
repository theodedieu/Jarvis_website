import React from 'react';

import logo from './jarvis_icon.png';
import './Content.css';

export default class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <div className="TitleBox">
                    <h1>Le partenaire qui vous réapprend à vivre avec votre diabète</h1>
                    <div>
                        Jarvis est une application mobile visant à apporter aux personnes diabétiques un accompagnement complet et quotidien dans la gestion de leur maladie.
                    </div>
                </div>
                <img className="App-logo"
                    src={logo}
                    alt={"logo"}
                />
                {/* <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p>
                <h2>Content</h2>
                <p>The content text!!!</p> */}
            </div>
        )
    }
}