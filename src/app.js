import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Bridgepointe Tools Guide to Success";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Get familiar with your tool's features",
        icon: "utility:edit",
      },
      {
        label: "Revisit trainings at your convenience",
        icon: "utility:refresh",
      },
      {
        label: "Become an expert on your tool with certifications",
        icon: "utility:brush",
      },
    ];
  }
}
