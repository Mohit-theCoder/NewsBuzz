import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    return (
<>
<div className="card my-2" style={{width: "18rem"}}>
  <img src={!this.props.ImageUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7HjpHNuzVssA9WGGtdCI0kC6gnLmjbMVuw&usqp=CAU':this.props.ImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}...</h5>
    <p className="card-text ">{this.props.description}...</p>
    <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
    <span className="badge bg-danger float-end mt-10">{(this.props.source).length<25?this.props.source:this.props.source.slice(0,25)}</span>
    <div className="card-footer bg-transparent border-success mt-2">
        <span className="card-text"><i><small className="text-muted">By {(this.props.author)?this.props.author:'unknown'} 3 mins ago</small></i></span>
        </div>
    </div>
</div>
</>
    )
  }
}

export default NewsItem
