import React, { Component, createRef } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.inputRef = createRef();
    }

  render() {
    return (
      <form className="searchbar" onSubmit={(e) => {e.preventDefault(); this.props.findIP(this.inputRef.current.value)}}>
          <input type="text" ref={this.inputRef} className="searchbar__input"/>
          <a className="searchbar__btn" onClick={() => this.props.findIP(this.inputRef.current.value)}><img className="searchbar_arrow" src="/images/icon-arrow.svg"/></a>
    
      </form>
    )
  }
}
