# epub viewer

## Packages
+ app [epub viewer](./app)
+ lib [epub-utils](./lib/epub-utils/)

## 推荐语
`.epub` 文件就是一堆 `.html`、`.css`、image 文件经过 zip 压缩而成的。
所以，用浏览器查看 epub 电子书有天然的优势。
这个 web app 就是释放浏览器读取 epub 的能力 （with n kb js code）：
1. 通过某种方式读取 epub 文件
2. 使用 [fflate](https://github.com/101arrowz/fflate) 解压缩 `.epub` => `.html` + `.css` + image
3. 用 iframe 展示上一步得到的 html
4. 使用 service worker 拦截 html 里依赖资源而产生的 http 请求
