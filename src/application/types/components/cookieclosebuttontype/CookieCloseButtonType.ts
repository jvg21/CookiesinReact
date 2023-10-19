import { CookieThemeConfig } from "../../../model/cookiethemeconfig/CookieThemeConfig";

export type CookieCloseButtonType = {
    setActive: (value: React.SetStateAction<boolean>) => void;
    isActive: React.SetStateAction<boolean>;
    themeConfig: CookieThemeConfig;
}