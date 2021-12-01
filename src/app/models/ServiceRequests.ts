import { FileData } from "./FileData";

export interface CreateServiceRequest {
    name: string;
    description: string;
    service_image?: FileData;
}

export interface AssignServiceRequest {
    vendor: string;
    service: string;
    about?: string,
    price: string,
    duration: string,
}