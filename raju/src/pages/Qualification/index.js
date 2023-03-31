import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualification() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="odela sarika" src="https://tse1.mm.bing.net/th?id=OIP.ZpjLjuQ0gPu8sXwmIHapPwHaKe&pid=Api&rs=1&c=1&qlt=95&w=83&h=118" />
        </ListItemAvatar>
        <ListItemText
          primary=" odela sarika sree chaitanya institute of technological sciences College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                68% CGPA
              </Typography>
              {" — B-tech Applications, electronics"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="odela sarika" src="https://tse1.mm.bing.net/th?id=OIP.ZpjLjuQ0gPu8sXwmIHapPwHaKe&pid=Api&rs=1&c=1&qlt=95&w=83&h=118" />
        </ListItemAvatar>
        <ListItemText
          primary=" odela sarika Masters Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
            74% CGPA
              </Typography>
              {" — Intermediate studies with Mpc"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="odela sarika" src="https://tse1.mm.bing.net/th?id=OIP.ZpjLjuQ0gPu8sXwmIHapPwHaKe&pid=Api&rs=1&c=1&qlt=95&w=83&h=118" />
        </ListItemAvatar>
        <ListItemText
          primary="odela sarika ZP High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                82% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}