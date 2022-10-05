export interface User{
    id: string;
    email:string;
    name: string;
    lastname:string;
    rol: Roles;
    active: boolean;
}

export enum Roles{
ADMIN,
EMPLOYEE,
CLIENT
}
