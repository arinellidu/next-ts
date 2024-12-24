import type { BoxProps } from '@mui/material/Box';
import type { IJobByCategoryProps } from 'src/types/job';
import type { Variants } from 'framer-motion';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { m } from 'framer-motion';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SvgColor } from 'src/components/svg-color';

import { CONFIG } from 'src/global-config';
import { varAlpha } from 'minimal-shared/utils';
import { whitespace } from 'stylis';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------
const variants: Variants = varFade('inUp', { distance: 24 });
type Props = BoxProps & {
  categories: IJobByCategoryProps[];
};

export function CareerLandingHotCategories({ categories, sx, ...other }: Props) {
  return (
    <Box
      // className="bg-slate-950"
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `radial-gradient(50% 160% at 50% 50%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.75)}, ${theme.vars.palette.common.black})`,
              // `url(${CONFIG.assetsDir}/assets/images/home/for-designer.webp)`,
            ],
          }),
        }),
        { pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <m.div variants={variants}>
        <Typography
          variant="h2"
          sx={(theme) => ({
            ...theme.mixins.textGradient(
              `90deg, ${theme.vars.palette.info.main} 40%, ${theme.vars.palette.secondary.main} 80%`
            ),
            display: 'flex',
            textAlign: 'center',
            bgcolor: 'grey.700',
            color: 'common.white',
            justifyContent: 'center',
            py: { xs: 2.5, md: 5 },
          })}
        >
          Serviços Prestados
        </Typography>
      </m.div>

      <Container className=" rounded-2xl p-1.5 mb-2 border-solid">
        <Box
          className="mb-3"
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 5 },
            my: { xs: 5, md: 10 },
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </Box>

        {/* <Box sx={{ textAlign: 'center' }}>
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CategoryItemProps = {
  category: IJobByCategoryProps;
};

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Paper
      className=" mb-3 outline-dotted shadow-2xl outline-sky-400 cursor-pointer border-solid hover:bg-zinc-50"
      variant="outlined"
      sx={(theme) => ({
        p: 0,
        minWidth: 1,
        textAlign: 'center',
        position: 'relative',
        aspectRatio: '1/1',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'transparent',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        // color: 'dodgerblue',
        // color: 'blueviolet',
        // boxShadow: theme.vars.customShadows.card,
        transition: theme.transitions.create(['all']),
        '&:hover': {
          // bgcolor: 'background.paper',
          color: 'dodgerblue',
          boxShadow: theme.vars.customShadows.z24,
          '& .icon': {
            color: 'common.white',
            bgcolor: 'dodgerblue',
            transition: theme.transitions.create(['all']),
          },
        },
      })}
      // sx={(theme) => ({
      //   p: 0,
      //   minWidth: 1,
      //   borderRadius: 2,
      //   display: 'flex',
      //   cursor: 'pointer',
      //   aspectRatio: '1/1',
      //   textAlign: 'center',
      //   position: 'relative',
      //   alignItems: 'center',
      //   bgcolor: 'transparent',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   transition: theme.transitions.create(['all']),
      //   '&:hover': {
      //     bgcolor: 'background.paper',
      //     boxShadow: theme.vars.customShadows.z24,
      // '& .icon': {
      //   color: 'common.white',
      //   // bgcolor: 'info.main',
      //   transition: theme.transitions.create(['all']),
      // },
      //   },
      // })}
    >
      <Box
        className="icon"
        component="span"
        sx={{ display: 'flex', p: 2, mb: 1, borderRadius: '50%' }}
      >
        <SvgColor src={category.icon} sx={{ width: 40, height: 40 }} />
      </Box>

      <Typography variant="h6" noWrap sx={{ px: 2, width: 1 }}>
        {category.name}
      </Typography>
      <Typography variant="body2" sx={{ mt: 0.5, color: 'text.disabled' }}>
        {/* {category.totalJobs} jobs */}
      </Typography>
    </Paper>
  );
}
