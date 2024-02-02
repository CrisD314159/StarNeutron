import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContainer, TopicsContainer } from ".";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({handleSearch, setTopic}) {
  const [params, setParams] = useState("")
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <SearchContainer>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>

          <Search defaultValue={params} onChange={(e)=>{
            setParams(e.target.value)
          }}>
            
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          <Button onClick={()=> handleSearch(params)}><SearchIcon/></Button>
          </Search>
          <TopicsContainer>
            <Link className="link" onClick={()=>setTopic('astronomy')}>Astronomía y Teorías</Link>
            <Link className="link" onClick={()=>setTopic('medicine')}>Medicina</Link>
            <Link className="link" onClick={()=> setTopic('miths')}>Mitos</Link>
            <Link className="link" onClick={()=>setTopic('history')}>Historia</Link>
          </TopicsContainer>
        </SearchContainer>
      </AppBar>
    </Box>
  );
}
