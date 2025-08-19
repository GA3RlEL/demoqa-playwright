import { Page } from "@playwright/test";

export class AlertsPage {
  locators = {
    alertButton: "#alertButton",
    confirmButton: "#confirmButton",
    promptButton: "#promtButton",
  };

  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/alerts");
  }

  async showAlert() {
    await this.page.click(this.locators.alertButton);
  }

  async showConfirmDialog() {
    await this.page.click(this.locators.confirmButton);
  }

  async showPromptDialog() {
    await this.page.click(this.locators.promptButton);
  }
}
