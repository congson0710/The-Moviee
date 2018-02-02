import React, { Component } from "react";
import { Button, Grid, Label, Image } from "semantic-ui-react";
import logo from "../assets/YourCinema.jpeg";

class Footer extends Component {
  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <Grid columns="4">
          <Grid.Column>
            <Image src={logo} />
          </Grid.Column>
          <Grid.Column>
            <h3>Contact us:</h3>
            <br />
            <Button circular color="facebook" icon="facebook" />
            <Button circular color="twitter" icon="twitter" />
            <Button circular color="linkedin" icon="linkedin" />
            <Button circular color="google plus" icon="google plus" />
          </Grid.Column>

          <Grid.Column>
            <h3>Customer service:</h3>
            <h4>
              Hotline: 1900 6017 <br /> Work time: 8:00 - 22:00 (Including
              holidays) <br /> Supporting Email: q&a@themoviee.vn
            </h4>
          </Grid.Column>
          <Grid.Column>
            <h3>Member :</h3>
            <h4>
              Member card <br /> Promotions <br /> Gift Voucher
            </h4>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Footer;
