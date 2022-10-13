import React, { Component } from "react";

class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: this.props.like,
      dislike: this.props.dislike,
    };
  }

  ButtonLike = () => {
    this.setState({
      like: parseInt(this.state.like) + 1,
    });
  };

  ButtonDislike = () => {
    this.setState({
      dislike: parseInt(this.state.dislike) + 1,
    });
  };

  render() {
    return (
      <div className="box-stock">
        <button className="btn-click" onClick={this.ButtonLike}>
          <img
            src="https://i.pinimg.com/474x/06/13/f4/0613f41751057ff72313472111a0c407.jpg"
            alt=""
          />
        </button>
        {this.state.like}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className="btn-click"
          onClick={this.ButtonDislike}
          disabled={this.state.disabled}
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/22/15/icon-2027661__480.png"
            alt=""
          />
        </button>
        {this.state.dislike}
      </div>
    );
  }
}

export default Produk;
