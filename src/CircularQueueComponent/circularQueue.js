import React, { useState } from "react";
//Main App Function

function CircularQueue() {
 
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [size, setSize] = useState("");
  const [peek,setPeek]=useState("");
  const [rear,setRear]=useState(-1);
  const [front,setFront]=useState(-1);
  const [peekflag,setPeekFlag]=useState(0);
  const [emptyflag,setIsEmptyFlag]=useState(0);
  const [fullflag,setIsFullFlag]=useState(0);
  const [createQueueFlag,setCreateQueueFlag]=useState(0);
  
  //Handle event and assign current values to inputText i.e Queue elements
  function handleChange(event) {
    const newValue = event.target.value;
     const re=/^[0-9\b]+$/;
    if(newValue==="" || re.test(newValue))
       setInputText(newValue);
    else
      alert("please,enter an integer value.");
    
  }
  function checkIsEmpty(){
       if(createQueueFlag===0){
          alert("Queue is not created yet...");
       }
       else if((front===-1 && rear===-1) || front>rear){
          IsEmpty();
          setIsEmptyFlag(0);
      }
      else{
          setIsEmptyFlag(1);
      }
         
  }
  function checkIsfull(){
    if(createQueueFlag===0){
      alert("Queue is not created yet...");
    }
    else if(rear===size-1)
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
      alert("Queue is full");
    }
    function IsEmpty(){
      alert("Queue is Empty");
    }
  
   

    
  //We enqueue specific no. of elements in queue
  function addItem() {
      const newitem=[...items];
      if(createQueueFlag===0){
        alert("Queue is not created yet...");
      }
      else if(inputText!=="")
      {
            if (((rear+1)%size)===front)
            {
              IsFull();   
            }
            else if (rear===-1 && front===-1)
            {
              setRear(0);
              setFront(0);
              newitem[0]=inputText;
              setItems(newitem);
              
            }
            else 
            {
                setRear((rear+1)%size);
                newitem[(rear+1)%size]=inputText;
                setItems(newitem);  
                
            }
      }
      else
           alert("Please,enter a value.");
  setInputText("");
  }


  //remove items from the array
function removeItem(){
  const newitem= [...items];
 // if(index!==-1)
if(createQueueFlag===0){
  alert("Queue is not created yet...");
}
else
{
    if(front===-1 && rear===-1)
        IsEmpty();
    else if(front===rear){
        newitem[front]=" ";
        setItems(newitem);
        setFront(-1);
        setRear(-1);
    }
    else{
    newitem[front]=" ";
    setItems(newitem);
    setFront((front+1)%size); 
    }
}
}
function peekElement(){
  if(createQueueFlag===0){
    alert("Queue is not created yet...");
  }
  else if(front>rear || front===-1){
      IsEmpty();
      setPeekFlag(0);
  }
  else{
      setPeek(items[front]); 
      setPeekFlag(1);
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

function createQueue(){
const array=[];
setFront(-1);
setRear(-1);
if(size=="")
     alert("Please,enter a value");
else{
for(var i=0;i<size;i++){
     array[i]=" ";
  }
  setItems(array);
  setCreateQueueFlag(1);
 }
}

return (
    <div className="container">
      <div className="heading">
        <h1>CIRCULAR QUEUE</h1>
      </div>
      <div className="form">
      <div className="parts">
            <div className="sub">
                 <label>Size Of Queue:</label>
                <input
                  type="text" 
                  value={size}
                  onChange={assignSize}
                />
                <button onClick={createQueue}>
                    <span>CreateQueue</span>
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
                  <span>Enqueue</span>
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
                  <span>Dequeue</span>
                </button>
                <button onClick={peekElement}>
                  <span>Peek</span>
                </button>
                {peekflag?<h5>Peek value is:{peek}</h5>:null}
                {emptyflag?<h5>Queue is not empty,you can dequeue values</h5>:null}
                {fullflag?<h5>Queue is not full,you can enqueue values</h5>:null}
                
               
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
       <h1>Rear:{rear}</h1>
      <h1>Front:{front}</h1>
      </div>
      
    </div>
  );
}

export default CircularQueue;
