import { AppShell } from "@mantine/core";
import PageNav from "./components/PageNav";
import Spider from "../Spider";

const Layout = () => {
  return (
    <AppShell
      padding="md"
      navbar={<PageNav />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Spider />
    </AppShell>
  );
};

export default Layout;
