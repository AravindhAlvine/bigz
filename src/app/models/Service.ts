export interface Service {
    _id?: string,
    name: string;
    description: string;
    service_image?: {
        url: string;
        file_name: string;
    }
}