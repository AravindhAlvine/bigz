import { Status } from "./Status";

export interface UserRole {
    _id?: string;
    role_name: string;
    status?: Status;
    menu_access?: string;
}

export interface SaveMenuAccessRequest {
    menu_access: string;
}