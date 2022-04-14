import { Status } from "./Status";

export interface UpdateCategory {
    name?: string;
    slug?: string;
    meta_title?: string;
    meta_description?: string;
    status?: Status;
    approval_status?: Status;
}