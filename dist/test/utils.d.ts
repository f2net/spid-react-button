import { ConfigurationGET, ConfigurationPOST, Types } from '../shared/types';
export declare const TIMEOUT_VALUE = 2500;
export declare const defaultURL = "/myLogin/idp={{idp}}";
export declare const configurations: [ConfigurationGET, ConfigurationPOST];
export declare const types: Types[];
export declare function muteConsoleWithCheck(fn: Function, messageToFilter?: string | RegExp): any;
export declare type TestHelper = {
    getMainButton: () => HTMLElement;
    openList: () => void;
    closeList: () => void;
    clickProvider: (provider: HTMLElement) => boolean;
    getEnabledProviders: () => HTMLElement[];
    getDisabledProviders: () => HTMLElement[];
    getProviders: () => HTMLElement[];
};
export declare function createHelper(type: Types, method: (ConfigurationGET | ConfigurationPOST)['method']): TestHelper;
