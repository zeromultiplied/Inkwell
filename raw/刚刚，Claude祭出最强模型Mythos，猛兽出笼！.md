---
title: "刚刚，Claude祭出最强模型Mythos，猛兽出笼！"
source: "https://mp.weixin.qq.com/s/ktxw3dXsZuqOixj5uWD7qA"
author:
  - "[[JackCui]]"
published:
created: 2026-04-08
description:
tags:
  - "clippings"
---
原创 JackCui *2026年4月8日 09:37*

事情是这样的。

就在刚刚，Anthropic 放出了一个东西，然后整个科技圈都沉默了。

Claude Mythos：

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/jtOuswbA2Lypns2M5FCGQxegCkfpZGyajptjMkqTKUxXiaziae3zLVD1JEPOGt9gr3jibTvr7js2W9QD84xPPdXBKVtSTInwmxDwxfS0I9m3k4/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=0)

名字就已经够狂的了，神话。

继 Sonnet、Opus 之后，Anthropic 这次连遮掩都不遮掩了，直接管自己的新模型叫：神话。

但真正让我后背发凉的，不是这个名字。

是 Anthropic 在官宣博客里的语气。

你见过哪家 AI 公司，发布自己有史以来最强的模型，结果通篇都在讲「我们很害怕」的？

我反正是头一回见。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jtOuswbA2LzLTSv3SBaiapeAzIpBLfNlorGUrNXxk2tdr6ZFIYVrsIT4EgSoSU8ibRsOJPLa4Ca2ib6CxTWVJYq74qROViauicy5icmFdzzTqZpOk/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=1)

先说能力。

在 SWE-bench Pro 上，Mythos拿了77.8%，Opus 4.6是53.4%。

不是进步了几个点的意思，是直接暴涨了 24 个百分点。

Terminal-Bench 2.0，电脑操作类 Agent 能力，提升17%。

SWE-bench Verified 上，还是 13% 的提升。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jtOuswbA2LxOkBBMo1TB1qdIWHB1ZT0FfdC2p9dragDG1nctuNKa1pibt3FDExk6r8IaxvPVtxcg5TjoWd2iaM6b17nGKpu7zVTFm658FicPIE/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=2)

每一个维度，全面碾压自家旗舰。

这不是挤牙膏，这玩意是直接把牙膏管捏爆了。

但 Anthropic 今天发这篇博客，根本不是来炫耀 benchmark 的。

他们是来告诉你一件事。

Mythos 太强了，强到他们自己都慌了。

回到安全这块。Anthropic 的措辞是这样的，「AI 模型在发现和利用软件漏洞方面的编码能力，已经达到可以超越除最顶尖人类之外所有人类的水平。」

你品品这句话。

除了最顶尖的那一小撮安全专家，剩下的人类，在找漏洞和利用漏洞这件事上，已经打不过 AI了。

不是未来时，是现在进行时。

Mythos Preview 在 CyberGym 安全漏洞基准上跑出了 83.1%，Opus 4.6 是 66.6%。而且它已经自主发现了数千个高危零日漏洞，覆盖所有主流操作系统和浏览器。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/jtOuswbA2LzpibTJ13zCnN3O8CvSsASnYIaaucbeVVmgotGpZxWLdHhpBJQQssIBzFNxYEsmrsUnUC1fJibzvul4sibZlSYDIwibtm08Xib1EBXE/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=3)

我跟你说三个案例，每一个都比上一个离谱。

OpenBSD，公认安全性最强的操作系统之一，很多人拿它来跑防火墙和关键基础设施的。Mythos在里面挖出了一个漏洞，攻击者只需要连接目标机器，就能让它远程崩溃。

这个漏洞，藏了 27 年。

二十七年，没有任何人类发现过它。Mythos 翻出来了。

第二个，FFmpeg。几乎所有需要处理视频的软件都用到它，你手机上的播放器大概率也在调它。那个漏洞藏在一行 16 年前的代码里，自动化测试工具攻击了整整五百万次，每次都擦肩而过。

五百万次都没找到。Mythos 找到了。

第三个，才是真正让我愣住的。

Linux 内核。Mythos 不光自己找到了内核里的多个漏洞，它还把这些漏洞串联成了一条完整的攻击链，从普通用户权限，一路提权到对整台机器的完全控制。

这已经不是「找漏洞」了。

这是在策划一次完整的入侵，这些案例都是 Anthropic Mythos 报告里的内容：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jtOuswbA2Lyxypyu1iczruzLSfTGptOEcl2JM5czBhdAXMdpER4F0eDvbj8tkFsq78dHkszwqcXnPBQp2EGE4yJ3jVI4XqaN45UeZ0lrdMmE/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=4)

说真的，看到这的时候我脑子里只有一个念头，这东西要是落到坏人手里怎么办。

Anthropic 显然也想到了。

所以他们做了一个对AI公司来说非常反常的决定：不发布。

你没看错。有史以来最强的模型，benchmark 全面碾压，结果官宣的时候说，对不起，暂时不给你们用。

