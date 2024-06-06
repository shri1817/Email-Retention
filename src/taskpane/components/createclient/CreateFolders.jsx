import * as React from "react";
import { makeStyles, shorthands, tokens, Tab, TabList } from "@fluentui/react-components";
import ClientMatters from "./clientmatters/ClientMatters";
import Modal from "../Modal";

const useStyles = makeStyles({
  mainGridContainer: {
    backgroundColor: "#F0F0F0",
    borderRadius: "0px",
    padding: "10px",
    borderColor: "#909090",
  },
  gridTitle: {
    display: "grid",
    gridTemplateColumns: "90% 10%",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "9px",
    lineHeight: "10.89px",
    textAlign: "left",
    padding: "7px 0 0 10px",
    backgroundColor: "#FFF",
    height: "2vh",
  },
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: "20px",
  },
  panels: {
    ...shorthands.padding(0, "10px"),
    "& th": {
      textAlign: "left",
      ...shorthands.padding(0, "30px", 0, 0),
    },
  },
  propsTable: {
    "& td:first-child": {
      fontWeight: tokens.fontWeightSemibold,
    },
    "& td": {
      ...shorthands.padding(0, "30px", 0, 0),
    },
  },
});

const CreateFolders = () => {
  const styles = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("client");

  const onTabSelect = (event, data) => {
    setSelectedValue(data.value);
  };

  return (
    <ClientMatters />
    // <div>
    //   {/* <Modal /> */}
    //   <ClientMatters />
    // </div>
    // <div className={styles.mainGridContainer}>
    //   <div className={styles.gridTitle}>Create New Client Matter Folder</div>
    //   <div className={styles.root}>
    //     <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
    //       <Tab id="Client" value="client">
    //         Select from All Client Matters
    //       </Tab>
    //       <Tab id="Billable" value="billable">
    //         Select from My Billable Matters
    //       </Tab>
    //     </TabList>
    //     <div className={styles.panels}>
    //       {selectedValue === "client" && (
    //         <div>
    //           <Modal />
    //           <ClientMatters />
    //         </div>
    //       )}
    //       {selectedValue === "billable" && "Billable Matters will come here"}
    //     </div>
    //   </div>
    // </div>
  );
};

export default CreateFolders;
