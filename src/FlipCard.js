import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import cn from "classnames";
import { useQuery } from "react-query";
import { useState } from "react";
import errorImg from "./error.jpg";

export default function FlipCard() {
  const [info, setInfo] = useState(null);
  const [image, setImage] = useState("");

  const fetchData = () => {
    fetch("https://api.slingacademy.com/v1/sample-data/photos/2")
      .then((response) => {
        const dataFromApi = response.json();
        return dataFromApi;
      })
      .then((data) => setImage(data?.photo?.url));

    fetch("https://api.slingacademy.com/v1/sample-data/photos/2")
      .then((response) => {
        const dataFromApi = response.json();
        return dataFromApi;
      })
      .then((data) => setInfo(data?.photo?.description))
      .catch((err) => setInfo(err.message));
  };

  const { isLoading } = useQuery("key", fetchData);
  if (isLoading) {
    return <h1> Loading</h1>;
  }
  /*if (image === "") {
    setImage(errorImg);
  }
  if (info === null) {
    setInfo("Oops fallback");
  }*/
  return (
    <Grid className="flip-card-outer">
      <Grid
        item
        className={cn("flip-card-inner", {
          "hover-trigger": "hover"
        })}
      >
        <Card className="card front">
          <CardMedia component="img" height="100%" image={image} />
        </Card>

        <Card className="card back">
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {info}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
