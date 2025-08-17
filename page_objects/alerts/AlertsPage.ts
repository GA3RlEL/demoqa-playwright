import { Page } from "@playwright/test";

export class AlertsPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/alerts");
  }

  async showAlert() {
    await this.page.click("#alertButton");
  }

  async showConfirmDialog() {
    await this.page.click("#confirmButton");
  }

  async showPromptDialog() {
    await this.page.click("#promtButton");
  }
}
