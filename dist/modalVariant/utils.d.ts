import { SPIDButtonProps } from '../shared/types';
import { ModalState } from './types';
export declare function getDefinedClasses(klasses: (string | undefined)[]): string;
declare type classesProps = Pick<SPIDButtonProps, 'theme' | 'corners' | 'size' | 'fluid'>;
export declare function computeButtonClasses({ theme, corners, size, fluid }: classesProps): string[];
export declare function computeButtonTransitionClasses({ type }: ModalState): {
    wrapper: string[];
    icon: string[];
};
export declare function isVisible(modalState: ModalState): boolean;
export {};
