import styled from "styled-components";
import {CardDisk} from "../../components/control_disk/Card_disk"
import {CardFaixa} from "../../components/control_faixas/Card_faixa"
import { useParams } from "react-router-dom";
import { getApiFaixas } from "../../api/endpoints";
import { Faixa } from "../../types/faixa";
import { useEffect, useState } from "react";


const Container = styled.div`
    width: 50%;
    min-width: 350px;
   
`

 
export const AreaDisk = () => {

    const {id, name} = useParams()
    const [faixas, setFaixas] = useState <Faixa[]>()
    const {getFaixastoDisk} = getApiFaixas()
    

    useEffect(() => {
        const getApi = async () => {

            try{
                const result = await getFaixastoDisk(Number(id))
                setFaixas(result.data)
            }
            catch(err) {console.log(err)}
            

        }

        getApi()
    },[])

    

    return (
        <Container>
            <CardDisk name={name? name : ""}/>
            {faixas?.map(faixa => {
                return (
                    <CardFaixa 
                        key={faixa.id}
                        name={faixa.name}
                        duration={faixa.duration.toString()}
                        disco_id={faixa.disco_id} 
                    />
                )
            })}

             
        </Container>
    )
}