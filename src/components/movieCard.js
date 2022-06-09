import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import notFound from "../images/notfound.jpeg";
const MovieCard = ({ id, title, posterPath }) => {
  return (
    <AnimatePresence>
      <StyledCardContainer
        title={title}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        {posterPath !== null ? (
          <img src={`https://image.tmdb.org/t/p/w300/${posterPath}`} alt={id} />
        ) : (
          <img src={notFound} alt={id} />
        )}
      </StyledCardContainer>
    </AnimatePresence>
  );
};

const StyledCardContainer = styled(motion.div)`
  min-height: 10vh;
  min-width: 15vw;
  /* height: 450px;
  width: 300px; */
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  margin: 5px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  /* @media (max-width: 700px) {
    min-height: 20vh;
    min-width: 10vw;
  } */
`;

export default MovieCard;
