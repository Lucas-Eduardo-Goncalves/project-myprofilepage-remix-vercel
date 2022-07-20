import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.aside`
  height: 20rem;
  width: 20rem;
  position: absolute;
  right: 4rem;
  top: 25%;
  @media (max-width: 1180px) {
    top: 0;
    right: 0;
  }
`;

export const Square = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  position: absolute;
  border-radius: 2rem;

  &.first {
    background: linear-gradient(to bottom right, #39d05c, #347f83);
    top: 0;
    left: 3rem;
  }

  &.second {
    background: linear-gradient(to right, #6d77f6, #26c5f3);
    top: 5rem;
    left: 10rem;
  }

  &.third {
    background: linear-gradient(to bottom, #ae60d3, #7400b8);
    bottom: 0rem;
    left: 1rem;
  }
  
  @media (max-width: 1180px) {
    &.first {
      top: -7rem;
      left: 6rem;
    }
    &.second {
      top: -2rem;
      left: 11rem;
    }
    &.third {
      top: 3rem;
      left: 16rem;
    }
  }
`;