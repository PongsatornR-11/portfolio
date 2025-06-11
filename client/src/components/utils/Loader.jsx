import styled, { keyframes } from 'styled-components'

export function LoaderSpin() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">M 20 31 L 20 71 Q 42 71 42 61 Q 42 50 32 50 Q 40 50 40 42 Q 40 31 28 31 Z
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
}



export function LoaderTyping() {

  const typing = keyframes`
from { width: 0 }
to { width: 100% }
`;

  const blink = keyframes`
50% { border-color: transparent }
`;

  const LoaderWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background: white;`;

  const TypingText = styled.h1`
 font-family: monospace;
 font-size: 1.5rem;
white-space: nowrap;
overflow: hidden;
border-right: 4px solid black;
width: 0;
animation: ${typing} 6s steps(40, end) forwards, ${blink} 0.75s step-end infinite;
`;

  return (
    <LoaderWrapper>
      <TypingText>Loading portfolio...</TypingText>



    </LoaderWrapper>
  )
}


export function LoaderBLetter() {
  return (
    <svg width="250" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* <path id="letterB" d="M20,10 L20,90 Q50,90 50,70 Q50,50 20,50 Q50,50 50,30 Q50,10 20,10 Z" */}
      <path id="letterB" d="M 20 31 L 20 71 Q 44 71 44 61 Q 44 52 34 52 Q 40 52 40 42 Q 40 31 28 31 Z"
        fill="none" stroke="black" stroke-width="2"
        stroke-dasharray="150" stroke-dashoffset="150">
        <animate attributeName="stroke-dashoffset" from="150" to="0" dur="2s" fill="freeze" />
      </path>
    </svg>
    // <div className='rotate-45'>
    

    // // </div>


  )
}