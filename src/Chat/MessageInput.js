import { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    margin: "0px 10px",
    width: "70%",
    '& label': {
      color: 'white',
    },
  },
  input: {
    color: "white",
  },

  button: {},

  inputWrapper: {
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#212121",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "20px",
  },
}));

const MessageInput = ({ onSendMessage }) => {
  const classes = useStyles();
  const [inputMessage, setInputMessage] = useState("");

  const sendAndRemoveInput = () => {
    const trimmedMessageText = inputMessage.trim();
    if (trimmedMessageText !== "") {
      onSendMessage(trimmedMessageText);
      setInputMessage("");
    }
  };

  return (
    <div className={classes.inputWrapper}>
      <TextField
        value={inputMessage}
        label="Введите сообщение"
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            sendAndRemoveInput();
          }
        }}
        InputProps={{
          className: classes.input,
        }}
        // multiline
        classes={{
          root: classes.inputRoot,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendAndRemoveInput}
        classes={{
          root: classes.button,
        }}
      >
        Отправить
      </Button>
    </div>
  );
};

MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageInput;
