export interface User{
    id: string;
    name: string;
    lastname:string;
    rol: Roles;
    active: string;
}

export enum Roles{
ADMIN,
EMPLOYEE,
CLIENT
}