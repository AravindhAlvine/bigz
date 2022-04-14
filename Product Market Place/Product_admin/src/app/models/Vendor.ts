import { PhoneNumber } from "./PhoneNumber";
import { Location } from "./Location";
import { FileData } from "./FileData";
import { Status } from "./Status";
import { FilterList } from "./FilterList";
export interface Vendor {
    _id: string;
    email: string;
    password: string;
    salon_name: string;
    location: Location;
    categories: string[];
    sub_categories: string[];
    street_address1: string;
    street_address2: string;
    city:string;
    state:string;
    country:string;
    zip_code: string;
    formatted_address: string;
    phone_number: PhoneNumber;
    logo: FileData;
    banners: FileData[];
    work_gallery: FileData[];
    documents: FileData[];
    about_short: string;
    about_long: string;
    business_hours: BusinessHours[];
    social_links: SocialLinks[];
    slug: string;
    status: Status,
    approval_status: Status
}


export interface BusinessHours {
    display_name: string;
    day: string;
    is_open: boolean;
    open_at: string;
    close_at: string;
}

export interface SocialLinks {
    display_name: string;
    provider: string;
    id: string;
}

export interface VendorFilter extends FilterList {
    salon_name: string;
    email: string;
    category: string;
    status: string;
}

