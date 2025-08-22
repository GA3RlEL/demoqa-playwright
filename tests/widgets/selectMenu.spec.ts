import test, { expect } from "@playwright/test";
import { SelectMenuPage } from "../../page_objects/widgets/SelectMenuPage";

test("Validate custom selectValue menu", async ({ page }) => {
  const selectMenuPage = new SelectMenuPage(page);

  // Open the page
  await selectMenuPage.open();

  // Iterate through each option in the selectValue menu
  for (let option of selectMenuPage.options.selectValue) {
    // Select the option
    await selectMenuPage.setSelectValue(option);

    // Validate the selected option
    await selectMenuPage.validateSelectedOption("selectValue", option);
  }
});

test("Validate custom selectOne menu", async ({ page }) => {
  const selectMenuPage = new SelectMenuPage(page);

  // Open the page
  await selectMenuPage.open();

  // Iterate through each option in the selectOne menu
  for (let option of selectMenuPage.options.selectOne) {
    // Select the option
    await selectMenuPage.setSelectOne(option);

    // Validate the selected option
    await selectMenuPage.validateSelectedOption("selectOne", option);
  }
});

test("Validate native oldStyleSelectMenu", async ({ page }) => {
  const selectMenuPage = new SelectMenuPage(page);

  // Open the page
  await selectMenuPage.open();

  // Iterate through each option in the oldStyleSelectMenu
  for (let value of selectMenuPage.options.oldStyleSelectMenu) {
    // Select the option
    await selectMenuPage.setOldStyleSelectMenu(value);

    // Validate the selected option
    await selectMenuPage.validateSelectedOption(
      "oldStyleSelectMenu",
      value,
      "select"
    );
  }
});

test("Validate multiSelect drop down", async ({ page }) => {
  const selectMenuPage = new SelectMenuPage(page);
  const selectedOptions: string[] = [];

  // Open the page
  await selectMenuPage.open();

  // Open the multiSelect drop down
  await selectMenuPage.openMultiSelect();

  // Iterate through each option in the multiSelect menu
  for (let option of selectMenuPage.options.multiSelect) {
    // Select the option
    selectedOptions.push(option);
    await selectMenuPage.setMultiSelect(option);
    // Validate the selected option
    await selectMenuPage.validateSelectedOption(
      "multiselect",
      undefined,
      "multiselect",
      selectedOptions
    );
  }
});
