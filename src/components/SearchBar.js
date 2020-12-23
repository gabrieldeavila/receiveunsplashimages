import React from "react";

class SearchBar extends React.Component {
  state = { term: " " };
  submitForm(event) 
  {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => this.submitForm(event)} action="get" className="ui form">
          <div className="field">
            <label htmlFor="text">Image Search</label>
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              type="text"
              name=""
              id="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
