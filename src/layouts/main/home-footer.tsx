import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Logo } from 'src/components/logo';

import { Typebot } from 'src/components/typebot/typebot';

import { MarketingContactInfo } from 'src/sections/_filiais/contact/marketing-contact-info';

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }: BoxProps) {
  return (
    <>
      <Box component="footer" sx={[{ py: 8 }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typebot />

          <Box component="span" sx={{ color: 'text.secondary', typography: 'caption' }}>
            © All rights reserved.
          </Box>
          <Logo isSingle sx={{ mb: 4, justifyContent: 'center', alignContent: 'center' }} />
        </Container>
      </Box>
    </>
  );
}
