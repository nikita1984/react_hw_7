import { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { MyDataContext } from "../index";

const useStyles = makeStyles(() => ({
  noUnderline: {
    "&>div": {
      "&::before": {
        border: "none !important",
      },
      "&::after": {
        border: "none !important",
      },
    },
  },
}));

const Playground = (props) => {
  const classes = useStyles();
  const { messagesArray } = useSelector((state) => state.chat);

  return (
    <div>Playground</div>
  );
};


export default Playground;
