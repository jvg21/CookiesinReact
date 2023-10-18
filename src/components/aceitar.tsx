import { useState } from "react";
import {CookieModal} from './cookie/Cookie';

type biscoito = {
    name: string,
    content: string,
    expireTime: number,
    lastInserted: string
}


export default function Aceitar(){
    return(
        <>
            <div style={{height:'3000px'}}></div>
         <CookieModal state={true} />
        
        </>
    );
}