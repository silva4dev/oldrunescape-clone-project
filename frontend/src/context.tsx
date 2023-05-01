import React, { useCallback, useContext } from "react";

const url = "http://localhost:3333";

type AppContextProps = {
  children: React.ReactNode;
};

type AppContextProtocol = {
  isLoading: boolean;
  setPlayer: any;
  player: any[];
  setParams: (name: string) => void;
};

const AppContext = React.createContext<AppContextProtocol>({
  isLoading: true,
  setPlayer: () => {},
  player: [],
  setParams: () => {},
});

const AppProvider: React.FC<AppContextProps> = ({ children }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [player, setPlayer] = React.useState([]);
  const [params, setParams] = React.useState("");

  const fetchPlayers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${params}`);
      const data = await response.json();
      setPlayer([data] as any);
      setLoading(false);
    } catch (err) {
      setPlayer([]);
      setLoading(false);
    }
  }, [params]);

  React.useEffect(() => {
    fetchPlayers();
  }, [params, fetchPlayers]);

  return (
    <AppContext.Provider value={{ isLoading, setPlayer, player, setParams }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
