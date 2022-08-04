export const flexCenter:string = "d-flex align-items-center justify-content-center"
export const flexEvenly:string = "d-flex align-items-center justify-content-evenly"
export const imgBg = (pic:any)=>{
    return {
        backgroundImage:`url(${pic})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    }
        
}