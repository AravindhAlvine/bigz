import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GeneralResponse } from '../models/GeneralResponse';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Categories, CategoriesFilter } from '../models/Categories';
import { SubCategories } from '../models/SubCategories';
import { getCategoriesWithSubcategoriesList, GetSubCategoryAndCategoryList } from '../models/CategoriesResponses';
import { GenerateSlugRequest } from '../models/GenerateSlugRequest';
import { GenerateSlugResponse } from '../models/GenerateSlugResponse';
import { UpdateSubCategories } from '../models/SubCategoryRequests';
import { UpdateCategory } from '../models/CategoryRequests';
import { GetCategoryListResponse } from '../models/CategoryResponses';
import { UtilsService } from '../shared/services/utils.service';
import { TreeNode } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class ManageCateoriesService {

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService
  ) { }

  createCategory(body: Categories[]): Observable<GeneralResponse<Categories[]>> {
    return this.http.post<GeneralResponse<Categories[]>>(environment.categories.createCategory, body)
      .pipe(
        map(result => result)
      );
  }

  createSubCategories(body: SubCategories[]): Observable<GeneralResponse<SubCategories[]>> {
    return this.http.post<GeneralResponse<SubCategories[]>>(environment.subCategories.createSubCategories, body)
      .pipe(
        map(result => result)
      );
  }

  /**
   * 
   * @returns {
   * message: '',
   * data: {
   *    categories: [],
   *    sub_categories: []
   *  }
   * }
   */
  getSubcategoryAndCategoryList(): Observable<GeneralResponse<GetSubCategoryAndCategoryList>> {
    return this.http.get<GeneralResponse<GetSubCategoryAndCategoryList>>(environment.subCategories.getSubcategoryAndCategoryList)
      .pipe(
        map(result => result)
      );
  }

  updateCategoryById(id: string, body: UpdateCategory): Observable<GeneralResponse<Categories>> {
    return this.http.put<GeneralResponse<Categories>>(environment.categories.updateCategoryById.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }

  updateSubCategoryById(id: string, body: UpdateSubCategories): Observable<GeneralResponse<SubCategories>> {
    return this.http.put<GeneralResponse<SubCategories>>(environment.subCategories.updateSubCategoryById.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }

  /**
   * 
   * @returns {
   * message: '',
   * data: [
   *  {category object/sub category object}
   * ]
   * }
   */
  getCategoriesWithSubcategories(searchText: string, filter: CategoriesFilter): Observable<GeneralResponse<getCategoriesWithSubcategoriesList[]>> {
    const url = environment.categories.getCategoriesWithSubCategories;
    const apiUrl = searchText ? `${url}?search=${searchText}` : url;
    const params = this.utilsService.removeBlankItemsFromObject(filter);
    return this.http.get<GeneralResponse<getCategoriesWithSubcategoriesList[]>>(apiUrl, { params: params })
      .pipe(
        map(result => result)
      );
  }

  generateCategorySlug(body: GenerateSlugRequest): Observable<GeneralResponse<GenerateSlugResponse>> {
    return this.http.post<GeneralResponse<GenerateSlugResponse>>(environment.categories.generateSlug, body)
      .pipe(
        map(result => result)
      );
  }

  generateSubCategorySlug(body: GenerateSlugRequest): Observable<GeneralResponse<GenerateSlugResponse>> {
    return this.http.post<GeneralResponse<GenerateSlugResponse>>(environment.subCategories.generateSlug, body)
      .pipe(
        map(result => result)
      );
  }

  uploadCategoryAssets(body: FormData, categoryId: string): Observable<GeneralResponse<null>> {
    return this.http.post<GeneralResponse<null>>(environment.categories.uploadAssets.replace(':id', categoryId), body, { headers: { skip_content_type: "true" } })
      .pipe(
        map(result => result)
      );
  }

  uploadSubCategoryAssets(body: FormData, subCategoryId: string): Observable<GeneralResponse<null>> {
    return this.http.post<GeneralResponse<null>>(environment.subCategories.uploadAssets.replace(':id', subCategoryId), body, { headers: { skip_content_type: "true" } })
      .pipe(
        map(result => result)
      );
  }

  getCategoryList(): Observable<GeneralResponse<GetCategoryListResponse[]>> {
    return this.http.get<GeneralResponse<GetCategoryListResponse[]>>(environment.categories.getCategoryList)
      .pipe(
        map(result => result)
      );
  }

  // mutli select dropdown dummy data
  getFiles() {
    return this.http
      .get<any>('../../assets/data/multiDropdown.json')
      .toPromise()
      .then((res) => <TreeNode[]>res.data);
  }


}
