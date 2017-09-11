module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'extends': [
    'airbnb'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'flowtype',
    'import'
  ],
  'rules': {
    'comma-dangle': [
      'error',
      'never'
    ],
    'global-require': [ 1 ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'max-len': [
      'error',
      {
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }
    ],

    // React rules
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [ '.js', '.jsx']
      }
    ],
    'react/require-default-props': [
      1
    ],
    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'react/require-default-props': [0],

    // JSX rules
    'jsx-quotes': [0],

    // JSX-a11y rules
    'jsx-a11y/href-no-hash': [0],

    // FlowType rules
    'flowtype/boolean-style': [
      2,
      'boolean'
    ],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [
      2,
      'never'
    ],
    'flowtype/generic-spacing': [
      2,
      'never'
    ],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': 1,
    'flowtype/object-type-delimiter': [
      2,
      'comma'
    ],
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': [
      1,
      'always',
      {
        'annotateUndefined': 'never',
        'excludeArrowFunctions': true
      }
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [
      2,
      'always'
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always'
    ],
    'flowtype/space-before-generic-bracket': [
      2,
      'never'
    ],
    'flowtype/space-before-type-colon': [
      2,
      'never'
    ],
    'flowtype/type-id-match': [
      2,
      '^([A-Z][a-z0-9]+)+Type$'
    ],
    'flowtype/union-intersection-spacing': [
      2,
      'always'
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,

    // Import rules
    'import/no-dynamic-require': 1

  },
  'settings': {
    'import/resolver': {
      'babel-module': {}
    }
  },
};
