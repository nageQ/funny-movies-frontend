import React from "react";
import BoxContainer from "components/Box";
import "./styles.scss";
import { Box, Grid } from "@mui/material";
import Input from "components/Input";
import Button from "components/Button";
import { useForm } from "react-hook-form";
import logo from "../../asset/logo.png";

function Login() {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });

  const width = window.innerWidth < 400 ? 300 : 400;

  const onSubmit = (data) => {
    // const dataTemp = {
    //   email: data.Email,
    //   password: data.Password,
    // };
  };

  return (
    <div className="container-login">
      <img
        style={{ position: "absolute", top: 100, width: 200 }}
        src={logo}
        alt="Remitano"
      />
      <Box
        sx={{
          width: width,
        }}
        marginLeft="10px"
        marginRight="10px"
      >
        <BoxContainer>
          <div className="container-form-login">
            <div className="title-form">Account Login</div>
            <form
              style={{
                marginTop: 10,
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid style={{ marginTop: 10 }} item xs={12}>
                <Input
                  title="Email"
                  control={control}
                  placeholder="Email"
                  name="Email"
                />
              </Grid>
              <div style={{ marginTop: 10 }}>
                <Input
                  title="Password"
                  type="password"
                  control={control}
                  placeholder="Password"
                  name="Password"
                />
              </div>
              <div className="button-login">
                <Button name="Login" type="submit" />
              </div>
            </form>
            <div className="text-have">Do not have an account?</div>
          </div>
        </BoxContainer>
      </Box>
    </div>
  );
}

export default Login;
