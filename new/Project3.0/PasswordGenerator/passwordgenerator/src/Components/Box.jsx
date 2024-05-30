import {useState} from 'react'
const Box = () => {
    const[state, setState]= useState('');
     const generatorPassword = () =>{
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz0123456789@#$%#@*";
    for(let index = 1; index <= 8; index++){
        let char = Math.floor(Math.random()*string.length + 1);
         setState(pass += string.charAt(char))
    }
};
    const cpyFunc = () =>{
        navigator.clipboard.writeText(state);
    }
  return (
    <>
    <div>
       <h2> Randome Password Generator</h2>
        <input type="text" readOnly 
        disabled
         name=""
          placeholder='PASSWORD'
          id=''
          value={state}/>
      <div className="btns">
        <button onClick={generatorPassword}>
            Generate Password
        </button>
        <button onClick={cpyFunc}>
            Copy Password
        </button>
      </div>
 
    </div>
</>
  )
}

export default Box
