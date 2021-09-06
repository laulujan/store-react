import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: "13.5em",
    height: "15em",
  },
  mediaContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  mediaContent: {
    width: "90%",
    height: "auto",
  },
  categoryTitle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      padding: 0,
  },
  categoryButton : {
      padding: "0em 0em 2em 0em",
      fontSize: "1.4em",
  },
});

const imagesFolder = "category_icons/";

const CategoryCard = ({category}) => {
    const classes = useStyles();
    const cardImage = imagesFolder + category.filename;
    const dummyOnClick = () => {
        alert(`You selected the ${category.name} category`);
    }
    const history = useHistory()
    const onClick = (categoryName) => {
        history.push(`/category/${categoryName}`)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.mediaContainer} onClick={()=> onClick(category.name)}>
                <img className={classes.mediaContent} src={cardImage} alt={category.alt}></img>
                <Button 
                    className={classes.categoryButton}
                    size="large"
                    onClick={dummyOnClick}
                >
                    {category.name}
                </Button>
            </CardActionArea>
        </Card>
    );
};

export default CategoryCard;