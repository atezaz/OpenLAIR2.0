import {LearningActivity} from "./learningActivity.model";
import {LearningEvent} from "./learningEvent.model";
import {indicator} from "./indicator.model";

export interface PathObject {
  event?: LearningEvent;
  activity?: LearningActivity;
  indicator?: indicator;
}
