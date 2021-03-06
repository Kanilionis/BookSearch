import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SavedBooks from "./Saved";

function SearchBook(){
  const [books, setBooks] = useState([])
  const [bookSearch, setBookSearch] = useState("")
  const [savedBooks, setSavedBooks] = useState([{
    title: "",
    authors: [],
    description: ""
  }])


  useEffect(() => {
    loadSavedBooks()
  }, [])

  function loadSavedBooks(){
    API.getBooks()
    .then(res => setSavedBooks(res.data))
    .catch(err => console.log(err))
  }

  function handleInputChange(event){
    // const {value} = event.target.value;
    console.log(event.target.value)
    setBookSearch(event.target.value)

    }
  
  function bookState(bookData){
    return {
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      link: bookData.volumeInfo.infoLink,
      description: bookData.volumeInfo.description,
      googleID: bookData.id,
      image: bookData.volumeInfo.imageLinks.thumbnail
    }
  }

  function handleFormSubmit(event){
    
    event.preventDefault();
    console.log(bookSearch)
    API.searchBooks(bookSearch)
    // console.log(search)
    .then(res => {
      // var searchRes = res.data.items
      // console.log(res.data.items)
      // for (var i=0; i<searchRes.length; i++){
      //   console.log(searchRes[i])
        // setBooks(res.data.items)
        setBooks(
          res.data.items.map(bookData => bookState(bookData))
        )
          
        // )
      }
    )
      
    .catch(err => console.log(err));
    console.log(books)
  }

  function resetSearch(event){
    console.log(event)
  }

  function saveThisBook(event){
    event.preventDefault()
      API.saveBook(event.target)
      .then(res => 
        console.log(res.data)
        // setSavedBooks({
        //   title: res.data.title,
        //   authors: res.data.authors,
        //   description: res.data.description
        // })
        
        
        )
     
      .catch(err => console.log(err))
      console.log(savedBooks)
      loadSavedBooks()
    }
    
    
    

  return(
    <>
    <h1>Search for Books</h1>
    <form>
      <input onChange={handleInputChange} value={bookSearch.value}/>
      <button onClick={handleFormSubmit}>Search</button>
      <button onClick={resetSearch}>Reset Search</button>
    </form>
    <div>
    
      {books.map(book => (
         <span className="container-fluid">
        <img className="col-2" height="150px" width="auto" src={book.image} alt={book.title}></img>
        <h2 className="col-10">{book.title}</h2>
        <p>by {book.authors}</p>
        <p>{book.description}</p>
        <button 
        onClick={saveThisBook}
        // onClick={() => saveThisBook(book._id)}
        >add to list</button>
        </span>
      
        
        
        ))
         } 
        <SavedBooks {...savedBooks}/>
  
    </div>
   
    </>
  )
}

export default SearchBook