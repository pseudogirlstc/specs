import { Pure } from '@japan-d2/schema'
import { hasLang } from './has-lang'

export const page = hasLang
  .string('title', {
    description: 'Internationalized webpage title',
    minLength: 1,
    maxLength: 32,
  })
  .string('path', {
    description: 'Absolute path for webpage',
    format: 'uri-reference',
    pattern: '^/',
  })

export type Page = Pure<typeof page>
