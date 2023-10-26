/// <reference types="react" />
import type { TranslateFn } from '../shared/i18n';
import type { RegisteredProviderRecord, SPIDButtonProps } from '../shared/types';
declare type ProvidersDropdownProps = Required<Pick<SPIDButtonProps, 'url' | 'supported' | 'mapping' | 'size' | 'configuration' | 'protocol' | 'extraProviders'>> & Pick<SPIDButtonProps, 'onProviderClicked'> & {
    i18n: TranslateFn;
    providers: RegisteredProviderRecord[];
};
export declare const ProvidersDropdown: ({ configuration, supported, url, mapping, i18n, size, protocol, providers, extraProviders, onProviderClicked }: ProvidersDropdownProps) => JSX.Element;
export {};
