import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color: 'yellow',
      fontSize: 12
    };
    this.onsetColor=this.onsetColor.bind(this);
    this.onchangeSize=this.onchangeSize.bind(this);
  }
  onsetColor(params){
    this.setState({
      color : params
    //  params là nhận color từ ColorPicker đổ vào
    });
  }
  onchangeSize(value){
    this.setState({
      fontSize: ( this.state.fontSize +value >=8 && this.state.fontSize +value <= 36) ? this.state.fontSize +value : this.state.fontSize
    });
      
      }
    onSettingDefault=(value)=>{
      this.setState({
        color: (value ? 'yellow' : ''),
        fontSize :(value ? 12 : 0)
      });
    }
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
              <ColorPicker 
              color={this.state.color} 
              onReceiveColor={ this.onsetColor}/> 
              {/* onReceiveColor dùng để nhận dữ liệu từ ColorPicker thông qua function onsetColor */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting 
                fontSize={ this.state.fontSize}
                onchangeSize= { this.onchangeSize}
              />
              <Reset onSettingDefault={ this.onSettingDefault}/>
          </div>                                             
        </div>
              <Result color={ this.state.color} fontSize={ this.state.fontSize} />
        </div>
      
    );
  }
}

export default App;
