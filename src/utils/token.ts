//本地token存储及读取
export const SET_TOKEN = (dataName:string,msg:string) =>{
    localStorage.setItem(dataName,msg)
}

export const GET_TOKEN = (dataName:string) =>{
    return localStorage.getItem(dataName)
}