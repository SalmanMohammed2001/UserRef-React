
import './App.css'
import {useReducer} from "react";

const reducerActionType={
    setImage:'setImage',
    setName:'setName',
    setCity:'setCity',
    setPosition:'setPosition',
    setData:'setData'


}

const reducer=(preState,{type,data})=>{

    switch (type){
        case reducerActionType.setImage:
            return{...preState,image: data}
        case reducerActionType.setName:
            return {...preState,name: data}
        case reducerActionType.setCity:
            return {...preState,city: data}
        case reducerActionType.setPosition:
            return {...preState,position: data}
        case reducerActionType.setData:
            return {...preState,dataArray:[...preState.dataArray,data]}

        default:
            return preState
    }

   /* if(action.type==='setImage'){
        return {...preState,image:action.data}
    }else if(action.type==='setName'){
        return {...preState,name:action.data}
    }else if(action.type==='setCity'){
        return {...preState,city:action.data}
    }else if(action.type==='setPosition'){
        return {...preState,position:action.data}
    }else if(action.type==='setData'){
        return {...preState,dataArray:[...preState.dataArray,action.data]}
    }

    else {
        return  preState
    }*/
}
function App() {
    const [state,setState]=useReducer(reducer, {
        image:'',
        name:'',
        city:'',
        position:'',
        dataArray:[]
    });

    console.log(state)

  return (
    <div>
        <input type="text"  value={state.image} placeholder={"enter image url"} onChange={(e)=>setState({
            type:'setImage',
            data:e.target.value
        })}/>
        <input type="text" value={state.name}   placeholder={"enter name"} onChange={(e)=>setState({
            type:'setName',
            data:e.target.value
        })}/>
        <input type="text"  value={state.city} placeholder={"enter city "} onChange={(e)=>setState({
            type:'setCity',
            data:e.target.value
        })}/>
        <input type="text"  value={state.position} placeholder={"enter position "} onChange={(e)=>setState({
            type:'setPosition',
            data:e.target.value
        })}/>
        <button onClick={()=>setState({
            type:'setData',
            data:{
               image:state.image,
               name:state.name,
               city:state.city,
               position:state.position
            }
        })}>Set Data</button>

        <div></div>
    </div>
  )
}

export default App
