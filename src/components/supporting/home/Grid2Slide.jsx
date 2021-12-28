import React from "react";
import SimpleCard from "../Cards";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const Grid2Slide = (props) => {
  console.log(props);
  return (
    <div
      style={{
        Width: "345",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexGrow: "1",
      }}
    >
      {props.slideData.map((val, ind) => {
        return (
          <Grid
            xs={12}
            sm={12}
            lg={3}
            md={4}
            xl={3}
            spacing={1}
            style={{
              margin: "2vh 4vw",
            }}
          >
            <SimpleCard
              imgsrc={val.imgsrc}
              title={val.title}
              quality={val.quality}
            />
          </Grid>
        );
      })}
    </div>
  );
};

export default Grid2Slide;
