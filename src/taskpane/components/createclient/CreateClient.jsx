import * as React from "react";
import { Button } from "@fluentui/react-components";

const CreatClient = (props) => {
  // const [setFolderCreate, folderCreate] = React.useState(false);

  const handleClick = () => {
    props.onHidePopup(true);
  };

  return (
    <div>
      <div>
        New Client Matter Folder creation helps you to quickly and easily find folder names that follow our internal
        naming conventions and align to existing folders already in the DMS, saving you time and helping with Records
        Management and Email Retention policy compliance.
      </div>
      <div>
        <Button appearance="primary" onClick={handleClick}>
          OK
        </Button>
        <Button appearance="secondary">Cancel</Button>
      </div>
    </div>
  );
};

export default CreatClient;
