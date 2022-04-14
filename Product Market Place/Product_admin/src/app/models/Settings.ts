import { FileData } from "./FileData";
import { PhoneNumber } from "./PhoneNumber";
import { Location } from './Location';

export interface GeneralSettings {
    store_info: StoreInfo;
    logos: LogosSettings;
    seo: SEO;
    social_links: SocialMedia;
}


export interface StoreInfo {
    _id?: string;
    store_name: string;
    owner: string;
    email: string;
    street_address1: string;
    street_address2: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
    phone_number: PhoneNumber;
    location: Location;
    formatted_address: string;
}

export interface SEO {
    _id?: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
}

export interface SocialMedia {
    _id?: string;
    facebook: string;
    twitter: string;
    instagram: string;
    pinterest: string;
    youtube: string;
}

export interface LogosSettings {
    _id?: string;
    store_logo: FileData;
    admin_logo: FileData;
    vendor_logo: FileData;
    email_template_logo: FileData;
    invoice_logo: FileData;
    store_icon: FileData;
}

export interface TaxSettings {
    display_price_with_tax: string;
    tax_zone_country: string;
    tax_zone_state: string;
    tax_class: string;
    tax_rate: string;
    tax_rate_description: string;
}