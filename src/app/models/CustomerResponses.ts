
export interface GetCustomerListResponse {
    email: string;
    phone_number: {
        internationalNumber: string;
    },
    full_name: string;
    created_at: string;
    _id: string;
}