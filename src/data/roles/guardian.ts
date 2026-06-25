import type { Role } from "./_schema";

// 「Guardian 守护人」—— Baobao。来源：TEST_PLAN D5（REC-01..06）、social-recovery.md。
export const guardian: Role = {
  key: "guardian",
  ip: "baobao",
  nameZh: "Guardian 守护人",
  nameEn: "Guardian",
  taglineZh: "做别人的守护人：在他丢设备时，帮他把账户找回来。",
  taglineEn: "Be someone's guardian: help them recover when they lose a device.",
  steps: [
    {
      img: "/panels/guardian-01.png",
      titleZh: "成为某人 3 个守护人之一",
      titleEn: "Become 1 of someone's 3 guardians",
      narrationZh: "朋友创建账户时把你设为 3 个守护人之一（2-of-3）。你不需要被特别保护——一个普通 AirAccount 就能当守护人。",
      narrationEn: "A friend sets you as one of their 3 guardians (2-of-3) at account creation. You don't need special protection — a normal AirAccount can be a guardian.",
      techZh: "守护人只是「能签名的一方」，借用一个可签名身份；不递归、不绑定任何单一设备。",
      techEn: "A guardian is just 'a party who can sign', borrowing a signing identity; non-recursive, not tied to any single device.",
      valueZh: "互为守护人——一张人际安全网，而不是又一把要保管的钥匙。",
      valueEn: "Guard each other — a social safety net, not yet another key to keep.",
      cases: ["REC-01"],
    },
    {
      img: "/panels/guardian-02.png",
      titleZh: "用你方便的渠道签名",
      titleEn: "Co-sign through whatever channel suits you",
      narrationZh: "支持多种渠道：已有 AirAccount 的 passkey、新建 email+FaceID（KMS ECDSA）、MetaMask（personal_sign）、或纯客户端 P-256 passkey（iCloud/Google）。",
      narrationEn: "Many channels: an existing AirAccount passkey, a new email+FaceID (KMS ECDSA), MetaMask (personal_sign), or a pure-client P-256 passkey (iCloud/Google).",
      techZh: "后端把断言编码（encodeWebAuthnAssertion）后 relay proposeRecoveryWithSig 上链；EOA/passkey/混合都行。",
      techEn: "The backend encodes the assertion (encodeWebAuthnAssertion) and relays proposeRecoveryWithSig on-chain; EOA / passkey / hybrid all work.",
      valueZh: "守护人用自己最顺手的方式签，门槛极低。",
      valueEn: "Guardians sign the way that's easiest for them — almost no barrier.",
      cases: ["REC-02", "REC-03", "REC-04", "REC-05"],
    },
    {
      img: "/panels/guardian-03.png",
      titleZh: "2-of-3 达成，账户找回",
      titleEn: "2-of-3 reached, account restored",
      narrationZh: "发起恢复 → 你和另一个守护人支持 → 执行换 owner。任意 2 个就够；账户地址不变，Guard 配置不受影响。",
      narrationEn: "Recovery is initiated → you and one more guardian support → execute to swap the owner. Any 2 suffice; the account address stays the same and Guard config is untouched.",
      techZh: "门限不足无法执行（合约 revert）；社区多签守护人只占 1/3，单独永远够不到门限。",
      techEn: "Below threshold it can't execute (contract reverts); the community multisig guardian is only 1 of 3 and can never reach the threshold alone.",
      valueZh: "丢一个守护人也能恢复；任何单点都偷不走账户。",
      valueEn: "Lose one guardian and recovery still works; no single point can steal the account.",
      cases: ["REC-06", "REC-07"],
    },
  ],
};
