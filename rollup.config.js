export default [
  {
    input: "./src/components/config/config.js",
    output: [
      {
        file: "vuety-ui/config/config.cjs.js",
        format: "cjs",
      },
      {
        file: "vuety-ui/config/config.esm.js",
        format: "esm",
      },
      {
        file: "vuety-ui/config/config.js",
        format: "iife",
      },
    ],
  },
  {
    input: "./src/components/utils/utils.js",
    output: [
      {
        file: "vuety-ui/utils/utils.cjs.js",
        format: "cjs",
      },
      {
        file: "vuety-ui/utils/utils.esm.js",
        format: "esm",
      },
      {
        file: "vuety-ui/utils/utils.js",
        format: "iife",
      },
    ],
  },
  {
    input: "./src/components/modal/modal.js",
    output: [
      {
        file: "vuety-ui/modal/modal.cjs.js",
        format: "cjs",
      },
      {
        file: "vuety-ui/modal/modal.esm.js",
        format: "esm",
      },
      {
        file: "vuety-ui/modal/modal.js",
        format: "iife",
      },
    ],
  },
];
