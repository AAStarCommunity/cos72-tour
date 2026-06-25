import type { Role } from "./_schema";
import { individual } from "./individual";
import { visitor } from "./visitor";
import { communityAdmin } from "./community-admin";
import { operator } from "./operator";
import { guardian } from "./guardian";
import { protocolAdmin } from "./protocol-admin";

export const roles: Role[] = [
  individual,
  visitor,
  communityAdmin,
  operator,
  guardian,
  protocolAdmin,
];