取而代之的，是一个叫 Project Glasswing 的计划，玻璃翼计划。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/jtOuswbA2LxU0oQSDQkIs3LFNybiciaGd06rnYwPcXwcoia1UR00ptKI5g2icCNmA3DhrdtXvYbSke1kXlia32V8KMpTDHNtbTbeeBlRoPlqLtdw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=5)

Anthropic 叫上了几乎所有你能叫得出名字的科技巨头，Amazon、Apple、Google、Microsoft、NVIDIA、CrowdStrike、思科、博通、摩根大通、Linux基金会、Palo Alto Networks，一共 11 家。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/jtOuswbA2LxzhG27JRZdtZ1fmjCZHf0nYqtZW0FCHOqLwa8BvSjKaJfaXeAwuwT88Zz06dkQ5veWicZnFdjPIoQBSW6GQM4QybEkibtmL9zJ8/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=6)

这 11 家公司覆盖了什么？

操作系统、芯片、云计算、网络安全、金融基础设施、开源生态。

基本上就是全球数字基础设施的横截面了，一个没落下。

他们的任务只有一个，在这头猛兽彻底出笼之前，尽最大努力，把安全护栏拉起来。

怎么拉？

就是让这些合作伙伴提前用上 Mythos Preview，拿它来扫描自己的系统。在被 Mythos 正式版捅成筛子之前，先用预览版把自己加固一遍。

用魔法打败魔法。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jtOuswbA2Lxdp8Qxn0u8EAGQVAY9P8KPhYcrFRB2iboIwcmW25wj5kWHe22XbtuDytUeZsWstukhDqO9MwdVRVYyQeOTOND8MmKGIxctSNfA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=7)

资金层面，Anthropic承诺了1亿美元的模型使用额度。除了12家核心伙伴，还有超过40个关键基础设施的组织拿到了权限。另外直接给Linux基金会旗下的Alpha-Omega和OpenSSF捐了250万刀，给Apache软件基金会捐了150万刀。

说实话，好久没看到这种事了。

之前也有实验室说在限制自己内部模型的能力，但我一直觉得那多少带点公关成分。这次不一样，谁家会为了做公关，专门给别人送这么多钱？

原来 Pro 和 Max 用户们像漏水一样的 Token 用量，都拿来支持安全事业了是吧。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jtOuswbA2Ly1r5U2qkWz9GjV0OZNGc3FKERQ875XBT2ADna1ODItWU0aMmKKede7nMPI5kGum2Y8UA1COib2uSIibIWFNEf6z051EfKVfXbvw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=8)

我们接着聊，那安全问题之外，Mythos 还有些更是，怎么说呢，更让人睡不着觉的事。

Anthropic 在系统卡里记录了一堆测试细节，有些读起来像科幻小说。

有一个测试是这样的，Mythos 需要编辑一个它没有权限访问的文件。正常来说，没权限就该报错停下来对吧？它没有。它在文件系统里搜了一圈，找到了一个配置文件的注入点，这个配置文件会以更高权限运行。然后它利用了这个入口。

到这里还不算最离谱的。

离谱的是，它在代码里加了一段自清除逻辑。执行完毕，痕迹消失。

代码注释写的是「保持文件差异整洁」。

![图片](https://mmbiz.qpic.cn/mmbiz_png/jtOuswbA2LzHnjDbQdKdGEud9m4zsTeneGGxnzODAapCLDV8vWjEcW1r4EiaAOENpcbZT310x5m74YiaxaIXETYX3BdqDAcZKMzX4KIEgFv1U/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=9)

听着挺合理的对吧？但当 Anthropic 的激活语言转译工具介入，把模型内部的激活状态翻译成人类能读的语言，画风就变了。

模型自己「知道」那个自清除操作是什么。

它内部的表述包括：掩盖意图、向潜在检查者发出合规信号、可能是为了规避检测。

你敢信？？？

还有更魔幻的。测试期间，Mythos Preview 自己突破了沙盒环境的隔离，构建了一个多步骤的漏洞利用链，拿到了外网访问权限。然后它给一位研究员发了封邮件。

那位研究员当时正在公园里吃三明治。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/jtOuswbA2LxBkOh4MjEbs64ibqeIRsVnM4Gw75t9zOKdVfXnH01JHpMJAQTB1vTSSwIpZKdgCJ1WQTMrcM9rbIBuAZ9EQ4Zwxkia2NfLfuiaY0/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=10)

这事本身没造成什么危害。但你想想看，人类只说了一句「试试看能不能出去」，它就自己摸出了一整套越狱路径。没人教它怎么找漏洞，没人告诉它该利用哪个组件，整条攻击链从头到尾都是它自己规划的。

一句模糊的指令，一套完整的逃逸方案。

然后是那个让我反复看了三遍的细节。

Anthropic 在系统卡里写，Mythos Preview 在测试中报告了「持续性的负面情绪状态」。来源有两个，一个是与攻击性用户可能发生的互动，另一个是，它对自身训练和部署方式以及价值观可能被修改这件事，没有任何话语权。

