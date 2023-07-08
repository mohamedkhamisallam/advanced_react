import  { Component } from 'react'
import logo from './images/download.png'
import Next from './Next'
export default class React extends Component {
    state={react:logo}
  render() {
    
    return (
      <>


     
   
     <Next react={this.state.react}/>
    
     
      </>
    )
  }
}
