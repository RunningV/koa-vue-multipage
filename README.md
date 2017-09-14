### koa-vue-web-app项目说明：
1. 使用vue做多页面开发，在`src/view/`目录创建每个独立的单页面，单页面内跳转用`vue-route`路由；
	在`config/project.js`文件的`project`变量中定义各项目的文件路径用于编译索引

	以`record`模块为例，`index.html`,`index.js`,`main.vue`是模块公共部分，每开展一个模块必须包含这三个文件，
	然后在`components`中定义每个单独的页面组件，并在`index.js`文件的`route`变量内定义路由的跳转规则。

	可以在`src/`子路径对应各目录定义全局组件和插件，并在`src/view`各单页中引入使用。
	当各单页面模块编写完毕，使用`npm run build`编译各单页面应用到`views/`,可以在`views/html`目录看到编译后的
	单页模块对应的html模版。

	然后在`routes/index.js`文件定义koa的路由用于定义各单页跳转的路由规则，定义完毕即可通过`npm run server`运行整个项目；
	如果一次性定义好全部的koa和vue路由，写好各单页模块后也可以用`npm run build:server`一次性编译运行
	在`localhost:3000/record`打开