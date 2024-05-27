import * as React from "react";
import PropTypes from "prop-types";
// import { Field, Input } from "@fluentui/react-components";
import { makeStyles, Button } from "@fluentui/react-components";
import { useId, Input, Label, Radio, RadioGroup, Dropdown, Option } from "@fluentui/react-components";

const useStyles = makeStyles({
  form__container: {
    padding: "10px 10px 10px 10px",
    height: "100vh",
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
  const clientSearchTerm = useId("clientSearchTerm");
  const matterSearchTerm = useId("matterSearchTerm");
  const dropdownId = useId("");

  return (
    <div className={styles.form__container}>
      <p className={styles.content__text}>
        Select a Client Matter name in the system to be the name of your new folder.
      </p>
      <form style={{ height: "100vh" }}>
        <div>
          <Label htmlFor={clientSearchTerm} style={{ paddingInlineEnd: "12px" }}>
            Client Search Terms:
          </Label>
          <Input id={clientSearchTerm} />
        </div>
        <div>
          <Label htmlFor={matterSearchTerm} style={{ paddingInlineEnd: "12px" }}>
            Client Search Terms:
          </Label>
          <Input id={matterSearchTerm} />
        </div>
        <div>
          <RadioGroup defaultValue="contains">
            <Radio value="contains" label="Contains" />
            <Radio value="beginning" label="Beginning With" />
          </RadioGroup>
        </div>
        <div>
          <RadioGroup defaultValue="active">
            <Radio value="active" label="Active Only" />
            <Radio value="both" label="Active & Inactive" />
          </RadioGroup>
        </div>
        <div>
          <Label id={dropdownId}>Pick a color</Label>
          <Dropdown clearable aria-labelledby={dropdownId} placeholder="Select a color">
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
          </Dropdown>
        </div>
        <div>
          <Button>Search</Button>
          <Button>Clear</Button>
        </div>
      </form>
    </div>
  );
};

ClientMatterForm.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  message: PropTypes.string,
};

export default ClientMatterForm;
