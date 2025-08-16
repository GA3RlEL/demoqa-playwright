import { expect, Page } from "@playwright/test";

export class TextBoxPage {
  private readonly URL = "/text-box";

  constructor(private page: Page) {}

  async open() {
    await this.page.goto(this.URL);
  }

  async fillForm(
    fullName: string,
    email: string,
    currentAddress: string,
    permanentAddress: string
  ) {
    await this.page.fill("#userName", fullName);
    await this.page.fill("#userEmail", email);
    await this.page.fill("#currentAddress", currentAddress);
    await this.page.fill("#permanentAddress", permanentAddress);
  }

  async submitForm() {
    await this.page.click("#submit");
  }

  async validateForm(
    fullName: string,
    email: string,
    currentAddress: string,
    permanentAddress: string
  ) {
    const outputLocator = this.page.locator("#output");

    // ensure output container is visible, then assert it contains expected values
    await expect(outputLocator).toBeVisible();

    await expect(outputLocator).toContainText(fullName);
    await expect(outputLocator).toContainText(email);
    await expect(outputLocator).toContainText(currentAddress);
    await expect(outputLocator).toContainText(permanentAddress);
  }
}
