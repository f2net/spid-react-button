/// <reference types="react" />
import type { SPIDButtonProps } from '../shared/types';
/**
 * The specific component button with the modal.
 * Use this component when you want to minimize the footprint in your project.
 * It accepts the same props as the main component. The `type` prop is ignored in this case.
 *
 * @param props
 */
export declare const SPIDReactButton: ({ lang, extraProviders, corners, fluid, size, theme, configuration, mapping, protocol, url, sorted, supported, onProvidersShown, onProvidersHidden, onProviderClicked }: SPIDButtonProps) => JSX.Element;
