import { expect, Page } from "@playwright/test";

export class UploadDownloadPage {
  private readonly URL = "/upload-download";

  constructor(private page: Page) {}

  async open() {
    await this.page.goto(this.URL);
  }

  async uploadFile(filePath: string) {
    await this.page.setInputFiles("#uploadFile", filePath);
  }

  async verifyUploadedFile(fileName: string) {
    const uploadedFile = await this.page
      .locator("#uploadedFilePath")
      .textContent();
    console.log(uploadedFile);
    console.log(fileName);
    await expect(uploadedFile).toContain(fileName);
  }
}
