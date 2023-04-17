import backgroundImage from "./assets/images/background.jpg";
import brand from "./assets/images/brand.png";
import { makeStyles, useId, Input, Label } from "@fluentui/react-components";
import React from "react";

const useStyles = makeStyles({
  wrapper: {
    height: "100vh",
    backgroundColor: "#000",
    color: "#fff",
  },
  container: {
    maxWidth: "900px",
    paddingRight: "80px",
    paddingLeft: "80px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "40px",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPositionX: "center",
    backgroundPositionY: "top",
  },
  header: {
    width: "max-content",
  },
  searchBar: {
    "> label": {
      display: "block",
      color: "#fff",
      marginBottom: "10px",
    },
  },
});

export function App() {
  const usernameId = useId("username");
  const styles = useStyles();
  const [username, setUsername] = React.useState("");

  function handleKeyUp(event: React.KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (input.value != "" && event.key === "Enter") {
      setUsername(input.value);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={brand} alt="brand" />
        </div>
        {username}
        <div className={styles.searchBar}>
          <Label htmlFor={usernameId} size="large">
            Search Username
          </Label>
          <Input
            id={usernameId}
            name="username"
            size="large"
            style={{ width: "100%" }}
            autoComplete="off"
            onKeyUp={handleKeyUp}
          />
        </div>
      </div>
    </div>
  );
}
