import { z } from 'zod'

export const userSchema = z.object({
  id: z
    .number({
      invalid_type_error: 'Debe ingresar un ID',
    })
    .nonnegative('El id no puede ser negativo'),
  usuario: z.string().min(1, 'Debe ingresar un nombre de usuario'),
  estado: z.any().refine((val) => Boolean(val), 'Debe ingresar un estado'),
  sector: z.any().refine((val) => Boolean(val), 'Debe ingresar un sector'),
})
