import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

interface props {
  handleChange(event: any): void;
  label: string;
  name: string;
}
function CheckBox({
  handleChange,

  label,
  name,
}: props) {
  return (
    <Grid item xs={12} sm={10} container>
      <Grid item xs={1}>
        <Checkbox
          name={name}
          onChange={handleChange}
          color="primary"
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

export default CheckBox;
