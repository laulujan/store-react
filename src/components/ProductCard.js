import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "20em",
    margin: "1em"
  },
  media: {
    height: "15em",
  },
});

export default function ProductCard({productInfo, addToCartHandler}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={productInfo.imageUrl}
          title={productInfo.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {productInfo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $ {productInfo.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={addToCartHandler}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
