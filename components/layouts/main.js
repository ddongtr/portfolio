import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}

        {children}

        {/* <Footer /> */}
      </Container>
    </Box>
  );
};

export default Main;
