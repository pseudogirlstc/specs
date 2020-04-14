import { defineSchema, Pure } from '@japan-d2/schema'
import { character } from './character'
import { owner } from './owner'
import { page } from './page'

export const domain = defineSchema()
  .const('version', '2020-04-14', {
    description: 'Version of IGTF Domain Registration Specs',
  })
  .string('name', {
    description: 'Domain name to register to PGTC',
    examples: [
      'u-ne.co',
    ],
    format: 'hostname',
  })
  .object('owner', owner, {
    description: 'Domain owner information',
  })
  .array('webpages', 'object', page, {
    description: 'webpage hosted on https under the domain',
    minItems: 1,
  })
  .array('characters', 'object', character, {
    description: 'List of characters you would like to introduce',
    minItems: 1,
  })

export type Domain = Pure<typeof domain>
