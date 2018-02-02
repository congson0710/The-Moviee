import React, { Component } from "react";
import { Header } from "./Header/header";
import { Search } from "./SearchBar/search";
import "./App.css";
import { Grid, Container, Segment, Button, Icon } from "semantic-ui-react";

//Components
import CardMovie from "./Movies/CardMovie";
import Footer from "./Footer/footer";

class App extends Component {
  state = {
    movies: [],
    colorButton: "red",
    rowsAppear: 2
  };

  componentDidMount() {
    this.callAPI();
  }

  callAPI = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed"
      );
      const resJSON = await res.json();
      const chunkData = this.chunkArr(resJSON.results);
      this.setState({ movies: chunkData });
    } catch (error) {
      console.error(error);
    }
  };

  chunkArr = arr => {
    return arr.reduce((chunks, item, index) => {
      if (index % 3 === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  handleIncreaseNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleDecreaseNumber = () => {
    this.setState({ number: this.state.number - 1, colorButton: "blue" });
  };

  render() {
    const { rowsAppear } = this.state;
    return (
      <div>
        <Container>
          <Segment inverted>
            <Header />
            <Search />
            <Grid columns="three" style={{ marginLeft: 20 }}>
              {this.state.movies
                .slice(0, rowsAppear)
                .map((rowMovies, index) => (
                  <Grid.Row key={index}>
                    {rowMovies.map((movie, index) => (
                      <Grid.Column key={index}>
                        <CardMovie movie={movie} />
                      </Grid.Column>
                    ))}
                  </Grid.Row>
                ))}
              <Grid.Row>
                <Grid.Column />
                <Grid.Column />
                <Grid.Column textAlign="right">
                  <Button>Show more</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
