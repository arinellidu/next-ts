import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

export function HomeForDesigner({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `radial-gradient(50% 160% at 50% 50%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.4)}, ${theme.vars.palette.common.black})`,
              `url(${CONFIG.assetsDir}/assets/images/home/for-designer.webp)`,
            ],
          }),
          display: 'flex',
          textAlign: 'center',
          bgcolor: 'grey.700',
          color: 'common.white',
          justifyContent: 'center',
          py: { xs: 10, md: 15 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        <m.div variants={variants}>
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            Botar foto de fundo tirada pelo marketing...
          </Typography>
        </m.div>

        <m.div variants={variants}>
          <Typography
            variant="h2"
            sx={(theme) => ({
              ...theme.mixins.textGradient(
                `90deg, ${theme.vars.palette.info.main} 20%, ${theme.vars.palette.secondary.main} 100%`
              ),
              mt: 2,
              mb: 5,
            })}
          >
            Nossa Equipe
          </Typography>
        </m.div>

        <m.div variants={variants}>{renderActionButton()}</m.div>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const renderActionButton = () => (
  <AnimateBorder
    sx={(theme) => ({
      borderRadius: 1.25,
      position: 'relative',
      display: 'inline-flex',
      bgcolor: varAlpha(theme.vars.palette.common.blackChannel, 0.4),
    })}
    duration={12}
    slotProps={{
      outlineColor: (theme) =>
        `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.44)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.44)})`,
      primaryBorder: {
        size: 50,
        width: '3px',
        sx: (theme) => ({ color: theme.vars.palette.info.main }),
      },
      secondaryBorder: { sx: (theme) => ({ color: theme.vars.palette.info.main }) },
    }}
  >
    <Button
      size="large"
      variant="text"
      target="_blank"
      rel="noopener"
      href={'#'}
      endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
      sx={{ px: 4, borderRadius: 'inherit' }}
    >
      Sobre nossos colaboradores
    </Button>
  </AnimateBorder>
);
