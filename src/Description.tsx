import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { topCompanies } from './SearchData';
import PopoverWindow from './PopoverWindow';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Yuva Junction
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Designate() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Designate
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Designate
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            We are here to help you to find all the Designation's/ Level's in any Corporate/ Organization.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              <Grid item>
                <div style={{ width: 300 }}/>
                <Autocomplete
                id="search-companies "
                disableClearable
                options={topCompanies.map(option => option.company_name)}
                renderInput={params => (                
                <TextField {...params} id="outlined-basic" label="Search Company" variant="outlined" />
                )}
              />
              </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Search
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Add 
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>s
        <Container className={classes.cardGrid} maxWidth="md">
        <PopoverWindow/>
        <h2> Most Popular</h2>
        <p> Click Below Logos to Find Designation in Most Popualar Organizations</p>
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={2} sm={2} md={2}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    <img src="//logo.clearbit.com/spotify.com?size=80&greyscale=true"/>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Yuva Junction
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          We are GENz
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}