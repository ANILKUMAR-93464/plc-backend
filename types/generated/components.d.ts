import type { Schema, Struct } from '@strapi/strapi';

export interface ServicesClaimServices extends Struct.ComponentSchema {
  collectionName: 'components_services_claim_services';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'services.claim-services': ServicesClaimServices;
    }
  }
}
