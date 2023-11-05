import React, { useState } from "react";
import Popup from 'react-popup';
//Main App Function
import "./styles.css";
function Array() {
 
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [size, setSize] = useState("");
  const [deleteElement, setDeleteElement] = useState("");
  const [searchElement, setSearchElement] = useState("");
  const [updateElement, setUpdateElement] = useState("");
  const [updatedElement, setUpdatedElement] = useState("");
  const [index,setIndex]=useState(-1);
  const [searchflag,setSearchFlag]=useState(0);
  const [position,setPosition]=useState("");
  const [createArrayFlag,setCreateArrayFlag]=useState(0);
  
  
  
  //Handle event and assign current values to inputText i.e Queue elements
  function handleChange(event) {
    const newValue = event.target.value;
    const re=/^[0-9\b]+$/;
    if(newValue==="" || re.test(newValue))
       setInputText(newValue);
    else
      alert("please,enter an integer value.");
    
  }
  
   
  
  //We enqueue specific no. of elements in queue
  function addItem() 
  {
    const newitem=[...items];
    if(createArrayFlag===0)
    {
      alert("Array is not created yet...");
    }
    else if(inputText!=="")
    {
          if(index===size-1)
          {
             alert("Array is full...");
          }
          else
          {
              newitem[index+1]=inputText;
              setItems(newitem);
              setIndex(index+1);  
          }
    }
    else
         alert("Please,enter a value.");
  setInputText("");
  }
  //remove items from the array
 function removeItem()
 {
    const newitem= [...items];
     
     if(createArrayFlag===0){
      alert("Array is not created yet...");
     }
     else {
      var pos=newitem.indexOf(deleteElement);
      if(pos===-1)
          alert("Element is not found in the array.");
      else{
        newitem.splice(pos,1);
        setItems(newitem);
        setIndex(index-1);
       }
     }
     
 }
function updateItem(){
    const newitem= [...items];
    if(createArrayFlag===0){
      alert("Array is not created yet...");
     }
    else {
      var pos=newitem.indexOf(updateElement);
      if(pos===-1)
        alert("Element is not found in the array.");
      newitem[pos]=updatedElement;
      setItems(newitem);
      
    }
}
function searchAnElement(){
    const newitem= [...items];
    if(createArrayFlag===0){
      alert("Array is not created yet...");
     }
    else {
        var pos=newitem.indexOf(searchElement);
        if(pos===-1)
            alert("Element is not found in the array.");
        else{
            setPosition(pos);
          //alert("Element is found at index:"+pos);
            setSearchFlag(1);
        }
    }
 }
//We assign size of queue from user
function assignSize(event){
  const newSize = event.target.value;
  const re=/^[0-9\b]+$/;
  if(newSize==="" || re.test(newSize))
    setSize(newSize);
  else
    alert("please,enter an integer value.");
}

function assignDeleteElement(event){
    const newDeleteElement = event.target.value;
    const re=/^[0-9\b]+$/;
    if(newDeleteElement==="" || re.test(newDeleteElement))
        setDeleteElement(newDeleteElement);
    else
      alert("please,enter an integer value.");
      
  }
function assignSearchElement(event){
    const newSearchElement = event.target.value;
    const re=/^[0-9\b]+$/;
    if(newSearchElement==="" || re.test(newSearchElement))
    setSearchElement(newSearchElement);
    else
      alert("please,enter an integer value.");
      
}
function assignUpdateElement(event){
    const newUpdateElement = event.target.value;
    const re=/^[0-9\b]+$/;
    if(newUpdateElement==="" || re.test(newUpdateElement))
      setUpdateElement(newUpdateElement);
    else
      alert("please,enter an integer value.");
      
}
function assignUpdatedElement(event){
    const newUpdatedElement = event.target.value;
    const re=/^[0-9\b]+$/;
    if(newUpdatedElement==="" || re.test(newUpdatedElement))
       setUpdatedElement(newUpdatedElement);
    else
      alert("please,enter an integer value.");
      
}
function createArray()
{
  const array=[];
  setIndex(-1);
  if(size=="")
     alert("Please,enter a value");
  else{
    for(var i=0;i<size;i++){
       array[i]=" ";
    }
    setItems(array);
    setCreateArrayFlag(1);
   }
}
return (
    <div className="container">
      <div className="heading">
        <h1>ARRAY</h1>
      </div>
      <div className="form">
        <label>Size:</label>
        <input
        type="text" 
        value={size}
        onChange={assignSize}
        />
        <button onClick={createArray}>
                <span>CreateArray</span>
        </button>
           <div className="parts">
               <div className="sub">
                <label>Array Elements:</label>
                <input onChange={handleChange} onKeyPress={(e) =>{
                        if(e.key==="Enter")
                        {
                          addItem();
                        }
                    }
                } 
                type="text" 
                value={inputText}
                required
                />
                <button onClick={addItem}>
                <span>Insert</span>
                </button>
                 <br></br>
                    <label>Element you want to delete:</label>
                    <input 
                    onChange={assignDeleteElement} 
                    type="text" 
                    value={deleteElement}
                    
                    />
                    <button onClick={removeItem}>
                    <span>Delete</span>
                    </button>
                    <br></br>
                    <label>Element you want to update:</label>
                    <input 
                    onChange={assignUpdateElement} 
                    type="text" 
                    value={updateElement}
                    
                    />

                    <label>Updated Element:</label>
                    <input 
                    onChange={assignUpdatedElement} 
                    type="text" 
                    value={updatedElement}
                    />

                    <button onClick={updateItem}>
                    <span>Update</span>
                    </button>
                    <br></br>
                    <label>Element you want to Search:</label>
                
                    <input 
                    onChange={assignSearchElement} 
                    type="text" 
                    value={searchElement}
                
                    />
                    <button onClick={searchAnElement}>
                    <span>Search</span>
                    </button>

                    {searchflag?<h3>Element {searchElement} is found at position:{position}</h3>:null}
                 </div>
            </div>
            </div>
            <div>
 
       <dl className="dictionary">

          {items.map(todoItem => (
          <p className="term">{todoItem}</p>
          
          ))}
        </dl>

      </div>
      <div className="back">
       <h3>Index pointed in an array at position:{index}</h3>
      
      </div>
      
    </div>
  );
}

export default Array;
