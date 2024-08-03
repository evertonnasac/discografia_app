import styled from "styled-components"
import {Container} from "../save/Save_control"
import {ButtonSaveOrRemove} from "../buttons/button_save_remove/Button"
import { getApiDisk } from "../../api/endpoints"
import { useState } from "react"
import { navigate } from "../../router/navigate"


export const Input = styled.input`
    background-color:transparent;
    font-style:italic;
    font-size:18px;
    border:none;
    height:32px;
    width:80%;
    border: 1px solid gray;

`
export const BoxAddDisk = () => {
 
    const [name, setName] = useState("")
    const nav = navigate()

    const save = async () => {
        const {postDisk} = getApiDisk()
        await postDisk(name)
        nav(0)

    }

    return (
        <Container>
            <Input placeholder="Adicionar um novo disco"
                value={name} 
                onChange={(e)=>setName(e.target.value)} />
            <ButtonSaveOrRemove action="add" onClick={save} />
        </Container>
    )
}
