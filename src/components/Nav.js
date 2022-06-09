import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Switch from "@material-ui/core/Switch";
import { useDispatch, useSelector } from "react-redux";
import { toggleMovies, toggleTv } from "../actions/toggleActions";
import { blue, red } from "@material-ui/core/colors";
const Nav = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.checked === true) {
      dispatch(toggleTv());
    } else {
      dispatch(toggleMovies());
    }
  };
  return (
    <>
      <StyledTitle>
        <h1>Content </h1>
        <StyledH1> Crazy</StyledH1>
      </StyledTitle>
      <StyledNav>
        <h2>Movies</h2>
        <Switch
          color="primary"
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <h2>Tv Shows</h2>
      </StyledNav>
    </>
  );
};

const StyledNav = styled(motion.div)`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
const StyledTitle = styled(motion.div)`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100vw;
`;

const StyledH1 = styled(motion.h1)`
  color: darkred;
`;

export default Nav;
