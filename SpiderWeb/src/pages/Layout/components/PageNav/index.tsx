import { Group, Navbar } from "@mantine/core";
import { useState } from "react";
import {
  SwitchHorizontal,
  Logout,
  SteeringWheel
} from "tabler-icons-react";
import useThemeConfig from "../../../../hooks/useThemeConfig";

const data = [
  { link: "", label: "Car", icon: SteeringWheel },
];

const PageNav = () => {
  const { classes, cx } = useThemeConfig();
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <span>nodeSpider-Sexy</span>
        </Group>
        {links}
      </Navbar.Section>

      {/* <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <SwitchHorizontal className={classes.linkIcon} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <Logout className={classes.linkIcon} />
          <span>Logout</span>
        </a>
      </Navbar.Section> */}
    </Navbar>
  );
};

export default PageNav;
