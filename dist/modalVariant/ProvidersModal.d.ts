/// <reference types="react" />
import type { RegisteredProviderRecord, SPIDButtonProps } from '../shared/types';
import type { ModalState } from './types';
import { TranslateFn } from '../shared/i18n';
declare type ProvidersModalProps = Required<Pick<SPIDButtonProps, 'supported' | 'protocol' | 'url' | 'mapping' | 'configuration' | 'extraProviders'>> & Pick<SPIDButtonProps, 'onProviderClicked'> & {
    i18n: TranslateFn;
    visibility: ModalState;
    providers: RegisteredProviderRecord[];
    closeModal: () => void;
};
export declare const ProvidersModal: ({ i18n, mapping, visibility, extraProviders, supported, providers, protocol, url, closeModal, configuration, onProviderClicked }: ProvidersModalProps) => JSX.Element;
export {};
