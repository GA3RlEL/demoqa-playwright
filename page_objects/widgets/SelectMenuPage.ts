import { expect, Page } from "@playwright/test";

export class SelectMenuPage {
  locators = {
    selectValue: "#withOptGroup > div",
    selectOne: "#selectOne > div",
    oldStyleSelectMenu: "#oldSelectMenu",
    multiselect: ".css-1wa3eu0-placeholder",
  };

  options = {
    selectValue: [
      "Group 1, option 1",
      "Group 1, option 2",
      "Group 2, option 1",
      "Group 2, option 2",
    ],
    selectOne: ["Dr.", "Mr.", "Mrs.", "Ms.", "Prof.", "Other"],
    oldStyleSelectMenu: [
      "red",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ],
    multiSelect: ["Green", "Blue", "Black", "Red"],
  };

  constructor(private page: Page) {}

  async open() {
    await this.page.goto("/select-menu");
  }

  async setSelectValue(value: string) {
    await this.page.click(this.locators.selectValue);
    await this.page.getByText(value).last().click();
  }

  async setSelectOne(value: string) {
    await this.page.click(this.locators.selectOne);
    await this.page.getByText(value).last().click();
  }

  async setOldStyleSelectMenu(option: string) {
    console.log(option);
    await this.page.selectOption(this.locators.oldStyleSelectMenu, {
      value: option,
    });
  }

  async openMultiSelect() {
    await this.page.locator(this.locators.multiselect).last().click();
  }
  async setMultiSelect(value: string) {
    await this.page.getByText(value).last().click();
  }

  async validateSelectedOption(
    locator: keyof typeof this.locators,
    expectedText?: string | undefined,
    type: "select" | "div" | "multiselect" = "div",
    selectedOptions?: string[]
  ) {
    const selectedOption = this.page.locator(this.locators[locator]);
    let value: null | string = null;
    if (type === "div") {
      value = await selectedOption.textContent();
    }

    if (type === "select") {
      value = await selectedOption.inputValue();
    }
    if (type === "multiselect") {
      if (selectedOptions) {
        for (let option of selectedOptions) {
          await expect(this.page.getByText(option).last()).toBeVisible();
        }
      } else {
        throw new Error(
          "selectedOptions is required for multiselect validation"
        );
      }
    }

    if (expectedText !== undefined) await expect(value).toBe(expectedText);
  }
}
