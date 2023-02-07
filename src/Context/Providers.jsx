import { TechsProvider } from "./techsContext";
import { UserProvider } from "./userContext";

export const Providers = ({ children }) => {
  return (
    <TechsProvider>
      <UserProvider>{children}</UserProvider>
    </TechsProvider>
  );
};
