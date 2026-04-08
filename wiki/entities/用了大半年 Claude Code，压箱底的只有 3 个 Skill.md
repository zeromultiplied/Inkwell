---
title: "用了大半年 Claude Code，压箱底的只有 3 个 Skill"
entity_type: "article"
author: "easypay007"
source: "https://mp.weixin.qq.com/s/WNORWNVRs_K2xOUfud8Mvg"
published_date: "2026-03-26"
created_date: "2026-04-08"
tags:
  - "claude-code"
  - "skills"
  - "best-practices"
  - "chinese-content"
status: "processed"
---

# 用了大半年 Claude Code，压箱底的只有 3 个 Skill

## 基本信息

**作者**: [[easypay007]]
**来源**: 微信公众号文章
**发布时间**: 2026年3月26日
**核心主题**: Claude Code 技能选择与使用的最佳实践

## 核心观点

### 核心原则
- **质量优于数量**: Skill 不是越多越好，每多装一个都会消耗上下文空间
- **实用主义**: 从社区 6 万多个技能中只选择真正有用的几个
- **逐步扩展**: 按项目需求逐步添加，避免一次性安装过多

### 推荐的三个核心 Skill

#### 1. [[Superpowers]]
- **功能**: Brainstorming 和 TDD 模式
- **优势**: 事前多花几分钟，减少后期返工
- **使用**: 只开 brainstorming 和 TDD 两个子能力

#### 2. [[Planning with Files]]
- **功能**: 防止长任务断片，中间状态落盘
- **方法**: 把计划写进文件，每完成一步更新状态
- **价值**: 即使上下文被截断也能恢复工作

#### 3. [[Ralph Loop]]
- **功能**: 任务监工，防止提前收尾
- **机制**: 用 Hook 拦截退出动作，检查完成标准
- **要求**: 完成标准必须具体明确

## 技能分类体系

### [[Skill]] (方法)
- 告诉 Claude 这类任务该怎么做
- 解决做事流程问题

### [[MCP]] (能力)
- 让 Claude 接上外部工具和数据源
- 解决工具访问问题

### [[Plugin]] (组合包)
- Skill 和 MCP 的组合
- 方法和能力一起提供

## 按场景补充的技能

- **代码审查**: [[Code Review]] - 多视角审查（逻辑、安全、风格）
- **前端回归**: [[Webapp Testing]] - Playwright 脚本和浏览器测试
- **前端样式**: [[Frontend Design]] 或 [[UI UX Pro Max]] - 提升页面质感
- **文档处理**: 官方工具链（PDF Processing, DOCX, PPTX, XLSX）
- **Token 优化**: [[Context Optimization]] - 控制上下文成本

## 推荐的 MCP

- **[[Tavily]]**: 结构化搜索
- **[[Context7]]**: 最新文档注入，减少过期 API 和幻觉
- **[[Task Master AI]]**: PRD 拆分为可执行任务

## 生态发展趋势

1. **多 Agent 并行**: 一个人带多个 Claude 协作
2. **记忆系统进化**: 从会话记忆转向持久记忆
3. **安全治理补课**: 权限控制和可审计性

## 常见陷阱

1. **收藏癖**: Skill 装太多拖慢效率
2. **位置错误**: 项目相关 Skill 放 `.claude/skills/`，个人通用 Skill 放 `~/.claude/skills/`
3. **开了不关**: 任务结束后应及时关闭临时 Skill

## 入门建议

1. 先只装 [[Superpowers]]，只开 brainstorming
2. 跑完小项目后加 [[Planning with Files]]
3. MCP 从 [[Context7]] 开始

## Sources
- `/raw/用了大半年 Claude Code，压箱底的只有 3 个 Skill.md`