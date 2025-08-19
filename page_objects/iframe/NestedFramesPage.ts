import { FrameLocator, Page } from "@playwright/test";

export class NestedFramesPage {
  locators = {
    frame1: "#frame1",
    nestedFrame1: "iframe",
  };

  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/nestedframes");
  }

  async getFrame1() {
    return this.page.frameLocator(this.locators.frame1);
  }

  async getNestedFrame1() {
    const frame1 = await this.getFrame1();
    return frame1.frameLocator(this.locators.nestedFrame1);
  }

  async getNestedFrameText(frame: FrameLocator) {
    return frame.locator("body").textContent();
  }

  async getFrame1Text(frame: FrameLocator) {
    return frame.locator("body").textContent();
  }
}
