import React, { Component } from "react";
import { Card, Popup, Rating, Button, Icon, Label } from "semantic-ui-react";
import "./CardMovie.css";

const PATH_IMAGE = "https://image.tmdb.org/t/p/w342";

class CardMovie extends Component {
  state = {
    voteStar: 0,
    voteCount: 0,
    isLike: false
  };

  componentDidMount() {
    this.setState({
      voteCount: this.props.movie.vote_count,
      voteStar: this.props.movie.vote_average / 2
    });
  }

  handleLikeMovie = () => {
    const { voteCount, isLike } = this.state;
    const setVoteCount = isLike ? voteCount - 1 : voteCount + 1;

    this.setState({
      voteCount: setVoteCount,
      isLike: !isLike
    });
  };

  voting = (event, data) => {
    this.setState({ voteStar: data.rating });
  };

  render() {
    const {
      poster_path: posterPath,
      title,
      vote_average,
      overview
    } = this.props.movie;
    const { isLike, voteStar } = this.state;
    const colorButton = isLike ? "grey" : "red";
    const likeContent = isLike ? "Dislike" : "Like";

    return (
      <Popup
        hoverable
        trigger={
          <Card
            image={`${PATH_IMAGE}${posterPath}`}
            header={title}
            meta={`Rating: ${vote_average}`}
            description={`${overview.substring(0, 150)}...`}
            extra={
              <Button as="div" labelPosition="right" style={{ margin: 5 }}>
                <Button
                  color={colorButton}
                  onClick={this.handleLikeMovie}
                  style={{ width: 110 }}
                >
                  <Icon name="heart" />
                  {likeContent}
                </Button>
                <Label basic color={colorButton} pointing="left">
                  {this.state.voteCount}
                </Label>
              </Button>
            }
          />
        }
      >
        <Popup.Header>User Rating</Popup.Header>
        <Popup.Content>
          <Rating
            icon="star"
            defaultRating={voteStar}
            maxRating={5}
            onRate={this.voting}
          />
        </Popup.Content>
      </Popup>
    );
  }
}

export default CardMovie;
