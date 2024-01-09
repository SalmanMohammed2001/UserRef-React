
import './App.css'
import {useEffect, useRef, useState} from "react";





function App() {

    const [image,setImage]=useState("")
    const  imageUrlRef=useRef('')

    console.log('render')

    console.log(imageUrlRef.current)

    /*useEffect(()=>{

        console.log('use effect')
        imageUrlRef.current=image
    })*/

  return (
    <div>
        <input type="text" value={imageUrlRef.current}   placeholder={"enter image url"} onChange={(e)=>{
            imageUrlRef.current=e.target.value
        }}/>
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
