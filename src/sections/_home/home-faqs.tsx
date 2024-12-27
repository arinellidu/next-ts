import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { TrianglePattern } from 'src/assets/illustrations/components/shape-pattern';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import BlurryBlob from 'src/components/animata/background/blurry-blob';
import { MarketingContactInfo } from '../_filiais/contact/marketing-contact-info';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'Qual a diferença entre tributos, impostos e taxas?',
    answer: (
      <Typography>
        Conforme disposto no artigo 3º do Código Tributário Nacional (CTN),{' '}
        <strong>
          tributo é “toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa
          exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante
          atividade administrativa plenamente vinculada”.
        </strong>{' '}
        A CF em seus arts. 145, 149, 149-A, classifica os tributos pela Pentapartição (impostos,
        taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais). E o
        CTN em seu art. 5º segue a teoria da Tripartição (impostos, taxas e contribuições de
        melhoria): “Os tributos são impostos, taxas e contribuições de melhoria”. O imposto é
        considerado o tributo mais importante, estando disposto no artigo 16º do CTN, imposto “é o
        tributo cuja obrigação tem por fato gerador uma situação independente de qualquer atividade
        estatal específica, relativa ao contribuinte”. Dentre os principais impostos do Brasil,
        podemos citar: Imposto s/Circulação de Mercadorias e Serviços (ICMS), Imposto sobre a
        Propriedade de Veículos Automotores (IPVA), Imposto sobre a Propriedade Predial e
        Territorial Urbana (IPTU), Imposto sobre a Renda e Proventos de Qualquer Natureza (IR –
        pessoa física e jurídica), Imposto sobre Operações de Crédito (IOF), Imposto sobre Serviços
        de Qualquer Natureza (ISS). Já de acordo com o artigo 77º do CTN, taxa é um tributo “que tem
        como fato gerador o exercício regulador do poder de polícia, ou a utilização efetiva e
        potencial, de serviço público específico e divisível”. – Taxa de Emissão de Documentos
        (níveis municipais, estaduais e federais), Taxa de Licenciamento Anual de Veículo, Taxas do
        Registro do Comércio (Juntas Comerciais), Taxa cobrada para registro do Contrato Social de
        uma empresa.
        {/* <Link
          href="https://support.mui.com/hc/en-us/articles/360008775240-How-do-I-get-access-to-an-item-I-purchased"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          updates
        </Link> */}
      </Typography>
    ),
  },
  {
    question: 'Como faço para pagar menos imposto?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <Typography>Neste caso o ideal é: </Typography>
        <li>
          {' '}
          Analisar o melhor regime tributário que poderá ser feito à partir de uma Auditoria Fiscal
          com base nas informações prestadas aos órgãos federais, estaduais e/ou municipais.
        </li>
        <li>
          {' '}
          Marcar uma reunião presencial para conseguir entender as reais intenções dos empresários,
          bem como a rotina empresarial para uma melhor análise..
        </li>
        <li>
          <strong>Fase 3</strong>
        </li>
        <li>
          <strong>Fase 4</strong>
        </li>
        <li>
          Para mais dúvidas, entre em
          <Link href="#" target="_blank" rel="noopener" sx={{ mx: 0.5 }} color="info">
            contato
          </Link>
          .
        </li>
      </Box>
    ),
  },
  {
    question: 'How long is my license valid for?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li> The license is lifetime.</li>
        <li> You get 12 months of free updates.</li>
      </Box>
    ),
  },
  {
    question: 'Which platforms will the template support?',
    answer: (
      <Typography>
        {`The components in MUI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge. We don't support Internet Explorer 11. `}
        Learn more about the
        <Link href="#" target="_blank" rel="noopener" sx={{ mx: 0.5 }} color="info">
          supported platforms
        </Link>
      </Typography>
    ),
  },
  {
    question: 'For what kind of projects is the Standard license intended?',
    answer: (
      <Typography>
        The Standard license is designed for internal applications in which staff will access the
        application. An example could be the back-office dashboard of a public-facing e-commerce
        website in which staff would sign in and manage inventory, customers, etc.
      </Typography>
    ),
  },
  {
    question: 'Do you have a free demo to review the code before purchasing?',
    answer: (
      <Typography>
        Yes, you can check out our
        <Link href="#" target="_blank" rel="noopener" sx={{ mx: 0.5 }} color="info">
          open source
        </Link>
        dashboard template which should give you an overview of the code quality and folder
        structure. Keep in mind that some aspects may differ from this paid version.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

export function HomeFAQs({ sx, ...other }: BoxProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  const renderList = () => (
    <Box sx={{ my: { xs: 5, md: 10 } }}>
      {FAQs.map((faq) => (
        <Accordion
          key={faq.question}
          expanded={expanded === faq.question}
          onChange={handleChangeExpanded(faq.question)}
        >
          <AccordionSummary>
            <Typography variant="h6" sx={{ pr: 1, flexGrow: 1 }}>
              {faq.question}
            </Typography>

            <Iconify
              icon={expanded === faq.question ? 'eva:minus-outline' : 'eva:plus-outline'}
              sx={{ transform: 'translateY(4px)' }}
            />
          </AccordionSummary>

          <AccordionDetails sx={{ color: 'text.secondary' }}>{faq.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[{ position: 'relative', py: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={{ md: 3 }} sx={{ justifyContent: 'center' }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <m.div variants={variants}>
              <Typography variant="h2" sx={{ textAlign: 'center' }}>
                Perguntas Frequentes
              </Typography>
            </m.div>

            <m.div variants={variants}>{renderList()}</m.div>

            <Box
              sx={(theme) => ({
                gap: 3,
                display: 'flex',
                borderRadius: 3,
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                px: { xs: 3, md: 5 },
                py: { xs: 6, md: 8 },
                border: `dashed 1px ${theme.vars.palette.divider}`,
              })}
            >
              <m.div variants={variants}></m.div>

              <m.div variants={variants}>
                <Typography component="h6" variant="h3">
                  Tem mais dúvidas?
                </Typography>
              </m.div>
              <m.div>
                <Typography sx={{ color: 'text.secondary' }}>
                  Entre em contato com um de nossos especialistas!
                </Typography>
                <BlurryBlob
                  className="rounded-xl opacity-45"
                  firstBlobColor="bg-green-400"
                  secondBlobColor="bg-blue-400"
                />
                <MarketingContactInfo className="justify-start align-middle ml-10" />
                {/* <Button
                  size="large"
                  color="info"
                  variant="contained"
                  href="mailto:yasmin@fradema.com.br?subject=Dúvida Cliente: &cc=ti4@fradema.com.br&body=Olá, me chamo... e gostaria de esclarecer uma dúvida..."
                >
                  Email
                </Button>
                <m.div variants={variants}></m.div>
                <Button size="large" color="info" variant="contained" href="#">
                  WhatsApp
                </Button> */}
              </m.div>
            </Box>
          </Grid>
        </Grid>

        <TrianglePattern
          sx={{
            top: 80,
            left: 0,
            right: 0,
            zIndex: -1,
            mx: 'auto',
            width: 600,
            height: 600,
            maxWidth: 1,
          }}
        />
      </Container>
    </Box>
  );
}
