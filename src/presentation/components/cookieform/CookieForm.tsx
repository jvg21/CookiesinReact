// import Cookies from 'js-cookie';
// import { useState } from 'react';

// type biscoito = {
//     name: string,
//     content: string,
//     expireTime: number,
//     lastInserted: string
// }

// export default function Form() {
//     const [bolacha, setBolacha] = useState<biscoito>({ name: '', content: '', expireTime: 0, lastInserted: '' })

//     function handleChange(e: any) {
//         setBolacha({ ...bolacha, [e.target.name]: [e.target.value] })
//     }

//     //tempo de teste do cookie 0.00002
//     function setCookie(e: any) {
//         e.preventDefault();
//         let x = Number(bolacha.expireTime)
//         console.log(typeof (x) + x);

//         Cookies.set(bolacha.name, bolacha.content, { expires: x })
//         bolacha.lastInserted = bolacha.name;
//         console.log(Cookies.get());

//     }

//     function removeCookie(name: string) {
//         Cookies.remove(name);
//         console.log(Cookies.get());
//         // window.location.reload();
//     }

//     let nome = Cookies.get('login');

//     return (
//         <div>
//             <h1>Teste cookie</h1>
//             {nome &&
//                 <p>O nome é {nome}</p>

//             }
//             <form onSubmit={setCookie}>

//                 <input type='text' name='name' id='name' onChange={handleChange} placeholder='nome do cookie' required />
//                 <input type='text' name='content' id='content' onChange={handleChange} placeholder='Informações do cookie' required />
//                 <input type='number' name='expireTime' id='expireTime' onChange={handleChange} placeholder='Dias para expirar' required />
//                 <button type='submit'>SetCookie</button>
//             </form>
//             <button type='button' onClick={() => removeCookie(bolacha.lastInserted)}>RemoveCookie</button>

//         </div>


//     )
// }