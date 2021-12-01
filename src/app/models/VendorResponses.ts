import { FileData } from "./FileData";
import { Status } from "./Status";
export interface GetVendorsStoreNameListReponse {
    _id: string;
    salon_name: string;
    slug: string;
    logo: FileData;
}

export interface GetVendorListResponse extends GetVendorsStoreNameListReponse{
    logo: {
        url: string;
        file_name: string;
    };
    email: string;
    street_address2: string;
    city: string;
    state: string;
    country: string;
    phone_number: {
        internationalNumber: string;
    },
    full_name: string;
    created_at: string;
    formatted_address: string;
    status: Status
}