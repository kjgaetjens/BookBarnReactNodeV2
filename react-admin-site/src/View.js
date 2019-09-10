import React,{Component} from 'react';
import './App.css';

export class View extends Component {

  constructor() {
    super()

    this.state = {
      books: []
    }

    this.viewBook()
  }

    viewBook = async () => {
        let result = await fetch('http://localhost:5000/', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
        })
        let jsonObj = await result.json()
        this.setState({
            books: jsonObj
        }) 
    }

  render() {
    let bookItems = this.state.books.map(book => {
        return <h1>test</h1>
    })

    return <div>
        <h2>View Books</h2>
        <div>{bookItems}</div>
    </div>
  }
}
