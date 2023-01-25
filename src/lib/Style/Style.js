import { styled, alpha } from "@mui/material/styles";
import { Autocomplete, Box, Paper } from "@mui/material";

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    height: "100%",
    // overflow: "hidden",
  },
  [theme.breakpoints.down("sm")]: {
    overflow: "auto",
  },
}));

const AutoBox = styled(Box)(({ theme }) => ({
  position: "static",
  width: "100%",
  height: "75px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "60%",
    maxWidth: "400px",
  },
}));

const MiddleContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
    height: "calc(60% - 75px)",
    flexDirection: "row",
    flexFlow: "row wrap",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexFlow: "column wrap",
  },
}));

const FlagPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection : 'column',
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    flexGrow: 2,
    height: "100px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    // height: "200px",
  },
}));

const DetailPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#efeff1",
  [theme.breakpoints.up("sm")]: {
    padding: "16px",
    margin: "16px",
    flexGrow: 1,
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    padding: "16px",
    marginTop: "16px",
    marginBottom: "16px",
  },
}));

const MapBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    height: "40%",
    // height: "calc(60% - 75px)",
  },
  [theme.breakpoints.down("sm")]: {
    height: "200px",
  },
}));

export {
  MainBox,
  AutoBox,
  StyledAutocomplete,
  MiddleContentBox,
  MapBox,
  FlagPaper,
  DetailPaper,
};
