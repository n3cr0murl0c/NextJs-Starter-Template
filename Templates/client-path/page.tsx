"use client";
import React from "react";

import { Box, Typography } from "@mui/material";

type Props = {
  params: TemplateNameProps;
  searchParams: { [key: string]: string | string[] | undefined };
};

interface TemplateNameProps {
  TemplateName: string;
}
export default async function TemplateName(params: TemplateNameProps) {
  return (
    <Box
      component="section"
      sx={styles.container}
      className="container"
      id={"TemplateName"}
    >
      <Typography> TemplateName Works!</Typography>
    </Box>
  );
}

/** @type{import('@mui/material').SxProps}*/
export const styles = {
  TemplateName: {
    border: "1px dashed red",
  },
  container: {
    display: "flex",

    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
};
