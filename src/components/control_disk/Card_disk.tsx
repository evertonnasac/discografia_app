import styled from "styled-components";
import img_disk from "../../../public/disk.png"

const Container = styled.div`
    height: 200px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    background-color: rgb(245,255,255);
    overflow: hidden;
    cursor: pointer;
    
`

const Image = styled.img`
    width : 110px;
    height: 110px;

`

const Title = styled.p`
    font-size: large;
    color: gray;
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