import React, { useState } from "react";

//Main App Function
function Deque() {
 
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [size, setSize] = useState("");
  const [rear,setRear]=useState(-1);
  const [front,setFront]=useState(-1);
  const [firstElement,setFirstElement]=useState("");
  const [lastElement,setLastElement]=useState("");
  const [emptyflag,setIsEmptyFlag]=useState(0);
  const [fullflag,setIsFullFlag]=useState(0);
  const [getFirstflag,setGetFirstFlag]=useState(0);
  const [getLastflag,setGetLastFlag]=useState(0);
  const [createDequeFlag,setCreateDequeFlag]=useState(0);
  
  
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
    if(createDequeFlag===0){
      alert("Deque is not created yet...");
    }
    else{
      if(front===-1 && rear===-1){
         IsEmpty();
         setIsEmptyFlag(0);
      }
      else
         setIsEmptyFlag(1);
    }
  }
  function checkIsFull(){
    if(createDequeFlag===0){
      alert("Deque is not created yet...");
    }
    else{
      if((front===0 && rear===size-1)||(front===rear+1))
      {
         IsFull();   
         setIsFullFlag(0);
      }
      else
         setIsFullFlag(1);
    }
  }
  function getFirstElement(){
    if(createDequeFlag===0){
      alert("Deque is not created yet...");
    }
    else{
      if(front===-1 && rear===-1)
        IsEmpty();
      else{
        setFirstElement(items[0]);
        setGetFirstFlag(1);
      }
    }
  }
  function getLastElement(){
    if(createDequeFlag===0){
      alert("Deque is not created yet...");
    }
    else{
      if(front===-1 && rear===-1)
        IsEmpty();
      else{
      setLastElement(items[size-1]);
      setGetLastFlag(1);
      }
    }
  }
  function IsFull()
  {
    alert("Deque is full");
  }
  function IsEmpty(){
    alert("Deque is Empty");
  }
  //We enqueue specific no. of elements in queue
function addItemFromRear() {
  const newitem=[...items];
  if(createDequeFlag===0){
    alert("Deque is not created yet...");
  }
  else{
      if(inputText!=="")
      {
            if((front===0 && rear===size-1)||(front===rear+1))
            {
              IsFull();   
            }
            else if(front===-1 && rear===-1){
              setRear(0);
              setFront(0);
              newitem[0]=inputText;
              setItems(newitem);
            }
            else if(rear===size-1){
              setRear(0);
              newitem[0]=inputText;
              setItems(newitem);
            }
            else 
            {
                //alert("value:"+inputText+rear);
                
                newitem[rear+1]=inputText;
                setItems(newitem); 
                setRear(rear+1); 
                
            }
      }
      else
          alert("Please,enter a value.");
  }
}
function addItemFromFront(){
  const newitem=[...items];
  if(createDequeFlag===0){
    alert("Deque is not created yet...");
  }
  else{
    if(inputText!=="")
    {
        if((front===0 && rear===size-1)||(front===rear+1))
        {
           IsFull();   
        }
        else if(front===-1 && rear===-1){
           setRear(0);
           setFront(0);
           newitem[0]=inputText;
           setItems(newitem);
        }
        else if(front===0){
           newitem[size-1]=inputText;
           setItems(newitem);
           setFront(size-1);
        }
        else 
        {
            newitem[front-1]=inputText;
            setItems(newitem);  
            setFront(front-1);
        }
      }
      else
          alert("Please,enter a value.");
   }
}
//remove items from the array
function deleteFromFront(){
  const newitem= [...items];
  if(createDequeFlag===0){
        alert("Deque is not created yet...");
  }
  else{
    if(front===-1 && rear===-1){
        IsEmpty();
        //setItems([]);
    }
    else if(front===rear){
        newitem[front]=" ";
        setFront(-1);
        setRear(-1);
        setItems(newitem);
    }
    else if(front===(size-1)){
        newitem[front]=" ";
        setFront(0);
        setItems(newitem);
    }
    else{
        newitem[front]=" ";
        setFront(front+1);
        setItems(newitem);
    }
  }

 }
 function deleteFromRear(){
    const newitem= [...items];
    if(createDequeFlag===0){
      alert("Deque is not created yet...");
    }
    else{
      if(front===-1 && rear===-1){
          IsEmpty();
         // setItems([]);
      }
      else if(front===rear){
        newitem[rear]=" ";
        setFront(-1);
        setRear(-1);
        setItems(newitem);
      }
      else if(rear===0){
          newitem[rear]=" ";
          setRear(size-1);
          setItems(newitem);
      }
      else{
          newitem[rear]=" ";
          setRear(rear-1);
          setItems(newitem);
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
function createDeque(){
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
    setCreateDequeFlag(1);
   }
 }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>DEQUE</h1>
      </div>
      <div className="form">
        <div className="parts">
           <div className="sub">
              <label>Enter Size:</label>
              
              <input
              type="text" 
              value={size}
              onChange={assignSize}
              />
              
              <button onClick={createDeque}>
                <span>CreateDeque</span>
              </button>
              <br></br>
              <input 
              onChange={handleChange} 
              type="text" 
              value={inputText}
              required
              />
              <br></br>
              <button onClick={addItemFromRear}>
                <span>Insert From Rear</span>
              </button>
              <button onClick={addItemFromFront}>
                <span>Insert From Front</span>
              </button>
            </div>
        </div>
        <div className="parts">
          <div className="sub">
              <button onClick={deleteFromRear}>
                <span>Delete from rear</span>
              </button>
              <button onClick={deleteFromFront}>
                <span>Delete from front</span>
              </button>
              <button onClick={getFirstElement}>
                <span>getFirstElement</span>
              </button>
              <button onClick={getLastElement}>
                <span>getLastElement</span>
              </button>
              <button onClick={checkIsEmpty}>
                <span>IsEmpty</span>
              </button>
              <button onClick={checkIsFull}>
                <span>IsFull</span>
              </button>
               {emptyflag?<h3>Deque is not empty,you can remove an element from deque.</h3>:null}
               {fullflag?<h3>Deque is not full,you can add an element into deque.</h3>:null}
               {getFirstflag?<h3>First element in the deque is:{firstElement}</h3>:null}
               {getLastflag?<h3>Last element in the deque is:{lastElement}</h3>:null}
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

export default Deque;
