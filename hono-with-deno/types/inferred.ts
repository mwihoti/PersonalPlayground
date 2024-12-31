import AnimalSchema from "../mock/animal.schema.ts";
import PersonalDetailSchema from "../mock/personal-details.schema.ts";
import { z } from "zod";

export type PersonalDetail = z.infer<typeof PersonalDetailSchema>;
export type Animal = z.infer<typeof AnimalSchema>;