import { hover } from "@testing-library/user-event/dist/hover"
import { type } from "@testing-library/user-event/dist/type"
import { useState, useEffect } from "react"

export default function App(){

    
    const [inputData , setInputData] = useState("")

    function handleInputData (e){
        setInputData(e.target.value)
    }

    const [listItem, setListItem] = useState([])
   

    function handleListItem(){
        if(inputData === ""){
            window.alert("please enter something to the input")
            return
        }
        setListItem(prev => [...prev, {text: inputData, checked: false}])
         setInputData("")
        
    }

    function toggleItem(index){
        setListItem(prev =>
        prev.map((item, i) => {
        if(i === index){
        return { ...item, checked: !item.checked }
        }        
        return item
        
        })
        )
        }

    function deleteListItems(){
        return setListItem([])
    }

     function deleteItem(index){
        setListItem(prev => prev.filter((item, i) => i !== index) )
    }


    const [screenStatus, setScreenStatus] = useState("🌜 Night Mode")

    function handleScreenStatus(){
        if(screenStatus === "🌜 Night Mode"){
            
            return setScreenStatus("🌞 Day Mode")
        }else{
            return setScreenStatus("🌜 Night Mode")
        }
    }

    useEffect(() => {
        if (screenStatus === "🌞 Day Mode") {
            document.body.style.background = "linear-gradient(135deg, #f09fa5ff, #d3b1b1ff)"
        } else {
            document.body.style.background = "linear-gradient(to right, #01153a, #0e3372)"
        }
        }, [screenStatus])

 

    if(screenStatus === "🌜 Night Mode" ){

    return <div className="containerNight">
        <Header screenStatus = {screenStatus} handleScreenStatus = {handleScreenStatus} />
        <Form handleInputData = {handleInputData} inputData = {inputData} handleListItem = {handleListItem} listItem = {listItem} screenStatus = {screenStatus} handleScreenStatus = {handleScreenStatus} />
        <List listItem = {listItem} toggleItem = {toggleItem} deleteItem = {deleteItem} screenStatus = {screenStatus} handleScreenStatus = {handleScreenStatus}/>
        <Footer deleteListItems = {deleteListItems} screenStatus = {screenStatus} handleScreenStatus = {handleScreenStatus} />
        <DayOrNightMode handleScreenStatus = {handleScreenStatus} screenStatus = {screenStatus}/>
    </div>

    }else{

    return <div className="containerDay">
        <Header screenStatus = {screenStatus} handleScreenStatus = {handleScreenStatus} />
        <Form handleInputData = {handleInputData} inputData = {inputData} handleListItem = {handleListItem} listItem = {listItem} screenStatus = {screenStatus} handleScreenStatus = {handleScreenStatus} />
        <List listItem = {listItem} toggleItem = {toggleItem} deleteItem = {deleteItem} screenStatus = {screenStatus} handleScreenStatus = {handleScreenStatus}/>
        <Footer deleteListItems = {deleteListItems} screenStatus = {screenStatus} handleScreenStatus = {handleScreenStatus} />
        <DayOrNightMode handleScreenStatus = {handleScreenStatus} screenStatus = {screenStatus}/>
    </div>

    }

}
    function Header({screenStatus, handleScreenStatus}){
        if(screenStatus === "🌜 Night Mode"){
    return <div className="Header">
        <h2>To-Do-List</h2>
        <div className="icon">📝</div>
    </div>
        }else{
            return <div className="Header">
                <h2 style={{color: "black"}}>To-Do-List</h2>
                <div className="icon">📝</div>
            </div>
        }
}

    function Form({handleInputData, handleSubmit, inputData, handleListItem, screenStatus}){

       function handleSubmit(e){
        e.preventDefault()
        
    }
    if(screenStatus === "🌜 Night Mode"){
        return <form className="inputContainer" onSubmit={handleSubmit}>
         <input placeholder="Add your text" onChange={handleInputData} value={inputData} ></input>
         <small className="inputSmalMessage" style={{visibility: inputData === "" ? "visible" : "hidden"}}>
            Please add something to the input
            </small>
         <button onClick={handleListItem}>Add</button>
    </form> 
    }else{
        return <form className="inputContainer" onSubmit={handleSubmit}>
         <input placeholder="Add your text" onChange={handleInputData} value={inputData} ></input>
         <small className="inputSmalMessage" style={{visibility: inputData === "" ? "visible" : "hidden"}}>
            Please add something to the input
            </small>
         <button onClick={handleListItem }>Add</button>
    </form> 
    }
}

function List({listItem, toggleItem, deleteItem}){



    return <ul className="listItemContainer">
        {listItem.map((value, index) => {
            return <li className="listItems" key={index}>
            <label className="checkboxContainer">
                <input type="checkbox" onChange={() => toggleItem(index)} />
                <span className="checkmark"></span>
                {value.checked === false ? value.text : <span style={{textDecoration: "line-through", textDecorationColor: "white", textDecorationThickness: "2px" }}>
                    {value.text}
                    </span>}
            </label>
            <button className="iconListItem" onClick={() => deleteItem(index)}>❌</button>
        </li>
        })}
    </ul>
      
}
function Footer({deleteListItems, screenStatus}){
    if(screenStatus === "🌜 Night Mode"){
    return <footer>
        <button onClick={deleteListItems}>Delete All</button>
    </footer>
    }else{
        return <footer>
        <button onClick={deleteListItems}>Delete All</button>
    </footer>
    }
}

function DayOrNightMode({handleScreenStatus, screenStatus}){
    return <button className="dayOrNightMode" onClick={handleScreenStatus} >{screenStatus}</button>
}