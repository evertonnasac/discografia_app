import styled from "styled-components";
import img_disk from "../../../public/disk.png"

const Container = styled.div`
    width: 225px;
    height: 275px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border: 1px solid gray;
    
`

const Image = styled.img`
    width : 200px;
    height: 200px;

`

const Title = styled.p`
    font-size: medium;
    color: blue;
`

type Props = {
    name : string,
    onClick? : () => void 
}

export const CardDisk = ({name, onClick} : Props) => {
    return(
        <Container onClick={onClick? onClick : () => {}}>
            <Image src={img_disk}/>
            <Title>
                {name}
            </Title>
        </Container>
    )
}