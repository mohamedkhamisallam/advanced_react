import React, { Component } from 'react'
import logo from './images/nextjs-logo.png'
export default class Next extends Component {
  render(props) {
    return (


      <>
      
     
     
      {<img src={this.props.react} alt='react'/>}
      <img className="next" src={logo} alt='nextjs'/>
      
      </>
    )
  }
}
