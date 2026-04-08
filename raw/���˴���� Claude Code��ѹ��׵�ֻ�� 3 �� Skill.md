---
title: "用了大半年 Claude Code，压箱底的只有 3 个 Skill"
source: "https://mp.weixin.qq.com/s/WNORWNVRs_K2xOUfud8Mvg"
author:
  - "[[easypay007]]"
published:
created: 2026-04-08
description: "Claude Code技能切忌贪多，装太多会耗尽上下文导致AI罢工。日常必装Superpowers、Planning with Files和Ralph Loop，防跑偏、失忆和摸鱼。其余按场景扩展，搭配MCP增强能力，拒绝收藏癖。"
tags:
  - "clippings"
---
原创 easypay007 *2026年3月26日 06:00*

> 大家好，我是小智，专注 AI 工具，AI 智能体和编程提效

前几天踩了个很典型的坑。

我把网上能找到的 Claude Code Skills 装了三十多个，想着先囤着，之后总有用。结果马上翻车。回复速度变慢，上下文经常丢，任务做到一半就飘掉。

后来我才明白，Skill 不是越多越好。每多装一个，Claude 都要多读一份说明。说明书一多，上下文就被挤爆了，真正干活的空间反而不够。

我把它们全删了，再一个个装回去。现在社区有 6 万多个技能，我常用的只有几个。下面这套是我反复试出来的个人组合。

## 先把概念分清

大家装之前得搞清楚几个词。

![图片](https://mmbiz.qpic.cn/mmbiz_png/1z3cPz3g2f1OmpZLYTv8BP1YmNpQnvtVJ6gOXyg5xjUrib1l3Ck0yQEmAQZ3pVCqDNWAKnRiaFXuT0t2E6LLaWiaib0iap3gAib2MIcXCfr2eZQKM/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=0)

Skill 负责方法，告诉 Claude 这类任务该怎么做。

MCP 负责能力，让 Claude 接上外部工具和数据源，比如搜索、数据库、浏览器。

Plugin 是 Skill 和 MCP 的组合包，方法和能力一起给到。

只装 Skill 往往不够，因为它只解决做事流程，解决不了工具访问。

## 我常用的三个 Skill

### Superpowers

这个 Skill 让我从直接开写，变成先做一轮 brainstorming。

它会先追问关键问题，比如并发、幂等、数据结构、边界条件。问完以后把讨论结果落成文档。前面多花几分钟，后面返工会少很多。

我还会开它的 TDD 模式。Claude 必须先写测试，再写实现。测试不过就不能收工。这个约束非常实用，能明显减少“代码写完但心里没底”的情况。

我只开 brainstorming 和 TDD 两个子能力。Superpowers 子模块很多，全开会很重。

### Planning with Files

这个 Skill 专治长任务断片。

复杂任务做久了，对话上下文被压缩，Claude 容易忘掉已经完成的步骤。Planning with Files 的办法很直接，把计划写进文件，每做完一步就更新状态。就算上下文被截断，重新读文件也能接着做。

这套方法和长任务工程化是同一个思路，中间状态要落盘，不能只放在会话里。

### Ralph Loop

我把它当成监工。

Claude 有时会在任务没完成时提前收尾。Ralph Loop 用 Hook 拦截退出动作，再检查完成标准。标准没达成就继续执行。

关键在于完成标准必须具体。比如写成“接口可用，测试通过，README 补齐 API 文档”。标准越清晰，偷停空间越小。

## 按场景补充

写完核心三件套以后，我会按项目需求补，不会一次加很多。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

做代码审查，我会加 Code Review。它把审查拆成多个视角，逻辑、安全、风格分别看，最后按置信度过滤结果。

做前端回归，我会加 Webapp Testing。Claude 能自动写 Playwright 脚本、跑浏览器、截图并回归验证。

前端样式总有 AI 味时，我会用 Frontend Design 或 UI UX Pro Max。页面质感会更稳，尤其是配色和层次。

处理文档时，我按需开官方工具链。PDF Processing 处理 PDF，DOCX 处理 Word，PPTX 处理幻灯片，XLSX 处理表格。

大项目 token 压力高时，我会用 Context Optimization 来控上下文成本。

## MCP 是另一半能力

只靠 Skill，Claude 还是会卡在“知道怎么做，但拿不到数据”。

我常用三个 MCP。Tavily 负责结构化搜索，Context7 负责最新文档注入，Task Master AI 负责把 PRD 拆成可执行任务。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

这三个搭起来后，Claude 的稳定性会明显提升。尤其是 Context7，对减少过期 API 和幻觉帮助很大。

## 生态趋势

我最近看到三个方向在变快。

多 Agent 并行在普及，一个人带多个 Claude 协作会越来越常见。

记忆系统在进化，长期任务会从“靠会话记忆”转向“靠持久记忆”。

安全治理在补课，Agent 能力增强后，权限控制和可审计会变成标配。

## 我踩过的坑

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

第一个坑是收藏癖。Skill 装太多会拖慢整体效率。

第二个坑是放错位置。项目相关 Skill 应该放在 `.claude/skills/` ，跟仓库一起管理。个人通用 Skill 放 `~/.claude/skills/` 。

第三个坑是开了不关。很多 Skill 只在某个阶段有用，任务结束就应该关闭。

如果你还没开始用，我建议先只装 Superpowers，并且只开 brainstorming。跑完一个小项目，再加 Planning with Files。MCP 可以先从 Context7 开始。

这套顺序足够稳，也够快。大家有什么好用的 Skill，也可以在评论区分享。点赞、在看和转发，是对我最大的支持。加我微信，拉你进 AI 交流群。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

> 如果本文对您有帮助，也请帮忙点个 赞👍 + 在看 哈！❤️关注小智AI指南公众号，AI 路上不迷路

继续滑动看下一个

小智AI指南

向上滑动看下一个