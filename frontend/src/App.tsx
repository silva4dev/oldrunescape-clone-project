import React from "react";
import { makeStyles, Input, Label, Spinner } from "@fluentui/react-components";
import backgroundImage from "./assets/images/background.jpg";
import brand from "./assets/images/brand.png";
import scrollMiddle from "./assets/images/scroll-middle.gif";

import { PlayerSkills } from "./components/PlayerSkills";

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
  scrollMiddle: {
    backgroundImage: `url(${scrollMiddle})`,
    backgroundRepeat: "no-repeat",
  },
  spinner: {
    "> label": {
      color: "white",
    },
  },
});

export function App() {
  const [player, setPlayer] = React.useState([]);
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const styles = useStyles();

  const BASE_URL = "http://localhost:3333";

  function handleKeyUp(event: React.KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (input.value != "" && event.key === "Enter") {
      fetch(`${BASE_URL}/stats/${input.value}`).then((response) => {
        response
          .json()
          .then((data) => {
            setLoading(true);
            setName(input.value);
            if (data["status"] != "404") {
              setPlayer([data] as any);
              setError(false);
            } else {
              setPlayer([]);
              setError(true);
            }
          })
          .catch(() => {
            setPlayer([]);
            setError(true);
          })
          .finally(() => {
            setTimeout(() => setLoading(false), 2000);
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

        {loading && (
          <Spinner
            appearance="primary"
            className={styles.spinner}
            size="huge"
            label="Loading..."
          />
        )}

        {!loading && (
          <PlayerSkills player={player} error={error} styles={styles} />
        )}
      </div>
    </div>
  );
}
