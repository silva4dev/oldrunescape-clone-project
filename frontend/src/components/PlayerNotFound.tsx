import backgroundError from "../assets/images/backgroundError.jpg";
import { makeStyles, shorthands } from "@fluentui/react-components";

const useStyles = makeStyles({
  image: {
    width: "100%",
    ...shorthands.borderRadius("8px"),
    height: "250px",
    objectFit: "cover",
    objectPosition: "40px -30px",
  },
  title: {
    fontSize: "18px",
    marginBottom: "30px",
    marginTop: "50px",
  },
});

export const PlayerNotFound = () => {
  const styles = useStyles();
  return (
    <>
      <p className={styles.title}>
        Player not found. Please check the name and try again.
      </p>
      <img className={styles.image} src={backgroundError} alt="" />
    </>
  );
};
