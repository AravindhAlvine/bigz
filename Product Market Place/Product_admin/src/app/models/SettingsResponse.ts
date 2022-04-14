import { LogosSettings } from "./Settings";
import { SaveGeneralSettingsRequest } from "./SettingsRequests";

export interface SaveGeneralSettingsResponse extends SaveGeneralSettingsRequest {
    logos: LogosSettings;
    _id?: string;
}