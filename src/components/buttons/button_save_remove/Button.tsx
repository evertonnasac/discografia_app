import { Style } from "./Button_style"
import styled from "styled-components"
import delete_btn from "../../../../public/delete_btn.png"
import add_btn from "../../../../public/add_btn.png"


const Image = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`

type Props = {
    action : "add" | "remove"
}

export const ButtonSaveOrRemove = ({action} : Props) =>{

    const image = action == "add" ? add_btn : delete_btn

    return(
        <Style>
            <Image src = {image} />
        </Style>
    )


}
