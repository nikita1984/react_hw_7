import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100%",
    margin: "10px 0px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#F1F1F1",
    },
  },

  selectedChat: {
    backgroundColor: "#B1B1B1",
    "&:hover": {
      backgroundColor: "#B1B1B1",
    },
  },

  midddleContentWrapper: {
    marginLeft: "15px",
    width: "65%",
    height: "100%",
  },

  rightContentWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "0px 10px",
  },

  overFlowText: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    height: "30px",
  },
}));

const ChatPreview = ({ messages, profile }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const { avatar, name, id } = profile;

  const locationSplitted = location.pathname.split("/");

  const isSelected =
    locationSplitted[1] === "chat" &&
    Number.parseInt(locationSplitted[2]) === id;

  const lastMessage =
    messages.length > 0
      ? messages[messages.length - 1]
      : { text: "", timeStamp: null };

  return (
    <Box
      // className={classes.mainWrapper}
      className={clsx(classes.mainWrapper, {
        [classes.selectedChat]: isSelected,
      })}
      onClick={() => history.push(`/chat/${id}`)}
    >
      <Avatar alt="Remy Sharp" src={avatar} />

      <Box className={classes.midddleContentWrapper}>
        <Typography variant="h6" className={classes.overFlowText}>
          {name}
        </Typography>
        <Typography variant="subtitle1" className={classes.overFlowText}>
          {lastMessage.text}
        </Typography>
      </Box>

      <Box className={classes.rightContentWrapper}>
        <Typography variant="caption">
          {moment(lastMessage.timeStamp).format("H:mm")}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatPreview;
