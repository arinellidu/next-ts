import type { BoxProps } from '@mui/material/Box';
import type { IJobByCategoryProps } from 'src/types/job';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  categories: IJobByCategoryProps[];
};

export function CareerLandingHotCategories({ categories, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[{ pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Serviços Prestados
        </Typography>

        <Box
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
      variant="outlined"
      sx={(theme) => ({
        p: 0,
        minWidth: 1,
        borderRadius: 2,
        display: 'flex',
        cursor: 'pointer',
        aspectRatio: '1/1',
        textAlign: 'center',
        position: 'relative',
        alignItems: 'center',
        bgcolor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: theme.transitions.create(['all']),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: theme.vars.customShadows.z24,
          '& .icon': {
            color: 'common.white',
            bgcolor: 'info.main',
            transition: theme.transitions.create(['all']),
          },
        },
      })}
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
