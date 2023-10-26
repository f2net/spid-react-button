function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ArubaSVGUrl = _interopDefault(require('./spid-idp-arubaid~fDCrPIuZ.svg'));
var InfocertSVGUrl = _interopDefault(require('./spid-idp-infocertid~KtAWHroq.svg'));
var PosteSVGUrl = _interopDefault(require('./spid-idp-posteid~FrEkbJeb.svg'));
var SielteSVGUrl = _interopDefault(require('./spid-idp-sielteid~NGcEfmPl.svg'));
var TimSVGUrl = _interopDefault(require('./spid-idp-timid~TYZrrAeh.svg'));
var NamirialSVGUrl = _interopDefault(require('./spid-idp-namirialid~bnBhXfMj.svg'));
var RegisterItSVGUrl = _interopDefault(require('./spid-idp-spiditalia~twlNutJN.svg'));
var LepidaSVGUrl = _interopDefault(require('./spid-idp-lepidaid~dCTXtmlW.svg'));
var TeamSystemSVGUrl = _interopDefault(require('./spid-idp-teamsystemid~AAkvCNst.svg'));
var EtnaSVGUrl = _interopDefault(require('./spid-idp-etnaid~bHPXwvSi.svg'));
var InfoCamereSVGUrl = _interopDefault(require('./spid-idp-infocamereid~hnYLsCKm.svg'));
var IntesiSVGUrl = _interopDefault(require('./spid-idp-intesigroupspid~KyGOmJcP.svg'));
var React = require('react');
var React__default = _interopDefault(React);
var SpidIcoCircleLbUrl = _interopDefault(require('./spid-ico-circle-lb~LegQefra.svg'));
var SpidIcoCircleBbUrl = _interopDefault(require('./spid-ico-circle-bb~bpKzRdOW.svg'));
var reactFocusOn = require('react-focus-on');
var SpidLogoAnimationBlackUrl = _interopDefault(require('./spid-logo-animation-black~ZYbHBrkh.svg'));
var SpidLogoUrl = _interopDefault(require('./spid-logo~zJjEzXFQ.svg'));
var CloseSvgUrl = _interopDefault(require('./close~hKFpNpUn.svg'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Infocert = "https://identity.infocert.it";
var Sielte = "https://identity.sieltecloud.it";
var providersList = {
	"Aruba ID": "https://loginspid.aruba.it",
	"Etna ID": "https://id.eht.eu",
	"Info Camere ID": "https://loginspid.infocamere.it",
	Infocert: Infocert,
	"Intesi ID": "https://spid.intesigroup.com",
	"Lepida ID": "https://id.lepida.it/idp/shibboleth",
	"Namirial ID": "https://idp.namirialtsp.com/idp",
	"Poste ID": "https://posteid.poste.it",
	"Register ID": "https://spid.register.it",
	Sielte: Sielte,
	"Team System ID": "https://spid.teamsystem.com/idp",
	"Tim ID": "https://login.id.tim.it/affwebservices/public/saml2sso"
};

var images = [ArubaSVGUrl, EtnaSVGUrl, InfoCamereSVGUrl, InfocertSVGUrl, IntesiSVGUrl, LepidaSVGUrl, NamirialSVGUrl, PosteSVGUrl, RegisterItSVGUrl, SielteSVGUrl, TeamSystemSVGUrl, TimSVGUrl];
var providers = Object.entries(providersList).sort(function (_ref, _ref2) {
  var idA = _ref[0];
  var idB = _ref2[0];
  return idA.localeCompare(idB);
}).map(function (_ref3, i) {
  var entityName = _ref3[0],
      entityID = _ref3[1];
  return {
    protocols: ['SAML'],
    entityName: entityName,
    entityID: entityID,
    active: true,
    logo: images[i]
  };
});

var SPID_URL = 'https://www.spid.gov.it';
function mergeProviders(providers, extraProviders, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      sorted = _ref.sorted;

  var mergedList = [].concat(providers.map(function (idp) {
    return _extends({}, idp, {
      active: !extraProviders.length
    });
  }), extraProviders.map(function (idp) {
    var _idp$protocols;

    return _extends({}, idp, {
      protocols: (_idp$protocols = idp.protocols) != null ? _idp$protocols : ['SAML'],
      active: true
    });
  }));

  if (!sorted) {
    return mergedList;
  }

  return mergedList.sort(function (idpA, idpB) {
    return idpA.entityName.localeCompare(idpB.entityName);
  });
}
function validateURL(url) {
  if (url == null || url.indexOf('{{idp}}') < 0) {
    throw Error('URL parameter must contain the "{{idp}} string');
  }
}
function isGetMethod(configuration) {
  return configuration.method.toUpperCase() === 'GET';
}

function dirtyCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

var providersCopy = dirtyCopy(providers);
function getShuffledProviders() {
  return providersCopy.sort(function () {
    return Math.random() - 0.5;
  });
}
function isProviderActive(idp, supported, protocol, extraProviders) {
  var isExtraProviders = extraProviders.some(function (_ref2) {
    var entityID = _ref2.entityID;
    return entityID === idp.entityID;
  });
  return supported.indexOf(idp.entityID) > -1 && idp.protocols.indexOf(protocol) > -1 && (extraProviders.length === 0 || isExtraProviders) && idp.active;
}

var translations = {
  naviga_indietro: {
    it: 'Torna indietro',
    en: 'Go back',
    de: 'Gehen Sie zurück',
    es: 'Regresar',
    fr: 'Revenir'
  },
  alt_logo_SPID: {
    it: 'Logo SPID',
    en: 'Logo SPID',
    de: 'Logo SPID',
    es: 'Logo SPID',
    fr: 'Logo SPID'
  },
  scegli_provider_SPID: {
    it: 'Scegli il tuo provider SPID',
    en: 'Choose your SPID provider',
    de: 'Wähle Ihren SPIDProvider',
    es: 'Escoge tu proveedor SPID',
    fr: 'Choisissez votre fournisseur SPID'
  },
  annulla_accesso: {
    it: 'Annulla',
    en: 'Cancel',
    de: 'Zurücknehmen',
    es: 'Cancelar',
    fr: 'Annuler'
  },
  non_hai_SPID: {
    it: 'Non hai SPID?',
    en: "Don't have SPID?",
    de: 'Haben Sie nicht SPID?',
    es: 'No tiene SPID?',
    fr: "Vous ñ'avez pas de SPID?"
  },
  cosa_SPID: {
    it: "Cos'è SPID?",
    en: 'What is SPID?',
    de: 'Was ist SPID?',
    es: 'Qué es SPID?',
    fr: 'Qu’est-ce que SPID?'
  },
  entra_con_SPID: {
    it: 'Entra con SPID',
    en: 'Sign in with SPID',
    de: 'Loggen Sie mit SPID',
    es: 'Ingresa con SPID',
    fr: 'Connectez-vous avec SPID'
  },
  scopri_di_piu: {
    it: 'Scopri di più.',
    en: 'Learn more.',
    de: 'Finde mehr heraus.',
    es: 'Saber más',
    fr: 'En savoir plus.'
  },
  accedi_con_idp: {
    it: 'Accedi a SPID con {0}',
    en: 'Access to SPID with {0}',
    de: 'Zugriff auf SPID mit {0}',
    es: 'Accede a SPID con {0}',
    fr: 'Accès à SPID avec {0}'
  },
  idp_disabled: {
    it: 'Provider non attivo',
    en: 'Provider not enabled',
    de: 'Provider nicht aktiviert',
    es: 'Proveedor no disponible',
    fr: 'Fournisseur non activé'
  },
  maggiori_info: {
    it: 'Maggiori info',
    en: 'More info',
    de: 'Mehr info',
    es: 'Más información',
    fr: 'Plus d’info'
  }
};
var placeholderRegex = /\{\d}/;
var currentLang = 'it';
var getTranslationFn = function getTranslationFn(language) {
  currentLang = language;
  return function (labelKey, placeholderValue) {
    var text = translations[labelKey] && translations[labelKey][currentLang];

    if (!text) {
      throw Error("labelKey " + labelKey + " non presente per la lingua selezionata " + currentLang);
    }

    if (placeholderValue != null) {
      return text.replace(placeholderRegex, placeholderValue);
    }

    return text;
  };
};
var getSupportedLanguages = function getSupportedLanguages() {
  return Object.keys(Object.values(translations)[0]);
};

var DEFAULT_TRANSITION_TIME = 2000;
var BUTTON_DELAY_TIME = 1.1;
var DELAY_STEP = 0.1;
var possibleStates = {
  INIT: {
    type: 'init'
  },
  ENTERING: {
    type: 'entering'
  },
  ENTERED: {
    type: 'entered'
  },
  EXITING: {
    type: 'exiting'
  },
  EXITED: {
    type: 'exited'
  }
};
var panelAnimClass = 'spid-button-panel-anim';
var logoAnimationOutClass = 'spid-button-logo-animation-out';
var emptyClass = '';
var buttonIconAnimationClass = 'spid-button-icon-animation';
var sizeMapping = {
  sm: 'small',
  md: 'medium',
  l: 'large'
};

var styles = {"spid-enter-container":"_cCdZZ","spid-idp-list":"_3Kl4y","spid-button-idp":"_LKckz","spid-button-idp-button":"_3Tob-","spid-button-logo":"_1lKvK","spid-button-close-button":"_2-fJt","spid-button":"_2QnKd","spid-cancel-access-button":"_1OUxg","spid-button-navigable":"_2y2KE","spid-non-hai-spid":"_3fX0d","spid-enter":"_1PpRy","spid-button-panel":"_14gd1","spid-button-header":"_1JIME","spid-button-panel-back":"_5CMZw","spid-button-panel-content":"_1MYq8","spid-enter-title-page":"_3CTDc","spid-button-panel-content-center":"_1f8Pp","spid-button-icon":"_2izcf","spid-button-little-man-icon":"_3-XVX","spid-button-text":"_2UEmQ","spid-button-size-small":"_3Otew","spid-button-size-medium":"_1e5UZ","spid-button-size-large":"_2y16B","spid-button-fluid":"_2ry0A","spid-button-col":"_2rEB8","xs12":"_2QCzb","spid-enter-title-container":"_vG92d","spid-button-action-button-container":"_2Mtb6","spid-button-action-button":"_2w-jv","spid-button-visibile":"_vYqK3","spid-button-positive":"_3VqKK","spid-button-negative":"_z74_-","spid-button-rounded":"_2dbjY","spid-button-sharp":"_2LEdl","spid-foot-btn":"_1RZht","spid-button-panel-anim":"_3DmkR","anim-panel-out":"_1g5r_","spid-button-fade-out-left":"_1AcG2","spid-button-logo-left-fade-out":"_U96wZ","spid-button-fade-out-right":"_4bJkX","spid-button-close-right-fade-out":"_rMjnb","spid-button-fade-out-bottom":"_30A8N","spid-button-title-fade-out":"_13pae","anim-panel-in":"_362tI","spid-button-fade-in-left":"_1oOqI","spid-button-logo-left-fade-in":"_35Xw6","spid-button-fade-in-right":"_28gE_","spid-button-close-right-fade-in":"_2fvIS","spid-button-fade-in-bottom":"_38Hat","spid-button-title-fade-in":"_19ue9","spid-button-idp-fade-in":"_1Fbhp","spid-button-anim-idp-fade-in":"_1dYFC","spid-button-idp-fade-out":"_3y9Gq","spid-button-anim-idp-fade-out":"_QIMMS","spid-button-transition":"_-zRgJ","fadeOutEnterBtn":"_2k2ra","spid-button-reverse-enter-transition":"_2ptp7","fadeInEnterBtn":"_1fN5V","spid-show-little-man":"_26ZNK","spid-button-icon-animation":"_2hUXa","spid-button-icon-smaller-logo":"_19xJD","in":"_Tfm-p","spid-button-icon-bigger-logo":"_2ExQV","spid-button-logo-animation-out":"_Kb49i","spid-hide-little-man":"_j62fh","anim-base-in":"_3PUzY","anim-base-out":"_18fzj","anim-icon-in":"_Gnu-k","anim-icon-out":"_2Ellr","hide-on-end":"_2h0xR"};

var extraStyles = {"spid-button-image-fix":"_2U-YE"};

function getDefinedClasses(klasses) {
  return klasses.map(function (klass) {
    return klass && (styles[klass] || extraStyles[klass]) || emptyClass;
  }).join(' ');
}
function computeButtonClasses(_ref) {
  var theme = _ref.theme,
      corners = _ref.corners,
      size = _ref.size,
      fluid = _ref.fluid;

  if (process.env.NODE_ENV === 'production') {
    if (size === 'xl') {
      console.log('Size "xl" is not supported by SPID React Button with Modal variant');
    }
  }

  return [theme, corners, size ? "size-" + (sizeMapping[size] || 'large') : null, fluid ? 'fluid' : null].map(function (type) {
    return type != null ? "spid-button-" + type : '';
  }).filter(Boolean);
}
var emptyClasses = [];
function computeButtonTransitionClasses(_ref2) {
  var type = _ref2.type;
  var inClass = 'in';

  switch (type) {
    case possibleStates.ENTERING.type:
      return {
        wrapper: ['spid-button-transition'],
        icon: [buttonIconAnimationClass, inClass]
      };

    case possibleStates.ENTERED.type:
      return {
        wrapper: emptyClasses,
        icon: [buttonIconAnimationClass, inClass]
      };

    case possibleStates.EXITING.type:
      return {
        wrapper: ['spid-button-reverse-enter-transition'],
        icon: [buttonIconAnimationClass]
      };

    case possibleStates.EXITED.type:
      return {
        wrapper: emptyClasses,
        icon: [buttonIconAnimationClass]
      };

    case possibleStates.INIT.type:
      return {
        wrapper: emptyClasses,
        icon: emptyClasses
      };
  }
}
function isVisible(modalState) {
  return modalState.type.includes('enter');
}

var styles$1 = {"srOnly":"_3o5cV"};

var SharedProviderButton = function SharedProviderButton(_ref) {
  var idp = _ref.idp,
      configuration = _ref.configuration,
      url = _ref.url,
      isActive = _ref.isActive,
      mapping = _ref.mapping,
      i18n = _ref.i18n,
      onProviderClicked = _ref.onProviderClicked,
      className = _ref.className,
      type = _ref.type,
      firstFocus = _ref.firstFocus;
  var idpRef = React.useRef(null);
  var entityID = idp.entityID in mapping ? mapping[idp.entityID] : idp.entityID;
  var actionURL = url.replace('{{idp}}', encodeURIComponent(entityID));
  var linkTitle = isActive ? i18n('accedi_con_idp', idp.entityName) : i18n('idp_disabled');
  var loginURL = isActive ? actionURL : undefined;
  React.useEffect(function () {
    if (firstFocus && idpRef.current) {
      idpRef.current.focus();
    }
  }, [idpRef]);

  if (isGetMethod(configuration)) {
    return React__default.createElement("a", {
      ref: function ref(el) {
        return idpRef.current = el;
      },
      title: linkTitle,
      href: loginURL,
      disabled: !isActive,
      className: type === 'modal' ? '' : className,
      onClick: function onClick(e) {
        return onProviderClicked && onProviderClicked(idp, loginURL, e);
      },
      role: 'link',
      id: entityID
    }, React__default.createElement(ProviderButtonContent, {
      idp: idp,
      title: linkTitle,
      type: type
    }));
  }

  return React__default.createElement("form", {
    name: 'spid_idp_access',
    action: actionURL,
    method: 'POST'
  }, React__default.createElement("button", {
    ref: function ref(el) {
      return idpRef.current = el;
    },
    className: className,
    id: entityID,
    name: linkTitle,
    title: linkTitle,
    type: 'submit',
    onClick: function onClick(e) {
      if (!isActive) {
        e.preventDefault();
      }

      return onProviderClicked && onProviderClicked(idp, loginURL, e);
    },
    disabled: !isActive
  }, React__default.createElement(ProviderButtonContent, {
    idp: idp,
    title: linkTitle,
    type: type
  })), React__default.createElement("input", {
    type: 'hidden',
    name: configuration.fieldName,
    value: entityID
  }), Object.entries(configuration.extraFields || {}).map(function (_ref2) {
    var inputName = _ref2[0],
        inputValue = _ref2[1];
    return React__default.createElement("input", {
      key: inputName,
      type: 'hidden',
      name: inputName,
      value: inputValue
    });
  }));
};

var ProviderButtonContent = function ProviderButtonContent(_ref3) {
  var idp = _ref3.idp,
      title = _ref3.title,
      type = _ref3.type;

  if (idp.logo == null) {
    return React__default.createElement("span", null, idp.entityName);
  }

  return React__default.createElement("span", null, React__default.createElement("span", {
    className: styles$1.srOnly
  }, title), React__default.createElement("img", {
    src: idp.logo,
    alt: idp.entityName,
    title: idp.entityName,
    style: type === 'modal' ? {
      maxWidth: '90%'
    } : {}
  }));
};

var ButtonImage = function ButtonImage(_ref) {
  var url = _ref.url,
      altText = _ref.altText;
  return React__default.createElement("img", {
    "aria-hidden": 'true',
    src: url,
    alt: altText,
    style: {
      "float": 'left'
    }
  });
};

function getModalClasses(_ref2) {
  var type = _ref2.type;
  var fadeInLeftClass = 'spid-button-fade-in-left';

  switch (type) {
    case possibleStates.ENTERING.type:
      return {
        panel: panelAnimClass,
        buttonLogo: fadeInLeftClass,
        buttonClose: fadeInLeftClass
      };

    case possibleStates.EXITING.type:
      return {
        panel: panelAnimClass,
        buttonManIcon: logoAnimationOutClass
      };

    case possibleStates.ENTERED.type:
    case possibleStates.EXITED.type:
    case possibleStates.INIT.type:
      {
        return {};
      }
  }
}

var ProvidersModal = function ProvidersModal(_ref3) {
  var i18n = _ref3.i18n,
      mapping = _ref3.mapping,
      visibility = _ref3.visibility,
      _ref3$extraProviders = _ref3.extraProviders,
      extraProviders = _ref3$extraProviders === void 0 ? [] : _ref3$extraProviders,
      supported = _ref3.supported,
      providers = _ref3.providers,
      protocol = _ref3.protocol,
      url = _ref3.url,
      closeModal = _ref3.closeModal,
      configuration = _ref3.configuration,
      onProviderClicked = _ref3.onProviderClicked;

  var _getModalClasses = getModalClasses(visibility),
      panelClasses = _getModalClasses.panel,
      buttonCloseClasses = _getModalClasses.buttonClose,
      buttonLogoClasses = _getModalClasses.buttonLogo,
      buttonManIconClasses = _getModalClasses.buttonManIcon;

  return React__default.createElement(reactFocusOn.FocusOn, {
    onClickOutside: closeModal,
    onEscapeKey: closeModal,
    enabled: isVisible(visibility)
  }, React__default.createElement("section", {
    className: getDefinedClasses(['spid-enter-container']),
    hidden: !isVisible(visibility),
    "aria-modal": 'true'
  }, React__default.createElement("div", {
    className: getDefinedClasses(['spid-enter'])
  }, React__default.createElement("section", {
    className: getDefinedClasses(['spid-button-panel', 'spid-button-panel-select', panelClasses]),
    "aria-label": i18n('scegli_provider_SPID'),
    tabIndex: 0
  }, React__default.createElement("header", {
    className: getDefinedClasses(['spid-button-header'])
  }, React__default.createElement("div", {
    className: getDefinedClasses(['spid-button-panel-back'])
  }, React__default.createElement("div", {
    className: getDefinedClasses(['spid-button-logo', buttonLogoClasses])
  }, React__default.createElement(ButtonImage, {
    url: SpidLogoUrl,
    altText: i18n('alt_logo_SPID')
  })), React__default.createElement("div", {
    className: getDefinedClasses(['spid-button-close-button', 'spid-button-fade-out-right', buttonCloseClasses])
  }, React__default.createElement("button", {
    tabIndex: 0,
    className: getDefinedClasses(['spid-button-panel-close-button', 'spid-button-navigable']),
    "aria-label": i18n('naviga_indietro'),
    onClick: closeModal
  }, React__default.createElement(ButtonImage, {
    url: CloseSvgUrl,
    altText: i18n('naviga_indietro')
  }))))), React__default.createElement("div", {
    className: getDefinedClasses(['spid-button-panel-content'])
  }, React__default.createElement("img", {
    className: getDefinedClasses(['spid-button-little-man-icon', buttonManIconClasses]),
    src: SpidLogoAnimationBlackUrl,
    alt: i18n('entra_con_SPID')
  }), React__default.createElement("div", {
    className: getDefinedClasses(['spid-button-panel-content-center'])
  }, React__default.createElement("h1", {
    className: getDefinedClasses(['spid-enter-title-page', 'spid-button-fade-in-bottom', 'spid-button-fade-out-bottom'])
  }, i18n('scegli_provider_SPID')), React__default.createElement("div", {
    className: getDefinedClasses(['spid-idp-list'])
  }, providers.map(function (idp, i) {
    var isActive = isProviderActive(idp, supported, protocol, extraProviders);

    var _ref4 = visibility.type === possibleStates.ENTERING.type ? {
      classNames: 'spid-button-idp-fade-in',
      style: {
        animationDelay: BUTTON_DELAY_TIME + DELAY_STEP * (i + 1) + "s"
      }
    } : {
      classNames: emptyClass
    },
        classNames = _ref4.classNames,
        style = _ref4.style;

    return React__default.createElement("span", {
      key: idp.entityID,
      className: getDefinedClasses(['spid-button-idp', classNames]),
      style: style
    }, React__default.createElement(SharedProviderButton, {
      idp: idp,
      mapping: mapping,
      url: url,
      isActive: isActive,
      i18n: i18n,
      configuration: configuration,
      onProviderClicked: onProviderClicked,
      className: getDefinedClasses(['spid-button-idp-button']),
      type: 'modal',
      firstFocus: i === 0
    }));
  })), React__default.createElement("div", {
    className: getDefinedClasses(['spid-non-hai-spid'])
  }, i18n('non_hai_SPID'), ' ', React__default.createElement("a", {
    href: SPID_URL + '/richiedi-spid',
    target: '_blank noreferrer'
  }, i18n('scopri_di_piu')))), React__default.createElement("div", {
    className: getDefinedClasses(['spid-foot-btn'])
  }, React__default.createElement("button", {
    className: getDefinedClasses(['spid-cancel-access-button']),
    onClick: closeModal
  }, i18n('annulla_accesso'))))))));
};

var providersList$1 = getShuffledProviders();

var LoginButton = function LoginButton(_ref) {
  var i18n = _ref.i18n,
      theme = _ref.theme,
      corners = _ref.corners,
      fluid = _ref.fluid,
      size = _ref.size,
      toggleModal = _ref.toggleModal,
      modalVisibility = _ref.modalVisibility;
  var customStylingClasses = computeButtonClasses({
    theme: theme,
    corners: corners,
    size: size,
    fluid: fluid
  });

  var _computeButtonTransit = computeButtonTransitionClasses(modalVisibility),
      wrapperTransitionClasses = _computeButtonTransit.wrapper,
      iconButtonClasses = _computeButtonTransit.icon;

  var buttonImageUrl = theme === 'negative' ? SpidIcoCircleLbUrl : SpidIcoCircleBbUrl;
  return React__default.createElement("button", {
    className: getDefinedClasses(['spid-button'].concat(customStylingClasses, wrapperTransitionClasses)),
    onClick: function onClick() {
      return toggleModal(true);
    }
  }, React__default.createElement("span", {
    "aria-hidden": !isVisible(modalVisibility),
    className: getDefinedClasses(['spid-button-icon'].concat(iconButtonClasses))
  }, React__default.createElement("img", {
    src: buttonImageUrl,
    alt: 'Login logo',
    className: getDefinedClasses(['spid-button-image-fix'])
  })), React__default.createElement("span", {
    className: getDefinedClasses(['spid-button-text'])
  }, i18n('entra_con_SPID')));
};

var SPIDReactButton = function SPIDReactButton(_ref2) {
  var _ref2$lang = _ref2.lang,
      lang = _ref2$lang === void 0 ? 'it' : _ref2$lang,
      _ref2$extraProviders = _ref2.extraProviders,
      extraProviders = _ref2$extraProviders === void 0 ? [] : _ref2$extraProviders,
      _ref2$corners = _ref2.corners,
      corners = _ref2$corners === void 0 ? 'rounded' : _ref2$corners,
      _ref2$fluid = _ref2.fluid,
      fluid = _ref2$fluid === void 0 ? true : _ref2$fluid,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'md' : _ref2$size,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'positive' : _ref2$theme,
      _ref2$configuration = _ref2.configuration,
      configuration = _ref2$configuration === void 0 ? {
    method: 'GET'
  } : _ref2$configuration,
      _ref2$mapping = _ref2.mapping,
      mapping = _ref2$mapping === void 0 ? {} : _ref2$mapping,
      _ref2$protocol = _ref2.protocol,
      protocol = _ref2$protocol === void 0 ? 'SAML' : _ref2$protocol,
      url = _ref2.url,
      _ref2$sorted = _ref2.sorted,
      sorted = _ref2$sorted === void 0 ? false : _ref2$sorted,
      _ref2$supported = _ref2.supported,
      supported = _ref2$supported === void 0 ? providersList$1.map(function (_ref3) {
    var entityID = _ref3.entityID;
    return entityID;
  }) : _ref2$supported,
      onProvidersShown = _ref2.onProvidersShown,
      onProvidersHidden = _ref2.onProvidersHidden,
      onProviderClicked = _ref2.onProviderClicked;

  var _useState = React.useState(possibleStates.INIT),
      state = _useState[0],
      setState = _useState[1];

  React.useEffect(function () {
    if (state.type === possibleStates.ENTERING.type) {
      if (onProvidersShown) {
        onProvidersShown();
      }
    }

    if (state.type === possibleStates.EXITING.type) {
      if (onProvidersHidden) {
        onProvidersHidden();
      }
    }
  }, [state]);
  React.useEffect(function () {
    var timer;

    if (state.type === possibleStates.ENTERING.type) {
      timer = setTimeout(function () {
        return setState(possibleStates.ENTERED);
      }, DEFAULT_TRANSITION_TIME);
    }

    if (state.type === possibleStates.EXITING.type) {
      timer = setTimeout(function () {
        return setState(possibleStates.EXITED);
      }, DEFAULT_TRANSITION_TIME);
    }

    return function () {
      if (timer != null) {
        clearTimeout(timer);
      }
    };
  }, [state]);
  validateURL(url);
  var translateFn = getTranslationFn(lang);
  var moreLoginProps = {
    theme: theme,
    corners: corners,
    fluid: fluid,
    size: size
  };
  var moreModalProps = {
    extraProviders: extraProviders,
    configuration: configuration,
    url: url,
    mapping: mapping,
    protocol: protocol,
    supported: supported,
    onProviderClicked: onProviderClicked
  };
  var mergedProviders = mergeProviders(providersList$1, extraProviders, {
    sorted: sorted
  });
  return React__default.createElement("div", {
    "aria-live": 'polite'
  }, React__default.createElement(ProvidersModal, Object.assign({
    visibility: state,
    i18n: translateFn,
    providers: mergedProviders,
    closeModal: function closeModal() {
      return setState(possibleStates.EXITING);
    }
  }, moreModalProps)), React__default.createElement(LoginButton, Object.assign({
    modalVisibility: state,
    i18n: translateFn,
    toggleModal: function toggleModal(open) {
      return setState(open ? possibleStates.ENTERING : possibleStates.EXITING);
    }
  }, moreLoginProps)));
};

var styles$2 = {"container":"_3fM8l","button":"_3KoyM","buttonIcon":"_1N2Gm","buttonText":"_3Y6Uy","theme":"_3nnX2","themeNegative":"_34hSf","block":"_2YBG4","small":"_1nnOC","medium":"_fufY9","large":"_1t2ay","extraLarge":"_2RDg8","idpButton":"_2MOel","idpButtonMenu":"_2ZNoV","idpButtonPanel":"_2fv_g","idpButtonSmall":"_2Xqdi","idpButtonMedium":"_oYtNc","idpButtonLarge":"__96uF","idpButtonExtraLarge":"_3x_V1","idpButtonTip":"_26Zsw","idpButtonTipAnchorRight":"_2NcMo","idpButtonScroll":"_1xsHh","idpLogo":"_1l0mt","topMenuSpace10":"__SNdl","topMenuSpace20":"_3PWn6","topMenuLine":"_1A_0H","supportLink":"_5Fo33","disabled":"_2EZDG"};

var sizeMapping$1 = {
  sm: 'small',
  md: 'medium',
  l: 'large',
  xl: 'extraLarge'
};

var getButtonSizeClass = function getButtonSizeClass(size) {
  return sizeMapping$1[size];
};
var getIdpButtonSizeClass = function getIdpButtonSizeClass(size) {
  var currentSize = sizeMapping$1[size];
  return 'idpButton' + currentSize[0].toUpperCase() + currentSize.slice(1);
};

var ProvidersDropdown = function ProvidersDropdown(_ref) {
  var configuration = _ref.configuration,
      supported = _ref.supported,
      url = _ref.url,
      mapping = _ref.mapping,
      i18n = _ref.i18n,
      size = _ref.size,
      protocol = _ref.protocol,
      providers = _ref.providers,
      extraProviders = _ref.extraProviders,
      onProviderClicked = _ref.onProviderClicked;
  return React__default.createElement("div", {
    className: styles$2.idpButton + " " + styles$2.idpButtonTip + " " + styles$2[getIdpButtonSizeClass(size)],
    "aria-modal": 'true'
  }, React__default.createElement("ul", {
    className: styles$2.idpButtonMenu,
    "aria-label": i18n('scegli_provider_SPID')
  }, providers.map(function (idp, i) {
    var isActive = isProviderActive(idp, supported, protocol, extraProviders);
    var buttonClasses = styles$2.idpLogo + " " + (isActive ? '' : styles$2.disabled);
    return React__default.createElement("li", {
      "data-idp": idp.entityName,
      key: idp.entityName
    }, React__default.createElement(SharedProviderButton, {
      idp: idp,
      url: url,
      isActive: isActive,
      mapping: mapping,
      i18n: i18n,
      configuration: configuration,
      onProviderClicked: onProviderClicked,
      className: buttonClasses,
      type: 'dropdown',
      firstFocus: i === 0
    }));
  }), React__default.createElement("li", {
    className: styles$2.supportLink
  }, React__default.createElement("a", {
    href: SPID_URL,
    target: '_blank noreferrer'
  }, i18n('maggiori_info'))), React__default.createElement("li", {
    className: styles$2.supportLink
  }, React__default.createElement("a", {
    href: SPID_URL + '/#registrati',
    target: '_blank noreferrer'
  }, i18n('non_hai_SPID')))));
};

var shuffledProviders = getShuffledProviders();
var SPIDReactButton$1 = function SPIDReactButton(_ref) {
  var url = _ref.url,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? 'it' : _ref$lang,
      _ref$supported = _ref.supported,
      supported = _ref$supported === void 0 ? shuffledProviders.map(function (_ref2) {
    var entityID = _ref2.entityID;
    return entityID;
  }) : _ref$supported,
      _ref$mapping = _ref.mapping,
      mapping = _ref$mapping === void 0 ? {} : _ref$mapping,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      _ref$configuration = _ref.configuration,
      configuration = _ref$configuration === void 0 ? {
    method: 'GET'
  } : _ref$configuration,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'positive' : _ref$theme,
      _ref$protocol = _ref.protocol,
      protocol = _ref$protocol === void 0 ? 'SAML' : _ref$protocol,
      _ref$sorted = _ref.sorted,
      sorted = _ref$sorted === void 0 ? false : _ref$sorted,
      _ref$extraProviders = _ref.extraProviders,
      extraProviders = _ref$extraProviders === void 0 ? [] : _ref$extraProviders,
      onProviderClicked = _ref.onProviderClicked,
      onProvidersHidden = _ref.onProvidersHidden,
      onProvidersShown = _ref.onProvidersShown;

  var _useState = React.useState(undefined),
      openDropdown = _useState[0],
      toggleDropdown = _useState[1];

  var i18n = getTranslationFn(lang);
  React.useEffect(function () {
    if (openDropdown && onProvidersShown) {
      onProvidersShown();
    }

    if (openDropdown === false && onProvidersHidden) {
      onProvidersHidden();
    }
  }, [openDropdown]);
  validateURL(url);
  var mergedProviders = mergeProviders(shuffledProviders, extraProviders, {
    sorted: sorted
  });
  var buttonImageUrl = theme === 'negative' ? SpidIcoCircleLbUrl : SpidIcoCircleBbUrl;
  return React__default.createElement(reactFocusOn.FocusOn, {
    onClickOutside: function onClickOutside() {
      return toggleDropdown(false);
    },
    onEscapeKey: function onEscapeKey() {
      return toggleDropdown(false);
    },
    scrollLock: false,
    enabled: openDropdown
  }, React__default.createElement("div", {
    className: styles$2.container
  }, React__default.createElement("a", {
    href: '#',
    className: styles$2.button + " " + styles$2[getButtonSizeClass(size)] + " " + (theme === 'positive' ? styles$2.theme : styles$2.themeNegative),
    "aria-haspopup": 'true',
    "aria-expanded": openDropdown,
    onClick: function onClick() {
      return toggleDropdown(!openDropdown);
    }
  }, React__default.createElement("span", {
    className: styles$2.buttonIcon
  }, React__default.createElement("img", {
    src: buttonImageUrl,
    alt: 'Login logo'
  })), React__default.createElement("span", {
    className: styles$2.buttonText
  }, i18n('entra_con_SPID'))), openDropdown && React__default.createElement(ProvidersDropdown, {
    supported: supported,
    url: url,
    mapping: mapping,
    i18n: i18n,
    size: size,
    configuration: configuration,
    protocol: protocol,
    providers: mergedProviders,
    extraProviders: extraProviders,
    onProviderClicked: onProviderClicked
  })));
};

var SPIDReactButton$2 = function SPIDReactButton$2(props) {
  if (!props.type || props.type === 'modal') {
    return React__default.createElement(SPIDReactButton, Object.assign({}, props));
  }

  return React__default.createElement(SPIDReactButton$1, Object.assign({}, props));
};

exports.SPIDReactButton = SPIDReactButton$2;
exports.SPIDReactButtonDropdown = SPIDReactButton$1;
exports.SPIDReactButtonModal = SPIDReactButton;
exports.getShuffledProviders = getShuffledProviders;
exports.getSupportedLanguages = getSupportedLanguages;
exports.providers = providersCopy;
//# sourceMappingURL=index.js.map
