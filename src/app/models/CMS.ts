import { FileData } from "./FileData";

export interface CmsBlockItem {
    _id: string;
    name: string;
    profile?: FileData;
    logo?: FileData;
    slug: string;
    is_disabled: boolean;
  }

  export interface CmsBlockResponse {
    _id?: string;
    title: string;
    block_type: string
    items: Array<CmsBlockItem>;
  }

  export interface CmsBlockRequest {
    _id?: string;
    title: string;
    block_type: string
    items: Array<string>;
  }