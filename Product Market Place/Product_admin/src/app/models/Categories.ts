import { FileData } from "./FileData";
import { FilterList } from "./FilterList";
import { Status } from "./Status";
export interface Categories {
    _id?: string;
    name: string;
    slug: string;
    meta_title: string;
    meta_description: string;
    status?: Status;
    description1: string;
    description2: string;
    approval_status?: Status;
    profile?: FileData
}

export interface CategoriesFilter extends FilterList {
}