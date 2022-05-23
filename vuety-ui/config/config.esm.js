import { inject, reactive } from 'vue';

const defaultOptions = {
  zIndex: {
    modal: 1100,
  },
};

const VuetySymbol = Symbol();

function useVuety() {
  const vuety = inject(VuetySymbol);
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
      config: reactive(configOptions),
    };
    app.config.globalProperties.$vuety = Vuety;
    app.provide(VuetySymbol, Vuety);
  },
};

export { Vuety as default, useVuety };
