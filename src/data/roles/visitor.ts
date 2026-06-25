import type { Role } from "./_schema";

// 「访客」—— 小J。来源：TEST_PLAN D1（AUTH-05/08/10 受保护重定向）、D7（COM-U-02 广场）。
export const visitor: Role = {
  key: "visitor",
  ip: "xiaoj",
  nameZh: "访客",
  nameEn: "Visitor",
  taglineZh: "还没注册，先逛逛能看到什么、怎么一步进来。",
  taglineEn: "Not signed up yet — look around, then step in.",
  steps: [
    {
      img: "/panels/visitor-01.png",
      titleZh: "自由浏览社区广场",
      titleEn: "Browse the community plaza freely",
      narrationZh: "不用注册，就能浏览社区广场：所有社区的名称、ENS、token、logo 都聚合展示。",
      narrationEn: "No account needed to browse the community plaza: every community's name, ENS, token and logo is aggregated for you to see.",
      techZh: "公开只读接口（community/list）聚合链上社区数据，搜索引擎也能索引。",
      techEn: "A public read-only endpoint (community/list) aggregates on-chain communities; even search engines can index it.",
      valueZh: "先看清楚有什么，再决定要不要进来。",
      valueEn: "See what's there before deciding to join.",
      cases: ["COM-U-02"],
    },
    {
      img: "/panels/visitor-02.png",
      titleZh: "想动手？先登录",
      titleEn: "Want to act? Sign in first",
      narrationZh: "访客点到「转账 / 管理 / 加入」这类需要身份的操作时，会被引导去登录，不会白屏报错。",
      narrationEn: "When a visitor taps an action that needs identity (transfer / manage / join), they're gently redirected to sign in — never a blank error.",
      techZh: "受保护路由前端跳 /auth/login、后端 401；公开页仍可看。",
      techEn: "Protected routes redirect to /auth/login (and the backend returns 401); public pages stay open.",
      valueZh: "边界清晰：能看的随便看，要动的先证明你是你。",
      valueEn: "Clear boundary: read freely, but prove who you are before you act.",
      cases: ["AUTH-10", "AUTH-05"],
    },
    {
      img: "/panels/visitor-03.png",
      titleZh: "一步成为用户",
      titleEn: "Become a user in one step",
      narrationZh: "想参与？填邮箱、刷脸建 passkey，就从访客变成个人用户（见个人用户漫游）。",
      narrationEn: "Ready to join? Enter your email and create a passkey — you go from visitor to Individual User (see the Individual tour).",
      techZh: "邮箱 OTP + WebAuthn passkey，无密码、无助记词，账户反事实创建。",
      techEn: "Email OTP + a WebAuthn passkey — no password, no seed phrase, account created counterfactually.",
      valueZh: "从「看客」到「成员」，只隔一次刷脸。",
      valueEn: "From onlooker to member is just one Face-ID away.",
      cases: ["AUTH-01", "AUTH-02"],
    },
  ],
};
