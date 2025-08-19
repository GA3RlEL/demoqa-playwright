import { expect, Page } from "@playwright/test";

export class UploadDownloadPage {
  private readonly URL = "/upload-download";

  locators = {
    uploadFile: "#uploadFile",
    uploadedFilePath: "#uploadedFilePath",
    downloadButton: "#downloadButton",
  };

  constructor(private page: Page) {}

  async open() {
    await this.page.goto(this.URL);
  }

  async uploadFile(filePath: string) {
    await this.page.setInputFiles(this.locators.uploadFile, filePath);
  }

  async verifyUploadedFile(fileName: string) {
    const uploadedFile = await this.page.locator(
      this.locators.uploadedFilePath
    );
    await expect(uploadedFile).toContainText(fileName);
  }

  async downloadFile() {
    this.page.click(this.locators.downloadButton);
  }
}
