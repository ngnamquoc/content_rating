import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      handleLike: () => {
        this.setState((preState) => ({
          likes: preState.likes + 1,
          totalRatings: preState.totalRatings + 1,
        }));
      },
      handleDislike: () => {
        this.setState((preState) => ({
          dislikes: preState.dislikes + 1,
          totalRatings: preState.totalRatings + 1,
        }));
      },
      totalRatings: 0,
    };
  }

  render() {
    return (
      <>
        <div className="content-rating">
          <p>Testing Content</p>
          <div className="rating-button">
            <button onClick={this.state.handleLike} className="like-button">
              Like ({this.state.likes})
            </button>
            <button
              onClick={this.state.handleDislike}
              className="dislike-button"
            >
              Dislike ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </>
    );
  }
}

export default ContentRating;
