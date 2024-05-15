import * as React from "react";
import PropTypes from "prop-types";
// import { Field, Input } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  form__container: {
    padding: "10px 10px 10px 10px",
  },
  content__text: {
    fontFamily: "Inter",
    fontSize: "11px",
    fontWeight: "400",
    lineHeight: "15px",
    textAlign: "left",
  },
});

const ClientMatterForm = () => {
  const styles = useStyles();

  return (
    <div className={styles.form__container}>
      <p className={styles.content__text}>
        Select a Client Matter name in the system to be the name of your new folder.
      </p>
      {/* <Field label="Example field" validationState="success" validationMessage="This is a success message." {...props}>
        <Input />
      </Field> */}
    </div>
  );
};

ClientMatterForm.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  message: PropTypes.string,
};

export default ClientMatterForm;
