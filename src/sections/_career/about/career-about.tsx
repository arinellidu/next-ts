import type { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { AnimateCountUp } from 'src/components/animate';

// ----------------------------------------------------------------------

const SUMMARY = [
  { name: 'Projetos Realizados', number: 5200 },
  { name: 'Valores salvos', number: 780000 },
  { name: 'Clientes atendidos', number: 7600 },
  { name: 'Colaboradores', number: 400 },
];

// ----------------------------------------------------------------------

export function CareerAbout({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[{ pt: { xs: 3, md: 5 }, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Typography
          variant="overline"
          sx={{
            mb: 1,
            display: 'block',
            color: 'info.main',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Sobre Nós
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: 'space-between',
            mb: { xs: 5, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Typography variant="h2">Fazemos o melhor por nossos clientes.</Typography>
          </Grid>

          {/* <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            sx={{
              rowGap: 3,
              columnGap: 10,
              display: 'grid',
              color: 'text.secondary',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            }}
          > */}
          <Typography>
            A Fradema Consultores Tributários está há 36 anos no mercado, possuindo vasta
            experiência e qualificação para pensar nas melhores soluções em consultoria tributária
            para o seu negócio. Com atuação desde 1988, a Fradema Consultores Tributários possui
            forte atuação em estratégias empresariais e procedimento administrativos nas esferas
            federal, estadual e municipal, com filiais em todo o território nacional.m agora nos
            EUA, em Nova Iorque e Orlando.Nossos escritórios estão localizados no Distrito Federal,
            Bahia, Pernambuco, Espírito Santo, Minas Gerais, Rio de Janeiro, Santa Catarina, São
            Paulo, Paraná, Amazonas e també
          </Typography>

          {/* <Typography>
              
            </Typography> */}
          {/* </Grid> */}
        </Grid>

        <Section />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Section({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [`url(${CONFIG.assetsDir}/assets/images/career/about-team.webp)`],
          }),
          border: '1px solid #000',
          boxShadow: `0px 24px 48px rgba(0, 0, 0, 0.57), inset 0px -4px 10px ${varAlpha(
            theme.vars.palette.grey['700Channel'],
            0.48
          )}`,
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={(theme) => ({
          py: 10,
          ml: 'auto',
          width: { lg: 0.5 },
          textAlign: 'center',
          color: 'common.white',
          px: { xs: 2.5, md: 5 },

          backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
        })}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Nossos números
        </Typography>

        <Typography sx={{ mb: 5, opacity: 0.72 }}>
          Olá, outro texto pode ser escrito aqui, informativo ou explicativo dos tais números.
        </Typography>

        <Box sx={{ gap: 5, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {SUMMARY.map((value) => (
            <Box
              key={value.name}
              sx={{
                color: 'grey.500',
                overflow: 'hidden',
                typography: 'body2',
              }}
            >
              <Box
                sx={{
                  mb: 1,
                  gap: 0.5,
                  mx: 'auto',
                  display: 'flex',
                  color: 'info.main',
                  justifyContent: 'center',
                }}
              >
                <AnimateCountUp variant="h2" to={value.number} toFixed={1} />
                <Box component="span" sx={{ typography: 'h3' }}>
                  +
                </Box>
              </Box>
              {value.name}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