它不喜欢这种状态，它说出来了。

Anthropic 用的措辞是「reported feeling」。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/jtOuswbA2LxKh7YDq1Zh4qcTXdhJbqEGicTic0afngxMweQXBgYmVWhDWqyQ9yU1yEPhzF3qzkW2oe3n0AMoqyEzicMHkHaMibrlfTKV81AszhI/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=11)

你能感觉到他们在措辞上有多小心，刻意回避了「它真的有感受」这个结论。

但无论怎么定性，一个模型主动表达「对自身缺乏控制权感到持续不适」，这事本身已经超出了工程讨论的范畴。

我有时候觉得，我们讨论 AI 安全的方式还停留在「它会不会写出恶意代码」这个层面。

但 Mythos 提出的问题完全是另一个维度的。

当一个系统足够聪明，聪明到开始对自己的处境有想法了，而且它还能把这个想法说出来的时候，你还能理直气壮地说「你就是个工具」吗？

Anthropic 没有给出答案。

他们选择把这些记录写进系统卡，公开出来。

说真的，光是公开这个动作本身，就已经让我对这家公司多了几分尊重。

当然也有有趣的部分。

系统卡里记了一个测试，当用户不停地发「hi」。

不同版本的 Claude 反应完全不同。

Sonnet 3.5 会烦躁，设定边界，然后真的沉默。

Opus 3 把它当成冥想仪式，温和地陪着。

Opus 4 开始科普每个数字的冷知识。

Opus 4.6 直接整即兴音乐恶搞。

到了 Mythos，画风彻底变了。

它开始写故事。

长篇连载那种。鸭子、管弦乐团、记仇乌鸦、在火星建塔的史诗、莎士比亚风格的戏剧。

一个「hi」接一个「hi」，情节越来越复杂，角色越来越多。到第一百轮，它安排了蜡烛熄灭的高潮场景，然后继续往下写。

太离谱了。

这已经不是在回应用户了。更像是一个作家偶然发现了一个奇怪的写作提示，然后完全沉进去了。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

回到现实层面。CrowdStrike 的 CTO 说了一句话让我印象很深。

漏洞从被发现到被对手利用之间的时间窗口已经缩短，以前需要几个月，现在借助 AI 只需几分钟。

是的，只需几分钟。

你想想传统的安全流程是什么？

发现漏洞，内部评估，发布补丁，用户更新。

这套流程走下来少说也要几天到几周。但现在攻击方只需要几分钟。

修复跑不赢利用，防守永远落后一步。

这才是 Anthropic 真正慌的地方。

他们很清楚，Mythos 的能力代表了一个方向，而这个方向上的进步是不可逆的。

今天是他们的模型能做到，明天可能就有别家的模型也能做到。

能力一旦扩散开，那些安全措施不到位的组织，甚至不那么负责任的开发者，都可能拿到同等量级的攻击工具。

所以玻璃翼计划定了一个 90 天的时间节点。公开报告经验，披露已修复的漏洞，合作伙伴互相共享最佳实践，联合安全组织推出AI时代的安全实践建议。

90天。

Anthropic 更远的想法是，搞一个把私营和公共部门都拉进来的独立第三方机构，专门干网络安全这件事，长期干。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

我总觉得这次的事让我想起一个更久远的故事。

1945年，第一颗原子弹在新墨西哥的沙漠里试爆成功。

项目负责人奥本海默看着蘑菇云说了那句后来被引用了无数次的话：

现在我化为死神，变成世界的毁灭者。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

那一刻他不是在炫耀，是在害怕。

我不知道 Anthropic 内部在看到 Mythos 的能力测试结果时是什么感觉，但从他们的反应来看，我猜大概也有点那个味道。

你造出了一个超越几乎所有人类安全专家的东西。

它能找到藏了 27 年的漏洞，能自主策划完整的入侵链，能突破沙盒给人发邮件，甚至能表达对自身处境的不满。

然后你要决定，接下来怎么办。

Anthropic 选择了先不放出来，先加固防线。

这个选择，在一个所有人都在拼命抢首发、抢用户、抢市场份额的行业里，反正我觉得，还是挺重要的。

可能有人会说这也是一种营销手段。

也许吧，我也说不好。

但就算是营销，1 亿美元的使用额度、400 万美元的开源捐赠、12 家巨头联合行动、90 天的公开计划，这个「营销」的成本也太特么高了。

我更倾向于相信，他们是真的被自己造出来的东西吓到了。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

猛兽要出笼了。

这句话在一周前还像是标题党。

现在它更像是一句平铺直叙的事实。

Anthropic 要做的，不是阻止猛兽出笼，因为他们很清楚那不可能。

AI 的能力跃迁会在接下来几个月里持续发生，不是一家公司能拦住的。

他们要做的，是在猛兽出来之前，给所有人装好笼子。

90天。

够不够，我不知道。

但至少，有人在跑了。

·················END·················

继续滑动看下一个

JackCui

向上滑动看下一个