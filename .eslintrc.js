const INLINE_ELEMENTS = [  'a',  'abbr',  'audio',  'b',  'bdi',  'bdo',  'canvas',  'cite',  'code',
  'data',  'del',  'dfn',  'em',  'i',  'iframe',  'ins',  'kbd',  'label',  'map',  'mark',  'noscript',
  'object',  'output',  'picture',  'q',  'ruby',  's',  'samp',  'small',  'span',  'strong',  'sub',
  'sup',  'svg',  'time',  'u',  'var',  'video']

module.exports = {
  'env': [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/airbnb',
    'node'
  ],

  'extends': [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-essential'
  ],

  'plugins': [
    'vue'
  ],

  'rules': {
  },

  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  // ignorePatterns: ["**/*.scss", "**/*.graphql", "**/*.svg", "**/*.md", "**/*.gql"],

  rules: {
    'no-console': 'warn',
    'no-prototype-builtins': 'off',
    'no-async-promise-executor': 'off',
    'no-debugger': 'off',
    indent: ['error', 2],
    'no-extra-semi':'error',
    semi:['error','never'],
    quotes:['error', 'single'],
    curly:'error',
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict'  }],
    'block-spacing': 'error',
    'space-infix-ops': ['error', {int32Hint: false}],
    'space-before-blocks':['error'],
    'keyword-spacing':['error'],
    'brace-style':['error','1tbs', { allowSingleLine: true }],
    'arrow-spacing':['error'],
    'require-atomic-updates': 'off',
    'no-mixed-spaces-and-tabs': 'warn',

    'vue/no-arrow-functions-in-watch': 'error', // запретить использование стрелочных функций для определения наблюдателя
    'vue/no-async-in-computed-properties': 'error', // запретить асинхронные действия в вычисляемых свойствах
    'vue/no-dupe-keys': 'error',  // Запретить дублирование имен полей
    'vue/no-dupe-v-else-if': 'error', // Запретить повторяющиеся условия в v-if/v-else-if
    'vue/no-duplicate-attributes': 'error', // Запретить дублирование атрибутов
    'vue/no-mutating-props': 'warn', // Куча таких проблем по коду. Запретить мутацию компонентных свойств
    'vue/no-parsing-error': 'error', // Запретить ошибки синтаксического анализа в <template>
    'vue/no-reserved-keys': 'error', // Запретить перезапись зарезервированных ключей
    'vue/no-shared-component-data': 'warn', // Заставить свойство данных компонента быть функцией
    'vue/no-side-effects-in-computed-properties': 'warn', // Запретить побочные эффекты в вычисленных свойствах
    'vue/no-template-key': 'ignore', // Key атрибут запрещен в <template>
    'vue/no-textarea-mustache': 'warn',
    'vue/no-unused-components': 'warn', // Запретить регистрацию компонентов, которые не используются внутри шаблонов
    'vue/no-unused-vars': ['error', { // Запретить неиспользуемые определения переменных директив v-for или атрибутов области видимости
      'ignorePattern': '^_'
    }],
    'vue/no-use-v-if-with-v-for': ['error', { // Запретить использование v-if для того же элемента, что и v-for
      'allowUsingIterationVar': true // можно использователь для проверки переменной из v-for
    }],
    'vue/require-component-is': 'error', // Требуют v-bind:is от <component>элементов
    'vue/require-prop-type-constructor': 'error', // Требовать, чтобы тип параметра был конструктором
    'vue/require-v-for-key': 'warn',// Требовать v-bind:key с v-forдирективами
    'vue/require-valid-default-prop': 'warn', // Обеспечить, чтобы значения по умолчанию для реквизита были действительными
    'vue/return-in-computed-property': 'warn', // Обеспечить, чтобы оператор возврата присутствовал в вычисляемом свойстве
    'vue/use-v-on-exact': 'warn', // Принудительно использовать exact модификатор на v-on

    'vue/valid-v-bind': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-show': 'error',

    /* Vue.js 3.x */
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'off',  // beforeDestroy->beforeMount/mounted   destroyed->beforeUnmount/unmounted
    'vue/no-deprecated-events-api': 'warn',
    'vue/no-deprecated-filter': 'warn',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-scope-attribute': 'off',  // Запретить устаревший slot-scope атрибут (в Vue.js 2.6.0+)
    'vue/require-slots-as-functions': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/valid-v-slot': 'off',
    "vue/v-slot-style": ["off", {
      "atComponent": "shorthand" ,
      "default": "shorthand" ,
      "named": "shorthand" ,
    }],
    // 'vue/v-slot-style': ['warn', {
    //   'atComponent': 'v-slot',
    //   'default': 'shorthand',
    //   'named': 'longform',
    // }],
    'vue/no-deprecated-v-bind-sync': 'off', // Много по коду. Запретить использование устаревшего .sync модификатора в v-bind директиве (в Vue.js 3.0.0+)
    'vue/no-deprecated-v-on-native-modifier': 'warn', // Запретить использование устаревших .enter модификаторов (в Vue.js 3.0.0+)
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    'vue/no-lifecycle-after-await': 'error',  // Запретить асинхронно зарегистрированные хуки жизненного цикла
    'vue/no-setup-props-destructure': 'warn', // Запретить деструктуризацию props переданного setup Потеряется реактивность
    'vue/no-v-for-template-key-on-child': 'off', // Запретить <template v-for> размещение на дочерних элементах. В Vue.js 3.x с поддержкой фрагментов <template v-for> ключ можно разместить на <template> теге.
    'vue/no-v-for-template-key': 'warn',
    'vue/no-template-key': 'warn',
    'vue/no-watch-after-await': 'error',  // Запретить асинхронную регистрацию watch
    'vue/require-toggle-inside-transition': 'warn',
    'vue/return-in-emits-validator': 'warn', // Обеспечить, чтобы оператор возврата присутствовал в валидаторе эмиссии
    'vue/valid-v-is': 'error',
    'vue/attribute-hyphenation': 'warn',  // myProp --> my-prop,
    'vue/custom-event-name-casing': 'off',  // 0 = off, 1 = warn, 2 = error  регистр событий
    'vue/html-closing-bracket-newline': ['warn', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/html-closing-bracket-spacing': ['warn', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'never'
    }], // Требовать или запрещать использование пробела перед закрывающими скобками тега
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['warn', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-quotes': ['warn', 'double', { 'avoidEscape': true }],
    'vue/html-self-closing': ['warn', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': {
        'max': 1,
      },      
      'multiline': {
        'max': 1,
      }
    }],
    'vue/multiline-html-element-content-newline': ['warn', {
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea', ...INLINE_ELEMENTS],
      'allowEmptyLines': false
    }],
    'vue/mustache-interpolation-spacing': ['warn', 'always'],
    'vue/no-multi-spaces': 'warn',  // Запретить использование нескольких пробелов
    'vue/no-spaces-around-equal-signs-in-attribute': 'warn',  // Запрещать пробелы вокруг знаков равенства в атрибуте
    'vue/no-template-shadow': 'warn',
    'vue/prop-name-casing': ['off', 'camelCase'],
    'vue/require-prop-types': 'warn', // Для переменных объявляем тип
    'vue/singleline-html-element-content-newline': ['warn', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea', ...INLINE_ELEMENTS]
    }],
    'vue/v-bind-style': ['warn', 'shorthand'],  // используем :foo вместо v-bind:foo
    'vue/v-on-style': ['warn', 'shorthand'],  // используем @click вместо v-on:click
    'vue/attributes-order': ['warn', {
      'order': [
        'CONDITIONALS',
        'LIST_RENDERING',
        'DEFINITION',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'CONTENT',
        'EVENTS',
      ],
      'alphabetical': true
    }],
    'vue/component-tags-order': ['error', {
      'order': [ [ 'template', 'script' ], 'style' ]
    }],
    'vue/no-lone-template': ['error', {
      'ignoreAccessible': false
    }],
    'vue/no-v-html': 'warn',
    'vue/this-in-template': 'warn',
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: 'babel-eslint'
  }
}
