import {Container, Input} from "../save/Save_control"
import {ButtonSaveOrRemove} from "../buttons/button_save_remove/Button"


export const BoxAddDisk = () => {
    return (
        <Container>
            <Input placeholder="Adicionar um novo disco" />
            <ButtonSaveOrRemove action="add" />
        </Container>
    )
}
