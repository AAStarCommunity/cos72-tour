import type { Role } from "./_schema";

// 「运营者」—— 小M。来源：TEST_PLAN D8（OPR-01..06）。D6=开社区；D8=当协议的 gas 运营者。
export const operator: Role = {
  key: "operator",
  ip: "xiaom",
  nameZh: "运营者（Gas 代付节点）",
  nameEn: "Operator (gas node)",
  taglineZh: "在 SuperPaymaster 生态里当 Gas 代付节点，替别人付 gas、赚声誉。",
  taglineEn: "Run a gas-sponsoring node in the SuperPaymaster ecosystem — pay others' gas, earn reputation.",
  steps: [
    {
      img: "/panels/operator-01.png",
      titleZh: "运营者准入向导（AOA）",
      titleEn: "Operator onboarding (AOA)",
      narrationZh: "一个向导走完：质押 → 注册角色 → 部署 xPNTs → 部署 Paymaster → 充值。每一步都上链。",
      narrationEn: "One wizard end-to-end: stake → register role → deploy xPNTs → deploy Paymaster → deposit. Every step goes on-chain.",
      techZh: "注册运营者角色（ROLE_ANODE / DVT / Paymaster 等），EntryPoint 充值后即可代付。",
      techEn: "Register an operator role (ROLE_ANODE / DVT / Paymaster…); after EntryPoint deposit you can sponsor gas.",
      valueZh: "把「为他人代付 gas」变成一条可运营的服务。",
      valueEn: "Turns 'pay gas for others' into a service you can operate.",
      cases: ["OPR-01"],
    },
    {
      img: "/panels/operator-02.png",
      titleZh: "选择 A：没有技术团队？接入 SuperPaymaster",
      titleEn: "Choice A: join SuperPaymaster (if no tech staff)",
      narrationZh: "进阶路径：lockForSuperPaymaster → registerOperator → depositAPNTs，成为 SuperPaymaster 生态的代付方。",
      narrationEn: "The advanced path: lockForSuperPaymaster → registerOperator → depositAPNTs, becoming a sponsor in the SuperPaymaster ecosystem.",
      techZh: "锁仓 + 注册运营者 + 充 aPNTs；与 D6「社区自部署 PaymasterV4」不同，这是协议级准入。",
      techEn: "Lock + register operator + deposit aPNTs; unlike D6's community self-deploy, this is protocol-level admission.",
      valueZh: "从「只服务自己社区」升级为「服务整个生态」。",
      valueEn: "From serving just your community to serving the whole ecosystem.",
      cases: ["OPR-02"],
    },
    {
      img: "/panels/operator-03.png",
      titleZh: "选择 B：自己管理 Paymaster 与充值",
      titleEn: "Choice B: manage Paymaster & funding by yourself",
      narrationZh: "ManagePaymaster：读写 PaymasterV4 配置、给 EntryPoint 充值；SuperPaymasterConfig：看账户状态、充 aPNTs、查声誉。",
      narrationEn: "ManagePaymaster: read/write PaymasterV4 config and top up the EntryPoint; SuperPaymasterConfig: account status, aPNTs deposit, reputation.",
      techZh: "配置生效即影响代付额度与策略；资源前置检查（checkResources）不足会明确阻断 + 指引。",
      techEn: "Config changes affect sponsorship limits/policy; a resource pre-check (checkResources) clearly blocks + guides when short.",
      valueZh: "代付不是黑箱：额度、余额、声誉都看得见、调得动。",
      valueEn: "Sponsorship isn't a black box: limits, balance and reputation are visible and adjustable.",
      cases: ["OPR-03", "OPR-04", "OPR-06"],
    },
  ],
};
