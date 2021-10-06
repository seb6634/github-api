import React from "react";
import { Form, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./style.css";

const SearchBar = ({
  inputValue,
  onChangeInputValue,
  onSubmitForm,
  isLoading,
  onError,
}) => {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = () => {
    if (inputValue.length < 3) {
      onError("Veuillez mettre au moins trois caractères");
    } else {
      onSubmitForm();
    }
  };

  return (
    <Segment>
      <Form onSubmit={handleOnSubmit}>
        <Form.Input
          icon='search'
          placeholder='Recherche'
          iconPosition='left'
          value={inputValue}
          onChange={handleOnChange}
          loading={isLoading}
        />
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchBar;
