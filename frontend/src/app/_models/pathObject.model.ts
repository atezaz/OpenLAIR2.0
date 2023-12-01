import {LearningActivity} from "./learningActivity.model";
import {LearningEvent} from "./learningEvent.model";
import {indicator} from "./indicator.model";
import {Reference} from "./reference.model";

export interface PathObject {
  event?: LearningEvent;
  activity?: LearningActivity;
  indicator?: indicator;
  reference?: Reference;
}
