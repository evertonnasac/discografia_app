import styled from "styled-components";
import {CardDisk} from "../../components/control_disk/Card_disk"
import { BoxAddDisk } from "../../components/control_disk/Box_add_disk"; 
import { getApiDisk } from "../../api/endpoints";
import { Disk } from "../../types/disk"; 
import { useEffect, useState } from "react";
import { navigate } from "../../router/navigate";
import { getUrls } from "../../router/urls";

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

export const ListDisk =  () => {

    const [disks, setDisks] = useState<Disk[]>()
    const {getAllDisks} = getApiDisk()
    const nav = navigate()

    useEffect(() => {
        const getDisks = async () => {

            try {
                const resp = await getAllDisks()
                setDisks(resp.data)
            }

            catch(err){console.log(err)}
        }

        getDisks()

    },[])

  

    return (
        <MainContainer>
            <Header>
                <BoxAddDisk/>
            </Header>
            <DisksBox >
                {disks?.length ? (
                    disks.map(disk => (
                        <CardDisk key={disk.id} 
                                  name={disk.name}
                                  onClick={() => nav(getUrls().pageDiskId(disk.id, disk.name))} /> 
                    ))
                ) : (
                    <p>No disks found</p> 
                )}
            </DisksBox>
        </MainContainer>
    )
}