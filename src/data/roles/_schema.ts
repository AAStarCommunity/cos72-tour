// Role tour data model. Adding a role = add one file like individual.ts + panels.

export type IP = "xiaoj" | "xiaom" | "baobao";

export interface ComicStep {
  /** panel image under /public/panels/ */
  img: string;
  titleZh: string;
  titleEn: string;
  /** 旁白：这一步在做什么（口语、面向普通人） */
  narrationZh: string;
  narrationEn: string;
  /** 背后技术原理 */
  techZh: string;
  techEn: string;
  /** 业务价值 */
  valueZh: string;
  valueEn: string;
  /** 可选：真实链上凭证 */
  evidence?: { label: string; url: string };
  /** 关联测试用例 ID（来自 TEST_PLAN） */
  cases?: string[];
}

export interface Role {
  key: string;
  ip: IP;
  nameZh: string;
  nameEn: string;
  /** 一句话角色定位 */
  taglineZh: string;
  taglineEn: string;
  steps: ComicStep[];
  /** 占位：未做的角色 */
  comingSoon?: boolean;
}

export const IP_META: Record<IP, { name: string; emoji: string; desc: string }> = {
  xiaoj: { name: "Xiao J", emoji: "🎒", desc: "the author's cartoon · individual view" },
  xiaom: { name: "Xiao M", emoji: "🍄", desc: "mushroom builder · community/operator" },
  baobao: { name: "Baobao", emoji: "🐱", desc: "Devon-cat explainer · protocol/security" },
};
