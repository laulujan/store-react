import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';

type ProductCardProps = {
    productInfo: {
        imageUrl: string;
        name: string;
        price: number;
    };
    addToCartHandler: () => any;
    isCardSmall: boolean;
};

const useStyles = makeStyles({
    root: {
      width: props => props ? '14rem' : '20rem',
      height: props => props ? '16rem' : '20rem',
    },
    cardInside: {
      height: props => props ? '16rem' : '20rem',
      padding: 0,
    },
    media: {
      height: props => props ? '13rem' : '16rem',
      margin: 0,
    },
    cardBottom: {
      height: props => props ? '3rem' : '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0rem 0.6rem 0rem 0.6rem',
    },
    
    cardInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 0,
      margin: 0,
    },
    cardTitle: {
      lineHeight: '1.2em',
    },
    cardRight: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      
    },
    cardLeft: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      
    },
    addToCartButton: {
      width: '1rem',
      height: '1rem',
      backgroundColor: 'grey',
    },
    addToCartIcon: {
      width: '0.8rem',
      height: '0.8rem',
      color: 'white',
    }
  });

const ProductCard: React.FC<ProductCardProps> = ({productInfo, addToCartHandler, isCardSmall}) => {
  const cardTitleSize = isCardSmall ? "subtitle1" : "h6";
  const priceLabelSize = isCardSmall ? "body2" : "body1";
  const classes = useStyles(isCardSmall);

  return (
    <Card className={classes.root}>
      <CardActionArea component="div" className={classes.cardInside}>
        <CardMedia
          className={classes.media}
          image={productInfo.imageUrl}
          title={productInfo.name}
        />
        <CardContent className={classes.cardBottom}>
          <Grid container className={classes.cardInfo}>
            <Grid item className={classes.cardLeft} xs={8}>
              <Typography variant={cardTitleSize} className={classes.cardTitle}>
                {productInfo.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item className={classes.cardRight} xs={12}>
                  <Typography variant={priceLabelSize} color="textSecondary">
                    $ {productInfo.price}
                  </Typography>
                </Grid>
                <Grid item className={classes.cardRight} xs={12}>
                    <IconButton className={classes.addToCartButton} aria-label="add to shopping cart" onClick={addToCartHandler}>
                      <AddShoppingCartIcon className={classes.addToCartIcon} />
                    </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
