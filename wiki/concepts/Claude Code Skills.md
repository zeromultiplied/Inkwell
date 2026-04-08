---
title: "Claude Code Skills"
concept_type: "tooling"
created_date: "2026-04-08"
tags:
  - "claude-code"
  - "productivity"
  - "development"
status: "active"
---

# Claude Code Skills

## 定义

Claude Code Skills 是为 Claude Code 设计的功能扩展模块，用于增强其在特定任务上的能力和工作流程。

## 分类体系

### [[Skill]] (方法层)
- **作用**: 定义任务执行的工作流程和方法
- **特点**: 告诉 Claude 这类任务该怎么做
- **示例**: [[Superpowers]], [[Planning with Files]], [[Ralph Loop]]

### [[MCP]] (能力层)  
- **作用**: 提供外部工具和数据源的访问能力
- **特点**: 解决"知道怎么做，但拿不到数据"的问题
- **示例**: [[Tavily]], [[Context7]], [[Task Master AI]]

### [[Plugin]] (组合包)
- **作用**: Skill 和 MCP 的集成解决方案
- **特点**: 方法和能力一起提供

## 最佳实践

### 选择原则
1. **质量优于数量**: 每个 Skill 都会消耗上下文空间
2. **按需配置**: 根据项目需求选择，避免一次性安装过多
3. **逐步扩展**: 从小开始，逐步添加必要功能

### 安装位置
- **项目相关 Skill**: `.claude/skills/` (与仓库一起管理)
- **个人通用 Skill**: `~/.claude/skills/`

### 使用策略
- **任务结束关闭**: 临时性 Skill 在使用后应及时关闭
- **性能监控**: 注意回复速度变慢、上下文丢失等性能问题

## 核心推荐技能

根据实践经验，以下三个 Skill 被认为是必装核心：

1. [[Superpowers]] - Brainstorming 和 TDD
2. [[Planning with Files]] - 防止长任务断片  
3. [[Ralph Loop]] - 任务监工和完成标准检查

## 生态现状

- **社区规模**: 6 万多个可用技能
- **发展趋势**: 多 Agent 并行、持久记忆系统、安全治理
- **实用原则**: 切忌贪多，选择真正有用的少数几个

## 相关概念
- [[AI Development Tools]]
- [[Productivity Optimization]]
- [[Workflow Automation]]

## Sources
- `/raw/用了大半年 Claude Code，压箱底的只有 3 个 Skill.md`