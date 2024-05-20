import React from "react";
import PropTypes from "prop-types";
import CreateFolders from "./createclient/CreateFolders";

//import TextInsertion from "./TextInsertion";
import { makeStyles } from "@fluentui/react-components";
//import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <CreateFolders />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
