/*
Why are we importing React and what is the use of importing React
-> 
React using JSX which is not a pure JS and browser understands regular JS.
So these JSX expressions needs to transpiled into regular js syntax so that
browser can understand.

If you try to remove react import then you will face an error ---> 

---- REACT MUST BE IN SCOPE WHILLE USING JSX-----

That is why we are importing react.
*/
import React from 'react'

const JSX = () => {
    const quest = "Why are we importing React and what is the use of importing React?"
    const ans = "React is using JSX which is not a pure JS and browser understands regular JS."
    const ans2 = "So these JSX expressions needs to transpiled into regular js syntax so that browser can understand."
    const tag = "If you try to remove react import then you will face an error  "
    const tagans = "---- REACT MUST BE IN SCOPE WHILLE USING JSX-----"

   return(
        <>
            <h3 className="heading"> Welcome to JSX module</h3>
            <p className="question">{`1. ${quest}`}</p>
            <ol className="answer">
                <li>{ans}</li>
                <li>{ans2}</li>    
           
            
            <p className="note">{tag} <br /> <br /> {tagans}</p>
            
            </ol>
        
        </>
    )

}

export default JSX;