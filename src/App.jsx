
import './App.css'
import {useEffect, useRef, useState} from "react";





function App() {

    const [myData,setMyData]=useState({
        image:'',
        name:'',
        city:'',
        position:''
    })
    const  imageUrlRef=useRef('')
    const  nameRef=useRef('')
    const  cityRef=useRef('')
    const  positionRef=useRef('')

    console.log('render')



    const setDataHandle=()=>{
        setMyData({
            image: imageUrlRef.current.value,
            name :nameRef.current.value,
            city: cityRef.current.value,
            position: positionRef.current.value
        })
    }

    /*useEffect(()=>{

        console.log('use effect')
        imageUrlRef.current=image
    })*/

  return (
    <div>
        <input type="text" ref={imageUrlRef}   placeholder={"enter image url"}/>
        <input type="text"  ref={nameRef}   placeholder={"enter name"}/>
        <input type="text" ref={cityRef} placeholder={"enter city "}/>
        <input type="text"  ref={positionRef}  placeholder={"enter position "} />
        <button onClick={setDataHandle}>Set Data</button>


        <p>{myData?.name}</p>
        <p>{myData?.image}</p>
        <p>{myData?.city}</p>
        <p>{myData?.position}</p>


        <div></div>
    </div>
  )
}

export default App
