import { PersonalDetail } from "./inferred.ts";

export interface PersonalDetailWithSalt extends PersonalDetail {
  salt: string;
}