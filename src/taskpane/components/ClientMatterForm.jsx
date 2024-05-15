import * as React from "react";
import PropTypes from "prop-types";
import { Field, Input } from "@fluentui/react-components";

const ClientMatterForm = (props) => {
  //const styles = useStyles();
  return (
    <Field label="Example field" validationState="success" validationMessage="This is a success message." {...props}>
      <Input />
    </Field>
  );
};

ClientMatterForm.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  message: PropTypes.string,
};

export default ClientMatterForm;
