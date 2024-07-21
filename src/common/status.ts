import { useMount, useSetState } from "ahooks";
import { LOCAL_APP_STATUE } from "./const";

type UseAppStatusReturn = {
  appRunning: boolean;
  modifyResRunning: boolean;
  modifyHeaderRunning: boolean;
  appToggle: () => void;
  mResToggle: () => void;
  mHeaderToggle: () => void;
};

const defaultState = {
  appRunning: true,
  modifyResRunning: false,
  modifyHeaderRunning: false,
};

export const useAppStatus = (): UseAppStatusReturn => {
  const [{ appRunning, modifyHeaderRunning, modifyResRunning }, setState] =
    useSetState(defaultState);

  useMount(() => {
    chrome.storage.local.get([LOCAL_APP_STATUE], (store) => {
      setState(store[LOCAL_APP_STATUE] ?? defaultState);
    });
  });

  const handleToggle = (targetState: Record<string, boolean>) => {
    chrome.storage.local.set({
      [LOCAL_APP_STATUE]: {
        appRunning: appRunning,
        modifyResRunning: modifyResRunning,
        modifyHeaderRunning: modifyHeaderRunning,
        ...targetState,
      },
    });
    setState((prevState) => ({ ...prevState, ...targetState }));
  };

  return {
    appRunning,
    modifyResRunning,
    modifyHeaderRunning,
    appToggle: () => handleToggle({ appRunning: !appRunning }),
    mResToggle: () => handleToggle({ modifyResRunning: !modifyResRunning }),
    mHeaderToggle: () =>
      handleToggle({ modifyHeaderRunning: !modifyHeaderRunning }),
  };
};
