import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/core";
import { Typography, Box, Button, Divider } from "@material-ui/core";
import { AccessAlarm } from "@material-ui/icons";
import Countdown from "react-countdown";
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyles = makeStyles({
  component: {
    margin: '12px 12px',
    backgroundColor: "white",
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  image: {
    height: 150,
    marginTop: 20,
  },
  dealText: {
    fontSize: 22,
    fontWeight: 530,
    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    marginTop: 6,
    fontSize: 16,
  },
  button: {
    marginLeft: "auto",
    backgroundColor: "#2874f0",
    color: "white",
    fontSize: 12,
    fontWeight: 560,
    padding: "8px 19px",
  },
});

const Slide = ({ mainTitle, timer, products }) => {
  const classes = useStyles();
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours} : {minutes} : {seconds} left
      </span>
    );
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{mainTitle}</Typography>
        {timer ? 
          <>
            <AccessAlarm style={{ marginTop: 4 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </>
          : null }
        <Button className={classes.button} contained>
          View All
        </Button>
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        keyBoardControl={true}
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
            <Box textAlign="center" style={{ marginBottom: 30 }}>
              <img src={product.url} className={classes.image} />
              <Typography
                style={{ fontSize: 15, fontWeight: 600, color: "#212121" }}
              >
                {product.title.shortTitle}
              </Typography>
              <Typography style={{ fontSize: 14, color: "green" }}>
                {product.discount}
              </Typography>
              <Typography
                style={{ fontSize: 14, color: "#212121", opacity: ".6" }}
              >
                {product.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
