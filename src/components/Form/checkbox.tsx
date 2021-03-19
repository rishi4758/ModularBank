import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import DoneIcon from "@material-ui/icons/Done";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Styles from "./styles";
interface props {
  handleChange(event: any): void;
  label: string;
  name: string;
}
function CheckBox({
  handleChange,
  classes,
  label,
  name,
}: props & WithStyles<typeof Styles>) {
  return (
    <Grid item xs={12} sm={10} container>
      <Grid item xs={1}>
        <Checkbox
          name={name}
          onChange={handleChange}
          color="primary"
          checkedIcon={<DoneIcon className={classes.checkIcon} />}
          icon={<></>}
        />
      </Grid>
      <Grid item xs={11} container>
        <Typography variant="subtitle2">
          {label}
          {name === "privacy" && (
            <Link underline="none">privacy policy and cookie policy</Link>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(Styles)(CheckBox);
