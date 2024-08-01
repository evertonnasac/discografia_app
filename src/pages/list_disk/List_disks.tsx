import styled from "styled-components";
import {CardDisk} from "../../components/control_disk/Card_disk"
import { BoxAddDisk } from "../../components/control_disk/Box_add_disk"; 
import  axios from "axios";
import { useEffect } from "react";

const MainContainer = styled.div`
    width: 90%;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`


const DisksBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
`

const Header = styled.div`
    width: 300px;
    align-self: flex-start;

`

export const ListDisk = () => {


    return (
        <MainContainer>
            <Header>
                <BoxAddDisk/>
            </Header>
            <DisksBox>
                <CardDisk/>
                <CardDisk/>
                <CardDisk/>
            </DisksBox>
        </MainContainer>
    )
}