---
title: "Anthropic 的 Harness，已经进入新阶段：只用三招，开始从“补”转向“删”"
entity_type: "article"
author: "若飞"
source: "https://mp.weixin.qq.com/s/k8eoFVMRcCPXEQMSy9Dyqg"
published_date: "2026-04-07"
created_date: "2026-04-08"
tags:
  - "anthropic"
  - "harness"
  - "system-design"
  - "ai-engineering"
  - "chinese-content"
status: "processed"
importance: "high"
---

# Anthropic 的 Harness，已经进入新阶段：只用三招，开始从“补”转向“删"

## 基本信息

**作者**: [[若飞]]
**来源**: 微信公众号文章
**发布时间**: 2026年4月7日 22:36
**核心主题**: Anthropic Harness 系统的演进和工程哲学转变

## 核心观点

### 阶段转变
- **第一阶段**: 拼命补 - 填补模型能力缺口
- **第二阶段**: 持续删 - 移除历史包袱和过时组件
- **工程节奏**: 每次模型升级后重新评估哪些控制逻辑还在承重

### 关键问题转变
- **旧问题**: "当模型自己还扛不住时，系统该补什么？"
- **新问题**: "当模型已经跨过某些门槛时，系统终于可以少做什么？"
- **核心问句**: `What can I stop doing?`

## Harness 演进历史

### 早期阶段 (2024-2025)
- **Codex 仓库分析**: 工程经验沉淀
- **长任务处理**: planner/generator/evaluator 分工，sprint contract
- **Claude Code 架构**: query.ts, SessionMemory, 压缩/记忆/续写机制
- **核心思路**: 把模型边界外移成系统能力

### 当前阶段 (2026)
- **新关注点**: 哪些组件已经成为 dead weight
- **评估标准**: 很多组件存在是因为曾经填补了模型能力缺口
- **清理原则**: 不要让旧补丁反过来卡住新模型

## 三个关键模式

### 模式一: 先用 Claude 已经会的东西
- **基础工具**: `bash` 和 `text editor` 作为通用基础
- **演进路径**: programmatic tool calling → Skills → memory
- **原则**: 不要过早替模型定义"正确工具形态"
- **优势**: 利用模型训练数据中大量出现的熟悉工具

### 模式二: 把控制权还给模型

#### 1. 编排权归还
- **问题**: 传统方式把所有工具调用结果都塞回上下文
- **解决方案**: 让模型自己写代码串联工具调用
- **效果**: BrowseComp 准确率从 45.3% 提升到 61.6%

#### 2. 上下文管理权归还
- **问题**: 大量任务指令提前写进 system prompt
- **解决方案**: progressive disclosure (先给目录，需要时读全文)
- **机制**: context editing, subagents
- **效果**: Opus 4.6 使用 subagents 后 BrowseComp 提升 2.8%

#### 3. 记忆选择权归还
- **问题**: 传统记忆作为外部检索系统
- **解决方案**: compaction, memory folder
- **效果**: Sonnet 4.5: 43% → Opus 4.5: 68% → Opus 4.6: 84%
- **本质**: 模型更会决定"什么值得留下来"

### 模式三: 明确系统边界

#### 必须保留的边界类型

##### 成本边界
- **挑战**: Messages API 无状态，缓存命中率影响成本和延迟
- **原则**: 
  - 静态内容放前面，动态内容放后面
  - 更新尽量追加消息，不要改 prompt 本体
  - 同一会话里别频繁切模型
  - 缓存 token 成本只有基础输入的 10%

##### 安全边界
- **标准**: reversibility (可逆性)
- **高风险动作**: 外部 API 调用、文件写入
- **防护措施**: 用户确认、staleness check、权限门禁

##### UX 边界
- **要求**: 动作需要以产品形态呈现给用户
- **实现**: 弹窗、选项框、阻塞等待反馈

##### 可观测性边界
- **需求**: 生产系统需要可记录、可追踪、可回放
- **方案**: 类型化工具、结构化参数、日志与审计

## 工程实践建议

### Harness 体检清单
1. 哪些流程只是为了补偿旧模型的短板？
2. 哪些工具过滤、任务编排、上下文拼装在替模型做决定？
3. 哪些专用工具收益已经不明显？
4. 哪些动作涉及安全、确认、审计、回滚必须保留？
5. 每次模型升级后是否做"dead weight inventory"？

### 工具选择原则
| 形态 | 适用场景 | 使用时机 |
|------|----------|----------|
| 通用工具 (bash, 文本编辑器) | 开放式探索、局部编排、临时组合 | 问题形态还在变化，模型已经很会做 |
| 声明式专用工具 | 安全门禁、结构化参数、用户交互、审计回放 | 动作高风险、难回滚、必须可追踪 |

## 哲学意义

### Build to Delete 理念
- **先搭出来**: 承认模型有边界，用 Harness 把边界外移
- **持续验证**: 每次模型升级后重新检查
- **敢于拆掉**: 能删的就删，不要积累历史包袱

### 行业影响
- **成熟标志**: Harness 不只是会补短板，还要会删减过时组件
- **工程进化**: 从魔法向工程的转变
- **可持续性**: 防止系统变得对模型太重、对系统太复杂、对成本太贵

## 相关阅读

- [[Harness Design Principles]]
- [[AI System Architecture]]
- [[Model Capability Evolution]]
- [[Anthropic Engineering Philosophy]]

## Sources
- `/raw/Anthropic 的 Harness，已经进入新阶段：只用三招，开始从“补”转向“删”.md`