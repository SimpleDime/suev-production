/*
 * Contact form handler.
 *
 * Messages are delivered to suev.production@gmail.com through FormSubmit
 * (https://formsubmit.co), a free form-to-email service for static sites.
 * The very first submission triggers a one-time activation email to that
 * inbox; click "Activate Form" in it, and every message after that is
 * delivered normally.
 */
const CONTACT_EMAIL = "suev.production@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const SUCCESS_MESSAGE = "Thank you! We’ll contact you in 1-2 business days!";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const errorEl = form.querySelector(".form-error");
  const button = form.querySelector("button[type=submit]");

  const showError = () => {
    errorEl.innerHTML = "";
    errorEl.append("Something went wrong. Please try again or email us at ");
    const link = document.createElement("a");
    link.href = `mailto:${CONTACT_EMAIL}`;
    link.textContent = CONTACT_EMAIL;
    link.style.textDecoration = "underline";
    errorEl.append(link, ".");
    errorEl.hidden = false;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    errorEl.hidden = true;
    button.disabled = true;

    const data = new FormData(form);
    data.append("_subject", `New message from ${data.get("name")} via the SUEV Production website`);
    data.append("_template", "table");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) !== "true") {
        throw new Error(result.message || `HTTP ${response.status}`);
      }

      const success = document.createElement("p");
      success.className = "form-success";
      success.textContent = SUCCESS_MESSAGE;
      form.replaceWith(success);
    } catch (err) {
      console.error(err);
      showError();
      button.disabled = false;
    }
  });
});
