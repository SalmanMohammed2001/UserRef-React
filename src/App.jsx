
import './App.css'
import {useEffect, useRef, useState} from "react";





function App() {

    const [image,setImage]=useState("")
    const  imageUrlRef=useRef('')

    console.log('render')

    useEffect(()=>{

        console.log('use effect')
        imageUrlRef.current=image
    })

  return (
    <div>
        <input type="text" value={image}   placeholder={"enter image url"} onChange={(e)=>setImage(e.target.value)}/>
        <input type="text"    placeholder={"enter name"}/>
        <input type="text"  placeholder={"enter city "}/>
        <input type="text"   placeholder={"enter position "} />
        <button>Set Data</button>
        <p>{imageUrlRef.current}</p>


        <div></div>
    </div>
  )
}

export default App
