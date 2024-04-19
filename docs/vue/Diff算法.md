# 虚拟DOM和Diff算法


## 虚拟DOM
> 用来表示真是DOM的对象

::: tip
虚拟DOM算法操作真实DOM，性能高于直接操作真实DOM  
虚拟DOM算法 = 虚拟DOM + Diff算法
:::

## Diff算法
> Diff 算法是一种通过同层的树节点进行比较的高效算法，避免了对树进行逐层搜索遍历，所以时间复杂度只有 O(n)。 <br />vue 虚拟 dom 渲染成真实 dom 的新旧 VNode 节点比较更新时，就用到了该算法

### 特点
diff整体策略为：深度优先，同层比较


- 比较只会在同层级进行，不会跨级比较
- diff比较中，循环从两边向中间收拢



## 参考链接
1. [面试官：你了解vue的diff算法吗？说说看](https://vue3js.cn/interview/vue/diff.html)