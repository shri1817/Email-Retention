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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Dialog__surface: {
    backgroundColor: "#FFF",
    borderRadius: "0px",
    padding: "0px",
    borderColor: "#909090",
    maxWidth: "800px",
  },
  content: {
    display: "flex",
    //backgroundColor: "#F0F0F0",
    flexDirection: "column",
    rowGap: "10px",
    fontFamily: "Inter",
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "13px",
    textAlign: "left",
  },
  checkContainer: {
    display: "grid",
    gridTemplateColumns: "70% 30%",
    //backgroundColor: "#2196F3",
    // padding: "10px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "10% 90%",
  },
  addCheck: {
    fontFamily: "Inter",
    fontSize: "7px",
    fontWeight: "400",
    lineHeight: "8.47px",
    textAlign: "left",
  },
});

const Modal = () => {
  const styles = useStyles();

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className={styles.Dialog__main}>
      <Dialog modalType="modal" defaultOpen="true">
        {/* <DialogTrigger disableButtonEnhancement>
          <Button>Open non-modal dialog</Button>
        </DialogTrigger> */}
        <DialogSurface
          style={{
            backgroundColor: "#FFF",
            //backgroundColor: "#F0F0F0",
            borderRadius: "0px",
            padding: "10px",
            borderColor: "#909090",
            maxWidth: "420px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <DialogBody>
              {/* style={{ background: "#F0F8FF" }} */}
              <DialogTitle
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "9px",
                  lineHeight: "10.89px",
                  textAlign: "left",
                  //padding: "6px 0 0 6px",
                }}
              >
                Create New Client Matter Folder
              </DialogTitle>
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
                <DialogTrigger disableButtonEnhancement style={{ backgroundColor: "yellow" }}>
                  <Button className={styles.addCheck} appearance="secondary">
                    OK
                  </Button>
                </DialogTrigger>
              </DialogActions>
            </DialogBody>
          </form>
        </DialogSurface>
      </Dialog>
    </div>
  );
};

export default Modal;
