import React from "react";
import { Icon, Input, Segment } from "semantic-ui-react";
import "./search.css";

export class Search extends React.Component {
  render() {
    return (
      <Input
        error
        fluid
        inverted
        placeholder="Search The Moviee..."
        icon={<Icon name="search" inverted circular />}
        style={{ marginBottom: 30 }}
      />
    );
  }
}
