class SearchBar extends React.Component {

  search(e) {
    //TODO: search e.target.value everythree characters typed in
  }

  render() {
    return (
      <input
        type="text" id="newquestion" name="newquestion"
        //TODO: find a way to make this value disappear when typed in
        value="HAVE A QUESTION? SEARCH FOR ANSWERS…"
        onChange={this.search.bind(this)}
      />
    );
  }
};
export default SearchBar;