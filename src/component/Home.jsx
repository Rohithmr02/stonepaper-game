import React, { useEffect, useState } from "react";

function Home(){
    const[userSelection,setUserselection]=useState(null);
    const[computerSelection,setComputerSelection]=useState(null);
    var[count,setCount]=useState(0);
    var[Losecount,setLosecount]=useState(0)
    var[Drawcount,setDrawcount]=useState(0)
    const [result,setResult]=useState("");
    const choice=['rock','paper','scissors']

    const ButtonHandle=(value)=>{
        setUserselection(value);
        getComputerselection()
    }
    const getComputerselection=()=>{
    const random=Math.floor(Math.random()*choice.length);
    const select=choice[random]
    setComputerSelection(select);
    }
    useEffect(()=>{
        switch(userSelection+computerSelection){
        case 'scissorspaper':
        case 'rockscissors' :
        case 'paperrock'    :
            setResult("YOU WIN")
            
             break;
            case 'paperscissors':
            case 'scissorsrock' :
            case 'rockpaper'    :   
            setResult("YOU LOSE")
            break
         case 'rockrock':
         case 'paperpaper' :
         case 'scissorsscissors':
            setResult("IT'S DRAW") 
            break   
        }
        if(result === 'YOU WIN'){
          
            setCount(count+1)
        }else if(result === 'YOU LOSE'){
            setLosecount(Losecount+1)
        }else if(result === "IT'S DRAW"){
            setDrawcount(Drawcount+1)
        }
    },[userSelection])
  
    return(
        <div className="container">
         <h1>GAME</h1>   
        <p>ENJOY YOUR TIME PLAYING GAME</p>



        <div className="Results_container">
            <div className="Results">
                <h1>UserSelection:{userSelection}</h1>
                <h1>ComputerSelection:{computerSelection}</h1>
                 <h1>Result:{result}</h1>  
                 
            </div>
            <div className="button-container">
            <div className="button">
            {choice.map((choice,index)=><button key={index} onClick={()=>ButtonHandle(choice)}>{choice}</button>)}
            </div>
            
            </div>
        </div>

        </div>
    )
}


export default Home;