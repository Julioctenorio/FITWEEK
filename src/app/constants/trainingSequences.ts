import type { TrainingPlan } from "../types/data";

export const trainingSequences: Record<TrainingPlan, string[]> = {
  fullbody: ["FULLBODY", "FULLBODY", "FULLBODY", "rest", "FULLBODY", "FULLBODY", "rest"],
  abc: ["A", "B", "C", "rest", "A", "B", "rest"],
  personalizado: ["PERSONALIZADO", "PERSONALIZADO", "PERSONALIZADO", "PERSONALIZADO", "PERSONALIZADO", "PERSONALIZADO", "PERSONALIZADO"],
};

export const levelToPlanMap: Record<string, TrainingPlan> = {
  "1": "fullbody",      
  "2": "abc",           
  "3": "personalizado", 
};

export const planNames: Record<TrainingPlan, string> = {
  fullbody: "FullBody",
  abc: "ABC Split",
  personalizado: "Personalizado",
};