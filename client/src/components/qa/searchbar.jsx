class SearchBar extends React.Component {

  search(e) {
    //TODO: search e.target.value everythree characters typed in
    var input = e.target.value;

    if (input.length > 3) {
      console.log('value from searchbar - qa', e.target.value);
      this.props.handleSearch(input);
    }
  }

  render() {
    return (
      <input
        type="text" id="newquestion" name="newquestion"
        //TODO: find a way to make this value disappear when typed in
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…"
        onChange={this.search.bind(this)}
      />
    );
  }
};
export default SearchBar;