import { expect, test } from "@playwright/test";
import { AlertsPage } from "../../page_objects/alerts/AlertsPage";

test("Alert visibility", async ({ page }) => {
  const alertsPage = new AlertsPage(page);

  // Open the Alerts page
  await alertsPage.open();

  // Listen for the alert dialog and store the message in a promise
  const messagePromise = new Promise<String>((resolve) => {
    page.on("dialog", async (dialog) => {
      try {
        await dialog.accept();
        resolve(dialog.message());
      } catch (error) {
        resolve(error);
      }
    });
  });

  // Click the button to show the alert
  await alertsPage.showAlert();

  // Assert that the alert was shown and retrieve the message
  const message = await messagePromise;
  await expect(message).toBe("You clicked a button");
});

test("Alert dialog confirmation", async ({ page }) => {
  const alertsPage = new AlertsPage(page);

  // Open the Alerts page
  await alertsPage.open();

  // Listen for the alert dialog and click confirm
  await page.once("dialog", (dialog) => dialog.accept());

  // Click the button to show the confirm dialog
  await alertsPage.showConfirmDialog();

  // Assert that "You selected Ok" is displayed
  await expect(page.getByText("You selected Ok")).toBeVisible();

  // Listen for the dialog and click cancel
  await page.once("dialog", (dialog) => dialog.dismiss());

  // Click the button to show the confirm dialog again
  await alertsPage.showConfirmDialog();

  // Assert that "You selected Cancel" is displayed
  await expect(page.getByText("You selected Cancel")).toBeVisible();
});

test("Alert dialog with custom message", async ({ page }) => {
  const alertsPage = new AlertsPage(page);
  const message = "This is a custom alert message";

  // Open the Alerts page
  await alertsPage.open();

  // Listen for the alert dialog and enter the custom message
  await page.once("dialog", (dialog) => dialog.accept(message));

  // Click the button to show the alert
  await alertsPage.showPromptDialog();

  // Assert that the custom message is displayed
  await expect(page.getByText(`You entered ${message}`)).toBeVisible();
});
