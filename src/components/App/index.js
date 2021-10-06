// == Import npm
import React, { useState, useEffect } from "react";
import axios from "axios";

// == Import
import SearchBar from "../SearchBar";
import Message from "../Message";
import ReposResults from "../ReposResults";
import Loader from "../Loader";
import MoreResults from "../MoreResults";
import "../../styles/index.css";
import "../../styles/reset.css";

// == Composant
const App = () => {
  const resultsParser = (repos) =>
    repos.map((repo) => ({
      id: repo.id,
      full_name: repo.full_name,
      owner: {
        avatar_url: repo.owner.avatar_url,
        login: repo.owner.login,
      },
      description: repo.description ? repo.description : "No description",
    }));

  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);

  const baseUrl = `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&order=desc&page=${page}&per_page=9`;

  const reset = () => {
    setHasError(false);
    setResults([]);
    setTotal(0);
    setMessage("");
    setPage(1);
  };

  const fetchResults = async () => {
    try {
      setLoading(true);
      setMessage("Veuillez patienter");
      const response = await axios.get(baseUrl);
      const items = resultsParser(response.data.items);
      const totalResults = response.data.total_count;
      setResults([...results, ...items]);
      setTotal(totalResults);
      setMessage(
        `La recherche a donné ${totalResults} résultat${
          totalResults > 1 ? "s" : ""
        }`
      );
    } catch (error) {
      setMessage("Une erreur s'est produite");
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  const submitForm = () => {
    reset();
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    if (searchQuery) {
      fetchResults();
    }
  }, [searchQuery, page]);

  return (
    <div className='app'>
      <div className='app__header'>
        <img src={"/logo-github.png"} alt='Github logo' />
      </div>
      <SearchBar
        inputValue={inputValue}
        onChangeInputValue={setInputValue}
        onSubmitForm={submitForm}
        isLoading={loading}
        onError={(errorMessage) => {
          setMessage(errorMessage);
          setHasError(true);
        }}
      />
      {message && <Message message={message} hasError={hasError} />}
      <ReposResults results={results} />
      {loading && <Loader />}
      {total > 9 && page * 9 < total && (
        <MoreResults onClickButton={() => setPage(page + 1)} />
      )}
    </div>
  );
};

// == Export
export default App;
