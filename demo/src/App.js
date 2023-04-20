import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
function App() {
  const [arr, setArr] = useState([])
  useEffect(() => {
    axios.get("/api/getdata").then(res => {
      setArr(res.data.list)
    })
  }, [])

  const [i, setI] = useState(0)
  let tab = (index) => {
    setI(index)
  }

  let up = () => {
    let newarr = [...arr]
    newarr.sort((a, b) => {
      return a.num - b.num
    })
    setArr(newarr)
  }

  let down = () => {
    let newarr = [...arr]
    newarr.sort((a, b) => {
      return b.num - a.num
    })

    const data = newarr.splice(0, 3)
    data.map(item => item.flag = true)
    newarr.unshift(...data)

    setArr(newarr)
  }
  return (
    <div className="App">
      <div>
        <button onClick={() => up()}>升序</button>
        <button onClick={() => down()}>升序</button>
      </div>
      {
        arr && arr.map((item, index) => {
          return <li className={index == i ? "on" : ""} onClick={() => tab(index)} key={index}>{item.title}  <span className={item.flag == true ? "" : "dis"}>热 </span> 值{item.num}</li >
        })
      }
    </div>
  );
}

export default App;
