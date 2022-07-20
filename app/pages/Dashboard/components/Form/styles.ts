import { Form } from "@remix-run/react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1rem;

  @media(max-width: 1000px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2.2rem;
  height: 2.2rem;
  line-height: 2.2rem;

  margin-bottom: 2rem;
  width: 100%;
`;

export const FormArea = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  flex: 1;
  max-width: 50rem;

  button {
    max-width: unset;
    margin-top: 0.5rem;
  }

  @media(max-width: 1000px) {
    align-items: center;
    min-width: 100%;

    input {
      width: 100%;
    }
  }
`;

export const ProfilePhotoArea = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  margin-top: 4.2rem;

  img {
    max-width: 25rem;
  }

  @media(max-width: 450px) {
    img {
      max-width: 300px;
    }
  }
`;