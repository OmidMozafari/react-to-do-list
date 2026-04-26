import { type } from "@testing-library/user-event/dist/type"
import { use, useState } from "react"

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


    const [screenStatus, setScreenStatus] = useState("day")

    function handleScreenStatus(){

    }

 

    return <div className="container">
        <DayOrNightMode />
        <Header />
        <Form handleInputData = {handleInputData} inputData = {inputData} handleListItem = {handleListItem} listItem = {listItem} />
        <List listItem = {listItem} toggleItem = {toggleItem} deleteItem = {deleteItem}/>
        <Footer deleteListItems = {deleteListItems} />
    </div>
}
    function Header(){
    return <div className="Header">
        <h2>To-Do-List</h2>
        <div className="icon">📝</div>
    </div>
}

    function Form({handleInputData, handleSubmit, inputData, handleListItem}){

       function handleSubmit(e){
        e.preventDefault()
        
    }


    return <form className="inputContainer" onSubmit={handleSubmit}>
         <input placeholder="Add your text" onChange={handleInputData} value={inputData} ></input>
         <small className="inputSmalMessage" style={{visibility: inputData === "" ? "visible" : "hidden"}}>
            Please add something to the input
            </small>

         <button onClick={handleListItem}>Add</button>
    </form> 
   
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
function Footer({deleteListItems}){
    return <footer>
        <button onClick={deleteListItems}>Delete All</button>
    </footer>
}

function DayOrNightMode(){
    return <button className="dayOrNightMode" onClick={handleScreenStatus}>🌞 Day</button>
}