import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Divider } from '@mui/material';

import { CONFIG } from 'src/global-config';

import { m } from 'framer-motion';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'] as const;

const TIMELINES = [
  {
    title: 'Planejamento',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    title: 'Pesquisa',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    title: 'Otimização',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
  {
    title: 'Resultados',
    description:
      'Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.',
  },
];

// ----------------------------------------------------------------------

export function MarketingServicesHowItWork({ sx, ...other }: BoxProps) {
  return (
    <>
      <Box
        sx={[
          (theme) => ({
            ...theme.mixins.bgGradient({
              images: [`url(${CONFIG.assetsDir}/assets/images/home/bluesky.jpg)`],
            }),
            color: 'common.white',
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <m.div>
          <Typography
            marginTop={'250px'}
            paddingBottom={''}
            fontSize={'182px'}
            fontWeight={'900'}
            sx={{
              textAlign: 'center',
              mixBlendMode: 'soft-light',
              color: 'InfoBackground',
            }}
          >
            FRADEMA
          </Typography>
        </m.div>

        <Box
          component="section"
          sx={[
            (theme) => ({
              ...theme.mixins.bgGradient({
                images: [
                  `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0)})`,
                  `url(${CONFIG.assetsDir}/assets/images/home/nyblue.png)`,
                ],
              }),
              color: 'common.white',
              py: { xs: 30, md: 35 },
              marginTop: '-142px',
            }),
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          {...other}
        >
          <Container>
            {/* <Typography
              sx={{
                mt: 1,
                mx: 'auto',
                fontSize: '20px',
                opacity: 0.72,
                maxWidth: 480,
                textAlign: 'center',
                mb: { xs: 5, md: 10 },
              }}
            >
              teste
            </Typography> */}

            {/* <Timeline position="alternate">
            {TIMELINES.map((value, index) => (
              <TimelineItem key={value.title}>
                <TimelineSeparator>
                  <TimelineDot color={COLORS[index]} />
                  <TimelineConnector />
                </TimelineSeparator> */}

            {/* <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                  <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                    FASE {index + 1}
                  </Typography>

                  <Typography variant="h5" component="h6" sx={{ mt: 0.5, mb: 1 }}>
                    {value.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.72, maxWidth: { md: 360 }, ...(index % 2 && { ml: 'auto' }) }}
                  >
                    {value.description}
                  </Typography>
                </TimelineContent> */}
            {/* </TimelineItem>
            ))}
          </Timeline> */}
          </Container>
        </Box>
      </Box>
      <Divider component="section" className="h-0 border-r-8 w-120 bg-gray-600" />
    </>
  );
}
