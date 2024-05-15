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
} from "@fluentui/react-components";
import ClientMatters from "./DataGrid";
import ClientMatterForm from "./ClientMatterForm";

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
  },
  DialogContainer: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    //backgroundColor: "#2196F3",
    // padding: "10px",
  },
  gridItem: {
    border: "1px solid rgba(0, 0, 0, 0.8)",
  },
});

const Modal = () => {
  const styles = useStyles();

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className={styles.Dialog__main}>
      <Dialog modalType="non-modal" defaultOpen="true">
        {/* <DialogTrigger disableButtonEnhancement>
          <Button>Open non-modal dialog</Button>
        </DialogTrigger> */}
        <DialogSurface
          style={{
            backgroundColor: "#F0F0F0",
            borderRadius: "0px",
            padding: "0px",
            borderColor: "#909090",
            maxWidth: "800px",
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
                  padding: "7px 0 0 10px",
                  background: "#FFF",
                }}
              >
                Create New Client Matter Folder
              </DialogTitle>
              <DialogContent className={styles.content}>
                <div className={styles.DialogContainer}>
                  <div className={styles.gridItem}>
                    <ClientMatterForm />
                  </div>
                  <div className={styles.gridItem}>
                    <ClientMatters />
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button type="submit" appearance="primary">
                  OK
                </Button>
                <DialogTrigger disableButtonEnhancement>
                  <Button appearance="secondary">Cancel</Button>
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
