import { Mic, SearchOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import { getSearchTerm, setSearchData } from "../../redux/actions/searchAction";
import { connect } from "react-redux";
import useGoogleSearch from "../../useGoogleSearch";
import API_KEY from "../../keys";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: {},
    };
  }

  search = (e) => {
    e.preventDefault();
    this.props.getSearchTerm(this.state.input);
    //const { history } = this.props;
    // history.push("/search");

    //mock API call
    //this.setState({ data: Response });

    const CONTEXT_KEY = "da6ebe006d2fc59a1";
    const fetchdata = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${this.props.term}`
      )
        .then((response) => response.json())
        .then((result) => {
          this.props.setSearchData(result);
        });
    };
    fetchdata();
  };

  render() {
    return (
      <form className="search">
        <div className="search__input">
          <SearchOutlined className="search__inputIcon" onClick={this.search} />
          <input
            type="text"
            className="searchInput"
            placeholder="Search Google or type a URL"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          />
          <Mic className="search__mic" />
        </div>
        {!this.props.hideButtons ? (
          <div className="search__button">
            <Button type="submit" variant="outlined" onClick={this.search}>
              <Link to="/search">Google Search</Link>
            </Button>
            <Button type="submit" variant="outlined">
              I'm Feeling Lucky
            </Button>
          </div>
        ) : (
          <div className="search__button">
            <Button
              className="search__buttonHidden"
              type="submit"
              variant="outlined"
              onClick={this.search}
            >
              <Link to="/search">Google Search</Link>
            </Button>
            <Button
              className="search__buttonHidden"
              type="submit"
              variant="outlined"
            >
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    term: state.result.term,
    data: state.result.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSearchTerm: (term) => dispatch(getSearchTerm(term)),
  setSearchData: (data) => dispatch(setSearchData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
