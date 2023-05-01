import React from "react";
import { makeStyles, Input, Label, Spinner } from "@fluentui/react-components";
import backgroundImage from "./assets/images/background.jpg";
import brand from "./assets/images/brand.png";
import { useGlobalContext } from "./context";
import { PlayerList } from "./components/PlayerList";

const useStyles = makeStyles({
  wrapper: {
    minHeight: "100vh",
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
    backgroundImage: `url(${backgroundImage})`,
    backgroundPositionX: "center",
    backgroundPositionY: "top",
    minHeight: "100vh",
    paddingBottom: "100px",
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
  spinner: {
    "> label": {
      color: "white",
    },
    marginTop: "40px",
  },
  personalScore: {
    marginBottom: "10px",
    marginTop: "30px",
  },
  input: {
    fontSize: "16px",
    fontWeight: "bold",
  },
});

export const App = () => {
  const { setParams, isLoading, player } = useGlobalContext();
  const [name, setName] = React.useState("");
  const styles = useStyles();

  function handleKeyUp(event: React.KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (input.value != "" && event.key === "Enter") {
      setName(input.value);
      setParams(`/stats/${input.value}`);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={brand} alt="brand" />
        </div>
        <div className={styles.searchBar}>
          <Label htmlFor="player" className={styles.input}>
            Search by name
          </Label>
          <Input
            id="player"
            name="player"
            size="large"
            style={{ width: "100%" }}
            autoComplete="off"
            onKeyUp={handleKeyUp}
          />
        </div>

        {name && (
          <h1 className={styles.personalScore}>
            Personal scores for <strong>{name}</strong>
          </h1>
        )}

        {isLoading && (
          <Spinner
            appearance="primary"
            className={styles.spinner}
            size="huge"
            label="Loading..."
          />
        )}

        {!isLoading && <PlayerList player={player} />}
      </div>
    </div>
  );
};
