import type { Role } from "./_schema";

// 「协议管理员」—— Baobao。来源：TEST_PLAN D12（ADM-01/02）、D9 Role/SBT、X 跨域。
export const protocolAdmin: Role = {
  key: "protocol-admin",
  ip: "baobao",
  nameZh: "协议管理员",
  nameEn: "Protocol Admin",
  taglineZh: "看护协议本身：状态、配置、权限边界，全部以 SDK 为单一事实源。",
  taglineEn: "Tend the protocol itself: status, config and permission boundaries — with the SDK as the single source of truth.",
  steps: [
    {
      img: "/panels/protocol-admin-01.png",
      titleZh: "协议总览面板",
      titleEn: "Protocol dashboard",
      narrationZh: "在 /admin 查看协议状态与配置：当前链（如 Sepolia 11155111）、各合约地址、paymaster presets 等。",
      narrationEn: "At /admin, view protocol status and config: the active chain (e.g. Sepolia 11155111), contract addresses, paymaster presets, and more.",
      techZh: "地址优先取 @aastar/sdk canonical 表，而非 .env，避免指错（参考历史 0x1f0D 事故）。",
      techEn: "Addresses come from the @aastar/sdk canonical table, not .env, to avoid mis-pointing (cf. the historical 0x1f0D incident).",
      valueZh: "一个面板看清协议此刻的真实状态。",
      valueEn: "One panel to see the protocol's real, current state.",
      cases: ["ADM-01"],
    },
    {
      img: "/panels/protocol-admin-02.png",
      titleZh: "写操作有权限闸门",
      titleEn: "Writes are permission-gated",
      narrationZh: "只有管理员能做协议写操作；非管理员访问写操作会被明确拒绝（403），不会静默放行。",
      narrationEn: "Only admins can perform protocol writes; a non-admin hitting a write op is clearly rejected (403), never silently allowed.",
      techZh: "后端鉴权守卫 + 角色校验（ROLE_* / SBT）；前端也按角色隐藏不可用入口。",
      techEn: "Backend auth guards + role checks (ROLE_* / SBT); the frontend also hides actions you can't use.",
      valueZh: "权限边界清晰，治理动作可追溯、可审计。",
      valueEn: "Clear permission boundaries; governance actions are traceable and auditable.",
      cases: ["ADM-02", "ROLE-01"],
    },
    {
      img: "/panels/protocol-admin-03.png",
      titleZh: "全链一致，单一事实源",
      titleEn: "One chain-consistent source of truth",
      narrationZh: "网络切换时 chainId 贯穿 publicClient / SDK / 浏览器一致；地址、社区聚合、权限都以 SDK 为准。",
      narrationEn: "On network switch, chainId stays consistent across publicClient / SDK / explorer; addresses, community aggregation and permissions all defer to the SDK.",
      techZh: "禁止硬编码地址；SDK canonical > .env，从根上避免环境漂移。",
      techEn: "No hard-coded addresses; SDK canonical > .env, eliminating environment drift at the root.",
      valueZh: "协议在多链多环境下行为一致、不漂移。",
      valueEn: "The protocol behaves consistently across chains and environments — no drift.",
      cases: ["X-06", "ADM-01"],
    },
  ],
};
