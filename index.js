import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {ispressedbutton: false}

  pressed = () => {
    this.setState(prevState => ({ispressedbutton: !prevState.ispressedbutton}))
  }

  renderAuthbutton = () => {
    const {ispressedbutton} = this.state
    return (
      <button type="button" className="btn" onClick={this.pressed}>
        {ispressedbutton ? 'Subscribed' : 'Subscribe'}
      </button>
    )
  }

  render() {
    return (
      <div className="Background">
        <div className="sub-Background">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          {this.renderAuthbutton()}
        </div>
      </div>
    )
  }
}

export default Welcome
