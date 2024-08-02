
export const getUrls = () => {

    return {
        pageAllDisks : () => "/discos",
        pageDiskId : (id : number, name: string) => `/disco/${id}/${name}`,
        pageAllFaixas : () => `/faixas`,  
    }
}

