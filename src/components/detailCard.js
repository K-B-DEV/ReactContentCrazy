import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const detailCard = () => {
  return (
    <>
      <StyledDetailCardContainer>Detail Card</StyledDetailCardContainer>
    </>
  );
};

const StyledDetailCardContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export default detailCard;
