// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  // dashboard: 'assets/json/dashboard.json',
  // baseUrl: 'http://localhost:8000/api/v1',
  baseUrl: 'https://api-bookingdemo.zielcommerce.in/api/v1',
  vendorStaticData: '/assets/data/hairStylist.json',
  auth: {
    adminSignin: '/auth/admin/signin'
  },
  customers: {
    getCustomerList: '/customers',
    createCustomer: '/customers',
    updateCustomerById: '/customers/:id',
    deleteCustomerById: '/customers/:id'
  },
  services: {
    createService: '/services',
    getServicesNameList: '/services/name',
    assignService: '/services/assign',
    getServiceList: '/services',
    updateServiceById: '/services/:id',
    uploadServiceImage: '/services/upload/image/:id',
    deleteServiceById: '/services/:id'
  },
  categories: {
    getCategoryList: '/categories',
    createCategory: '/categories',
    updateCategoryById: '/categories/:id',
    getCategoriesWithSubCategories: '/categories/subcategories',
    generateSlug: '/categories/slug',
    uploadAssets: '/categories/upload/image/:id'
  },
  subCategories: {
    createSubCategories: '/subcategories',
    getSubcategoryAndCategoryList: '/subcategories/categories',
    updateSubCategoryById: '/subcategories/:id',
    generateSlug: '/subcategories/slug',
    uploadAssets: '/subcategories/upload/image/:id'
  },
  vendors: {
    uploadAssets: '/vendors/upload/logo_banners_works/:id',
    createVendor: '/vendors',
    getVendorsStoreNameList: '/vendors/store_name',
    getVendorList: '/vendors',
    getVendorDetails: '/vendors/:id',
    updateVendorById: '/vendors/:id',
    deleteVendorById: '/vendors/:id',
    approveVendorById: '/vendors/approve/:id',
    generateSlug: '/vendors/slug'
  },
  settings: {
    saveGeneralSettings: '/settings/general/:id',
    uploadStoreAssets: '/settings/upload/logos/:id',
    getGeneralSettingDetails: '/settings/general'
  },
  dashboard: {
    getTotalCounts: '/admin/dashboard_total_counts'
  },
  users: {
    createUser: '/users',
    getUserList: '/users',
    getUserById: '/users/:id',
    updateUserById: '/users/:id',
    deleteUserById: '/users/:id',
    getMyMenu: '/users/access/menu'
  },
  userRoles: {
    getRoleList: '/user_role',
    createRole: '/user_role',
    updateRoledetailsById: '/user_role/:id',
    getRoleDetailsById: '/user_role/:id',
    deleteRoleById: '/user_role/:id'
  },
  reviews: {
    getReviewList: '/reviews',
    getReviewDetailsById: '/reviews/:id',
    updateReviewById: '/reviews/:id',
    deleteReviewById: '/reviews/:id'
  },
  bookings: {
    getBookingList: '/bookings',
    updateBookingById: '/bookings/:id'
  },
  cms: {
    savePage: '/pages/:id',
    createPage: '/pages',
    getPageList: '/pages',
    getPageDetailsById: '/pages/:id',
    deletePageDetailsById: '/pages/:id',
    uploadAssets: '/pages/upload/cms/:id',
    approvePageById: '/pages/approve/:id',
    getHomePageDetails: '/pages/home/details',
    getUploadBannerDetails: '/pages/upload/get_banner_details',
    deleteBannerById: '/pages/delete/:page_id/:banner_id',
    deletePageBlockById: '/pages/:page_id/:block_id',
    deletePageBlockItemById: '/pages/:page_id/:block_id/:item'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
