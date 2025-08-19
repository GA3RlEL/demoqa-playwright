import { Page } from "@playwright/test";

export class ProgressBarPage {
  locators = {
    startStoppedButton: "#startStopButton",
    progressBar: ".progress-bar",
  };

  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/progress-bar");
  }

  async startStoppedProgress() {
    await this.page.click(this.locators.startStoppedButton);
  }

  async getProgressBar() {
    return this.page.locator(this.locators.progressBar);
  }
}
