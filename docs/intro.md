---
sidebarDepth: 2
---
# 文档书写指南

## 开始及查看
在项目根目录

```
npm run doc:dev
```
浏览器中打开`http://localhost:20001/`

## 文档目录结构

```bash
|--element-spa-new/
    |--doc/
        |-- README.md         # 主页
        |-- intro.md          # 文档书写指南
        |-- xxx/              # xxx相关文档
            |-- README.md     # xxx文档主页
        |-- bbb/           # bbb相关文档
            |-- README.md     # bbb文档主页
            |-- page.md       # bbb文档之一
        ｜--.vuepress/
            |-- public/       # 静态文件目录
            |-- config.js     # vuepress config
```

## 导航说明

在vuepress config里面的导航栏和侧边栏配置如下：

```javascript
sidebar: { // 侧边栏配置
  '/': ['/intro']
  '/xxx/': ['', 'page', 'XPage'],
  '/bbb/': ['']
},

nav: [{ // 导航栏配置
  text: '首页',
  link: '/'
}, {
  text: 'xxx Api',
  link: '/xxx/'
}, {
  text: 'bbb Api',
  link: '/bbb/'
}, {
  text: '文档书写指南',
  link: '/intro'
}]
```
::: warning 注意
在增加一个文档文件时，需要新增导航配置。
:::


### nav

`nav`是顶部导航，同时是顶级导航，导向一组文档的主页或一篇独立文档，配置时需要指定导航栏文字和链接。

当链接是普通markdown时，link为在doc根目录下md文件的名称，如本篇为`'/intro'`。

当链接是一组文档时，link为在doc根目录下文档目录的名称，如`'/xxx/'`。

### sidebar

由于使用了页面组，sidebar需要在每个项下配置数组形式的页面组。

其中，空字符串`''`代表每个目录下的`README.md`，其他代表各自的md文件的名称。

每个markdown中的h标签（即#->h1，##->h2等）可以被自动提取出来作为侧边栏内容，默认提取到h2，可以在目标markdown文件中配置提取深度：

```
---
sidebarDepth: 2
---
```

这个配置叫`YAML front matter`，有许多种配置项，详情见[vuepress文档](https://vuepress.vuejs.org/zh/guide/frontmatter.html)。**配置写在markdown的头部**。

`sidebarDepth: 2`代表提取到h3。

::: tip 提示
建议api文档中的api使用h3，并做提取，方便在侧边栏查找。
:::

## 开始书写文档

markdown语法请查看[markdown相关教程](http://www.markdown.cn/)，vuepress对markdown的扩展请查看[markdown拓展](https://vuepress.vuejs.org/zh/guide/markdown.html)。

文档的名称`h1`会自动提取为该页面的侧边栏名称。

### API文档

API文档应该包含且不限于如下项目：

* 对项目的介绍，包括安装方法和引入方法等
* API列表
* 事件列表

::: warning 注意
如果库提供了多个实例，或有其他依赖，需要单独列出。如engine提供了多个实例，应单独建立文件。
:::

### API示例

请见[xxx.A](/xxx/A.html)
