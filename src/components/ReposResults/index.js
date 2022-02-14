import React from "react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

import Repo from "./Repo";
import "./style.css";

const ReposResults = ({ results }) => (
  <Card.Group itemsPerRow={5} stackable>
    {results.map((result) => (
      <Repo key={result.id} {...result} />
    ))}
  </Card.Group>
);

ReposResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ReposResults;
