import styled, { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
`;

export const BigContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;
export const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Rubik', sans-serif;
}

  html{
    scroll-behavior:smooth !important;
  }
    
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #FAFAFA;
    
  }

  /* ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #5A79E5; 
    border-radius: 10px;
  }
   
 
  ::-webkit-scrollbar-thumb {
    background: #03544c; 
    border-radius: 10px;
  }
  
  
  ::-webkit-scrollbar-thumb:hover {
    background: #03544c;
  } */
`;
