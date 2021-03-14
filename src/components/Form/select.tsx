import React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Styles from "./styles";

interface props {
  handleChange(event: any): void;
  label: string;
  name: string;
  renderData: string[];
  defaultValue: string;
}
function SelectInput({
  handleChange,
  classes,
  label,
  name,
  renderData,
  defaultValue,
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
      <Grid item container justify="flex-start">
        <select
          name={name}
          className={classes.selectContainer}
          onChange={handleChange}
          defaultValue={name === "industry" ? defaultValue : ""}
        >
          <option value={name === "industry" ? defaultValue : ""}>
            {defaultValue}
          </option>
          {renderData.map((item: string, index: any) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </Grid>
    </Grid>
  );
}

export default withStyles(Styles)(SelectInput);
