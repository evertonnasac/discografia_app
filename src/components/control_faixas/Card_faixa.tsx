import styled from "styled-components";
import {ButtonSaveOrRemove} from "../buttons/button_save_remove/Button"

const DivControl = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Name = styled.p`
    font-size: 16px;
`

const Duration = styled.p`
    font-size: 14px;
    color: gray;
`
type Props =  {
    name: string,
    duration: string,
    disco_id: number
}
export const CardFaixa = ({name, duration} : Props) => {
    return (
        <DivControl>
            <Name>{name}</Name>
            <Duration>{duration}</Duration>
            <ButtonSaveOrRemove action="remove"/>
        </DivControl>
    )
}

