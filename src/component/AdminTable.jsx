import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./Data";
import { Box, Typography } from "@mui/material";

const AdminTable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "320px",
        minHeight: "80vh",
      }}
    >
      <Typography variant="h3">Admin Table</Typography>
      <Box sx={{ height: 400, width: 900, margin: 5 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AdminTable;
