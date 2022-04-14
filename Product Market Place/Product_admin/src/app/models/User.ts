import { PhoneNumber } from "./PhoneNumber";
import { Status } from "./Status";
import { UserRole } from "./UserRole";

export interface User {
    _id?: string;
    role: string | UserRole;
    user_name: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: PhoneNumber,
    status: Status
}