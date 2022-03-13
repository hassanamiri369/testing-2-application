import React , {useState} from "react"

// create new id => "react-id-generator";
import nextId from "react-id-generator";

// styling
import './App.css';

function App() {
  const [text , setText] = useState("")
  const [email , setEmail] = useState("")
  const [list , setList] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newTodo = {id : nextId() , text , email}
    setList((ls) => [...ls , newTodo])
    setText("")
    setEmail("")
  }


  // remove todo 
  const RemoveTodo =(todo)=>{
    const newTodoAfterRemove = list.filter(item => item.id !== todo.id)
    setList(newTodoAfterRemove)
  }


  return (
    <div className="App">
     <h1>testing-2-application github</h1>

     <div>
       <form onSubmit={handleSubmit}>
         <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
         <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
         <button type="submit">add todo</button>
       </form>
     </div>

     <div>
       <ul>
         {list.map(item => (
           <div key={item.id}>
             <li>{item.text}</li>
             <li>{item.email}</li>
             <button onClick={()=> RemoveTodo(item)}>remove</button>
           </div>
         ))}
       </ul>
     </div>
    </div>
  );
}

export default App;
