# AnalyticsQueryLanguage

This project is a proof of concept Angular application that uses Monaco editor to edit a "custom" defined language. It loads Monaco editor into a div with custom Monarch syntax highlighting, launches the MonacoEditor web worker and Aql web worker for syntax validation.

Inspired by [amazzalel-habib's work in React](https://medium.com/better-programming/create-a-custom-web-editor-using-typescript-react-antlr-and-monaco-editor-part-1-2f710c69c18c). [Github](https://github.com/amazzalel-habib/TodoLangEditor/tree/add-syntax-highlighter).

This project mostly overcomes the configuration hurldes of getting Monaco Editor running and talking to a language worker that uses an ANTLR4 defined language.

## Tech references

1. [Monaco Editor (VsCode)](https://microsoft.github.io/monaco-editor/)
   1. This repo uses [Monaco Editor Core](https://www.npmjs.com/package/monaco-editor-core) mostly because that's what the tutorial did, but also because the goal is to have an editor for one specific language embedded in a page, not a multi-purpose editor. Using the full monaco-editor would be fine too.
   1. [Monarch Language highlighting](https://microsoft.github.io/monaco-editor/monarch.html)
1. [Antlr4](https://www.antlr.org/)
   1. [Antlr4ts](https://github.com/tunnelvisionlabs/antlr4ts)
   1. [Atlr4 VsCode Extension](https://marketplace.visualstudio.com/items?itemName=mike-lischke.vscode-antlr4) Used for generating TypeScript because I took too long figuring out how to get Antlr4ts cli working.
1. [@angular-builders/custom-webpack](https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack) Used for customizing how Monaco Editor gets bundled.
1. Web Workers
   1. [Angular Generation](https://angular.io/guide/web-worker)
   1. [Worker Plugin for Webpack](https://github.com/GoogleChromeLabs/worker-plugin) Plugin used by angular to split worker bundles.
   1. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

## Important configuration

> These steps assume you generated an angular app using `ng new`.

**Goals**:

1. Get monaco styles to be bundled and loaded correctly.
2. Get Web Workers configured
3. Get Antlr VsCode extension configured

**Reason**: Monaco `require()`s its styles directly from css which the default angular builder does not handle well. By just `import`ing monaco with typescript and using the default angular build, monaco will load, but won't have any styling and will be quite messed up.

**Steps**

1.  Monaco bundling

    1. Install Packages
    1. `npm install monaco-editor-core`
    1. `npm install -D @angular-builders/custom-webpack@^10`

       > **IMPORTANT** At the time of writing, the commit upgrading `@angular-builders/custom-webpack` to Angular 11 has been [reverted](https://github.com/just-jeb/angular-builders/pull/878) and custom-webpack does **not** work with Angular 11.

    1. `npm install -D style-loader css-loader`

1.  [Configure angular to use custom-webpack](https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack#usage)
    1.  Configur primary build:
        ```json
          "projects": {
          ...
          "[project]": {
            ...
            "build": {
            "builder": "@angular-builders/custom-webpack:browser",
            "options": {
              "customWebpackConfig": {
                "path": "./custom-webpack.config.ts",
                "mergeStrategies": {
                  "externals": "replace"
                }
              },
        ```
    1.  Configre other targets to use primary build: find-replace `@angular-devkit/build-angular` for `@angular-builders/custom-webpack`
    1.  Create [`custom-webpack.config.ts`](./custom-webpack.config.ts) in repository root with contents in this one.
1.  Configure Web Workers
    1. Get Angular to configure web workers for us: `ng generate web-worker app`
       1. Creates `tsconfig.worker.json`
       1. Adds `"webWorkerTsConfig": "tsconfig.worker.json"` to `angular.json`
       1. Generates sample code that can be deleted but is useful when debugging things.
          1. Creates `src/app/app.worker.ts` (or something like it).
          1. Adds a snippet instantiating the web worker from `src/app/app.component.ts`
1.  Configure Antlr Extension
    1. Install [Atlr4 VsCode Extension](https://marketplace.visualstudio.com/items?itemName=mike-lischke.vscode-antlr4).
    1. Install ts runtime dependency: `npm install antlr4ts`
    1. Configure code generation
       1. In `.vscode/settings.json`
          ```json
          "antlr4.generation": {
            "mode": "external",
            "outputDir": ".antlr",
            "language": "Typescript",
            "visitors": true
          },
          ```
       1. Or figure out `antlr4ts-cli`.
    1. With whatever version of Typescript I have been using, the code that is generated isn't completely valid. So I add `// @ts-nocheck generated` to the top of the generated `.ts` files.
