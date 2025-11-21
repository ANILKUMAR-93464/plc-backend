import type { Schema, Struct } from '@strapi/strapi';

export interface ClientSeo extends Struct.ComponentSchema {
  collectionName: 'components_client_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonTitleDescription extends Struct.ComponentSchema {
  collectionName: 'components_common_title_descriptions';
  info: {
    displayName: 'title-description';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DamageDamageSolution extends Struct.ComponentSchema {
  collectionName: 'components_damage_damage_solutions';
  info: {
    displayName: 'damage_solution';
  };
  attributes: {
    item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurWorkSeo extends Struct.ComponentSchema {
  collectionName: 'components_our_work_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProfileSeo extends Struct.ComponentSchema {
  collectionName: 'components_profile_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profession: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface ServicesOurServices extends Struct.ComponentSchema {
  collectionName: 'components_services_our_services';
  info: {
    displayName: 'Our-Services';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    highlights: Schema.Attribute.Component<'damage.damage-solution', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'client.seo': ClientSeo;
      'common.title-description': CommonTitleDescription;
      'damage.damage-solution': DamageDamageSolution;
      'our-work.seo': OurWorkSeo;
      'profile.seo': ProfileSeo;
      'services.claim-services': ServicesClaimServices;
      'services.our-services': ServicesOurServices;
    }
  }
}
