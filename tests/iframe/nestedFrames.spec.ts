import test, { expect } from "@playwright/test";
import { NestedFramesPage } from "../../page_objects/iframe/NestedFramesPage";

test;

test("Nested IFrame interaction", async ({ page }) => {
  const nestedFramesPage = new NestedFramesPage(page);

  // Open the Nested Frames page
  await nestedFramesPage.open();

  // Get the main frame
  const frame1 = await nestedFramesPage.getFrame1();

  // Assert that the main frame is visible
  await expect(frame1).toBeDefined();

  // Get the text content of the main frame
  const frame1Text = await nestedFramesPage.getFrame1Text(frame1);

  // Get the nested frame
  const nestedFrame1 = await nestedFramesPage.getNestedFrame1();

  // Assert that the nested frame is visible
  await expect(nestedFrame1).toBeDefined();

  // Get the text content of the nested frame
  const nestedFrameText = await nestedFramesPage.getNestedFrameText(
    nestedFrame1
  );

  // Assert that the text content of the main frame and nested frame is as expected
  await expect(frame1Text).toContain("Parent frame");
  await expect(nestedFrameText).toContain("Child Iframe");
});
