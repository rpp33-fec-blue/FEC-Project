class reviewSearchBar extends React.Component {

  search(event) {
    //TODO: search e.target.value everythree characters typed in
  }

  render() {
    return (
      <input type="text" id="searchReview"
        value="Search reviews..."
        onChange={this.search.bind(this)}
      />
    );
  }
};
export default reviewSearchBar;