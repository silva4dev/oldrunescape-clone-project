import backgroundImage from "./assets/images/background.jpg";
import brand from "./assets/images/brand.png";
import { makeStyles, Input, Label } from "@fluentui/react-components";
import React from "react";

const useStyles = makeStyles({
  wrapper: {
    height: "100%",
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
    paddingBottom: "40px",
    height: "calc(100vh + 50px)",
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
  const styles = useStyles();
  const [player, setPlayer] = React.useState(null);

  const BASE_URL = "http://localhost:3333";

  function handleKeyUp(event: React.KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    if (input.value != "" && event.key === "Enter") {
      fetch(`${BASE_URL}/stats/${input.value}`).then((response) => {
        response.json().then((data) => {
          setPlayer(data);
        });
      });
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={brand} alt="brand" />
        </div>
        {player && JSON.stringify(player)}
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
      </div>
    </div>
  );
}
