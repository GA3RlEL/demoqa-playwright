import test from "@playwright/test";
import { UploadDownloadPage } from "../../page_objects/files/UploadDownloadPage";
import path from "path";

test("Upload file", async ({ page }) => {
  const uploadPage = new UploadDownloadPage(page);
  const filePath = path.resolve(
    __dirname,
    "../../fixtures/files/uploadFile.txt"
  );
  const fileName = path.basename(filePath);

  // Open the upload page
  await uploadPage.open();

  // Upload the file
  await uploadPage.uploadFile(filePath);

  // Verify the file is uploaded successfully
  await uploadPage.verifyUploadedFile(fileName);
});
