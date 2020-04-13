import { defineSchema, Pure } from '@japan-d2/schema'
import { hasLang } from './has-lang'

export const owner = defineSchema()
  .array('names', 'object', hasLang.string('name', {
    description: 'Internationalized Content',
    examples: [
      'uneco',
      'うーねこ',
    ],
    minLength: 1,
    maxLength: 32,
  }), {
    description: 'Internationalized user names',
    minItems: 1,
  })
  .string('email', {
    description: 'Contact email address',
    format: 'email',
  })

export type Owner = Pure<typeof owner>
