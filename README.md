# 莫里i的塔罗札记

一个可以部署到 GitHub Pages 的纯静态塔罗学习网站：支持在线随机抽牌、录入现实中抽到的牌、正逆位、单张／三张／五张牌阵，以及 78 张牌的中文牌义百科。

正式域名：<https://tarot.deesuu.com/>。

采用 Astro + Vue 3 + TypeScript。Astro 在构建时生成页面，Vue 只负责占卜界面的浏览器交互；解读在本地完成，没有后端、数据库或在线 AI 服务。

## 用 Docker 在本地运行

只需要 Docker 和 Docker Compose，不需要在电脑上安装 Node.js 或 npm。以下命令都在项目目录执行：

```sh
cd /Users/moe/ZOO/tarot
docker compose up --build -d
```

打开 <http://localhost:4321/>。首次构建需要联网拉取 `node:22-alpine` 和安装锁定版本的依赖。Docker 多阶段构建先生成 `dist/`，再用一个轻量 Node HTTP 服务提供这些静态文件；运行容器不包含 Astro 开发服务器。

查看状态或日志：

```sh
docker compose ps
docker compose logs -f tarot
```

停止并移除本地容器：

```sh
docker compose down
```

修改源码、牌义或样式后，重新构建并启动：

```sh
docker compose up --build -d
```

当前采用静态构建，没有热更新；编辑文件后必须重新构建。若 `4321` 已被占用，可修改 `compose.yaml` 的宿主机端口，例如改为 `"127.0.0.1:4322:80"` 后访问 <http://localhost:4322/>。

每次构建都会运行类型检查、塔罗领域测试和 Astro 静态生成；全部通过才生成镜像。运行容器带有首页健康检查。

## 项目结构

```text
src/
  pages/                Astro 页面：主页、占卜、百科、入门指南
    cards/[slug].astro  为每张牌预生成详情页
  components/DrawApp.vue 随机抽牌、手动录入、结果和历史记录
  data/cards.ts         78 张牌的名称、关键词、正逆位与主题牌义
  data/display.ts       页面与解读引擎共同使用的数据入口
  data/spreads.ts       牌阵和各牌位的含义
  domain/tarot.ts        抽牌、校验、结构化解读及牌组组合提示
  layouts/              全站布局与导航
  styles/global.css     全站样式及 CSS 牌面视觉
public/                 直接复制到构建产物的静态资源
docker/server.mjs       本地容器中的静态文件服务
Dockerfile              安装依赖、静态构建和运行阶段
compose.yaml            本地端口与构建参数
astro.config.mjs        静态输出和部署路径配置
scripts/export-static.sh 容器构建、健康检查与静态产物导出
dist/                   纳入 Git 的静态发布产物，供 subtree 使用
```

随机抽牌采用浏览器 `crypto.getRandomValues` 和 Fisher–Yates 洗牌，同一牌阵内不重复。手动录入校验牌数、牌位和重复牌。两种入口共用 `interpretReading`，解读结合牌阵位置、主题、正逆位、花色比例和少量明确的牌面组合。

最近 8 次记录保存在当前浏览器的 `localStorage`，包括输入的问题和牌面；不上传、不跨设备同步，可在页面清空。清除浏览器网站数据也会删除记录。

## 编辑牌义和牌阵

牌义集中在 `src/data/cards.ts`。保持每张牌的 `id` 稳定；它同时用于详情页路径与历史记录。主要编辑项包括：

- `keywords.upright` / `keywords.reversed`：解读关键词。
- `meaning.upright` / `meaning.reversed`：各方向的 `summary`、`love`、`career` 和 `advice`。
- `reflection`、`symbolism`：反思问题和象征说明。
- `name`、`nameEn`、`symbol`、`numberLabel`：牌面展示信息。

