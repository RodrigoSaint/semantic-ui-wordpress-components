import React from "react";
import { Card } from "semantic-ui-react";
import WordPressRepository from "./repository";
import WordPressPostCard from "./post-card";

export default class WordPress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postCollection: []
    };
  }

  componentWillMount() {
    WordPressRepository.getPostCollection(this.props.address).then(
      ({ posts }) => this.setState({ postCollection: posts })
    );
  }

  render() {
    return (
      <Card.Group>
        {this.state.postCollection.map(post => (
          <WordPressPostCard key={post.title} post={post} />
        ))}
      </Card.Group>
    );
  }
}
