import { FormEvent } from "react";
import Information from "./information";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Input from "./input";
import Select from "./select";
import TextArea from "./texArea";
import CheckBox from "./checkbox";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Styles from "./styles";
interface props {
  handleChange(event: any): void;
  isSubmit: boolean;
  submitForm(event: FormEvent<HTMLFormElement>): void;
}
function Form({
  handleChange,
  isSubmit,
  classes,
  submitForm,
}: props & WithStyles<typeof Styles>) {
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
              renderData={[
                "Automotive",
                "Consulting",
                "Finance",
                "Healthcare",
                "Media/PR",
                "Retail",
                "Technology",
                "Telecommunication",
                "Other",
              ]}
              label="Industry*"
              name="industry"
              handleChange={handleChange}
              defaultValue="Banking"
            />

            <Select
              renderData={[
                "Switzerland",
                "Canada",
                "Japan",
                "Germany",
                "Australia.",
                "United Kingdom",
                "United States",
                "Sweden.",
              ]}
              label="Country*"
              name="country"
              handleChange={handleChange}
              defaultValue="N/A"
            />
            <Select
              renderData={["National", "Regional", "Global"]}
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
                  disabled={!isSubmit}
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
