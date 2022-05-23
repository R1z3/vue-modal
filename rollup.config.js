export default [
  {
    input: "./src/components/config/config.js",
    output: [
      {
        file: "vuety-modal/config/config.cjs.js",
        format: "cjs",
      },
      {
        file: "vuety-modal/config/config.esm.js",
        format: "esm",
      },
      {
        file: "vuety-modal/config/config.js",
        format: "iife",
      },
    ],
  },
  {
    input: "./src/components/utils/utils.js",
    output: [
      {
        file: "vuety-modal/utils/utils.cjs.js",
        format: "cjs",
      },
      {
        file: "vuety-modal/utils/utils.esm.js",
        format: "esm",
      },
      {
        file: "vuety-modal/utils/utils.js",
        format: "iife",
      },
    ],
  },
  {
    input: "./src/components/modal/modal.js",
    output: [
      {
        file: "vuety-modal/modal/modal.cjs.js",
        format: "cjs",
      },
      {
        file: "vuety-modal/modal/modal.esm.js",
        format: "esm",
      },
      {
        file: "vuety-modal/modal/modal.js",
        format: "iife",
      },
    ],
  },
];
