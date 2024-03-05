import { Avatar, Box, Card, Grid, Text } from "grommet"
import { Contact, Like, StarOutline } from 'grommet-icons';
import styled from "styled-components";

const ButtonBox = styled(Box)`
width: 150px;
height: 40px;
`

const Comment = ({ comment }) => {

  return (
      <Box direction="column" margin={{ top: "10px" }}>
        <Card background="lightyellow" border="all" justify="between" margin={{ right: "2px" }} width="450px" >
          <Grid
            fill
            rows={["auto", "flex"]}
            columns={["auto", "flex"]}
            areas={[
              ["user", "comment"],
            ]}
          >
            <Box align="start" direction="row" gap="small" gridArea="user">
              <Box >
                <Text margin="10px" textAlign="center"> {comment.user}
                  <Box align="center" border="right" pad="xsmall">
                    <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                  </Box>
                </Text>
              </Box>
            </Box>

            <Box gridArea="comment" justify="center" margin="10px">
              <Text> {comment.comment} </Text>
            </Box>

          </Grid>
        </Card>
      </Box>
    )
}



export default Comment