export default function App(){
    return <div className="container">
        <Header />
        <Input/>
        <List />
        <Footer />
    </div>
}
function Header(){
    return <div className="Header">
        <h2>To-Do-List</h2>
        <div className="icon">📝</div>
    </div>
}

function Input(){
    return <div className="inputContainer">
         <input placeholder="Add your text"></input>
         <button>Add</button>
    </div> 
   
}

function List(){
    return <ul className="listItemContainer">

   <li className="listItems">
            <label className="checkboxContainer">
                <input type="checkbox" />
                <span className="checkmark"></span>
                {/* Get the value from input and add it here*/}
            </label>
            <button className="iconListItem">❌</button>
        </li>

    </ul>
}
function Footer(){
    return <footer>
        <button>Delete All</button>
    </footer>
}