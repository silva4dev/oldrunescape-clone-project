import backgroundImage from "./assets/images/background.jpg";
import brand from "./assets/images/brand.png";
import { makeStyles, Input, Label } from "@fluentui/react-components";
import React from "react";

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
});

export function App() {
  const [player, setPlayer] = React.useState(null);
  const [name, setName] = React.useState("");

  const styles = useStyles();
  const BASE_URL = "http://localhost:3333";

  function handleKeyUp(event: React.KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (input.value != "" && event.key === "Enter") {
      fetch(`${BASE_URL}/stats/${input.value}`).then((response) => {
        response.json().then((data) => {
          setPlayer(data);
          setName(input.value);
        });
      });
    } else if (input.value === "" && event.key === "Enter") {
      setPlayer(null);
      setName("");
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={brand} alt="brand" />
        </div>
        <div className={styles.searchBar}>
          <Label htmlFor="player" size="large">
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
          <h2 style={{ marginBottom: "10px", marginTop: "30px" }}>
            Personal scores for <strong>{name}</strong>
          </h2>
        )}
        {player && JSON.stringify(player)}
      </div>
    </div>
  );
}
