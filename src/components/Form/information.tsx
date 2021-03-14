import React from "react";
import { Grid, Typography, withStyles, WithStyles } from "@material-ui/core";
import Styles from "./styles";
function Information({ classes }: WithStyles<typeof Styles>) {
  return (
    <>
      <Grid item sm={5} className={classes.offset}></Grid>
      <Grid
        item
        sm={12}
        md={7}
        container
        justify="flex-start"
        className={classes.heading}
        id="info"
      >
        Contact us
      </Grid>
      <Grid item xs={12} sm={5} container justify="center">
        <Grid container className={classes.textContainer} justify="flex-start">
          <Grid container>
            <Typography variant="h4">Media enquiries:</Typography>
          </Grid>

          <Grid container>
            <Typography className={classes.infoEmail}>
              press@modularbank.co
            </Typography>
          </Grid>
        </Grid>
          
        <Grid container className={classes.textContainer} justify="flex-start">
          <Grid container>
            <Typography variant="h4">Career questions:</Typography>
          </Grid>

          <Grid container>
            <Typography className={classes.infoEmail}>
              careers@modularbank.co
            </Typography>
          </Grid>
        </Grid>
          
        <Grid container className={classes.textContainer} justify="flex-start">
          <Grid container>
            <Typography variant="h4">Our offices:</Typography>
          </Grid>

          <Grid container>
            <Typography variant="h4">Tallinn, Estonia</Typography>
          </Grid>

          <Grid container>
            <Typography variant="h4">Vabaduse Workland</Typography>
          </Grid>

          <Grid container>
            <Typography variant="h4">Pärnu mnt 12, 10146</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.textContainer} justify="flex-start">
          <Grid container>
            <Typography variant="h4">Berlin, Germany</Typography>
          </Grid>

          <Grid container>
            <Typography variant="h4">Bikini Berlin, Scaling Spaces,</Typography>
          </Grid>

          <Grid container>
            <Typography variant="h4">2.OG</Typography>
          </Grid>

          <Grid container>
            <Typography variant="h4">Budapester Str. 466</Typography>
          </Grid>
          <Grid container>
            <Typography variant="h4">10787 Berlin</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default withStyles(Styles)(Information);
