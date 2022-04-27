import { environment } from './environments/environment';
export class Configuration {

    public APIUrl1 = environment.baseUrl + '/api';
    public APIUrl = environment.baseUrl + '/api/v1';

    // categories
    public ListofMenu = this.APIUrl + "/categories";

    public ListofCategory = this.APIUrl + "/pages/home/details";

    public gerneralSetting = this.APIUrl + "/settings/general";

    public serviceName = this.APIUrl + "/services/name";


    // general - https://api-bookingdemo.zielcommerce.in/api/v1/settings/general;
    // categories  - https://api-bookingdemo.zielcommerce.in/api/v1/categories;
    // service name  - https://api-bookingdemo.zielcommerce.in/api/v1/services/name;

}