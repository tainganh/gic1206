import React, { Component } from 'react';

class Result extends Component {
  setStyle(){
    return {
      color : this.props.color,
      borderColor :  this.props.color
    }
  };
  render() {
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color {this.props.color} -Fontsize : {this.props.fontSize}px</p>
                <div id="content" style={ this.setStyle() }>
                    tainganh
                </div>
        </div>
    );
  }
}

export default Result;
