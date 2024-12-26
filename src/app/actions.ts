'use server';

import { z as zod } from 'zod';

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
  cel: zod.string().min(11, { message: 'Número de celular não compatível' }),
});
