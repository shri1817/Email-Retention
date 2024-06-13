import * as React from "react";
import { makeStyles, shorthands, tokens, Tab, TabList } from "@fluentui/react-components";
import ClientMatters from "./clientmatters/ClientMatters";
import Modal from "../Modal";
import axios from "axios";

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

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const CreateFolders = () => {
  const styles = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("client");

  const onTabSelect = (event, data) => {
    setSelectedValue(data.value);
  };

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <Modal />
      <ClientMatters post={post} />
    </div>
  );
};

export default CreateFolders;
