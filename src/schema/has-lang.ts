import { defineSchema, Pure } from '@japan-d2/schema'

export const hasLang = defineSchema()
  .string('lang', {
    description: 'Two-characters language code',
    examples: [
      'en',
      'ja',
    ],
    minLength: 2,
    maxLength: 2,
  })

export type HasLang = Pure<typeof hasLang>
