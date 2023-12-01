import {indicator} from "./indicator.model";

export interface LearningActivity {
  _id?: any;
  name?: string;
  indicatorIds?: any[]
  indicators?: indicator[]
}
