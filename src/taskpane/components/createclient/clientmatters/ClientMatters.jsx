import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import ClientMatterForm from "./ClientMatterForm";
import ClientMattersList from "./ClientMattersList";

const useStyles = makeStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    //backgroundColor: "#2196F3",
    // padding: "10px",
  },
  gridItem: {
    border: "1px solid rgba(0, 0, 0, 0.8)",
  },
});

const ClientMatters = () => {
  const styles = useStyles();
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <ClientMatterForm />
      </div>
      <div className={styles.gridItem}>
        <ClientMattersList />
      </div>
    </div>
  );
};

export default ClientMatters;
