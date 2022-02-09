class SearchBar extends React.Component {

  search(e) {
    //TODO: search e.target.value everythree characters typed in
  }

  render() {
    return (
      <input
        type="text" id="newquestion" name="newquestion"
        value="HAVE A QUESTION? SEARCH FOR ANSWERS…"
        //TODO: find a way to make this value disappear when typed in
        onChange={this.search.bind(this)}
      />
    );
  }
};
export default SearchBar;