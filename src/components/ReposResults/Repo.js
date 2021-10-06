import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Repo = ({ full_name: fullName, owner, description }) => (
  <Card>
    <Image src={owner.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{fullName.length < 30 ? fullName : `${fullName.substr(-20)}...`}</Card.Header>
      <Card.Meta>
        <span>{owner.login}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
)

Repo.defaultProps = {
  description: 'Pas de description',
};

Repo.propTypes = {
  full_name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
  }).isRequired,
  description: PropTypes.string,
};

export default Repo;
