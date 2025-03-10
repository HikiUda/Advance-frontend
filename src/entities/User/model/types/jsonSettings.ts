import { Theme } from '@/shared/lib/theme';

export interface JsonSettings {
    theme?: Theme;
    isFirstVisit?: boolean;
    settingPageHasBeenOpen?: boolean;
}
