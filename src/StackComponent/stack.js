import React, { useState } from "react";
//Main App Function
function Stack() {
 
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [size, setSize] = useState("");
  const [peek,setPeek]=useState("");
  const [top,setTop]=useState(-1);
  const [peekflag,setPeekFlag]=useState(0);
  const [emptyflag,setIsEmptyFlag]=useState(0);
  const [fullflag,setIsFullFlag]=useState(0);
  const [createStackFlag,setcreateStackFlag]=useState(0);
  
  //Handle event and assign current values to inputText i.e Queue elements
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function checkIsEmpty(){
       if(createStackFlag===0){
          alert("Stack is not created yet...");
       }
       else if(top===-1){
          IsEmpty();
          setIsEmptyFlag(0);
      }
      else{
          setIsEmptyFlag(1);
      }
         
  }
  function checkIsfull(){
    if(createStackFlag===0){
      alert("Stack is not created yet...");
    }
    else if(top===size-1)
      {
        IsFull();
        setIsFullFlag(0);
      }   
      else{
        
        setIsFullFlag(1);
      }
         
  }
  function IsFull()
   {
      alert("Stack is full");
    }
    function IsEmpty(){
      alert("Stack is Empty");
    }
  
   

    
  //We enqueue specific no. of elements in queue
  function addItem() {
      const newitem=[...items];
      if(createStackFlag===0){
        alert("Stack is not created yet...");
      }
      else if(inputText!=="")
      {
            if (top===size-1)
            {
              IsFull();   
            }
            else
            {
          
                if (top===-1)
                {
                  newitem[0]=inputText;
                  setItems(newitem);
                  setTop(0);
                }
                
                //alert("value:"+inputText+rear);
                newitem[top+1]=inputText;
                setItems(newitem);  
                setTop(top+1);
            }
      }
      else
           alert("Please,enter a value.");
  }


  //remove items from the array
function removeItem(){
  const newitem= [...items];
 // if(index!==-1)
if(createStackFlag===0){
  alert("Stack is not created yet...");
}
else if(top===-1){
     IsEmpty();
    
}
else{
   newitem[top]=" ";
   setItems(newitem);
   setTop(top-1);
   
 }
}

function peekElement(){
  if(createStackFlag===0){
    alert("Stack is not created yet...");
  }
  else if(top===-1){
      IsEmpty();
      setPeekFlag(0);
  }
  else{
      setPeek(items[top]); 
      setPeekFlag(1);
  }

}
//We assign size of queue from user
function assignSize(event){
  const newSize = event.target.value;
  setSize(newSize);
  

}

function createStack(){
const array=[];
setTop(-1);
for(var i=0;i<size;i++){
     array[i]=" ";
  }
  setItems(array);
  setcreateStackFlag(1);
}


  return (
    <div className="container">
      <div className="heading">
        <h1>STACK</h1>
      </div>
      <div className="form">
      <div className="parts">
            <div className="sub">
                 <label>Size Of Stack:</label>
                <input
                  type="text" 
                  value={size}
                  onChange={assignSize}
                />
                <button onClick={createStack}>
                    <span>Create Stack</span>
                </button>
                <br></br>
                <input 
                onChange={handleChange} 
                onKeyPress={(e) =>{
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
                  <span>Push</span>
                </button>
             </div>
        </div>
        
        <div className="parts">
            <div className="sub">
                <button onClick={checkIsEmpty}>
                  <span>IsEmpty</span>
                </button>
                <button onClick={checkIsfull}>
                  <span>IsFull</span>
                </button>
                <button onClick={removeItem}>
                  <span>Pop</span>
                </button>
                <button onClick={peekElement}>
                  <span>Peek</span>
                </button>
                {peekflag?<h5>Peek value is:{peek}</h5>:null}
                {emptyflag?<h5>Stack is not empty,you can pop values</h5>:null}
                {fullflag?<h5>Stack is not full,you can push values</h5>:null}
                
               
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
       <h1>Top:{top}</h1>
      </div>
      
    </div>
  );
}

export default Stack;
