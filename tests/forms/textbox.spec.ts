import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { TextBoxPage } from "../../page_objects/TextBoxPage";

test("Fill and submit the text box form", async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);
  const fullName = faker.person.fullName();
  const email = faker.internet.email();
  const currentAddress = faker.location.streetAddress();
  const permanentAddress = faker.location.streetAddress();

  // Open the Text Box page
  await textBoxPage.open();

  // Fill the form with random data using Faker.js
  await textBoxPage.fillForm(fullName, email, currentAddress, permanentAddress);

  // Submit the form
  await textBoxPage.submitForm();

  // Validate the form submission has the same data
  await textBoxPage.validateForm(
    fullName,
    email,
    currentAddress,
    permanentAddress
  );
});
