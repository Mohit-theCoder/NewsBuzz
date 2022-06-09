import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
// import PropTypes from 'prop-types'



export default class News extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  constructor(props) {
    super(props);
    console.log("News Constructor");
    this.state = {
      article: [],
      loading:false,
      pageNo:1
    };
    document.title= `NewsBuzz - ${this.props.heading===''?"  Get daily update !!!":this.props.heading}`
  }

async componentDidMount(){
  this.props.setProgress(25);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fdd86d558504b8983e5906276fb8934&pageSize=20&page=${this.state.pageNo}`;
  let promise = await fetch(url);
  this.props.setProgress(50);
  let parsedData = await promise.json();
  this.props.setProgress(75);
  this.setState({
    article: parsedData.articles,
    totalResults: parsedData.totalResults,
    pageNo: this.state.pageNo+1
  })
  console.log(this.state.totalResults)
  this.props.setProgress(100);
}

NextKey = async ()=>{

  this.setState({
    pageNo: this.state.pageNo+1,
    loading:true
  })
  this.props.setProgress(25);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fdd86d558504b8983e5906276fb8934&pageSize=20&page=${this.state.pageNo}`;
  this.props.setProgress(50);
  let promise = await fetch(url);
  this.props.setProgress(75);
  let parsedData = await promise.json();
  this.setState({
    article: parsedData.articles,
    loading:false
  })
  this.props.setProgress(100);
}

PrevKey= async ()=>{
  this.setState({
    pageNo: this.state.pageNo-1,
    loading:true
  })
  this.props.setProgress(25);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1fdd86d558504b8983e5906276fb8934&pageSize=20&page=${this.state.pageNo}`;
  let promise = await fetch(url);
  this.props.setProgress(50);
  let parsedData = await promise.json();
  this.props.setProgress(75);
  this.setState({
    article: parsedData.articles,
    loading:false
  })
  this.props.setProgress(100);
}
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="mt-80">Top {this.props.heading===''?` `:this.props.heading} Headlines...</h2>
          {this.state.loading && <Loading/>}
          <div className="row">
            {(this.state.article || []).map((element)=>{
                return <div className="col-md-4" key={element.url}>
                          <NewsItem
                            title={(element.title!=null)?element.title.slice(0, 45):element.title}
                            description={(element.description!=null)?element.description.slice(0, 88):element.description}
                            ImageUrl={element.urlToImage}
                            url = {element.url}
                            author = {element.author}
                            source = {element.source.name}
                          />
                        </div>
            })}

          </div>
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.pageNo<=1} className="btn btn-dark" onClick={this.PrevKey}>&larr; Previous</button>
            <button type="button"  disabled={this.state.pageNo>Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.NextKey}>Next &rarr; </button>
          </div>
        </div>
      </>
    );
  }
}

  News.defaultProps={
    country:"in",
    category: "general",
    heading: ""
  }
