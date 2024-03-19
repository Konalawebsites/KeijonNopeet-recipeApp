import { Box, Footer, Text } from "grommet"
import { Reactjs, Grommet} from "grommet-icons"
import styled from "styled-components";

const StyledFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;


const BottomBar = () => {

  return (
    <StyledFooter background="black" pad="medium">
      <Footer width="100%">
        <Text>© All rights reserved Keijon Nopeet</Text>
        
        <Box direction="column">
          <Text textAlign="end">Made with</Text>
          <Box direction="row" margin="2px" gap="5px">
            <Reactjs /> <Grommet />
          </Box>
        </Box>

      </Footer>
    </StyledFooter>
  )
}

export default BottomBar