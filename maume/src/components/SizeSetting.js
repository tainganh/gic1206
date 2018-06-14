import React, { Component } from 'react';


class SizeSetting extends Component {
    changeSize(value){
        this.props.onchangeSize(value);
    }
  render() {
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
            </div>
            <div className="panel-body"></div>
            <button type="button" className="btn btn-success" onClick={ () => this.changeSize(-2)}>Giam</button>&nbsp;
            <button type="button" className="btn btn-success" onClick={ () => this.changeSize(2)}>Tang</button>
        </div>
    );
  }
}

export default SizeSetting;
