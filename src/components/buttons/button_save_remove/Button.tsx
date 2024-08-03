import { Style, Image } from "./Button_style"
import delete_btn from "../../../../public/delete_btn.png"
import add_btn from "../../../../public/add_btn.png"


type Props = {
    action : "add" | "remove",
    onClick : () => void
}

export const ButtonSaveOrRemove = ({action, onClick} : Props) =>{

    const image = action == "add" ? add_btn : delete_btn

    return(
        <Style>
            <Image src = {image} onClick={onClick}/>
        </Style>
    )


}
