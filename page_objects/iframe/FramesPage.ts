import { FrameLocator, Page } from "@playwright/test";

export class FramesPage {
  locators = {
    frame1: "#frame1",
    frame2: "#frame2",
    frameHeading: "#sampleHeading",
  };

  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/frames");
  }

  async getFrame1() {
    return this.page.frameLocator(this.locators.frame1);
  }

  async getFrame2() {
    return this.page.frameLocator(this.locators.frame2);
  }

  async getFrameHeading(frame: FrameLocator) {
    return frame.locator(this.locators.frameHeading);
  }
}
