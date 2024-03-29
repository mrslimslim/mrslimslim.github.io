const FE_CONFIG = [
  ["", "前端"],
  {
    title: "浏览器",
    name: "browser",
    collapsable: false,
    children: [
      ["browser/", "目录"],
      ["browser/org", "浏览器的架构"],
      ["browser/prefetch-preload", "prefetch和preload"],
      ["browser/init", "输入URL到渲染"],
      ["browser/gc", "垃圾回收与定位内存泄漏"],
      ["browser/debugger", "如何用浏览器DEBUGGER"],
    ],
  },
  {
    title: "React",
    name: "react",
    collapsable: false,
    children: [
      ["react/hooks", "Hooks原理"],
      ["react/redux", "Redux"],
      ["react/optimize", "React优化"],
    ],
  },
  {
    title: "Vue",
    name: "vue",
    collapsable: false,
    children: [
      ["vue/feature3", "Vue3新的特性"],
      ["vue/keep-alive", "keep-alive"],
      ["vue/reactive", "Vue响应式原理"],
      ["vue/performance", "Vue性能优化"],
      ["vue/lifetime", "组件VNode的生命周期"],
      ["vue/diff", "diff算法的演进"],
    ],
  },
  {
    title: "Webpack",
    name: "webpack",
    collapsable: false,
    children: [
      ["web-pack/", "webpack介绍"],
      ["web-pack/按需加载", "按需加载原理与使用"],
      ["web-pack/loader", "loader使用与原理"],
      ["web-pack/plugin", "plugin使用与原理"],
      ["web-pack/treeshaking", "TreeShaking"],
      ["web-pack/hmr", "Webpack的热更新"],
    ],
  },
  {
    title: "Vite",
    name: "vite",
    collapsable: false,
    children: [
      ["vite/", "vite介绍"],
      ["vite/fast", "vite为什么这么快"],
    ],
  },
  {
    title: "工程化",
    name: "工程化",
    collapsable: false,
    children: [
      ["engineering/module", "模块化(CommonJS,CMD,ESM)"],
      ["engineering/tracking", "前端数据埋点方案"],
    ],
  },
  {
    title: "性能优化",
    name: "性能优化",
    collapsable: false,
    children: [["performance/", "前端性能优化"]],
  },
  {
    title: "TypeScript",
    name: "typescript",
    collapsable: false,
    children: [["ts/background", "使用场景"]],
  },
  {
    title: "工程实践",
    name: "practice",
    collapsable: false,
    children: [
      ["practice/electron-ffi", "electron调用ffi"],
      ["practice/screen-responsive", "大屏响应式"],
      ["practice/water-print", "页面水印方案"],
      ["practice/webassembly", "WebAssembly应用"],
      ["practice/upload", "大文件上传"],
      ["practice/event-tracking", "前端数据埋点实现"],
      ["practice/css-theme", "CSS主题设置"],
      ["practice/shuiyin", "web水印处理方案"],
      // ['practice/low-code', '如何实现一个低代码平台'],
    ],
  },
  {
    title: "WEB可视化",
    name: "web-visual",
    collapsable: false,
    children: [
      ["web-visual/babylon-intro", "babylon介绍"],
      ["web-visual/shader", "shader学习"],
    ],
  },
];

const BE_CONFIG = [
  ["", "后端"],
  {
    title: "nodejs",
    name: "nodejs",
    collapsable: false,
    children: [["node/process", "在nodejs中使用线程和进程"]],
  },
];

const ALGORITHM_CONFIG = [
  ["", "介绍"],
  ["add-two", "两数之和"],
  ["add-three", "三数之和"],
  ["shuffle", "洗牌算法"],
  ["lazy-man", "Lazyman算法"],
  ["currying", "函数柯里化"],
  ["deep-clone", "JS深拷贝"],
  ["int-reverse", "整数反转"],
  ["buy-stock", "股票最佳买卖时间"],
  ["buy-stock-2", "股票最佳买卖时间II"],
  {
    title: "链表",
    name: "linked-list",
    collapsable: false,
    children: [
      ["linked-list/reverse", "链表反转"],
      ["linked-list/add-two-number", "两数相加"],
      ["linked-list/merge-linked-list", "合并两个有序链表"],
    ],
  },
  {
    title: "二叉树",
    name: "tree",
    collapsable: false,
    children: [
      ["tree/preOrder", "二叉树的前序遍历"],
      ["tree/postOrder", "二叉树的后序遍历"],
    ],
  },
  {
    title: "数组",
    name: "array",
    collapsable: false,
    children: [
      ["array/removeDuplicates", "删除排序数组中的重复项"],
      ["array/rotate-array", "旋转数组"],
    ],
  },
  {
    title: "字符串",
    name: "string",
    collapsable: false,
    children: [
      ["string/big-add", "大数相加"],
      ["string/small-add", "小数相加"],
      ["string/longest-palindrome", "最长子串"],
      ["string/length-of-longest-substring", "无重复字符串的最长字串"],
      ["string/youxiaokuohao", "有效括号"],
      ["string/kuohaoshengcheng", "括号生成"],
    ],
  },
  {
    title: "排序算法",
    name: "sort",
    collapsable: false,
    children: [
      ["sort/bubble-sort", "冒泡排序"],
      ["sort/quick-sort", "快速排序"],
    ],
  },
];

const COMPUTER_CONFIG = [
  ["", "计算机基础"],
  {
    title: "http相关",
    name: "http",
    collapsable: false,
    children: [
      ["http/cache", "http缓存"],
      ["http/detail", "http组成"],
      ["http/cookie", "http cookie"],
      ["http/safety", "http安全"],
      ["http/http2", "http1.1和http2"],
      ["http/dns", "DNS解析原理"],
    ],
  },
];

const LEADING_CONFIG = [
  ["", "前沿技术"],
  ["pnpm", "pnpm与npm和yarn"],
  {
    title: "go",
    name: "go",
    collapsable: false,
    children: [],
  },
  {
    title: "rust",
    name: "rust",
    collapsable: false,
    children: [["rust/data_type", "Rust中的数据类型"]],
  },
];

const DESIGN_CONFIG = [["", "设计模式"]];

module.exports = {
  "/post/fe/": FE_CONFIG,
  "/post/algorithm/": ALGORITHM_CONFIG,
  "/post/computer/": COMPUTER_CONFIG,
  "/post/leading/": LEADING_CONFIG,
  "/post/design/": DESIGN_CONFIG,
  "/post/be/": BE_CONFIG,
};
