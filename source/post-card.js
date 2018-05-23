import React from "react";
import { Card } from "semantic-ui-react";

const WordPressPostCard = props => {
  return (
    <Card className="wordpress">
      <div
        className="featured-image"
        style={{ backgroundImage: `url(${props.post.featured_image})` }}
      />
      <Card.Content>
        <Card.Header>
          <a
            href={props.post.short_URL}
            target="_blank"
            dangerouslySetInnerHTML={{ __html: props.post.title }}
          />
        </Card.Header>
        <Card.Description>
          <p dangerouslySetInnerHTML={{ __html: props.post.excerpt }} />
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default WordPressPostCard;
