
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const[data, setData]=useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response)=>{
      return response.json()
    })
    .then((arr)=>{
      setData(arr)

    })
  },[]);
  
  return (
    <div>
      
     {data.map((item,index) => {
const changecolor = (i)=>{
  const filtered = data.map((item, index)=>{
    if(index===i){
      return (
        {
          ...item,
          completed:true
        }
      )
    }return{
      ...item,
      completed:false
    }
    
  })
  setData(filtered)

}
return(
  <>
  <button onClick={()=>changecolor(index)}className={`${item.completed? 'svet':'ffff'}`}>
    {item.id}
  </button>
  <div>
    {item.title}
  </div>
  <div >
    {item.completed}
  </div>
  </>
  
  
)
     })}
    </div>

  );
}

export default App;
