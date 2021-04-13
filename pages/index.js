import Head from "next/head";
import { Form, Field } from "react-final-form";
import styles from "../styles/styles.module.scss";

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid emaill address";
  }
  if (!values.checkbox) {
    errors.checkbox = "You must accept our terms";
  }
  if (!values.select) {
    errors.select = "Select is required";
  }
  if (!values.radio) {
    errors.radio = "You must accept our terms";
  }
  return errors;
};

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Final Form</title>
      </Head>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <div className={styles.formRow}>
                  <label>Email</label>
                  <input {...input} type="email" placeholder="Email" />
                  {meta.error && meta.touched && (
                    <span className={styles.error}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <Field name="select" component="select">
              {({ input, meta }) => (
                <div className={styles.formRow}>
                  <label htmlFor="select">Select a color to continue</label>
                  <select {...input}>
                    <option value="" label="Select a color" />
                    <option value="red" label="red" />
                    <option value="blue" label="blue" />
                    <option value="green" label="green" />
                  </select>
                  {meta.error && meta.touched && (
                    <span className={styles.error} style={{ display: "block" }}>
                      {meta.error}
                    </span>
                  )}
                </div>
              )}
            </Field>

            <Field name="checkbox">
              {({ input, meta }) => (
                <div className={styles.formRow}>
                  <label>
                    <input {...input} name="checkbox" type="checkbox" />
                    Accept Terms & Conditions
                  </label>
                  {meta.error && meta.touched && (
                    <span className={styles.error}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <div className={styles.formRow}>
              <Field
                name="radio"
                component="input"
                type="radio"
                value="Option 1"
              >
                {({ input, meta }) => (
                  <div>
                    <label>
                      One
                      <input {...input} type="radio" value="Option 1" />
                    </label>
                  </div>
                )}
              </Field>
              <Field
                name="radio"
                component="input"
                type="radio"
                value="Option 2"
              >
                {({ input, meta }) => (
                  <div>
                    <label>
                      Two
                      <input {...input} type="radio" value="Option 2" />
                    </label>
                    {meta.error && meta.touched && (
                      <span className={styles.error}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <button type="submit" className={"disabled-btn"}>
              Sign In
            </button>
          </form>
        )}
      />
    </div>
  );
}
