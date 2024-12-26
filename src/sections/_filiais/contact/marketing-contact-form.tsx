import type { BoxProps } from '@mui/material/Box';

import { number, z as zod, ZodNumber } from 'zod';
import { useForm } from 'react-hook-form';
import { varAlpha } from 'minimal-shared/utils';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormHelperText from '@mui/material/FormHelperText';

import { SupabaseClient } from '@supabase/supabase-js';

import { fCurrency } from 'src/utils/format-number';

import { _tags } from 'src/_mock';

import { Form, Field } from 'src/components/hook-form';
import { NumberInput } from 'src/components/number-input';

// ----------------------------------------------------------------------

export type MarketingContactSchemaType = zod.infer<typeof MarketingContactSchema>;

export const MarketingContactSchema = zod.object({
  serviços: zod.string().array().min(1, { message: 'Escolha uma filial Fradema!' }),
  email: zod
    .string()
    .min(5, { message: 'Digite seu Email' })
    .email({ message: 'Email precisa ser válido!' }),
  empresa: zod.string(),
  website: zod.string(),
  mensagem: zod.string().min(5, { message: 'Deixe aqui sua mensagem' }),
  // Not required
  nome: zod.string().min(2, { message: 'Primeiro nome é requerido!' }),
  sobrenome: zod.string().min(2, { message: 'Sobrenome nome é requerido!' }),
  cel: zod.string().min(12, { message: 'Número de celular não compatível' }),
});

// ----------------------------------------------------------------------

export function MarketingContactForm({ sx, ...other }: BoxProps) {
  const defaultValues: MarketingContactSchemaType = {
    email: '',
    website: '',
    mensagem: '',
    serviços: [],
    empresa: '',
    sobrenome: '',
    nome: '',
    cel: '',
  };

  const methods = useForm<MarketingContactSchemaType>({
    resolver: zodResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const getSelected = (selectedItems: string[], item: string) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const renderServiceOptions = () => (
    <div>
      <Box sx={{ gap: 1, display: 'flex', flexWrap: 'wrap' }}>
        {_tags.slice(0, 7).map((serviço) => (
          <ButtonBase
            disableRipple
            key={serviço}
            onClick={() =>
              setValue('serviços', getSelected(values.serviços, serviço), {
                shouldValidate: true,
              })
            }
            sx={(theme) => ({
              py: 0.5,
              px: 1.25,
              borderRadius: 1,
              typography: 'body2',
              color: 'text.secondary',
              border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
              ...(values.serviços.includes(serviço) && {
                bgcolor: 'text.primary',
                color: 'background.paper',
              }),
            })}
          >
            {serviço}
          </ButtonBase>
        ))}
      </Box>

      {!!errors.serviços && (
        <FormHelperText error sx={{ px: 2 }}>
          {errors.serviços.message}
        </FormHelperText>
      )}
    </div>
  );

  const renderName = () => (
    <Box
      sx={{
        width: 0.5,
        display: 'flex',
        gap: { xs: 2.5, md: 2 },
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: 'white',
      }}
    >
      <Field.Text name="nome" label="Nome" />
      <Field.Text name="sobrenome" label="Sobrenome" />
    </Box>
  );

  const renderCompnany = () => (
    <Box
      sx={{
        width: 1,
        display: 'flex',
        gap: { xs: 2.5, md: 2 },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Field.Text name="empresa" label="Empresa" />
      <Field.Text name="website" label="Website" />
    </Box>
  );

  // const renderBudget = () => (
  //   <Box sx={{ py: 2, width: 1 }}>
  //     <Typography variant="overline" sx={{ color: 'text.disabled' }}>
  //       Your Budget
  //     </Typography>
  //     <Field.Slider
  //       name="budget"
  //       valueLabelDisplay="on"
  //       max={20000}
  //       step={1000}
  //       valueLabelFormat={(value) => fCurrency(value)}
  //       sx={{ mt: 5 }}
  //     />
  //   </Box>
  // );

  return (
    <Box sx={sx} {...other}>
      <Form methods={methods} onSubmit={onSubmit}>
        <Box
          sx={{
            gap: 2.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {renderServiceOptions()}
          {renderName()}
          <Field.Text name="email" label="Email" />
          <Field.Text name="cel" label="Tel com (DDD)" />
          {renderCompnany()}
          {/* {renderBudget()} */}
          <Field.Text name="mensagem" label="Mensagem" multiline rows={4} />
        </Box>

        <LoadingButton
          size="large"
          color="inherit"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ mt: 3 }}
        >
          Enviar formulário!
        </LoadingButton>
      </Form>
    </Box>
  );
}
