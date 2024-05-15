import React from "react";
import PropTypes from "prop-types";
//import Header from "./Header";
//import HeroList from "./HeroList";
//import Modal from "./Modal";
import CreatClient from "./CreateClient";
import DataGrid from "./DataGrid";

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
  // The list items are static and won't change at runtime,
  // so this should be an ordinary const, not a part of state.
  // const listItems = [
  //   {
  //     icon: <Ribbon24Regular />,
  //     primaryText: "Achieve more with Office integration",
  //   },
  //   {
  //     icon: <LockOpen24Regular />,
  //     primaryText: "Unlock features and functionality",
  //   },
  //   {
  //     icon: <DesignIdeas24Regular />,
  //     primaryText: "Create and visualize like a pro",
  //   },
  // ];
  const [folderCreate, setFolderCreate] = React.useState(false);
  const hidePopup = (isHide) => {
    setFolderCreate(isHide);
  };

  return (
    <div className={styles.root}>
      {!folderCreate && <CreatClient onHidePopup={hidePopup} />}
      {folderCreate && <DataGrid />}
      {/* <Header logo="assets/logo-filled.png" title={props.title} message="Welcome" />
      <HeroList message="Discover what this add-in can do for you today!" items={listItems} /> */}
      {/* <Modal /> */}
      {/* <TextInsertion /> */}
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
