import { BASE_URL } from "../constants/urls";
import { expect, Page } from "@playwright/test";

export class TextBoxPage {
  private readonly URL = BASE_URL + "text-box";

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
    const outputLocator = await this.page.locator("#output");
    const outputText = await outputLocator.textContent();

    expect(outputText).toContain(`Name:${fullName}`);
    expect(outputText).toContain(`Email:${email}`);
    expect(outputText).toContain(`Current Address :${currentAddress}`);
    expect(outputText).toContain(`Permananet Address :${permanentAddress}`);
  }
}
