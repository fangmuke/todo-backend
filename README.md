# bhwa233-api

## 项目简介

一个基于 NestJS 构建的多功能后端服务，提供以下主要功能：

- 股票市场数据查询 (A股、港股、美股)
- 数字货币市场数据
- 期货市场数据
- AI 对话服务（支持 OpenAI 和 Google AI）
- 网页内容抓取
- 其他工具性接口

## 技术栈

- **框架**: [NestJS](https://nestjs.com/) - 企业级 Node.js 框架
- **ORM**: TypeORM - 数据库对象关系映射
- **数据库**: MySQL (通过 [PlanetScale](https://app.planetscale.com/))
- **编译器**: SWC - 高性能的 TypeScript/JavaScript 编译器
- **AI 集成**: 
  - OpenAI API
  - Google Generative AI
- **HTTP 客户端**: Axios

## 项目结构

```
src/
├── feature/              # 功能模块
│   ├── ai/              # AI 服务模块
│   ├── command/         # 命令处理模块
│   │   └── actions/     # 具体命令实现
│   ├── fishing-time/    # 钓鱼时间功能
│   ├── page-scraper/    # 网页抓取服务
│   └── stock-market/    # 股票市场模块
└── utils/               # 工具函数
```

## 主要功能

### 股票市场数据
- A股市场概览
- 个股详细数据查询
- 美股市场指数
- 港股市场数据
- 北向资金数据

### 数字货币市场
- Binance、Bitget、Bybit行情数据
- 24小时价格变动
- 交易深度信息

### AI 服务
- 文本生成
- 对话服务
- 内容总结

### 其他功能
- 网页内容抓取
- 微博热点获取
- 期货市场数据

## 开发指南

### 环境要求
- Node.js >= 16
- pnpm >= 7

### 安装依赖
```bash
pnpm install
```

### 开发运行
```bash
pnpm dev
# 或
pnpm start:dev
```

### 生产构建
```bash
pnpm build
pnpm start:prod
```

### 测试
```bash
# 单元测试
pnpm test

# e2e 测试
pnpm test:e2e

# 测试覆盖率
pnpm test:cov
```

## API 文档

项目集成了 Swagger，运行项目后可以访问 `/api` 路径查看完整的 API 文档。

## 环境变量

项目使用 @nestjs/config 来管理环境变量，需要配置以下环境变量：

- `DATABASE_URL`: 数据库连接 URL
- `OPENAI_API_KEY`: OpenAI API 密钥
- `GOOGLE_API_KEY`: Google AI API 密钥

## 贡献指南

1. Fork 本仓库
2. 创建功能分支
3. 提交代码
4. 发起 Pull Request

## 许可证

[UNLICENSED](LICENSE)

