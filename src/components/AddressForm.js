import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



export default function AddressForm() {
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Create Your BT ID
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name" value="John"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name" value="Shelton"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Mobile Contact Number"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          
          </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="address2"
            name="address2"
            label="Email Address"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          
          </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code" value="PO16 7GZ"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            type="password"
            autoComplete="shipping postal-code" value="password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        
        </Grid>
      </Grid>
    </React.Fragment>
  );
}