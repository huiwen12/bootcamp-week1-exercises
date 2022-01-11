import React from "react"
import Todo from "../Todo";

const SearchQuery = () => {
    const [data , setData] = useState(Todo);
    const [query, setQuery] = useState('')
    const[res , setRes] = useState([]);
    return (
      <div className="App container">
          <form onSubmit = {(e) => e.preventDefault()}>
              <input type = "search" className = "srh" placeholder = "search about..." 
              onChange = {(e) => {
                const test = data.filter(Todo => {
                  return (
                    Todo.toLowerCase().includes(e.target.value.toLowerCase())
                  )
                })
                setRes(test)
                if(e.target.value === '') setRes([])
              }}
              />
          </form>
          <div>
          {
            res.map((item , i) => (
            <p key = {i}>{item}</p>
            ))
          }
          </div>
      </div>
    );
}

export default SearchQuery