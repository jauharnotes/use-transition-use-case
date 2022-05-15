import { useState, useTransition } from "react";

function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const [isPending, startTransition,] = useTransition()
  // console.log(isPending);

  const LIST_SIZE = 20000
  const handleChange = (e) => {
    setInput(e.target.value)
    startTransition(() => {
      let I = []
      for (let i = 0; i < LIST_SIZE; i++) {
        I.push(e.target.value)
      }
      setList(I)
    })
  }

  return (
   <div>
     <h1>React useTransition</h1>
     <form>
       <input type='text' value={input} onChange={handleChange} />
       {isPending ? 'Loading...' :
        list.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
     </form>
   </div>
  );
}

export default App;
