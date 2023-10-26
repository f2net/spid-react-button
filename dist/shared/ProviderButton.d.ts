/// <reference types="react" />
import type { TranslateFn } from './i18n';
import type { RegisteredProviderRecord, SPIDButtonProps } from './types';
declare type ProviderButtonProps = Required<Pick<SPIDButtonProps, 'url' | 'mapping' | 'configuration' | 'type'>> & Pick<SPIDButtonProps, 'onProviderClicked'> & {
    idp: RegisteredProviderRecord;
    isActive: boolean;
    i18n: TranslateFn;
    className: string;
    firstFocus: boolean;
};
export declare const SharedProviderButton: ({ idp, configuration, url, isActive, mapping, i18n, onProviderClicked, className, type, firstFocus }: ProviderButtonProps) => JSX.Element;
export {};
