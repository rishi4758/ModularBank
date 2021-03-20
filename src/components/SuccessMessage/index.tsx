import { Link, RouteComponentProps } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store/reducer";
import { refreshForm } from "../../store/action";
import Styles from "./styles";
function Success({
  history,
  classes,
}: RouteComponentProps & WithStyles<typeof Styles>) {
  const data = useSelector<store, store>((state) => state);
  if (!data.isSubmit) history.push("/");
  const dispatch = useDispatch();
  const refreshUser = () => {
    dispatch(refreshForm());
  };
  return (
    <Dialog
      open={data.isSubmit}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{` Hello ${data.user.firstName}!`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Thank you for connecting with Modularbank , we will reply you with in
          2 days!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Link to="/" className={classes.link}>
          <Button
            onClick={refreshUser}
            color="primary"
            disableFocusRipple={true}
            autoFocus
          >
            Okay!
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(Styles)(Success);
