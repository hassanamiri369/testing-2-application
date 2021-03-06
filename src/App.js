import React , {useState , useRef , useEffect} from "react"

// create new id => "react-id-generator";
import nextId from "react-id-generator";

// styling
import './App.css';

function App() {
  const [text , setText] = useState("")
  const [email , setEmail] = useState("")

  // this is a local state
  const [list , setList] = useState([])

  // focus input
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  } , [])
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    const newTodo = {id : nextId() , text , email}
    if(text && email){
      setList((ls) => [...ls , newTodo])
    }
    setText("")
    setEmail("")
  }


  // remove todo 
  const RemoveTodo =(todo)=>{
    const newTodoAfterRemove = list.filter(item => item.id !== todo.id)
    setList(newTodoAfterRemove)
  }

  // toggle todo 
  


  return (
    <div className="App">
     <h1>testing-2-application github</h1>

     <div>
       <form onSubmit={handleSubmit}>
         <input ref={inputRef} type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
         <input ref={inputRef}  type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
         <button type="submit">add todo</button>
       </form>
     </div>

     <div>
       <ul>
         {list.map(item => (
           <div key={item.id}>
             <li>Text : {item.text}</li>
             <li> Email :{item.email}</li>
             <button onClick={()=> RemoveTodo(item)}>remove</button>
           </div>
         ))}
       </ul>
     </div>
    </div>
  );
}

export default App;
