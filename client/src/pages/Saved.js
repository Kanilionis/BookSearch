import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function SavedBooks(){

  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() => {
    loadSavedBooks()
  }, [])

  function loadSavedBooks(){
    API.getBooks()
    .then(res => setSavedBooks(res.data))
    .catch(err => console.log(err))
  }

  function deleteBook(id){
    API.deleteBook(id)
    .then(res => loadSavedBooks())
    .catch(err => console.log(err))
  }

  // function handleFormSubmit(event){
  //   event.preventDefault();
  //   API.saveBook({
  //     title: bookObject.title,
  //     author: bookObject.author,
  //     // image: bookObject.image
  //   })
  //   .then(res => loadBooks())
  //   .catch(err => console.log(err))
  // }

  return(
    <>
    <h1>Books on my List</h1>
    {savedBooks.length ? (
      <List>
        {savedBooks.map(savedBook => (
          <ListItem key={savedBook._id}>
            <Link to={"/saved/" + savedBook._id}>
              <strong>
                {savedBook.title} by {savedBook.author}
              </strong>
            </Link>
            <button onClick={() => deleteBook(savedBook._id)}>x</button>
          </ListItem>
        ))}
      </List>
    ) : (
      <h3>No Books Saved</h3>
    )}

    </>
  )
}

export default SavedBooks