import test, { expect } from "@playwright/test";
import { UploadDownloadPage } from "../../page_objects/files/UploadDownloadPage";

test("Download file", async ({ page }) => {
  const downloadPage = new UploadDownloadPage(page);

  // Open the upload/download page
  await downloadPage.open();

  // Download the file
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    downloadPage.downloadFile(),
  ]);

  // Verify the downloaded file
  const filePath = await download.path();
  expect(filePath).toBeDefined();
});
