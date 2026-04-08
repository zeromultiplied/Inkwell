---
title: "Superpowers"
skill_type: "core"
category: "planning"
created_date: "2026-04-08"
tags:
  - "claude-code"
  - "brainstorming" 
  - "tdd"
  - "planning"
status: "recommended"
---

# Superpowers

## 概述

Superpowers 是 Claude Code 的一个核心技能，专注于项目开始前的深度规划和思考过程。

## 主要功能

### Brainstorming 模式
- **作用**: 在开始编码前进行系统性思考
- **流程**: 追问关键问题（并发、幂等、数据结构、边界条件等）
- **输出**: 将讨论结果落地为文档
- **价值**: 前期多花几分钟，显著减少后期返工

### TDD 模式
- **作用**: 强制测试驱动开发流程
- **要求**: 必须先写测试，再写实现
- **约束**: 测试不过就不能收工
- **好处**: 减少"代码写完但心里没底"的情况

## 使用建议

### 推荐配置
- **启用模块**: 只开 brainstorming 和 TDD 两个子能力
- **避免**: 不要开启所有子模块（会变得很重）

### 适用场景
- 新项目启动
- 复杂功能开发
- 需要确保代码质量的场景

## 优势特点

1. **预防性思考**: 提前发现潜在问题
2. **文档化**: 自动生成规划文档
3. **质量保障**: TDD 确保测试覆盖率
4. **效率提升**: 减少后期调试和修改时间

## 相关技能
- [[Planning with Files]]
- [[Ralph Loop]]
- [[Code Review]]

## 最佳实践

- 在项目开始时启用
- 结合其他规划类技能使用
- 定期回顾和改进规划流程

## Sources
- `/raw/用了大半年 Claude Code，压箱底的只有 3 个 Skill.md`