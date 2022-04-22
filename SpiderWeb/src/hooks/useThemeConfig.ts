import { createStyles } from "@mantine/core";

const useThemeConfig = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },

    wrapper: {
      width: "150px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: `3px 7px`,
      borderRadius: theme.radius.sm,
      border: `1px solid ${
        theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
      }`,
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,

      "&:focus-within": {
        borderColor: theme.colors[theme.primaryColor][6],
      },
      marginRight: "1rem"
    },

    control: {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      border: `1px solid ${
        theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
      }`,

      "&:disabled": {
        borderColor:
          theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3],
        opacity: 0.8,
        backgroundColor: "transparent",
      },
    },

    input: {
      textAlign: "center",
      paddingRight: `${theme.spacing.sm}px !important`,
      paddingLeft: `${theme.spacing.sm}px !important`,
      height: 28,
      flex: 1,
    },
  };
});

export default useThemeConfig;
