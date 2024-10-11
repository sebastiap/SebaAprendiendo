import { Grid } from "@mui/material";

export const Row = (props: {
  alignY?: "flex-end" | "center" | "flex-start" | "stretch" | "baseline";
  alignX?:
    | "flex-end"
    | "center"
    | "flex-start"
    | "space-around"
    | "space-between"
    | "space-evenly";
  children: any;
  sx?: any;
  className?: string;
  spacing?: number;

}) => {
  return (
    <Grid
    spacing={props.spacing}  
    container
      direction="row"
      alignItems={props.alignY}
      justifyContent={props.alignX}
      sx={props.sx}
      className={props.className}
    >
      {props.children}
    </Grid>
  );
};