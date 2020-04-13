import { defineSchema, Pure } from '@japan-d2/schema'

export const image = defineSchema()
  .string('path', {
    description: 'Absolute path for image',
    format: 'uri-reference',
    pattern: '^/',
  })

export type Image = Pure<typeof image>
