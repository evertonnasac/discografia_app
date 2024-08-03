import styled from "styled-components";
import { CardFaixa } from "../../components/control_faixas/Card_faixa";
import { getApiFaixas } from "../../api/endpoints";
import { useEffect, useState } from "react";
import { Faixa } from "../../types/faixa";



const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`

export const ListFaixas = () => {

    const {getAllFaixas} = getApiFaixas() 
    const [faixas, setFaixas] = useState<Faixa[]>()

    useEffect(()=> {
        const getApi = async () => {

            try{
                const result = await getAllFaixas()
                setFaixas(result.data)
            }

            catch(err){console.log(err)}
        }
        getApi()
    },[])

    return(
        <MainContainer>
            { faixas?.length ? (faixas.map((faixa) => {
                return (
                    <CardFaixa
                        key={faixa.id}
                        disco_id={faixa.disco_id}
                        duration={faixa.duration.toString()}
                        name={faixa.name}

                    />
                )
            })) : (<></>) }
        </MainContainer>
    )
}