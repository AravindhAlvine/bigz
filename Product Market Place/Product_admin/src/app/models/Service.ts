import { FilterList } from "./FilterList";

export interface Service {
    _id?: string,
    name: string;
    description: string;
    service_image?: {
        url: string;
        file_name: string;
    }
}

export interface ServiceFilter extends FilterList {}