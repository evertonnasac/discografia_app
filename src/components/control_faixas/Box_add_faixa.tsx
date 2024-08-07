import styled from "styled-components"
import {ButtonSaveOrRemove} from "../buttons/button_save_remove/Button"
import { useState } from "react";
import { getApiFaixas } from "../../api/endpoints";
import { Faixa } from "../../api/endpoints";
import { useParams } from "react-router-dom";
import { navigate } from "../../router/navigate";

// @ts-ignore
import InputMask from 'react-input-mask';

export const Container = styled.div`
    width: 420px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Input = styled.input`
    background-color:transparent;
    font-style:italic;
    font-size:18px;
    border:none;
    height:32px;
    width:300px;
    border: 1px solid gray;

`
export const InputMaskElement = styled(InputMask)`
    background-color:transparent;
    font-style:italic;
    font-size:18px;
    border:none;
    height:32px;
    width:60px;
    border: 1px solid gray;
`



export const BoxAddMusic = () => {

    const [value, setValue] = useState<{name: string, duration: string}>({ name: '', duration: '' })

    const {id} = useParams()
    const nav = navigate()

    const saveFaixa = async () => {

        const {postFaixa} = getApiFaixas()

        const faixa : Faixa = {
            name : value?.name ? value.name : "",
            duration : value?.duration ? value.duration : "",
            disco_id : Number(id), 
        }

        try{
           await postFaixa(faixa)
           nav(0)
        }
        catch(err){
            alert("Não foi possível realizar a operação")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue(prevState => ({
          ...prevState,
          [name]: value
        }));
      };


    return (
        <Container>
            <Input placeholder="Adicionar música ao disco" name = "name" onChange={handleChange}/>
            <InputMaskElement
                id="time"
                mask="99:99"
                maskChar={null}
                placeholder="mm:ss"
                name = "duration"
                onChange = {handleChange}
               
            />
            <ButtonSaveOrRemove action="add" onClick={saveFaixa} />
        </Container>
    )
}
