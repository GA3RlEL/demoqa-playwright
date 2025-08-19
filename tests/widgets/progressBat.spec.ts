import { expect, test } from "@playwright/test";
import { ProgressBarPage } from "../../page_objects/widgets/ProgressBarPage";

test("Validate progress bar functionality", async ({ page }) => {
  const progressBarPage = new ProgressBarPage(page);

  // Open the progress bar page
  await progressBarPage.open();

  // Get the progress bar locator
  const progressBar = await progressBarPage.getProgressBar();

  // Start the stopped progress bar
  await progressBarPage.startStoppedProgress();

  // Wait for the progress bar to reach 100%
  const deadline = Date.now() + 20000; // 20 seconds timeout
  let progress = await progressBar.getAttribute("aria-valuenow");
  while (progress !== "100" && Date.now() < deadline) {
    await page.waitForTimeout(1000); // Wait for 1 second
    progress = await progressBar.getAttribute("aria-valuenow");
  }

  // Verify the progress bar is at 100%
  expect(progress).toBe("100");

  // Verify the progress bar has success class
  expect(progressBar).toContainClass("bg-success");
});
