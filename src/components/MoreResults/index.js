import React from "react";
import PropTypes from "prop-types";
import { Button, Container } from "semantic-ui-react";

import "./style.css";

const MoreResults = ({ onClickButton }) => (
  <Container textAlign='center' className='more-results'>
    <Button onClick={onClickButton}>Plus de résultats</Button>
  </Container>
);

MoreResults.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};

export default MoreResults;
