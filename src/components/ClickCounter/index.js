import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked<span className="count">{count}</span>times
        </h1>
        <p className="description">click the button to increase the count</p>
        <button className="clickme" type="button" onClick={this.OnIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
