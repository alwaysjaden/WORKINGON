import React, { Component } from 'react';
import './App.css';
import API from "../utils/API";
// import axios from 'axios';
import SearchForm from '../components/SearchForm';
import GifList from '../components/Giflist';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  

  // function loadBooks() {
  //   API.getBooks()
  //     .then(res => 
  //       setBooks(res.data)
  //     )
      
  //     .catch(err => console.log(err));
  // };

  
  performSearch = (query = 'cat') => {
    API.getGif(query)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>Loading...</p>
             : <GifList data={this.state.gifs} />
          }          
        </div>
      </div>
    );
  }
}
