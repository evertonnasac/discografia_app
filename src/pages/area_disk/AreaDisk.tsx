import styled from "styled-components";
import {CardDisk} from "../../components/control_disk/Card_disk"
import {CardFaixa} from "../../components/control_faixas/Card_faixa"
import { useParams } from "react-router-dom";
import { getApiFaixas } from "../../api/endpoints";
import { Faixa } from "../../types/faixa";
import { BoxAddMusic } from "../../components/control_faixas/Box_add_faixa";
import { Header } from "../../components/header/Header";
import { Loading } from "../../components/loading/Loading";
import { useEffect, useState } from "react";

const Container = styled.div`
    width: 100%;
`

const BoxDisk = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 25px;

`


export const AreaDisk = () => {

    const {id, name} = useParams()
    const [faixas, setFaixas] = useState <Faixa[]>()
    const [loading, setLoading] = useState(true)
    const {getFaixastoDisk} = getApiFaixas()
    

    useEffect(() => {
        const getApi = async () => {

            try{
                const result = await getFaixastoDisk(Number(id))
                setFaixas(result.data)
                
            }
            catch(err) {console.log(err)}
            finally {setLoading(false)}
            
        }

        getApi()
    },[])

    
    const deleteFaixa =  async(id : number) => {
        const {deleteFaixas} = getApiFaixas()
        try{
            await deleteFaixas(id)
            setFaixas(faixas => faixas?.filter(faixa => faixa.id !=id))
        }
        catch(err){
            alert("Não foi possível realizar a operação")
        }
        
    }


    return (
        <Container>
            <Header>
                <BoxAddMusic/>
            </Header>
            <BoxDisk>
                {!loading && <CardDisk name={name? name : ""}/>}
                {loading && <Loading/>}
                {faixas?.map(faixa => {
                    return (
                        <CardFaixa 
                            key={faixa.id}
                            name={faixa.name}
                            duration={faixa.duration.toString()}
                            disco_id={faixa.disco_id} 
                            id={faixa.id}
                            deleteFn={deleteFaixa}
                        />
                    )
                })}
                {!loading && !faixas && <p>Adicione alguma faixa ao disco</p> }
            </BoxDisk>  
        </Container>
    )
}