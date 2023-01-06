import { createSignal } from "solid-js";
import { useForm } from "~/utils/contact-form-validator";
const ContactForm = () => {
  const [loading, setLoading] = createSignal(false);
  const [showSuccess, setShowSuccess] = createSignal(false);
  const [showError, setShowError] = createSignal(false);

  const { validate, formSubmit, errors } = useForm({
    errorClass: "error-input",
  });

  const onFormSubmit = (form: any) => {
    // form.submit()
    console.log("Done");
  };

  const userNameExists = async ({ value }: any) => {
    // const exists = await fetchUserName(value);
    return value && `${value} is already being used`;
  };
  //   const matchesPassword = ({ value }) =>
  //     value === fields.password ? false : "Passwords must Match";

  return (
    <form use:formSubmit={onFormSubmit}>
      <div class="sm-form-field--square">
        <label for="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id=""
          use:validate={[userNameExists]}
        />
      </div>

      <div class="sm-form-field--square">
        <label for="email">Email</label>
        <input type="email" name="email" id="" />
      </div>

      <div class="sm-form-field--square">
        <label for="request">Questions &amp; Comments</label>
        <input type="textarea" name="request" id="" />
      </div>
      <div class="contact-form-footer d-flex justify-content-between align-content-center">
        <div class="grecaptcha-terms mb-md-0">
          <p class="sm-body mt-3">
            This site is protected by reCAPTCHA and the Google&nbsp;
            <a href="https://policies.google.com/privacy">Privacy Policy</a>
            &nbsp;and&nbsp;
            <a href="https://policies.google.com/terms">Terms of Service</a>
            &nbsp;apply.
          </p>
        </div>

        <div class="d-flex flex-row-reverse">
          <button class="hmdva-button hmdva-button--primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
