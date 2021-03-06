import React, { Component } from 'react'


export default class Loading extends Component {
  render() {
    return (
      <div>
          <div className="text-center text-primary">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
      </div>
    )
  }
}
