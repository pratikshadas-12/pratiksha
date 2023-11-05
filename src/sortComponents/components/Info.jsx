import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: "100%",
//     backgroundColor: theme.palette.background.paper
//   }
// }));

export function Info() {
  //   const classes = useStyles();

  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      > */}

      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem"
        }}
      >
        <br />
        <br />
        comparision :{" "}
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "pink",
            display: "inline-block",
            marginRight: "15px"
          }}
        ></div>
        swapColor :{" "}
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "yellow",
            display: "inline-block",
            marginRight: "15px"
          }}
        ></div>
        sortedColor :{" "}
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "springgreen",
            display: "inline-block",
            marginRight: "15px"
          }}
        ></div>
        pivotColor :{" "}
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "sandybrown",
            display: "inline-block"
          }}
        ></div>
      </p>
      {/* </div> */}
    </div>
  );
}
