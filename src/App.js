import * as React from "react";
import { Suspense } from "react";
import Container from "@mui/material/Container";

import AppRoutes from "./AppRoutes";
import AppTheme from "./AppTheme";

export default function App() {
  return (
    <AppTheme>
      <Suspense fallback={<div>Loading...</div>}>
        <Container maxWidth="md" sx={{ px: { xs: 0 } }}>
          <AppRoutes />
        </Container>
      </Suspense>
    </AppTheme>
  );
}
