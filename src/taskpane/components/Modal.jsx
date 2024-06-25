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
import { Info28Filled } from "@fluentui/react-icons";

import "../components/Modal.css";

const Modal = () => {
  return (
    <div>
      <Dialog modalType="modal" defaultOpen="true">
        <DialogSurface className="modal_box">
          <DialogBody>
            <DialogTitle className="modal_font modal_title">
              Create New Client Matter Folder
              <DialogTrigger disableButtonEnhancement>
                <svg
                  fill="currentColor"
                  className="___12fm75w f1w7gpdv fez10in fg4l7m0 modal_close"
                  aria-hidden="true"
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.09 4.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 0 1 .63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 0 1-.63.06l-.07-.06a.5.5 0 0 1-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </DialogTrigger>
            </DialogTitle>

            <DialogContent>
              <div className="modal_font modal_content">
                <Info28Filled className="icon-color" />
                <span>
                  New Client Matter Folder creation helps you to quickly and easily find folder names that follow our
                  internal naming conventions and align to existing folders already in the DMS, saving you time and
                  helping with Records Management and Email Retention policy compliance.
                </span>
              </div>
            </DialogContent>
            <DialogActions className="modal_footer modal_font">
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
