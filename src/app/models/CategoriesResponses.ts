import { SubCategories } from './SubCategories';
import { Categories } from './Categories';

export interface GetSubCategoryAndCategoryList {
    categories: Categories[],
    sub_categories: SubCategories[]
}

export interface getCategoriesWithSubcategoriesList extends Categories, SubCategories {
    vendors_count: number,
    is_sub_category?: boolean,
    created_at: Date
}