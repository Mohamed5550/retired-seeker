import type { Schema, Struct } from '@strapi/strapi';

export interface ContractsComponentsMonthsPaid extends Struct.ComponentSchema {
  collectionName: 'components_contracts_components_months_paids';
  info: {
    description: '';
    displayName: 'months_paid';
    icon: 'check';
  };
  attributes: {
    month: Schema.Attribute.String;
    payment_status: Schema.Attribute.Enumeration<['paid', 'not paid']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contracts-components.months-paid': ContractsComponentsMonthsPaid;
    }
  }
}
