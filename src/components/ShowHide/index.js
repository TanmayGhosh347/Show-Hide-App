// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>

          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
