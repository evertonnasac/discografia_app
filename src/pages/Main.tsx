import styled from "styled-components";
import { ListDisk} from "./list_disks/List_disks"


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
