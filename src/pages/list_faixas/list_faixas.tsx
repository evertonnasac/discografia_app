import styled from "styled-components";
import { CardFaixa } from "../../components/control_faixas/Card_faixa";
import { getApiFaixas } from "../../api/endpoints";
import { useEffect, useState } from "react";
import { Faixa } from "../../types/faixa";
import { Search } from "../../components/search/Search";
import { Header } from "../../components/header/Header";
import { Loading } from "../../components/loading/Loading";
import { navigate } from "../../router/navigate";


const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`

const BoxFaixas = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

`

const LinkListAll = styled.a`
    color: gray;
    font-size: 22px;
    text-decoration: underline;
    cursor: pointer;

`

export const ListFaixas = () => {

    const {getAllFaixas, getFaixasName} = getApiFaixas() 
    const [loading, setLoading] = useState(true)
    const [faixas, setFaixas] = useState<Faixa[]>()
    const nav = navigate()

    useEffect(()=> {
        searchAllFaixas()
    },[])


    const searchAllFaixas = async () => {
        try{
            setLoading(true)
            const result = await getAllFaixas()
            setFaixas(result.data)
            setLoading(false)
        }

        catch(err){console.log(err)}
        finally{setLoading(false)}
    }
    

    const searchFaixasByName = async (name: string) => {
        try{
            setLoading(true)
            const result = await getFaixasName(name)
            setFaixas(result.data)
        }

        catch(err){console.log(err)}
        finally{setLoading(false)}
    }

    const deleteFaixa =  async(id : number) => {
        const {deleteFaixas} = getApiFaixas()
        try{
            await deleteFaixas(id)
            nav(0)
        }
        catch(err){
            alert("Não foi possível realizar a operação")
        }
        
    }


    return(
        <MainContainer>
            <Header>
                <Search onClick={searchFaixasByName} placeholder="Pesquisar faixas.."/>
            </Header>

            <BoxFaixas>                
                <LinkListAll onClick={searchAllFaixas}>Listar Todos</LinkListAll>

                {loading && <Loading/>}

                { faixas?.length ? (faixas.map((faixa) => {
                    return (
                        <CardFaixa
                            key={faixa.id}
                            disco_id={faixa.disco_id}
                            duration={faixa.duration}
                            name={faixa.name}
                            id={faixa.id}
                            deleteFn={deleteFaixa}

                        />
                    )
                })) : (<></>) }
            </BoxFaixas>
        </MainContainer>
    )
}