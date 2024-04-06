import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledDivider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

const Divider = () => {
  return (
    <motion.nav
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1 }}
  >
  <StyledDivider />
  </motion.nav>
  );
};

export default Divider;