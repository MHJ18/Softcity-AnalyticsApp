import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  const onclick = function (e, value) {
    console.log(value);
  };

  return (
    <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
      <Pagination
        onChange={onclick}
        count={10}
        variant="outlined"
        shape="rounded"
        className="color"
      />
    </Stack>
  );
}