import { FormEvent } from "react";
import Information from "./information";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Input from "./input";
import Select from "./select";
import TextArea from "./texArea";
import CheckBox from "./checkbox";
import { store } from "../../store/reducer";
import { useSelector } from "react-redux";
import countryData from "../../data/countries.json";
import industryData from "../../data/industry.json";
import operatingGeography from "../../data/operatingGeograhy.json";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Styles from "./styles";
interface props {
  handleChange(event: any): void;
  submitForm(event: FormEvent<HTMLFormElement>): void;
}
function Form({
  handleChange,
  classes,
  submitForm,
}: props & WithStyles<typeof Styles>) {
  const data = useSelector<store, store>((state) => state);
  return (
    <Grid container className={classes.formContainer} data-test="nav-bar">
      <Information />
      <Grid item xs={12} sm={7}>
        <form onSubmit={submitForm}>
          <Grid container>
            <Input
              label="First name*"
              type="text"
              name="firstName"
              handleChange={handleChange}
              isRequired={true}
            />
            <Input
              label="Last name"
              type="text"
              name="lastName"
              handleChange={handleChange}
              isRequired={false}
            />
            <Input
              label="Email*"
              type="email"
              name="email"
              handleChange={handleChange}
              isRequired={true}
            />
            <Input
              label="Job title"
              type="text"
              name="jobTitle"
              handleChange={handleChange}
              isRequired={false}
            />
            <Box mt={13} />
            <Input
              label="Company*"
              type="text"
              name="company"
              handleChange={handleChange}
              isRequired={false}
            />
            <Select
              renderData={industryData}
              label="Industry*"
              name="industry"
              value={data.user.industry}
              handleChange={handleChange}
              defaultValue={data.user.defaultIndustry}
            />
            <Select
              renderData={countryData}
              label="Country*"
              name="country"
              value={data.user.country}
              handleChange={handleChange}
              defaultValue="N/A"
            />
            <Select
              renderData={operatingGeography}
              value={data.user.operatingGeography}
              label="Operating geography"
              name="operatingGeography"
              handleChange={handleChange}
              defaultValue="N/A"
            />
            <Box mt={13} />
            <TextArea
              rowsMin="8"
              label="What would you like to talk about?"
              name="about"
              handleChange={handleChange}
            />
            <Grid
              item
              xs={12}
              container
              justify="center"
              className={classes.checkboxContainer}
            >
              <Grid item sm={8} xs={12} container justify="flex-start">
                <CheckBox
                  name="privacy"
                  handleChange={handleChange}
                  label=" By submitting this form i accept"
                />

                <CheckBox
                  name="news"
                  handleChange={handleChange}
                  label="   I would like to recieve your newsletter"
                />
              </Grid>
              <Grid
                item
                sm={4}
                xs={12}
                container
                direction="column"
                justify="center"
                alignItems="flex-end"
              >
                <Button
                  type="submit"
                  disableFocusRipple={true}
                  disabled={!data.isSubmit}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default withStyles(Styles)(Form);
