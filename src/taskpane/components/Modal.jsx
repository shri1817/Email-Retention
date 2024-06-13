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
  Checkbox,
} from "@fluentui/react-components";
import { Alert28Filled } from "@fluentui/react-icons";
import "../components/Modal.css";

const Modal = () => {
  return (
    <div>
      <Dialog modalType="modal" defaultOpen="true">
        <DialogSurface className="modal_box">
          <DialogBody>
            <DialogTitle className="modal_font modal_title">Create New Client Matter Folder</DialogTitle>
            <DialogContent>
              <div className="modal_font modal_content">
                <Alert28Filled />
                <span>
                  New Client Matter Folder creation helps you to quickly and easily find folder names that follow our
                  internal naming conventions and align to existing folders already in the DMS, saving you time and
                  helping with Records Management and Email Retention policy compliance.
                </span>
              </div>
            </DialogContent>
            <DialogActions className="modal_footer">
              <div>
                <input type="checkbox" />
                In the future, do not show me this dialog box
              </div>
              <DialogTrigger disableButtonEnhancement>
                <Button className="modal_button" appearance="secondary">
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
