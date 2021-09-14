import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { Category } from "../redux/types";

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
  categoryLabel : {
    padding: "0em 0em 2em 0em",
    fontSize: "1.4em",
  },
});

const imagesFolder = "category_icons/";

const CategoryCard: React.FC<Category> = ({
  id,
  name,
  filename,
  alt,
}) => {
  const classes = useStyles();
  const cardImage = imagesFolder + filename;
  const history = useHistory();
  const onClick = (categoryName: string) => {history.push(`/category/${categoryName}`)};

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.mediaContainer} onClick={()=> onClick(name)}>
        <img className={classes.mediaContent} src={cardImage} alt={alt}></img>
        <Typography 
          className={classes.categoryLabel}>
          {name}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;