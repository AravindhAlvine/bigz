import { Status } from "./Status";

export interface Booking {
    _id?: string;
    appointment_date: Date;
    time_slot: string;
    services: BookingService[] | string;
    customer: BookingCustomer | string;
    vendor: BookingVendor | string;
    amount: number;
    status?: Status;
    payment_status?: Status;
    created_at: Date;
}

interface BookingService {
    _id: string;
    name: string;
}

interface BookingCustomer {
    _id: string;
    full_name: string;
}


interface BookingVendor {
    _id: string;
    salon_name: string
}