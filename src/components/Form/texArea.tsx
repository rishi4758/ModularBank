import React, { FormEvent } from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Styles from "./styles";
interface props {
  handleChange(event: any): void;
  label: string;
  name: string;
  rowsMin: string;
}
function TextArea({
  handleChange,
  classes,
  label,
  name,
  rowsMin,
}: props & WithStyles<typeof Styles>) {
  return (
    <Grid
      item
      xs={12}
      container
      justify="center"
      className={classes.textAreaContainer}
    >
      <Grid item container justify="flex-start">
        <InputLabel>{label}</InputLabel>
      </Grid>
      <Grid item container>
        <TextareaAutosize
          rowsMin={rowsMin}
          name={name}
          onChange={handleChange}
          className={classes.about}
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(Styles)(TextArea);
