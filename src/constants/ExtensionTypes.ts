// eslint-disable-next-line no-shadow
export enum ExtensionType {
  application = 'ApplicationCustomizer',
  field = 'FieldCustomizer',
  listViewCommandSet = 'ListViewCommandSet',
  formCustomizer = 'FormCustomizer',
  searchQueryModifier = 'SearchQueryModifier'
}

export const ExtensionTypes = [
  {
    name: 'Application Customizer',
    value: ExtensionType.application,
    templates: []
  },
  {
    name: 'Field Customizer',
    value: ExtensionType.field,
    templates: ['No framework', 'React', 'Minimal']
  },
  {
    name: 'ListView Command Set',
    value: ExtensionType.listViewCommandSet,
    templates: []
  },
  {
    name: 'Form Customizer',
    value: ExtensionType.formCustomizer,
    templates: ['No framework', 'React']
  },
  {
    name: 'Search Query Modifier',
    value: ExtensionType.searchQueryModifier,
    templates: []
  }
];