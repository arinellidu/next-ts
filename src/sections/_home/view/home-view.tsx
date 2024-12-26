'use client';

import {
  _jobs,
  _brands,
  _careerPosts,
  _testimonials,
  _jobsByCompanies,
  _jobsByCountries,
  _jobsByCategories,
} from 'src/_mock';

import type { FabProps } from '@mui/material/Fab';
import type { UseBackToTopReturn } from 'minimal-shared/hooks';

import { useBackToTop } from 'minimal-shared/hooks';

import Fab from '@mui/material/Fab';
import SvgIcon from '@mui/material/SvgIcon';

import { _pricingHome } from 'src/_mock';

import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeFAQs } from '../home-faqs';

import { HomeForDesigner } from '../home-for-designer';

import { MarketingServicesHowItWork } from 'src/sections/_filiais/services/marketing-services-how-it-work';

import { CareerLandingHotCategories } from 'src/sections/_career/landing/career-landing-hot-categories';

import { EcommerceLandingHero } from 'src/sections/_ecommerce/landing/ecommerce-landing-hero';

import { MarketingContactInfo } from 'src/sections/_filiais/contact/marketing-contact-info';

import { MarketingContact } from 'src/sections/_filiais/contact/marketing-contact';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  const { onBackToTop, isVisible } = useBackToTop('90%');

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTopButton isVisible={isVisible} onClick={onBackToTop} />

      <MarketingServicesHowItWork />

      <CareerLandingHotCategories categories={_jobsByCategories} />

      <EcommerceLandingHero />

      {/* <HomeForDesigner /> */}

      {/* rever marketingcontactform */}
      <MarketingContact />

      <MarketingContactInfo />

      <HomeFAQs />
    </>
  );
}

// ----------------------------------------------------------------------

type BackToTopProps = FabProps & {
  isVisible: UseBackToTopReturn['isVisible'];
};

function BackToTopButton({ isVisible, sx, ...other }: BackToTopProps) {
  return (
    <Fab
      aria-label="Voltar ao topo"
      sx={[
        (theme) => ({
          width: 48,
          height: 48,
          position: 'fixed',
          transform: 'scale(0)',
          right: { xs: 24, md: 32 },
          bottom: { xs: 24, md: 32 },
          zIndex: theme.zIndex.speedDial,
          transition: theme.transitions.create(['transform']),
          ...(isVisible && { transform: 'scale(1)' }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <SvgIcon>
        {/* https://icon-sets.iconify.design/solar/double-alt-arrow-up-bold-duotone/ */}
        <path
          fill="currentColor"
          d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"
          opacity="0.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057"
          clipRule="evenodd"
        />
      </SvgIcon>
    </Fab>
  );
}
