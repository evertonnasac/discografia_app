import {Container, Input} from "../save/Save_control"
import {ButtonSaveOrRemove} from "../buttons/button_save_remove/Button"


export const BoxAddMusic = () => {
    return (
        <Container>
            <Input placeholder="Adicionar música ao disco" />
            <ButtonSaveOrRemove action="add" />
        </Container>
    )
}
