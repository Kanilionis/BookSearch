import axios from "axios";

const ajaxURL = "https://www.googleapis.com/books/v1/volumes?q=" 
const APIkey = "&key=AIzaSyAvnIS_wtfCUq40QPIDMwddHvjJIYhq6Pc"

export default {
  searchBooks: function(query) {
    return axios.get(ajaxURL + query + APIkey)
  },

  getBooks: function(){
    return axios.get("/api/books")
  },

  deleteBook: function(id){
    return axios.delete("/api/books/" + id)
  },
  
  saveBook: function(title, authors, description){
    return axios.post("/api/books", {title, authors, description})
  }
   
};
