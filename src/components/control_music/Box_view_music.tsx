import styled from "styled-components";
import {ButtonSaveOrRemove} from "../buttons/button_save_remove/Button"

const DivControl = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Name = styled.text`
    font-size: 16px;
`

export const BoxMusic = () => {
    return (
        <DivControl>
            <Name>Nome da Música</Name>
            <ButtonSaveOrRemove action="remove"/>
        </DivControl>
    )
}

