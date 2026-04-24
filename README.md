# HCO168

这个仓库现在已经整理成一个可直接部署到 GitHub Pages 的静态网站。

## 内容来源

页面结构和主要静态内容参照了 `http://home.hco168.com:168`：

- 主页
- 资源页
- 关于页
- 精品网页页

其中原站依赖服务端的功能，例如：

- 文件上传
- 账号系统
- IP 获取与直连跳转

都已调整为适合静态托管的说明性内容。

## GitHub Pages 发布

仓库内已包含：

- 根目录静态页面
- GitHub Pages Actions 工作流 `.github/workflows/pages.yml`
- `.nojekyll`

启用方式：

1. 将仓库推送到 GitHub。
2. 在仓库 `Settings -> Pages` 中选择 `GitHub Actions` 作为部署来源。
3. 推送到 `main` 或 `master` 后会自动部署。
