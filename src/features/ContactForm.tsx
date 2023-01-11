import { createSignal } from "solid-js";
import Field from "~/components/Field";
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

  return (
    <form use:formSubmit={onFormSubmit}>
      <Field floatLabel={true} name="fullName">
        Name
      </Field>

      <Field floatLabel={true} name="email">
        Email
      </Field>

      <Field floatLabel={true} type="textarea">
        Request
      </Field>

      <div class="contact-form-footer d-flex justify-content-between align-content-center">
        <div class="grecaptcha-terms mb-md-0">
          <p class="sm-body mt-3 text-left">
            This site is protected by reCAPTCHA and the Google&nbsp;
            <a href="https://policies.google.com/privacy">Privacy Policy</a>
            &nbsp;and&nbsp;
            <a href="https://policies.google.com/terms">Terms of Service</a>
            &nbsp;apply.
          </p>
        </div>

        <div class="flex flex-row-reverse">
          <button
            class="bg-white text-hip-black min-h-[40px] min-w-[120px] rounded-3xl self-end mt-5"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
