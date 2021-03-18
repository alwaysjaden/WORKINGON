import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})


  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { query, value } = event.target;
    setFormObject({...formObject, [query]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    // // API GET  // Search
    // if(formObject.query) {
    //   API.searchInvestor({

    // })
    // }
    
    // if (formObject.title && formObject.author) {
    //   API.saveBook({
    //     title: formObject.title,
    //     author: formObject.author,
    //     synopsis: formObject.synopsis
    //   })
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err));
    // }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
           
            <Container>
              <h1>Search for Contact</h1>
            </Container>
            
            <form>
              <Input
                onChange={handleInputChange}
                name="query"
                placeholder="Search by Name (required)"
              />
              <FormBtn
                disabled={!(formObject.query)}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
           
           <Row>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Row>
          </Col>
         
            
            
          
        </Row>
      </Container>
    );
  }


export default Books;