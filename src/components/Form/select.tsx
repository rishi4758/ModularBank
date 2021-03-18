import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Styles from "./styles";

interface props {
  handleChange(event: any): void;
  label: string;
  name: string;
  renderData: {}[];
  value: string;
  defaultValue: string;
}

function SelectInput({
  handleChange,
  classes,
  label,
  name,
  value,
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
        <Select
          value={value}
          name={name}
          variant="outlined"
          onChange={handleChange}
          displayEmpty
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            PopoverClasses: {},
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
          defaultValue={name === "industry" ? defaultValue : ""}
        >
          <MenuItem value="">
            <Box pl={1}>{defaultValue}</Box>
          </MenuItem>
          {renderData.map((item: any, index: any) => {
            return (
              <MenuItem key={index} value={item.name}>
                <Box pl={1}>
                  {name === "country" && (
                    <img
                      key={index}
                      className={classes.flagImage}
                      alt={item.alpha3}
                      src={`http:${item.file_url}`}
                    />
                  )}
                  {item.name}
                </Box>
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
    </Grid>
  );
}

export default withStyles(Styles)(SelectInput);
