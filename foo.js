const obj = {
  config: {
    mode: "development",
    devtool: false,
    profile: false,
    resolve: {
      extensions: [
        ".ts",
        ".tsx",
        ".mjs",
        ".js"
      ],
      symlinks: true,
      modules: [
        "/Users/samh/dev/analyticsQueryLanguage",
        "node_modules"
      ],
      plugins: [
        {
          topLevelLoader: {}
        }
      ],
      mainFields: [
        "es2015",
        "browser",
        "module",
        "main"
      ],
      alias: {
        "zone.js/dist/zone": "zone.js/dist/zone-evergreen"
      }
    },
    resolveLoader: {
      symlinks: true,
      modules: [
        "node_modules",
        "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules"
      ],
      plugins: [
        {}
      ]
    },
    context: "/Users/samh/dev/analyticsQueryLanguage",
    entry: {
      main: [
        "/Users/samh/dev/analyticsQueryLanguage/src/main.ts"
      ],
      polyfills: [
        "/Users/samh/dev/analyticsQueryLanguage/src/polyfills.ts"
      ],
      styles: [
        "/Users/samh/dev/analyticsQueryLanguage/src/styles.scss"
      ],
      "editor.worker": "monaco-editor-core/esm/vs/editor/editor.worker.js"
    },
    output: {
      futureEmitAssets: true,
      path: "/Users/samh/dev/analyticsQueryLanguage/dist/analyticsQueryLanguage",
      filename: "[name].js",
      crossOriginLoading: false,
      globalObject: "self"
    },
    watch: true,
    watchOptions: {},
    performance: {
      hints: false
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: "/[\\\\/]node_modules[\\\\/](monaco-editor-core)[\\\\/]/",
          rules: [
            {
              test: "/\\.css$/",
              use: [
                "style-loader",
                "css-loader"
              ]
            },
            {
              test: "/\\.ttf$/",
              use: [
                "file-loader"
              ]
            }
          ]
        },
        {
          exclude: "/[\\\\/]node_modules[\\\\/](monaco-editor-core)[\\\\/]/",
          rules: [
            {
              test: "/\\.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/",
              loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/file-loader/dist/cjs.js",
              options: {
                name: "[name].[ext]",
                emitFile: true
              }
            },
            {
              test: "/[\\/\\\\]@angular[\\/\\\\]core[\\/\\\\].+\\.js$/",
              parser: {
                system: true
              }
            },
            {
              test: "/[\\/\\\\]rxjs[\\/\\\\]add[\\/\\\\].+\\.js$/",
              sideEffects: true
            },
            {
              test: "/\\.m?js$/",
              exclude: "/[\\/\\\\](?:core-js|\\@babel|tslib)[\\/\\\\]/,/(ngfactory|ngstyle)\\.js$/",
              use: []
            },
            {
              exclude: "/Users/samh/dev/analyticsQueryLanguage/src/styles.scss",
              test: "/\\.css$/",
              use: [
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/raw-loader/dist/cjs.js"
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/postcss-loader/src/index.js",
                  options: {
                    ident: "embedded",
                    sourceMap: "inline"
                  }
                }
              ]
            },
            {
              exclude: "/Users/samh/dev/analyticsQueryLanguage/src/styles.scss",
              test: "/\\.scss$|\\.sass$/",
              use: [
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/raw-loader/dist/cjs.js"
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/postcss-loader/src/index.js",
                  options: {
                    ident: "embedded",
                    sourceMap: "inline"
                  }
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/resolve-url-loader/index.js",
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/sass-loader/dist/cjs.js",
                  options: {
                    implementation: {
                      info: "dart-sass\t1.26.10\t(Sass Compiler)\t[Dart]\ndart2js\t2.8.4\t(Dart Compiler)\t[Dart]",
                      types: {},
                      NULL: {},
                      TRUE: {
                        value: true
                      },
                      FALSE: {
                        value: false
                      }
                    },
                    sourceMap: true,
                    sassOptions: {
                      precision: 8,
                      includePaths: [],
                      outputStyle: "expanded"
                    }
                  }
                }
              ]
            },
            {
              exclude: "/Users/samh/dev/analyticsQueryLanguage/src/styles.scss",
              test: "/\\.less$/",
              use: [
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/raw-loader/dist/cjs.js"
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/postcss-loader/src/index.js",
                  options: {
                    ident: "embedded",
                    sourceMap: "inline"
                  }
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/less-loader/dist/cjs.js",
                  options: {
                    sourceMap: true,
                    lessOptions: {
                      javascriptEnabled: true
                    }
                  }
                }
              ]
            },
            {
              exclude: "/Users/samh/dev/analyticsQueryLanguage/src/styles.scss",
              test: "/\\.styl$/",
              use: [
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/raw-loader/dist/cjs.js"
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/postcss-loader/src/index.js",
                  options: {
                    ident: "embedded",
                    sourceMap: "inline"
                  }
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/resolve-url-loader/index.js",
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/stylus-loader/index.js",
                  options: {
                    sourceMap: {
                      comment: false
                    },
                    paths: "skipped"
                  }
                }
              ]
            },
            {
              include: "/Users/samh/dev/analyticsQueryLanguage/src/styles.scss",
              test: "/\\.css$/",
              use: [
                "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/style-loader/dist/cjs.js",
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/cjs.js",
                  options: {
                    url: false,
                    sourceMap: true
                  }
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/postcss-loader/src/index.js",
                  options: {
                    ident: "embedded",
                    sourceMap: "inline"
                  }
                }
              ]
            },
            {
              include: "/Users/samh/dev/analyticsQueryLanguage/src/styles.scss",
              test: "/\\.scss$|\\.sass$/",
              use: [
                "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/style-loader/dist/cjs.js",
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/cjs.js",
                  options: {
                    url: false,
                    sourceMap: true
                  }
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/postcss-loader/src/index.js",
                  options: {
                    ident: "embedded",
                    sourceMap: "inline"
                  }
                },
                "skipped",
                "skipped"
              ]
            },
            {
              include: "/Users/samh/dev/analyticsQueryLanguage/src/styles.scss",
              test: "/\\.less$/",
              use: [
                "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/style-loader/dist/cjs.js",
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/cjs.js",
                  options: {
                    url: false,
                    sourceMap: true
                  }
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/postcss-loader/src/index.js",
                  options: {
                    ident: "embedded",
                    sourceMap: "inline"
                  }
                },
                "skipped"
              ]
            },
            {
              include: "/Users/samh/dev/analyticsQueryLanguage/src/styles.scss",
              test: "/\\.styl$/",
              use: [
                "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/style-loader/dist/cjs.js",
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/css-loader/dist/cjs.js",
                  options: {
                    url: false,
                    sourceMap: true
                  }
                },
                {
                  loader: "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/postcss-loader/src/index.js",
                  options: {
                    ident: "embedded",
                    sourceMap: "inline"
                  }
                },
                "skipped",
                "skipped"
              ]
            },
            {
              test: "/(?:\\.ngfactory\\.js|\\.ngstyle\\.js|\\.tsx?)$/",
              use: [
                "/Users/samh/dev/analyticsQueryLanguage/node_modules/@angular-builders/custom-webpack/node_modules/@ngtools/webpack/src/index.js"
              ]
            }
          ]
        }
      ]
    },
    optimization: {
      minimizer: [],
      moduleIds: "hashed",
      noEmitOnErrors: true,
      runtimeChunk: "single",
      splitChunks: {
        maxAsyncRequests: null,
        cacheGroups: {
          default: {
            chunks: "async",
            minChunks: 2,
            priority: 10
          },
          common: {
            name: "common",
            chunks: "async",
            minChunks: 2,
            enforce: true,
            priority: 5
          },
          vendors: false,
          defaultVendors: {
            name: "vendor",
            enforce: true,
            test: "/[\\\\/]node_modules[\\\\/]/"
          },
          monaco: {
            test: "/[\\\\/]node_modules[\\\\/](monaco-editor-core)[\\\\/]/",
            enforce: true,
            name: "monaco",
            chunks: "all"
          }
        }
      }
    },
    plugins: [
      {
        resourceRegExp: "/\\@angular(\\\\|\\/)core(\\\\|\\/)/"
      },
      {
        options: {
          verbose: false
        },
        modules: {}
      },
      {
        patterns: [
          {
            context: "/Users/samh/dev/analyticsQueryLanguage/src/",
            to: "",
            from: "favicon.ico",
            noErrorOnMissing: true,
            force: true,
            globOptions: {
              dot: true,
              ignore: [
                "/Users/samh/dev/analyticsQueryLanguage/src/.gitkeep",
                "/Users/samh/dev/analyticsQueryLanguage/src/**/.DS_Store",
                "/Users/samh/dev/analyticsQueryLanguage/src/**/Thumbs.db"
              ]
            }
          },
          {
            context: "/Users/samh/dev/analyticsQueryLanguage/src/assets/",
            to: "assets/",
            from: "**/*",
            noErrorOnMissing: true,
            force: true,
            globOptions: {
              dot: true,
              ignore: [
                "/Users/samh/dev/analyticsQueryLanguage/src/assets/.gitkeep",
                "/Users/samh/dev/analyticsQueryLanguage/src/assets/**/.DS_Store",
                "/Users/samh/dev/analyticsQueryLanguage/src/assets/**/Thumbs.db"
              ]
            }
          }
        ],
        options: {}
      },
      {
        profile: false,
        modulesCount: 500,
        showEntries: false,
        showModules: true,
        showActiveModules: true
      },
      {
        options: {
          exclude: "/([\\\\\\/]node_modules[\\\\\\/])|(ngfactory\\.js$)/",
          include: "/.*/",
          failOnError: false,
          allowAsyncCycles: false,
          onDetected: false,
          cwd: "/Users/samh/dev/analyticsQueryLanguage"
        }
      },
      {},
      {
        options: {
          budgets: []
        }
      },
      {
        options: {
          allowedDepedencies: []
        },
        shownWarnings: {},
        allowedDepedencies: {}
      },
      {
        sourceMapFilename: "[file].map",
        sourceMappingURLComment: "\n//# sourceMappingURL=[url]",
        moduleFilenameTemplate: "[resource-path]",
        fallbackModuleFilenameTemplate: "webpack://[namespace]/[resourcePath]?[hash]",
        namespace: "",
        options: {
          filename: "[file].map",
          include: "/js$/,/css$/",
          sourceRoot: "webpack:///",
          moduleFilenameTemplate: "[resource-path]"
        }
      },
      {
        budgets: []
      },
      {
        _projectRoot: "/Users/samh/dev/analyticsQueryLanguage",
        _analytics: {},
        _category: "dev-server",
        _isIvy: true,
        _built: false,
        _stats: {
          errors: [],
          numberOfNgOnInit: 0,
          numberOfComponents: 0,
          initialChunkSize: 0,
          totalChunkCount: 0,
          totalChunkSize: 0,
          lazyChunkCount: 0,
          lazyChunkSize: 0,
          assetCount: 0,
          assetSize: 0,
          polyfillSize: 0,
          cssSize: 0
        }
      },
      {
        _discoverLazyRoutes: true,
        _useFactories: false,
        _lazyRoutes: {},
        _entryModule: null,
        _transformers: [
          null
        ],
        _platformTransformers: null,
        _JitMode: false,
        _emitSkipped: true,
        _unusedFiles: {},
        _typeDeps: {},
        _changedFileExtensions: {},
        _nodeModulesRegExp: "/[\\\\\\/]node_modules[\\\\\\/]/",
        _firstRun: true,
        _donePromise: null,
        _normalizedLocale: null,
        _warnings: [],
        _errors: [],
        _forkTypeChecker: true,
        _typeCheckerProcess: null,
        _forkedTypeCheckerInitialized: false,
        _mainFields: [],
        _options: {
          mainPath: "/Users/samh/dev/analyticsQueryLanguage/src/main.ts",
          platform: 0,
          missingTranslation: "warning",
          sourceMap: true,
          additionalLazyModules: {},
          nameLazyFiles: true,
          forkTypeChecker: true,
          logger: {
            _isScalar: false,
            name: "webpackConfigOptions",
            parent: {
              _isScalar: false,
              name: "analyticsQueryLanguage:serve:",
              parent: null,
              _subject: {
                _isScalar: false,
                observers: [
                  {
                    closed: false,
                    _parentOrParents: null,
                    _subscriptions: [
                      {
                        closed: false,
                        _parentOrParents: "skipped",
                        _subscriptions: null,
                        subject: "skipped",
                        subscriber: "skipped"
                      }
                    ],
                    syncErrorValue: null,
                    syncErrorThrown: false,
                    syncErrorThrowable: true,
                    isStopped: false,
                    destination: {
                      closed: false,
                      _parentOrParents: null,
                      _subscriptions: null,
                      syncErrorValue: null,
                      syncErrorThrown: false,
                      syncErrorThrowable: false,
                      isStopped: false,
                      destination: {
                        closed: true
                      },
                      _parentSubscriber: "skipped",
                      _context: "skipped"
                    }
                  },
                  {
                    closed: false,
                    _parentOrParents: null,
                    _subscriptions: [
                      {
                        closed: false,
                        _parentOrParents: "skipped",
                        _subscriptions: null,
                        subject: "skipped",
                        subscriber: "skipped"
                      }
                    ],
                    syncErrorValue: null,
                    syncErrorThrown: false,
                    syncErrorThrowable: true,
                    isStopped: false,
                    destination: {
                      closed: false,
                      _parentOrParents: null,
                      _subscriptions: null,
                      syncErrorValue: null,
                      syncErrorThrown: false,
                      syncErrorThrowable: false,
                      isStopped: false,
                      destination: "skipped",
                      _parentSubscriber: "skipped",
                      _context: "skipped"
                    }
                  }
                ],
                closed: false,
                isStopped: false,
                hasError: false,
                thrownError: null
              },
              _obs: {
                _isScalar: false,
                source: "skipped"
              },
              _subscription: null,
              _metadata: {
                name: "analyticsQueryLanguage:serve:",
                path: []
              }
            },
            _subject: {
              _isScalar: false,
              observers: [
                {
                  closed: false,
                  _parentOrParents: null,
                  _subscriptions: [
                    {
                      closed: false,
                      _parentOrParents: "skipped",
                      _subscriptions: null,
                      subject: "skipped",
                      subscriber: "skipped"
                    }
                  ],
                  syncErrorValue: null,
                  syncErrorThrown: false,
                  syncErrorThrowable: true,
                  isStopped: false,
                  destination: {
                    closed: false,
                    _parentOrParents: null,
                    _subscriptions: null,
                    syncErrorValue: null,
                    syncErrorThrown: false,
                    syncErrorThrowable: false,
                    isStopped: false,
                    destination: "skipped",
                    _parentSubscriber: "skipped",
                    _context: "skipped"
                  }
                }
              ],
              closed: false,
              isStopped: false,
              hasError: false,
              thrownError: null
            },
            _obs: {
              _isScalar: false,
              source: "skipped"
            },
            _subscription: "skipped",
            _metadata: {
              name: "webpackConfigOptions",
              path: [
                "analyticsQueryLanguage:serve:"
              ]
            }
          },
          directTemplateLoading: true,
          tsConfigPath: "/Users/samh/dev/analyticsQueryLanguage/tsconfig.app.json",
          emitClassMetadata: true,
          emitNgModuleScope: true,
          compilerOptions: {},
          hostReplacementPaths: {}
        },
        _logger: "skipped",
        _tsConfigPath: "/Users/samh/dev/analyticsQueryLanguage/tsconfig.app.json",
        _rootNames: [
          "/Users/samh/dev/analyticsQueryLanguage/src/main.ts",
          "/Users/samh/dev/analyticsQueryLanguage/src/polyfills.ts"
        ],
        _compilerOptions: {
          baseUrl: "/Users/samh/dev/analyticsQueryLanguage",
          outDir: "",
          sourceMap: true,
          declaration: false,
          downlevelIteration: true,
          experimentalDecorators: true,
          moduleResolution: 2,
          importHelpers: true,
          target: 2,
          module: 6,
          lib: [
            "lib.es2018.d.ts",
            "lib.dom.d.ts"
          ],
          types: [],
          configFilePath: "/Users/samh/dev/analyticsQueryLanguage/tsconfig.app.json",
          enableIvy: true,
          genDir: "/Users/samh/dev/analyticsQueryLanguage",
          basePath: "/Users/samh/dev/analyticsQueryLanguage",
          suppressOutputPathCheck: true,
          inlineSources: true,
          inlineSourceMap: false,
          noEmitOnError: false,
          i18nInMissingTranslations: "warning",
          annotationsAs: "decorators"
        },
        _basePath: "/Users/samh/dev/analyticsQueryLanguage",
        _platform: 0
      }
    ],
    node: false,
    stats: {
      colors: true,
      hash: true,
      timings: true,
      chunks: true,
      chunkModules: false,
      children: false,
      modules: false,
      reasons: false,
      warnings: true,
      errors: true,
      assets: true,
      version: false,
      errorDetails: false,
      moduleTrace: false
    },
    devServer: {
      host: "localhost",
      port: 4200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      historyApiFallback: {
        index: "//index.html",
        disableDotRule: true,
        htmlAcceptHeaders: [
          "text/html",
          "application/xhtml+xml"
        ],
        rewrites: [
          {
            from: "/^(?!\\/)\\/.*/"
          }
        ]
      },
      stats: false,
      compress: false,
      watchOptions: {},
      https: false,
      overlay: {
        errors: true,
        warnings: false
      },
      inline: false,
      allowedHosts: [],
      disableHostCheck: false,
      publicPath: "/",
      hot: false,
      contentBase: false,
      logLevel: "silent"
    }
  },
  options: {
    customWebpackConfig: {
      path: "./custom-webpack.config.ts",
      mergeStrategies: {
        externals: "replace"
      }
    },
    outputPath: "dist/analyticsQueryLanguage",
    index: "src/index.html",
    main: "src/main.ts",
    polyfills: "src/polyfills.ts",
    tsConfig: "tsconfig.app.json",
    aot: true,
    assets: [
      "src/favicon.ico",
      "src/assets"
    ],
    styles: [
      "src/styles.scss"
    ],
    scripts: []
  }
}