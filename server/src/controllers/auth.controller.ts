import { Response , Request } from "express";

export const register= (res  : Response, req : Request) => {
    console.log('register endpoint');

};
export const login= (res : Response, req : Request) => {
    console.log('login endpoint');
};
export const logout= (res : Response, req : Request) => {
    console.log('logout endpoint');
};