import { makeStyles } from "@fluentui/react-components";
import backgroundImage from "./assets/images/background.jpg";
import brand from "./assets/images/brand.png";

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
});

export function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.header}>
          <img src={brand} alt="brand" />
        </div>
      </div>
    </div>
  );
}
