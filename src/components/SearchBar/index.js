import React from "react";
import { Form } from "semantic-ui-react";
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
  console.log(window.screen.width);
  let smallScreen;
  if (window.screen.width < 800) {
    smallScreen = true;
  }
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Form.Input
          style={{
            margin: "5%",
            width: smallScreen ? "20rem" : "60rem",
          }}
          icon='search'
          placeholder='Rechercher un dépot GitHub'
          iconPosition='left'
          value={inputValue}
          onChange={handleOnChange}
          loading={isLoading}
        />
      </Form>
    </>
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
