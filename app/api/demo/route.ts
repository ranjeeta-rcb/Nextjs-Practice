

// ------ If we want to return a plain text then we go for this new Response METHOD. --------
// export function GET(){
//     return new Response("Hello world");
// }

import { error } from "node:console";


// ----------- If i want to reurn a json respnse then there is no need of using new because we r directly calling the method -----------

// export function GET(){
//     return Response.json({
//         name:"Ram",
//     })
// }

// ------ If we want to return a Error through a Request ------------- 

// export function GET(){
//     return Response.json({
//         error: "Unauthoriszed",

//     },
//     {
//         status: 401,
//     });
// }

//----------- If we want to browse the json format on the browser then  
// that is if we want to return a plain error in Nextjs------

export async function GET(req: Request){
    const {searchParams} =new URL(req.url);
    return Response.json({
        error: searchParams.get("id"),
    },
{
    status: 401,
}
);
}
