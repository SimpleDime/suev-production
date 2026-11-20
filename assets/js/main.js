/*
 * Contact form handler.
 *
 * The original site sent messages to Hostinger's built-in backend, which does
 * not exist on a static copy. Paste the URL of a form service that accepts
 * POSTed form data (e.g. Formspree, Getform, Basin) into FORM_ENDPOINT below.
 */
const FORM_ENDPOINT = "";

const SUCCESS_MESSAGE = "Thank you! We’ll contact you in 1-2 business days!";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const errorEl = form.querySelector(".form-error");
  const button = form.querySelector("button[type=submit]");

  const showError = (text) => {
    errorEl.textContent = text;
    errorEl.hidden = false;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    errorEl.hidden = true;

    if (!FORM_ENDPOINT) {
      showError("The contact form isn't connected yet. Please reach us on LinkedIn or Instagram.");
      return;
    }

    button.disabled = true;
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const success = document.createElement("p");
      success.className = "form-success";
      success.textContent = SUCCESS_MESSAGE;
      form.replaceWith(success);
    } catch (err) {
      console.error(err);
      showError("Something went wrong. Please try again.");
      button.disabled = false;
    }
  });
});
