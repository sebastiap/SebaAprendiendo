import { FC, ReactElement } from "react";

import HomeIcon from "@mui/icons-material/Home";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Paper,
  Link,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  icon?: ReactElement;
  items?: Items[];
}

interface Items {
  title: string;
  link?: string;
  icon?: ReactElement;
}

export const Breadcrumbs: FC<Props> = ({
  title,
  icon = undefined,
  items = [],
}) => {
  return (
    <Paper sx={{ mb: "12px", padding: "12px", boxShadow: "0 0 5px #00000040" }}>
      <Typography
        component="h1"
        sx={{
          mb: "4px",
          fontFamily: "Arial",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "25px",
          alignItems: "center",
          letterSpacing: "0.45px",
          color: "#007074",
        }}
        color="text.primary"
      >
        {title}
      </Typography>
      <MuiBreadcrumbs
        aria-label="breadcrumb"
        separator=">"
        sx={{
          "& .MuiBreadcrumbs-li svg": {
            fontSize: "inherit",
          },
        }}
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Início
        </Link>
        {items.length &&
          items.map((item) => {
            return item?.link ? (
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href={item.link}
              >
                {item?.icon && item.icon}
                {item.title}
              </Link>
            ) : (
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                {item?.icon && item.icon}
                {title}
              </Typography>
            );
          })}
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          {icon}
          {title}
        </Typography>
      </MuiBreadcrumbs>
    </Paper>
  );
};
