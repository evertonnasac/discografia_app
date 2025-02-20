import styled from "styled-components";
import image from "../../../public/search.png"
import { useState } from "react";


const DivSearch = styled.div`
    border:solid 1px;
    border-radius:15px;
    width:270px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`
const Input =  styled.input`
    background-color:transparent;
    font-style:italic;
    font-size:18px;
    border:none;
    height:32px;
    width:85%;
    outline: none;

`

const Image = styled.img`
    width: 25px;
    height:25px;
    cursor: pointer;

`

type Props = {
    onClick : (value : string) => void,
    placeholder: string

    
}


export const Search = ({onClick, placeholder} : Props) =>{

    const [value, setValue] = useState("")

    const click = (value : string) => {
        onClick(value)
        setValue("")
    }

    return(
        <DivSearch>
            <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
            <Image src={image} onClick={() => click(value)}/>
        </DivSearch>
    )
}
