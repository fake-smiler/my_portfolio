import React from 'react'
import { Grid,Paper ,Avatar, TextField,Button, Typography,Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import FormControllLabel from '@material-ui/core/FormControlLabel';
const Login = () => {
    const paperStyle = {padding:20, height:"70vh",width:280,margin:"20px auto"};
    const avatarStyle = {backgroundColor:"#1bbd7e"};
    const btnstyle = {margin:"8px 0"};
  return (
     <Grid>
         <Paper elevation = {10} style = {paperStyle}>
             <Grid align = "center">
             <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
             <h2>Sign In</h2>
             </Grid>
             <TextField label = "Username" placeholder='Enter Your Name' fullWidth required/>
             <TextField label = "Password" placeholder='Enter Your Password' type = "Password" fullWidth required/>
             <FormControllLabel
             control = {
                 <Checkbox
                 name="checked8"
                 color="primary"
                 />
             }
             label = "Remember me"
             />
             <Button type="submit"color="primary" variant = "contained" style = {btnstyle}fullWidth>Sign in</Button>
             <Typography>
                 <Link href = "0">
                     Forgot Password ?
                 </Link>
             </Typography>
         </Paper>
     </Grid>
  )
}

export default Login