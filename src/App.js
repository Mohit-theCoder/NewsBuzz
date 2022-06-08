import './App.css';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import React, { Component } from 'react'
import News from './Components/News';
import NavBar from './Components/NavBar';
import About from './Components/About';


export default class App extends Component {

  state={
    progress: 0
  }
  setProgress = (setProgress)=> {
    this.setState({progress: setProgress})
  }

  render() {
    return (
      <Router>
      <>  
        <NavBar/>
        <LoadingBar color='#f11946' height={3} progress={this.state.progress} />
        <div>
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="home" heading=" "/>}/>
            <Route exact path="/business" element={<News setProgress={this.setProgress} category="business" key="business" heading=" Business "/>}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} category="entertainment" key="entertainment" heading=" Entertainment "/>}/>
            <Route exact path="/general" element={<News setProgress={this.setProgress} category="general" key="general" heading=" General "/>}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} category="health" key="health" heading=" Health "/>}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress} category="science" key="science"  heading=" Science "/>}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} category="sports" key="sports"  heading=" Sports "/>}/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} category="technology" key="technology"  heading=" Technology "/>}/>

            <Route exact path="/about" element={<About setProgress={this.setProgress} key="about" />}/>
            <Route exact path="/in" element={<News setProgress={this.setProgress} country="in" key="in" heading=" India: "/>}/>
            <Route exact path="/us" element={<News setProgress={this.setProgress} country="us" key="us" heading=" USA: "/>}/>
            <Route exact path="/au" element={<News setProgress={this.setProgress} country="au" key="au" heading=" Australia: "/>}/>
            <Route exact path="/ua" element={<News setProgress={this.setProgress} country="ua" key="ua" heading=" UAE: "/>}/>
            <Route exact path="/ue" element={<News setProgress={this.setProgress} country="ue" key="ue" heading=" Ukraine: "/>}/>
            <Route exact path="/ru" element={<News setProgress={this.setProgress} country="ru" key="ru" heading=" Russia: "/>}/>
            <Route exact path="/il" element={<News setProgress={this.setProgress} country="il" key="il" heading=" Israel: "/>}/>
          </Routes>
          </div>
      </>
      </Router>
    )
  }
}
