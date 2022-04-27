import { Apps } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search/Search";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="home__header">
          <div className="home__headerLeft">
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </div>
          <div className="home__headerRight">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <Apps />
            <Avatar />
          </div>
        </div>
        <div className="home__body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYb-ZtGsnlC4bj8ZlGEDMlaFvRxXNQsynIQ&usqp=CAU"
            alt=""
          />
          <div className="home__inputContainer">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
