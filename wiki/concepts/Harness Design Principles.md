---
title: "Harness Design Principles"
concept_type: "system-architecture"
company: "Anthropic"
created_date: "2026-04-08"
tags:
  - "ai-engineering"
  - "system-design"
  - "anthropic"
  - "best-practices"
status: "active"
importance: "high"
---

# Harness Design Principles

## 概述

Harness Design Principles 是 Anthropic 提出的 AI 系统设计哲学，描述了如何构建和管理围绕大型语言模型的辅助系统。

## 发展阶段

### 第一阶段: 补偿模式 (Compensation Phase)
- **时期**: 2024-2025年
- **核心问题**: "当模型自己还扛不住时，系统该补什么？"
- **典型组件**: 
  - `planner/generator/evaluator` 分工
  - `sprint contract` 完成标准
  - `context reset` 机制
  - `structured handoff` 结构化交接
- **设计思想**: 把模型边界外移成系统能力

### 第二阶段: 精简模式 (Refinement Phase)  
- **时期**: 2026年及以后
- **核心问题**: "当模型已经跨过某些门槛时，系统终于可以少做什么？"
- **关键问句**: `What can I stop doing?`
- **设计思想**: 移除历史包袱，防止旧补丁卡住新模型

## 核心原则

### 1. 渐进式能力移交 (Progressive Capability Transfer)
- **先用熟悉工具**: 从模型已经擅长的 `bash` 和 `text editor` 开始
- **避免过早专用化**: 不要提前替模型定义"正确工具形态"
- **自然演进**: programmatic tool calling → Skills → memory

### 2. 控制权归还 (Control Devolution)

#### 编排权归还
- **问题**: 传统方式强制所有工具结果回上下文
- **解决方案**: 让模型自己写代码串联工具调用
- **优势**: 减少不必要的数据传输和 token 消耗

#### 上下文管理权归还  
- **问题**: 大量指令预加载导致注意力预算紧张
- **解决方案**: `progressive disclosure` (渐进式披露)
- **机制**: 先给目录，需要时再读全文

#### 记忆选择权归还
- **问题**: 外部检索系统替模型做记忆决策
- **解决方案**: `compaction`, `memory folder`
- **本质**: 让模型自己决定什么值得记忆

### 3. 明确系统边界 (Explicit System Boundaries)

#### 必须保留的边界

##### 成本边界 (Cost Boundaries)
- **挑战**: Messages API 无状态性
- **策略**: 
  - 静态内容前置，动态内容后置
  - 更新时追加消息而非修改 prompt
  - 避免会话内频繁切换模型
  - 保持高缓存命中率

##### 安全边界 (Security Boundaries)  
- **标准**: `reversibility` (可逆性)
- **高风险动作**: 外部 API 调用、文件写入
- **防护**: 用户确认、staleness check、权限控制

##### UX 边界 (User Experience Boundaries)
- **需求**: 用户交互界面整合
- **实现**: 弹窗、选项框、阻塞式反馈

##### 可观测性边界 (Observability Boundaries)
- **要求**: 生产环境可审计性
- **方案**: 类型化工具、结构化参数、完整日志

## 工程实践

### 持续评估机制

#### Dead Weight Inventory
- **时机**: 每次模型升级后
- **内容**: 系统性地检查哪些组件已成为历史包袱
- **标准**: 组件是否还在承重，还是只为填补旧模型缺口

#### 能力缺口分析
- **识别**: 当前模型在哪些方面仍需系统辅助
- **补丁设计**: 设计最小化的补偿机制
- **退出策略**: 预先规划组件的退役条件

### 工具策略

#### 通用工具优先
- **基础**: `bash`, `text editor`
- **优势**: 模型训练数据中大量出现，自然熟悉
- **适用**: 开放式探索、局部编排、临时组合

#### 专用工具慎用  
- **场景**: 安全门禁、结构化参数、用户交互、审计回放
- **标准**: 动作高风险、难回滚、必须可追踪
- **设计**: 明确的类型化和参数结构化

## 设计哲学

### Build to Delete 理念
- **三个阶段**: 先搭出来 → 持续验证 → 敢于拆掉
- **核心**: 认识到很多系统组件具有临时性
- **目标**: 防止系统积累不可维护的历史包袱

### 适应性设计
- **模型跟随**: 系统设计必须跟随模型能力演进
- **动态调整**: 根据当前模型能力动态调整系统职责
- **可持续性**: 确保系统长期可维护和可演进

## 性能影响

### 实证数据
- **编排权归还**: BrowseComp 准确率从 45.3% → 61.6%
- **subagents 使用**: Opus 4.6 在 BrowseComp 提升 2.8%
- **记忆改进**: Sonnet 4.5: 43% → Opus 4.5: 68% → Opus 4.6: 84%
- **memory folder**: Sonnet 4.5 在 BrowseComp-Plus 从 60.4% → 67.2%

### 成本优化
- **缓存效益**: 缓存 token 成本只有基础输入的 10%
- **效率提升**: 减少不必要的数据传输和上下文污染

## 相关概念
- [[AI System Architecture]]
- [[Model Capability Evolution]]
- [[Anthropic Engineering Philosophy]]
- [[Progressive Disclosure]]
- [[Control Devolution]]

## Sources
- `/raw/Anthropic 的 Harness，已经进入新阶段：只用三招，开始从“补”转向“删”.md`