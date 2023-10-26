import { ProviderRecord } from '..';
import { ConfigurationGET, ConfigurationPOST, Protocols, RegisteredProviderRecord } from './types';
export declare const SPID_URL = "https://www.spid.gov.it";
export declare function mergeProviders(providers: Readonly<RegisteredProviderRecord>[], extraProviders: ProviderRecord[], { sorted }?: {
    sorted?: boolean;
}): RegisteredProviderRecord[];
export declare function validateURL(url: string | undefined): void;
export declare function isGetMethod(configuration: ConfigurationGET | ConfigurationPOST): configuration is ConfigurationGET;
/**
 * Returns a copy of the list of the official providers.
 * @private
 */
export declare const providersCopy: RegisteredProviderRecord[];
/**
 * Returns a copy of the list of the official providers, already shuffled
 */
export declare function getShuffledProviders(): RegisteredProviderRecord[];
export declare function isProviderActive(idp: RegisteredProviderRecord, supported: string[], protocol: Protocols, extraProviders: ProviderRecord[]): boolean;
