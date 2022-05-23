(function (exports, vue) {
  'use strict';

  const defaultOptions = {
    zIndex: {
      modal: 1100,
    },
  };

  const VuetySymbol = Symbol();

  function useVuety() {
    const vuety = vue.inject(VuetySymbol);
    if (!vuety) {
      throw new Error("Vuety is not installed!");
    }

    return vuety;
  }

  var Vuety = {
    install: (app, options) => {
      let configOptions = options
        ? { ...defaultOptions, ...options }
        : { ...defaultOptions };

      const Vuety = {
        config: vue.reactive(configOptions),
      };
      app.config.globalProperties.$vuety = Vuety;
      app.provide(VuetySymbol, Vuety);
    },
  };

  exports["default"] = Vuety;
  exports.useVuety = useVuety;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, vue);
