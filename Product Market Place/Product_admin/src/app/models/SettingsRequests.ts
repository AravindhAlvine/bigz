import { SEO, SocialMedia, StoreInfo, TaxSettings } from "./Settings";

export interface SaveGeneralSettingsRequest {
    store_info?: StoreInfo;
    seo?: SEO;
    social_links?: SocialMedia;
    email_settings?: any;
    tax_settings?: TaxSettings;
}