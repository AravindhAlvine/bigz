export interface GetCategoryListResponse extends ListCommonFields {
    sub_categories: ListCommonFields[];
}
interface ListCommonFields {
    _id: string;
    name: string;
}