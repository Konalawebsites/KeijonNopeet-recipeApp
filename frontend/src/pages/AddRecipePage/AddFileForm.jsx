import React from "react";
import { useState } from "react"
import { Box, FileInput, Image, Stack } from "grommet";
import styled from "styled-components";

const StyledBox = styled(Box)`
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.global.colors['light-3']};
`
const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain; /* Set the object-fit property to contain */
`

const AddFileForm = ({ file, setFile, setImageSrc, imageSrc }) => {

  return (
    <StyledBox margin={{right: "30px"}} >
      <Stack>
        <Box width="200px" height="350px" >
          {file && <StyledImage src={imageSrc} />} {/* Display the image using the src attribute */}
        </Box>
        <FileInput
          name="file"
          maxSize={5000}
          multiple={false}
          onChange={event => {
            const fileList = event.target.files;
            setFile(fileList[0]); // Set the selected file to state
            setImageSrc(URL.createObjectURL(fileList[0])); // Set the URL of the image to state
          }}
        />
      </Stack>
    </StyledBox>
  )
}

export default AddFileForm