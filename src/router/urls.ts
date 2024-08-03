
export const getUrls = () => {

    return {
        pageAllDisks : () => "/discos",
        pageDiskName : (name: string) => `/disco/${name}`,
        pageDiskId : (id : number, name: string) => `/disco/${id}/${name}`,
        pageAllFaixas : () => `/faixas`,  
    
    }
}

