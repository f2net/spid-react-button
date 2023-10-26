import type { Languages } from './types';
declare const translations: {
    readonly naviga_indietro: {
        readonly it: "Torna indietro";
        readonly en: "Go back";
        readonly de: "Gehen Sie zurück";
        readonly es: "Regresar";
        readonly fr: "Revenir";
    };
    readonly alt_logo_SPID: {
        readonly it: "Logo SPID";
        readonly en: "Logo SPID";
        readonly de: "Logo SPID";
        readonly es: "Logo SPID";
        readonly fr: "Logo SPID";
    };
    readonly scegli_provider_SPID: {
        readonly it: "Scegli il tuo provider SPID";
        readonly en: "Choose your SPID provider";
        readonly de: "Wähle Ihren SPIDProvider";
        readonly es: "Escoge tu proveedor SPID";
        readonly fr: "Choisissez votre fournisseur SPID";
    };
    readonly annulla_accesso: {
        readonly it: "Annulla";
        readonly en: "Cancel";
        readonly de: "Zurücknehmen";
        readonly es: "Cancelar";
        readonly fr: "Annuler";
    };
    readonly non_hai_SPID: {
        readonly it: "Non hai SPID?";
        readonly en: "Don't have SPID?";
        readonly de: "Haben Sie nicht SPID?";
        readonly es: "No tiene SPID?";
        readonly fr: "Vous ñ'avez pas de SPID?";
    };
    readonly cosa_SPID: {
        readonly it: "Cos'è SPID?";
        readonly en: "What is SPID?";
        readonly de: "Was ist SPID?";
        readonly es: "Qué es SPID?";
        readonly fr: "Qu’est-ce que SPID?";
    };
    readonly entra_con_SPID: {
        readonly it: "Entra con SPID";
        readonly en: "Sign in with SPID";
        readonly de: "Loggen Sie mit SPID";
        readonly es: "Ingresa con SPID";
        readonly fr: "Connectez-vous avec SPID";
    };
    readonly scopri_di_piu: {
        readonly it: "Scopri di più.";
        readonly en: "Learn more.";
        readonly de: "Finde mehr heraus.";
        readonly es: "Saber más";
        readonly fr: "En savoir plus.";
    };
    readonly accedi_con_idp: {
        readonly it: "Accedi a SPID con {0}";
        readonly en: "Access to SPID with {0}";
        readonly de: "Zugriff auf SPID mit {0}";
        readonly es: "Accede a SPID con {0}";
        readonly fr: "Accès à SPID avec {0}";
    };
    readonly idp_disabled: {
        readonly it: "Provider non attivo";
        readonly en: "Provider not enabled";
        readonly de: "Provider nicht aktiviert";
        readonly es: "Proveedor no disponible";
        readonly fr: "Fournisseur non activé";
    };
    readonly maggiori_info: {
        readonly it: "Maggiori info";
        readonly en: "More info";
        readonly de: "Mehr info";
        readonly es: "Más información";
        readonly fr: "Plus d’info";
    };
};
export declare type labelKeys = keyof typeof translations;
export declare type TranslateFn = (labelKey: labelKeys, placeholderValue?: string) => string;
export declare const getTranslationFn: (language: Languages) => TranslateFn;
/**
 * Returns the list of supported languages for the UI
 */
export declare const getSupportedLanguages: () => Languages[];
export {};
