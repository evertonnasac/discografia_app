import styled from "styled-components";
import {CardDisk} from "../../components/control_disk/Card_disk"
import {BoxAddMusic} from "../../components/control_music/Box_add_music"
import {BoxMusic} from "../../components/control_music/Box_view_music"

const Container = styled.div`
    width: 50%;
    min-width: 350px;
   
`

 

export const AreaDisk = () => {
    return (
        <Container>
             <CardDisk/>
             <BoxMusic/>
             <BoxMusic/>
             <BoxMusic/>
             <BoxMusic/>
             <BoxMusic/>
             <BoxMusic/>
             <BoxMusic/>
             <BoxAddMusic/>
        </Container>
    )
}