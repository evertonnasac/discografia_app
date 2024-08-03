import styled from "styled-components";
import {CardDisk} from "../../components/control_disk/Card_disk"
import { getApiDisk } from "../../api/endpoints";
import { Disk } from "../../types/disk"; 
import { useEffect, useState } from "react";
import { navigate } from "../../router/navigate";
import { getUrls } from "../../router/urls";
import { useParams } from "react-router-dom";

const MainContainer = styled.div`
    width: 90%;
    min-width: 350px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
`

export const SearchDisk =  () => {

    const [disks, setDisks] = useState<Disk[]>()
    const {getDisksName} = getApiDisk()
    const nav = navigate()
    const {name} = useParams()

    useEffect(() => {
        const getDisks = async () => {

            try {
                const resp = await getDisksName(name? name : "")
                setDisks(resp.data)
            }

            catch(err){console.log(err)}
        }

        getDisks()

    },[])

  

    return (
        <MainContainer>
            {disks?.length ? (
                disks.map(disk => (
                    <CardDisk key={disk.id} 
                                name={disk.name}
                                onClick={() => nav(getUrls().pageDiskId(disk.id, disk.name))} /> 
                ))
            ) : (
                <p>No disks found</p> 
            )}
        </MainContainer>
    )
}