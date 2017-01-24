import React, { Component } from 'react'
import {Parallax, Background} from 'react-parallax'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <img src="http://www.f-covers.com/cover/autumn-landscape-3-facebook-cover-timeline-banner-for-fb.jpg"></img>
        <Image></Image>
      </div>
    )
  }

}

function Image () {
  return (
    <div>
      <Parallax strength={300}>
        <Background className="background">
          <img src="http://www.f-covers.com/cover/landscape-italy-facebook-cover-timeline-banner-for-fb.jpg"></img>
          <img src="http://www.f-covers.com/cover/landscape-italy-facebook-cover-timeline-banner-for-fb.jpg"></img>
          <img src="http://www.f-covers.com/cover/landscape-italy-facebook-cover-timeline-banner-for-fb.jpg"></img>
          <div className="background-div"></div>
        </Background>
        <img src="http://www.f-covers.com/cover/autumn-landscape-3-facebook-cover-timeline-banner-for-fb.jpg"></img>
        <img src="http://www.f-covers.com/cover/autumn-landscape-3-facebook-cover-timeline-banner-for-fb.jpg"></img>
        <img src="http://www.f-covers.com/cover/autumn-landscape-3-facebook-cover-timeline-banner-for-fb.jpg"></img>
        <h2>{"It's Parallax!"}</h2>
      </Parallax>
    </div>
  )
}

export default App
