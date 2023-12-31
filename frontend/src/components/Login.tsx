import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { login } from '../services/firebaseServices';

type UserInfo = {
  emailAddress: string;
  password: string;
};

export function Login() {
  const [formData, setFormData] = useState<UserInfo>({
    emailAddress: '',
    password: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      const credential = await login(formData.emailAddress, formData.password);
      alert(JSON.stringify(credential));
    } catch (error: any) {
      alert(`${error.code} ${error.message}`);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData(formData => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Log In
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                required
                name="emailAddress"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                required
                name="password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
