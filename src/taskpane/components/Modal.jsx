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
// import ClientMatters from "./DataGrid";
import ClientMatterForm from "./ClientMatterForm";
// import { Grid, Row, Col } from "fluentui-react-grid";

const useStyles = makeStyles({
  Dialog__main: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    display: "flex",
    //backgroundColor: "#F0F0F0",
    flexDirection: "column",
    rowGap: "10px",
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
          style={{ backgroundColor: "#FFF", borderRadius: "0px", padding: "10px", borderColor: "#909090" }}
        >
          <form onSubmit={handleSubmit}>
            <DialogBody style={{ background: "#F0F8FF" }}>
              <DialogTitle style={{ font: "Inter", fontWeight: "bold", fontSize: "12px" }}>
                Create New Client Matter Folder
              </DialogTitle>
              <DialogContent className={styles.content}>
                {/* <Grid>
                  <Row>
                    <Col sizeSm="6" sizeMd={4} sizeLg={2}>
                      A
                    </Col>
                    <Col sizeSm={6} sizeMd="8" sizeLg={10}>
                      B
                    </Col>
                  </Row>
                </Grid> */}
                <ClientMatterForm />
                {/* <ClientMatters /> */}
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
