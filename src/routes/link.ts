export interface linkObject{
    name:string,
    url:string
}
export const links=[
    {
    "name"  : "LinkedIn profile",
    "url"   : "https://www.linkedin.com/in/wkhanh-le/"
    },
    {
        "name"  : "Github profile",
        "url"   : "https://github.com/winkhanh"
    },
    {
        "name"  : "Personal Website",
        "url"   : "https://winkhanh.github.io/"
    }
];

const linksRequestHandler = (request: Request): Response =>{
    const init = {
        headers: { 'content-type': 'application/json'}
    };
    const body = JSON.stringify(links);
    return new Response(body,init);
}

export default linksRequestHandler;