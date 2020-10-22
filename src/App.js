import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import unsplash from "../src/api/unsplash";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (state) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: state },
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container maincontainer">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
