import React, { createContext, useContext, useState } from "react";

export type ScreenName = 
  | "Tabs" 
  | "Send"
  | "Deposit" 
  | "Withdraw" 
  | "Save" 
  | "Invest" 
  | "TransactionDetail" 
  | "Notifications";

type NavigationState = {
  currentScreen: ScreenName;
  params: any;
  history: { screen: ScreenName; params: any }[];
};

const NavigationContext = createContext<{
  state: NavigationState;
  navigate: (screen: ScreenName, params?: any) => void;
  goBack: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}>({
  state: { currentScreen: "Tabs", params: null, history: [] },
  navigate: () => {},
  goBack: () => {},
  activeTab: "Home",
  setActiveTab: () => {},
});

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<NavigationState>({
    currentScreen: "Tabs",
    params: null,
    history: [{ screen: "Tabs", params: null }],
  });
  const [activeTab, setActiveTab] = useState("Home");

  const navigate = (screen: ScreenName, params?: any) => {
    setState((prev) => ({
      currentScreen: screen,
      params: params || null,
      history: [...prev.history, { screen, params: params || null }],
    }));
  };

  const goBack = () => {
    setState((prev) => {
      if (prev.history.length <= 1) return prev;
      const newHistory = prev.history.slice(0, -1);
      const lastItem = newHistory[newHistory.length - 1];
      return {
        currentScreen: lastItem.screen,
        params: lastItem.params,
        history: newHistory,
      };
    });
  };

  return (
    <NavigationContext.Provider value={{ state, navigate, goBack, activeTab, setActiveTab }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useAppNavigation = () => {
  const { state, navigate, goBack, activeTab, setActiveTab } = useContext(NavigationContext);
  return {
    currentScreen: state.currentScreen,
    params: state.params,
    navigate,
    goBack,
    activeTab,
    setActiveTab,
  };
};
