import * as React from 'react';
import "../../styles/remixicon.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";
import "../../styles/chat.css";
import "../../styles/globals.css";
import "../../styles/rtl.css";
import "../../styles/dark.css";
import theme from '@/theme';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LayoutProvider from '@/providers/LayoutProvider';
import ReduxProvider from '@/lib/Provider';

export const metadata = {
  title: 'icode49 - Project Management System',
  description: 'Project Management System & Admin Dashboard for icode49',
  icons: {
    icon: '/images/icode.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <LayoutProvider>
                {children}
              </LayoutProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}