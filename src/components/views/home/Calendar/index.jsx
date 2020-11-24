import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Image from "../Banners/img/003.JPG";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const [open, modalStatus] = React.useState(false);

  return (
    <div>
      <h1 style={{ fontSize: 100 }}>Agenda </h1>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h4">
              Show no teatro das artes
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Terça 20/10/1995
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Show no teatro das artes Show no teatro das artesShow no teatro
              das artes Show no teatro das artesShow no teatro das artes Show no
              teatro das artes
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => modalStatus(true)}
            size="small"
            color="primary"
          >
            Compartilhe
          </Button>
          <Button size="small" color="primary">
            Saiba mais
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