目前百科还使用同一对象中的便于展示的字段，如 `summary`、`uprightKeywords`、`uprightMeaning`、`loveMeaning`、`reversedLoveMeaning` 和事业牌义字段。它们与嵌套的 `keywords` / `meaning` 内容对应；修改时同步更新，避免百科与占卜结果不一致。`display.ts` 只是重新导出数据，不需要在那里重复编辑。

牌阵在 `src/data/spreads.ts` 中定义，每个位置包含稳定的 `id`、名称和含义。增加牌阵时，也检查 `src/domain/tarot.ts` 中的总览与位置解释是否适配；新增位置会使用其配置的含义，但总览目前针对已有三种牌阵编写。

当前牌面视觉由 CSS 和符号组成。若以后增加牌图，可将有使用权的素材放入 `public/`，并在页面中实际接入，同时处理 `BASE_URL` 前缀。

## 静态解读的范围

结果来自本地牌义和规则模板。问题文本用于记录和展示，当前不会做语义理解，也不会根据任意问题生成独立分析；同样的牌阵、主题与牌面组合会得到同样的解释。

这里适合学习牌义、整理感受和记录观察。牌义提供象征性的参考，未来位置表示可变化的趋势，不是确定预测。若以后加入在线 AI，需要另行设计服务端代理或其他密钥管理方式；公开静态页面不能安全保存服务端 API 密钥。

## 发布到 GitHub Pages

发布方式参考同目录下的 `blog` 项目：源码与 `dist/` 一起提交到 `main`，再通过 `git subtree` 将 `dist/` 的内容单独发布到 `gh-pages`。GitHub Pages 托管静态文件，不运行 Docker。

自定义域名为 `tarot.deesuu.com`，因此 `astro.config.mjs` 的 `site` 为 `https://tarot.deesuu.com`，`base` 固定为 `/`。每页输出对应的 canonical URL。

仓库预置以下文件，构建时会自动复制到静态产物根目录：

```text
public/CNAME       # 内容仅为 tarot.deesuu.com
public/.nojekyll   # 让 Pages 保留 _astro/ 资源
public/robots.txt  # 允许正常抓取
```

每次发布，在项目目录执行：

```sh
# 构建、检查运行容器，并完整替换 dist/
./scripts/export-static.sh

# 提交源代码和生成的静态文件
git add .
git status --short
git commit -m "feat: update tarot site"

# 推送源码，并只将 dist/ 内容发布到 gh-pages
git push origin main
git subtree push --prefix dist origin gh-pages
```

导出脚本会执行 `docker compose up --build -d`，等待容器健康，复制静态产物到临时目录，再校验首页、占卜页、78 个百科详情、CNAME、`.nojekyll`、资源目录和 `robots.txt`。全部成功后才整体替换 `dist/`，构建失败会保留原来的发布目录，删除的旧页面也不会残留。不要手动修改 `dist/`；它不被 Git 忽略，但始终被 Docker 构建上下文排除。

脚本只负责构建和导出，不会自动提交或推送。subtree 读取已提交的文件，必须先提交生成后的 `dist/`。不要使用 `git push origin main:gh-pages`。

第一次发布后，GitHub 仓库 **Settings → Pages** 应设为：

1. Source：**Deploy from a branch**。
2. Branch：**gh-pages**，目录 **/(root)**。
3. Custom domain：**tarot.deesuu.com**。
4. DNS 为 `tarot.deesuu.com` 添加 CNAME，目标为 `iideesuu.github.io`（不要带协议或 `/tarot/`）。
5. 域名和证书生效后启用 **Enforce HTTPS**。

构建输出使用目录形式（例如 `cards/the-fool/index.html`），详情页刷新可以直接命中静态文件，不依赖 SPA 路由回退。

## 依赖审计

可用只读挂载的容器检查锁文件，宿主机无需安装 npm：

```sh
docker run --rm -v "$PWD:/app:ro" -w /app node:22-alpine npm audit
```

发现漏洞时命令会返回非零退出码。审计结果会随安全公告变化；升级应同时检查 Astro 与 Vue 集成的兼容性，重新构建并验证页面。
