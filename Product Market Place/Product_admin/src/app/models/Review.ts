import { FileData } from "./FileData";
import { Status } from "./Status";

export interface GetReview {
    _id: string;
    status: Status;
    ratings: number;
    review: string;
    reviewee: {
        _id: string;
        salon_name: string;
    }
    reviewer: {
        _id: string;
       full_name: string;
    }
    created_at: Date;
    images: FileData;
}

export interface PostReview {
    status: Status;
    ratings: number;
    review: string;
    images: FileData;
}