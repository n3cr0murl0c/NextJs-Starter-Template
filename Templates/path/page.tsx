import React from "react";
import "./page.style.css";
import { Metadata, ResolvingMetadata } from "next";

import { Box, Typography } from "@mui/material";

type Props = {
  params: TemplateNameProps;
  searchParams: { [key: string]: string | string[] | undefined };
};
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.TemplateName;
//   // fetch data
//   const product = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/db/TemplateName/getTemplateName` +
//       new URLSearchParams(params.TemplateName),
//     {
//       method: "GET",
//       credentials: "include",
//       // body: JSON.stringify(params),
//     }
//   );
//   const { data } = await product.json();

//   return {
//     title: data.TemplateName.name,
//     openGraph: {
//       images: [
//         {
//           url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/img/TemplateName/${data.TemplateName.imagen}`,
//         },
//       ],
//     },
//   };
// }
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
