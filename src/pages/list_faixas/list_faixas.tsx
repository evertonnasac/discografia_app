import styled from "styled-components";
import { CardFaixa } from "../../components/control_faixas/Card_faixa";
import { getApiFaixas } from "../../api/endpoints";
import { useEffect, useState } from "react";
import { Faixa } from "../../types/faixa";
import { Search } from "../../components/search/Search";



const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`

const Header = styled.div`
    width: 300px;
    align-self: flex-start;

`


export const ListFaixas = () => {

    const {getAllFaixas, getFaixasName} = getApiFaixas() 
    const [faixas, setFaixas] = useState<Faixa[]>()

    useEffect(()=> {
        searchAllFaixas()
    },[])


    const searchAllFaixas = async () => {
        try{
            const result = await getAllFaixas()
            setFaixas(result.data)
        }

        catch(err){console.log(err)}
    }
    

    const searchFaixasByName = async (name: string) => {
        try{
            const result = await getFaixasName(name)
            setFaixas(result.data)
        }

        catch(err){console.log(err)}
    }


    return(
        <MainContainer>
            <Header>
                <Search onClick={searchFaixasByName}/>
                <a onClick={searchAllFaixas}>Listar Todos</a>
            </Header>

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