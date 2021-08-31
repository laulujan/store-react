import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';


export default function ProductCard({productInfo, addToCartHandler, isCardSmall}) {
  const cardWidth = isCardSmall ? 12 : 20;
  const cardHeightRatio = isCardSmall ? 1.0 : 0.88;
  const cardTitleSize = isCardSmall ? "subtitle1" : "h6";
  const priceLabelSize = `body${isCardSmall ? 2 : 1}`;
  const useStyles = makeStyles({
    root: {
      width: `${cardWidth}em`,
      height: `${cardWidth*cardHeightRatio}em`,
    },
    media: {
      height: `${cardWidth*0.75}em`,
    },
    
    cardInfo: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0em",
      margin: "0em",
    },
    cardTitle: {
      lineHeight: "1.2em",
    },
    cardRight: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "flex-end",
      
    },
    cardLeft: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      
    },
    addToCartButton: {
      width: "1em",
      height: "1em",
      backgroundColor: "grey",
    },
    addToCartIcon: {
      width: "0.8em",
      height: "0.8em",
      color: "white",
    }
  });
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={productInfo.imageUrl}
          title={productInfo.name}
        />
        <CardContent styles={{backgroundColor: "yellow"}}>
          <Grid container className={classes.cardInfo}>
            <Grid item className={classes.cardLeft} xs={8}>
              <Typography variant={cardTitleSize} className={classes.cardTitle}>
                {productInfo.name}
              </Typography>
            </Grid>
            <Grid container  xs={4}>
              <Grid item className={classes.cardRight} xs={12}>
                <Typography variant={priceLabelSize} color="textSecondary">
                  $ {productInfo.price}
                </Typography>
              </Grid>
              <Grid item className={classes.cardRight} xs={12}>
                  <IconButton className={classes.addToCartButton} variant="contained" aria-label="add to shopping cart" onClick={addToCartHandler}>
                    <AddShoppingCartIcon className={classes.addToCartIcon} />
                  </IconButton>
              </Grid>
            </Grid>
            
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
