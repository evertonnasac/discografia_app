import styled from "styled-components";
import image from "../../../public/search.png"
import { useState } from "react";


const DivSearch = styled.div`
    border:solid 1px;
    border-radius:15px;
    width:300px;
    display: flex;
    justify-content: space-between;

`
const Input =  styled.input`
    background-color:transparent;
    font-style:italic;
    font-size:18px;
    border:none;
    height:32px;
    width:70%;
`

const Image = styled.img`
    width: 25px;
    height:25px;

`

type Props = {
    onClick : (value : string) => void
    
}


export const Search = ({onClick} : Props) =>{

    const [value, setValue] = useState("")

    const click = (value : string) => {
        onClick(value)
        setValue("")
    }

    return(
        <DivSearch>
            <Input value={value} onChange={(e) => setValue(e.target.value)}/>
            <Image src={image} onClick={() => click(value)}/>
        </DivSearch>
    )
}
