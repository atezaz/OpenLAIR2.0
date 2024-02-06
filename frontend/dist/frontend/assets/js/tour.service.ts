import {Injectable} from "@angular/core";
import * as introJs from "intro.js"

@Injectable()
export class TourService {
  myTour() {
    var introguide = introJs.default();
    // var startbtn   = $('#startdemotour');
    introguide.setOptions({
      steps: [
        {
          element: '.step0',
          intro: 'This guided tour will explain how Learning Analytics indicators archive OpenLAIR can be used. <br> You can Exit the tour anytime you want.',
          position: 'bottom' as any
        },
        {
          element: '.stepDefine',
          intro: 'You can CLICK here anytime for the definition of each filter item. i.e. <br> - Learning Events <br> - Learning Activities <br> - Indicators <br> - Metrics <br>',
          position: 'bottom' as any
        },
        {
          element: '.step1',
          intro: 'Step 1: Here you can select your Learning Events or Objectives.',
          position: 'right' as any
        },
        {
          element: '.step2',
          intro: 'Step 2: Here you can select your Learning Activities.',
          position: 'right' as any
        },
        {
          element: '.step3',
          intro: 'Step 3 (Optional): If you are looking for any specific Indicator, here you can search by indicator.',
          position: 'right' as any
        },
        {
          element: document.querySelector('.step4') as HTMLElement,
          intro: 'Step 4: Here you can select (x) the Indicator(s) you want.',
          position: 'bottom' as any
        },
        {
          element: document.querySelector('.stepViewMetrics') as HTMLElement,
          intro: 'If you want to see the Metrics CLICK on the Indicator. <br> Each indicator is followed by its reference "[No.]"',
          position: 'right' as any
        },
        {
          element: document.querySelector('.stepReview') as HTMLElement,
          intro: 'If you want to see the ratings for a specific indicator, or create a review yourself, just click the star icon.',
          position: 'right' as any
        },
        {
          element: '.stepMetrics',
          intro: 'Step 5 (Optional): If you are looking for any specific Metric, here you can search by metrics.',
          position: 'right' as any
        },
        {
          element: '.stepVisualize',
          intro: "Step 6: After selecting the indicator(s), CLICK here to VISUALIZE the chosen indicator(s). This will give you an idea of what type of visualization type one can use. <br> You can also download the Dashboard and use it as a mockup (e.g., for meetings/presentations). <br> <br> NOTE: The selected indicators that are similar will be plotted in a single visualization type. <br> <br> For example the selected indicators 'Predict Student Grades [115]' and 'Predict Final Grade [119]' will be plotted in a single visualization type.",
          position: 'bottom' as any
        },
        {
          element: '.stepDownload',
          intro: "In case you want the selected indicator(s) in a JSON (.json) format/file. CLICK here to DOWNLOAD the Indicator(s) as JSON along with their Metrics.",
          position: 'bottom' as any
        },
        {
          element: '.stepDownloadText',
          intro: "In case you want the selected indicator(s) in a TEXT (.txt) format/file. CLICK here to DOWNLOAD the Indicator(s) as TEXT along with their Metrics.",
          position: 'bottom' as any
        },
        {
          element: '.stepReset',
          intro: "In case you want to Deselect the selected indicator(s) and RESET the filters. CLICK here to RESET.",
          position: 'left' as any
        },
        {
          element: '.stepReferences',
          intro: "Here you can see the References for your selected Indicators.",
          position: 'left' as any
        },
        {
          element: '.stepStartTour',
          intro: "If you want to have this TOUR again you can start here anytime.  <br> <br> &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;HAVE FUN!",
          position: 'left' as any
        }
      ]
    });
    introguide.start();
  }
}
