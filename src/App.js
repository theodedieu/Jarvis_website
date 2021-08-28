import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact />
        </Switch>
      </Router>
    );

    // return (
    //   <div className="App">
    //     <header class="header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       {/* <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a> */}
    //       {/* <div className="App-navbar">
    //         <div>
    //           <p>Home</p>
    //         </div>
    //         <div>
    //           <p>About us</p>
    //         </div>
    //         <div>
    //           <p>Work</p>
    //         </div>
    //         <div>
    //           <p>Info</p>
    //         </div>
    //         <div>
    //           <p>Get Started</p>
    //         </div>
    //       </div> */}
    //       <div class="overlay has-fade"></div>
    //       <nav class="container container--pall flex flex-jc-sb flex-ai-c">
    //           <a href="/" class="header__logo">
    //             <img src="images/logo.svg" alt="Easybank" />
    //           </a>
    //           <a id="btnHamburger" href="#" class="header__toggle hide-for-desktop">
    //             <span></span>
    //             <span></span>
    //             <span></span>
    //           </a>

    //           <div class="header__links hide-for-mobile">
    //             <a href="#">Home</a><a href="#">About</a><a href="#">Contact</a><a href="#">Blog</a><a href="#">Careers</a>
    //           </div>

    //           <a href="#" class="button header__cta hide-for-mobile">Request Invite</a>
    //       </nav>
    //       <div class="header__menu has-fade">
    //         <a href="">Home</a>
    //         <a href="">About</a>
    //         <a href="">Contact</a>
    //         <a href="">Blog</a>
    //         <a href="">Careers</a>
    //       </div>
    //     </header>
    //     <body>
    //       <div className="progress-container" style={progressContainerStyle}>
    //         <div className="progress-bar" style={progressBarStyle} />
    //       </div>
    //       {/* <div className="content">
    //         <h1 className="App-h1">
    //           Le partenaire qui vous réapprend à vivre avec votre diabète
    //         </h1>
    //         <br />
    //         <h1>
    //           <div className="arrow-down" />
    //         </h1>
    //         <br />
    //         <h1>S</h1>
    //         <h1>C</h1>
    //         <h1>R</h1>
    //         <h1>O</h1>
    //         <h1>L</h1>
    //         <h1>L</h1>
    //         <br />
    //         <h1>O</h1>
    //         <h1>N</h1>
    //         <br />
    //         <Roll bottom left>
    //           <h1>React Reveal</h1>
    //         </Roll>
    //         <br />
    //         <h1>
    //           <div className="arrow-down" />
    //         </h1>
    //         <br />
    //         <h1>S</h1>
    //         <h1>C</h1>
    //         <h1>R</h1>
    //         <h1>O</h1>
    //         <h1>L</h1>
    //         <h1>L</h1>
    //         <br />
    //         <h1>O</h1>
    //         <h1>N</h1>
    //         <br />
    //         <Roll bottom right>
    //           <h1>React Reveal</h1>
    //         </Roll>
    //         <br />
    //         <h1>
    //           <div className="arrow-down" />
    //         </h1>
    //         <br />
    //         <h1>S</h1>
    //         <h1>C</h1>
    //         <h1>R</h1>
    //         <h1>O</h1>
    //         <h1>L</h1>
    //         <h1>L</h1>
    //         <br />
    //         <h1>O</h1>
    //         <h1>N</h1>
    //         <br />
    //         <h1>
    //           <div className="arrow-down" />
    //         </h1>
    //         <br />
    //         <h1>T</h1>
    //         <h1>H</h1>
    //         <h1>E</h1>
    //         <br />
    //         <h1>E</h1>
    //         <h1>N</h1>
    //         <h1>D</h1>
    //       </div> */}
    //     </body>
    //   </div>
    // );
  }
}

export default App;
