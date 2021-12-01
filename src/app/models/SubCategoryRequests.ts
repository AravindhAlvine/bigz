import { UpdateCategory } from "./CategoryRequests";

export interface UpdateSubCategories extends UpdateCategory {
    category?: string;
}