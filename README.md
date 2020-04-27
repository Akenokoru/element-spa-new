# element-spa-new

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## 目录结构

```bash
|--element-spa-new/
    |--docs/                  # 项目文档-基于vuepress
        |-- README.md         # 主页
        |-- intro.md          # 文档书写指南
        |-- xxx/              # xxx相关文档
            |-- README.md     # xxx文档主页
        |-- bbb/              # bbb相关文档
            |-- README.md     # bbb文档主页
            |-- page.md       # bbb文档之一
        ｜--.vuepress/
            |-- public/       # 静态文件目录
            |-- config.js      # vuepress config
    |--docs/                  # 项目vuepress
        |-- src/              # 主页
            |-- assets/       # 样式文件 资源等
            |-- components/   # 公用布局组件
            |-- i18n/         # 国际化
            |-- libs/         # validator filter
            |-- router/       # 路由配置
            |-- store/        # vuex配置
            |-- views/        # 各页面
            |-- App.vue       # 入口
            |-- main.js       
            |-- tests/        # unit test
            |-- .browserslistrc
            |-- .eslintrc.js
            |-- .gitignore
            |-- babel.config.js
            |-- package.lock.json
            |-- package.json
            |-- postcss.config.js
            |-- vue.config.js

```
