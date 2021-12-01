import { SEO, SocialMedia, StoreInfo } from "./Settings";

export interface SaveGeneralSettingsRequest {
    store_info?: StoreInfo;
    seo?: SEO;
    social_links?: SocialMedia;
}