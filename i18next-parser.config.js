module.exports = {
  defaultNamespace: "common",
  lexers: {
    js: ["JsxLexer"], // we're writing jsx inside .js files
    default: ["JavascriptLexer"],
  },
  locales: ["de", "en"],
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  input: ["src/*.js"],
};
