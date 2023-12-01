import {LearningActivity} from "./learningActivity.model";

export interface LearningEvent {
  _id?: any;
  name?: string;
  activityIds?: any[];
  activities?: LearningActivity[];
}
