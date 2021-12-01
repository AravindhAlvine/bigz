import { PhoneNumber } from "./PhoneNumber";
import { Status } from "./Status";
import { Location } from "./Location";

export interface Customer {
    _id?: string
    email: string;
    full_name: string;
    first_name: string;
    last_name: string;
    phone_number: PhoneNumber;
    street_address1: string;
    street_address2: string;
    city:string;
    state:string;
    country:string;
    formatted_address: string;
    zip_code: string;
    billing_address: BillingAddress[];
    status: Status,
    location: Location;
}

export interface BillingAddress {
    _id?: string;
    first_name: string;
    last_name: string;
    street_address1: string;
    street_address2: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
    phone_number: PhoneNumber;
    is_primary: boolean;
}