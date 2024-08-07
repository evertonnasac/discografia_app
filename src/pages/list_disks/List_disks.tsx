import styled from "styled-components";
import {CardDisk} from "../../components/control_disk/Card_disk"
import { BoxAddDisk } from "../../components/control_disk/Box_add_disk"; 
import { getApiDisk } from "../../api/endpoints";
import { Disk } from "../../types/disk"; 
import { useEffect, useState } from "react";
import { navigate } from "../../router/navigate";
import { getUrls } from "../../router/urls";
import { Search } from "../../components/search/Search";
import { Loading } from "../../components/loading/Loading";

const MainContainer = styled.div`
    width: 100%;
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 10px 10px;
    box-shadow: 0 5px 10px rgb(0,0,0,0.5);

`

export const ListDisk =  () => {

    const [disks, setDisks] = useState<Disk[]>()
    const [loading, setLoading] = useState(true)
    const {getAllDisks, getDisksName} = getApiDisk()
    const nav = navigate()

    useEffect(() => {
        const getDisks = async () => {

            try {
                const resp = await getAllDisks()
                setDisks(resp.data)
            }

            catch(err){console.log(err)}
            finally {setLoading(false)}
        }

        getDisks()

    },[])

    const searchFaixasByName = async (name : string) => {
        try {
            setLoading(true)
            const resp = await getDisksName(name)
            setDisks(resp.data)
        }

        catch(err){console.log(err)}
        finally{setLoading(false)}


    }

    return (
        <MainContainer>
            {loading && <Loading/>}
            <Header>
                <BoxAddDisk/>
                <Search onClick={searchFaixasByName} placeholder="Pesquisar disco..." />
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