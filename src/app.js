import { useState } from "react"

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
        setListItem(prev => [...prev, inputData])
         setInputData("")
        
    }

    function deleteListItems(){
        return setListItem([])
    }



 

    return <div className="container">
        <Header />
        <Form handleInputData = {handleInputData} inputData = {inputData} handleListItem = {handleListItem} listItem = {listItem} />
        <List listItem = {listItem}/>
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

function List({listItem}){
    return <ul className="listItemContainer">
        {listItem.map((value, index) => {
            return <li className="listItems" key={index}>
            <label className="checkboxContainer">
                <input type="checkbox" />
                <span className="checkmark"></span>
                {value}
            </label>
            <button className="iconListItem">❌</button>
        </li>
        })}
    </ul>
      
}
function Footer({deleteListItems}){
    return <footer>
        <button onClick={deleteListItems}>Delete All</button>
    </footer>
}