import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
  makeStyles,
  Checkbox,
} from "@fluentui/react-components";
import { Alert28Filled } from "@fluentui/react-icons";

const useStyles = makeStyles({
  Dialog__main: {
    fontFamily: "Inter",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  Dialog__surface: {
    borderRadius: "0px",
    padding: "0px",
    borderColor: "#909090",
    maxWidth: "800px",
  },
  Dialog__Title: {
    fontWeight: "400",
    fontSize: "9px",
    lineHeight: "10.89px",
    textAlign: "left",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "13px",
    textAlign: "left",
  },
  checkContainer: {
    display: "grid",
    gridTemplateColumns: "70% 30%",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "10% 90%",
  },
  addCheck: {
    fontSize: "7px",
    fontWeight: "400",
    lineHeight: "8.47px",
    textAlign: "left",
  },
  addCheckButton: {
    fontSize: "7px",
    fontWeight: "400",
    lineHeight: "8.47px",
    textAlign: "left",
    minWidth: "50px",
  },
});

const Modal = () => {
  const styles = useStyles();

  return (
    <div className={styles.Dialog__main}>
      <Dialog modalType="modal" defaultOpen="true">
        <DialogSurface
          style={{
            //backgroundColor: "#FFF",
            //backgroundColor: "#F0F0F0",
            borderRadius: "0px",
            padding: "10px",
            borderColor: "#909090",
            maxWidth: "420px",
          }}
        >
          <DialogBody>
            {/* style={{ background: "#F0F8FF" }} */}
            <DialogTitle className={styles.Dialog__Title}>Create New Client Matter Folder</DialogTitle>
            <DialogContent className={styles.content}>
              <div className={styles.gridContainer}>
                <div>
                  <Alert28Filled />
                </div>
                <div>
                  New Client Matter Folder creation helps you to quickly and easily find folder names that follow our
                  internal naming conventions and align to existing folders already in the DMS, saving you time and
                  helping with Records Management and Email Retention policy compliance.
                </div>
              </div>
            </DialogContent>
            <div className={styles.addCheck}>
              <Checkbox />
              In the future, do not show me this dialog box
            </div>
            <DialogActions style={{ paddingTop: "10px" }}>
              <DialogTrigger disableButtonEnhancement>
                <Button className={styles.addCheckButton} appearance="secondary">
                  OK
                </Button>
              </DialogTrigger>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
};

export default Modal;
