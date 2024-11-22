# 麦思

## Packages
+ `app` [epub viewer](./app/epub-viewer/)
+ `lib` [epub-utils](./lib/epub-utils/)

## TODO
+ PWA 离线可用
+ resolve-path
+ 不用 iframe

## 推荐语
`.epub` 文件就是一堆 `.html`、`.css`、image 文件经过 zip 压缩而成的。
所以，用浏览器查看 epub 电子书有天然的优势。
这个 web app 就是释放浏览器读取 epub 的能力 （with n kb js code）：
1. 通过某种方式读取 epub 文件
2. 使用 [fflate](https://github.com/101arrowz/fflate) 解压缩 `.epub` => `.html` + `.css` + image
3. 用 iframe 展示上一步得到的 html
4. 使用 service worker 拦截 html 里依赖资源而产生的 http 请求

借助现代浏览器，以下特性都是白送的：
+ AI 朗读<sup>*</sup>
+ 阅读模式（自由控制排版、字体、亮暗模式）
+ 整页翻译
+ 打印
+ 播放 epub 里的视频
+ 整个 chrome 应用商店的功能……

> “AI 朗读” 真是太好用了，当我发现这个功能时，开心了半天，也许这就是程序员独有的乐趣。
> 没用过 “AI 朗读” 的朋友：（我用的是 Edge 浏览器）浏览器 地址栏右侧，有个字母 A，点它。
> 默认的语音是**不支持中文**的，你点过 “字母 A” 后，右上角会出现“语音选项”按钮，点它；然后在“选择语音”的下拉列表里，可以选中文；我用的是 “Microsoft Xiaoxiao Online (Natural) - Chinese (Mainland)”（这个语音读英语时，完全是正经的中式英语）。
> 可以自由调节语速。
