import styled from "styled-components";
import {AreaDisk} from "./area_disk/AreaDisk"
import { ListDisk} from "./list_disk/List_disks"

const Container = styled.main`
    margin: 0 auto;

`

export const Main = () => {
    return (
        <Container>
            <ListDisk/>
        </Container>
    )
  
}
