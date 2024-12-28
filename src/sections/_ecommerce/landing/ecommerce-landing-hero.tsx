import type { BoxProps } from '@mui/material/Box';
import type { IProductItemHeroProps } from 'src/types/product';

import { GlareCard } from '@components/components/ui/glare-card';

import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/global-config';
import { _productsCarousel } from 'src/_mock';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';
import { Divider } from '@mui/material';
import { secondary } from 'src/theme';

// ----------------------------------------------------------------------

export function EcommerceLandingHero({ sx, ...other }: BoxProps) {
  const carousel = useCarousel({ loop: true, duration: 80 }, [Autoplay({ delay: 5000 }), Fade()]);

  return (
    <Box
      className="h-700 w-200"
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `radial-gradient(50% 160% at 50% 50%, ${varAlpha(theme.vars.palette.common.blackChannel, 0.75)}, ${theme.vars.palette.common.black})`,
              // `url(${CONFIG.assetsDir}/assets/background/derek.jpg)`,
            ],
          }),
          overflow: 'hidden',
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Divider component="section" className="h-2 border-r-8 w-120" />
      <Box
        component="img"
        alt="Texture"
        src={`${CONFIG.assetsDir}/assets/background/texture-2.webp`}
        sx={{ top: 0, right: 0, height: 2, width: 'auto', position: 'absolute' }}
      />

      {/* <Container className="h-400" sx={{ position: 'relative', marginTop: '-80px' }}> */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transform: 'translateY(-64px)',
        }}
      >
        <CarouselDotButtons
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
          sx={{ color: 'info.main' }}
        />

        <Carousel className="h-full w-full absolute inset-0 object-cover" carousel={carousel}>
          {_productsCarousel.map((product, index) => (
            <CarouselItem
              key={product.id}
              product={product}
              selected={carousel.dots.selectedIndex === index}
            />
          ))}
        </Carousel>

        <CarouselArrowBasicButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{
            prevBtn: {
              svgIcon: (
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 5l-6 7l6 7"
                />
              ),
            },
            nextBtn: {
              svgIcon: (
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5l6 7l-6 7"
                />
              ),
            },
          }}
          sx={{ gap: 1, color: 'info.main' }}
        />
      </Box>
      {/* </Container> */}
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">The greatest trick</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          The greatest trick the devil ever pulled was to convince the world that he didn&apos;t
          exist.
        </p>
      </GlareCard>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = {
  selected: boolean;
  product: IProductItemHeroProps;
};

export function CarouselItem({ product, selected }: CarouselItemProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          gap: 8,
          py: 15,
          opacity: 0,
          minHeight: 720,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          transition: theme.transitions.create(['opacity'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.complex,
          }),
          ...(selected && { opacity: 1 }),
        }),
      ]}
    >
      <Box
        sx={{
          maxWidth: 440,
          color: 'common.white',
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Label variant="filled" color="warning" sx={{ mb: 2 }}>
          {product.label}
        </Label>

        <Typography component="h3" variant="h2" sx={{ mb: 2 }}>
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          sx={(theme) => ({ ...theme.mixins.maxLine({ line: 2 }), mb: 5, opacity: 0.72 })}
        >
          {product.caption}
        </Typography>

        <Button
          component={RouterLink}
          href={paths.eCommerce.product}
          size="large"
          color="info"
          variant="contained"
          endIcon={<Iconify width={16} icon="solar:alt-arrow-right-outline" sx={{ ml: -0.5 }} />}
        >
          Saiba mais
        </Button>
      </Box>

      <Box
        component="img"
        alt={product.name}
        src={product.coverUrl}
        sx={(theme) => ({
          width: 480,
          filter: `drop-shadow(20px 20px 24px ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)})`,
        })}
      />
    </Box>
  );
}
