import { Avatar, Box, Card, Grid, Text } from "grommet"
import { Contact, Like, StarOutline } from 'grommet-icons';
import styled from "styled-components";
import Comment from "./Comment";

const ButtonBox = styled(Box)`
width: 150px;
height: 40px;
`

const CommentSection = ({ recipe }) => {

  return (
    recipe.comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))
  )
}

export default CommentSection