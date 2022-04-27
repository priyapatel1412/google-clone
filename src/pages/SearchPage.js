import { Component } from "react";
import { connect } from "react-redux";

import Response from "../response";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "../components/Search/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  RoomOutlined,
  SearchOutlined,
} from "@mui/icons-material";

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchPage">
        <div className="searchPage__header">
          <Link to="/">
            <img
              className="searchPage__logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYb-ZtGsnlC4bj8ZlGEDMlaFvRxXNQsynIQ&usqp=CAU"
              alt=""
            />
          </Link>
          <div className="searchPage__headerBody">
            <Search hideButtons />
            <div className="searchPage__options">
              <div className="searchPage__optionsLeft">
                <div className="searchPage__option">
                  <SearchOutlined />
                  <Link to="/all">All</Link>
                </div>
                <div className="searchPage__option">
                  <Description />
                  <Link to="/news">News</Link>
                </div>
                <div className="searchPage__option">
                  <Image />
                  <Link to="/images">Images</Link>
                </div>
                <div className="searchPage__option">
                  <LocalOffer />
                  <Link to="/shopping">Shopping</Link>
                </div>
                <div className="searchPage__option">
                  <RoomOutlined />
                  <Link to="/maps">maps</Link>
                </div>
                <div className="searchPage__option">
                  <MoreVert />
                  <Link to="/more">more</Link>
                </div>
              </div>
              <div className="searchPage__optionRight">
                <div className="searchPage__option">
                  <Link to="/settings">Settings</Link>
                </div>
                <div className="searchPage__option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!this.props.loading && this.props.term && (
          <div className="searchPage__results">
            <p className="searchPage__resultCount">
              About
              {this.props.data
                ? this.props.data?.searchInformation?.formattedTotalResults
                : 1600000}
              results(
              {this.props.data
                ? this.props.data?.searchInformation?.searchTime
                : 0.3}
              ) for {this.props.term}
            </p>
            {this.props.data?.items?.map((item) => (
              <div className="searchPage__result">
                <a href={item?.link}>
                  {item?.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        src={item?.pagemap?.cse_image[0]?.src}
                        alt=""
                        className="searchPage__resultImage"
                      />
                    )}
                  {item.displayLink}▽
                </a>
                <a href={item?.link} className="searchPage__resultTitle">
                  <h2>{item?.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item?.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    term: state.result.term,
    data: state.result.data,
    loading: state.result.loading,
  };
};

export default connect(mapStateToProps)(SearchPage);
