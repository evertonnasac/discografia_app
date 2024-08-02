import axios from "axios";
import dotenv from 'dotenv';


export const baseAPIi = axios.create({ baseURL: "http://127.0.0.1:8000/api" });


export const getApiDisk = () => {

    return {

        getAllDisks : async () => baseAPIi.get("/discos") ,
        getDiskToId :   async (param: number) => baseAPIi.get(`/discos/${param}`),
        getDisksName :  async (param : string) => baseAPIi.get(`/discos/search/${param}`),
        postDisk :  async () => baseAPIi.post(`/discos`),
        deleteDisk :  async (param : number) => baseAPIi.delete(`/discos/${param}`),
    }
        
}


export const getApiFaixas = () => {

    return {

        getAllFaixas :  async () => baseAPIi.get("/faixas"),
        getFaixastoDisk :  async (param: number) => baseAPIi.get(`/faixas/${param}`),
        getFaixasName :  async () => baseAPIi.get(`/faixas/search`),
        deleteFaixas :  async (param : number) => baseAPIi.get(`/faixas/${param}`),   
    }
}

