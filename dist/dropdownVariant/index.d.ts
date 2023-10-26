/// <reference types="react" />
import { SPIDButtonProps } from '../shared/types';
/**
 * The specific component button with the dropdown.
 * Use this component when you want to minimize the footprint in your project.
 * It accepts the same props as the main component. The `type` prop is ignored in this case.
 *
 * @param props
 */
export declare const SPIDReactButton: ({ url, lang, supported, mapping, size, configuration, theme, protocol, sorted, extraProviders, onProviderClicked, onProvidersHidden, onProvidersShown }: SPIDButtonProps) => JSX.Element;
