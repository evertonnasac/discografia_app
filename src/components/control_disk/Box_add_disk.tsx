import styled from "styled-components"
import {ButtonSaveOrRemove} from "../buttons/button_save_remove/Button"
import { getApiDisk } from "../../api/endpoints"
import { useState } from "react"
import { navigate } from "../../router/navigate"



export const Container = styled.div`
    width: 70%;
    display: flex;
    align-items: flex-end;
    gap: 5px;
   
`

export const Input = styled.input`
    background-color:transparent;
    font-style:italic;
    font-size:18px;
    border:none;
    height:32px;
    width:250px;
    border: 1px solid gray;

`

const WreperInput = styled.div`
    width:275px;

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
            <WreperInput>
                <label >Adicionar novo disco</label>
                <Input placeholder="Digite o nome do disco" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)} />
                </WreperInput>
            <ButtonSaveOrRemove action="add" onClick={save} />
        </Container>
    )
}
