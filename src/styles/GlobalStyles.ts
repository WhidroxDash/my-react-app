import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
  }

  h1, h2, h3 {
    margin: 0;
  }

  input, button {
    margin: 0.5rem 0;
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default GlobalStyles;
