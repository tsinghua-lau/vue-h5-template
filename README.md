

🚀 基于@vue/CLI3构建的移动端h5项目模板。

## 说明
项目涉及@vue/CLI3构建、移动端h5开发、axios封装、通用化组件等。

### 特性

- 基于`@vue/cli3`
- CSS 预编译语言：[less](http://lesscss.org/)，全局样式初始化
- ajax封装，借助Axios库实现http请求
- vue-router封装；懒加载、拦截
- 页面平滑切换
- 通用化组件
- 移动端适配
- 可视化分析工具
- 项目结构拆分 等...




## 构建命令
### 克隆项目
```
git clone git@github.com:tsinghua-lau/vue-h5-template.git
```

### 初始化依赖配置
```
yarn install
```

### 开发环境 启动运行
```
yarn run serve
```

### 生产环境 打包构建
```
yarn run build

yarn build --report // 打包分析
```

### 自动化测试
```
yarn run test
```

### Lint检查并修复
```
yarn run lint
```

### 配置参考
See [CLI配置参考](https://cli.vuejs.org/zh/config/).
