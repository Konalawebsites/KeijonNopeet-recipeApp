import React from "react";
import { Box } from "grommet";
import AddFileForm from "pages/AddRecipePage/AddFileForm";

const ProfileImage = ({ file, imageSrc, setFile, setImageSrc}) => {
  return (

  <Box gridArea="fileInput">
            <AddFileForm file={file} setFile={setFile} imageSrc={imageSrc} setImageSrc={setImageSrc} />
          </Box>
  )
  }

  export default ProfileImage
