import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    width: 50%;
    height: 200px ;
    background-color: gray;
    opacity: 0.5;
    
`
  
const StyleSpinner = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border: 4px solid #3498db;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top-color: transparent;
    animation: spin 1s linear infinite;

    

    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
   
` 
   
export const Loading = () => {
    return (
        <StyleSpinner/>
    )
}
  


