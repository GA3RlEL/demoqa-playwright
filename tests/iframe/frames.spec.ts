import { expect, test } from "@playwright/test";
import { FramesPage } from "../../page_objects/iframe/FramesPage";

test("IFrame interaction", async ({ page }) => {
  const framesPage = new FramesPage(page);

  // Open the Frames page
  await framesPage.open();

  // Get the frames
  const frame1 = await framesPage.getFrame1();
  const frame2 = await framesPage.getFrame2();

  // Assert that the frames are visible
  await expect(frame1).toBeDefined();
  await expect(frame2).toBeDefined();

  // Get the headings from both frames
  const frame1Heading = await framesPage.getFrameHeading(frame1);
  const frame2Heading = await framesPage.getFrameHeading(frame2);

  // Assert that the headings are correct
  await expect(frame1Heading).toHaveText("This is a sample page");
  await expect(frame2Heading).toHaveText("This is a sample page");
});
