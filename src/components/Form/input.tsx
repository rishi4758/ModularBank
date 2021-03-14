import React, { FormEvent } from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Styles from "./styles";
interface props {
  handleChange(event: any): void;
  label: string;
  name: string;
  type: string;
  isRequired: boolean;
}
function Input({
  handleChange,
  classes,
  label,
  name,
  type,
  isRequired,
}: props & WithStyles<typeof Styles>) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      container
      className={classes.inputContainer}
      justify="center"
    >
      <Grid item container justify="flex-start">
        <InputLabel>{label}</InputLabel>
      </Grid>
      <OutlinedInput
        type={type}
        name={name}
        onChange={handleChange}
        required={isRequired}
      />
    </Grid>
  );
}

export default withStyles(Styles)(Input);
