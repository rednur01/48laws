import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    console.log(window.history)
    console.log(this.props.history)
    if (this.props.location !== prevProps.location) {
      document.getElementsByClassName("PageShell")[0].scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
