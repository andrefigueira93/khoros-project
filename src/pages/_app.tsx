import { ApolloProvider } from '@apollo/client';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import client from '../lib/apollo-client';
import '../styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

import Layout from '../components/Layout';
import CTA from '../components/storyblok/CTA';
import Hero from '../components/storyblok/Hero';
import Page from '../components/storyblok/Page';
import Countries from '../components/storyblok/countries';
import Testimonial from '../components/storyblok/Testimonial';
import SectionHeading from '../components/storyblok/SectionHeading';

const components = {
  countries: Countries,
  cta: CTA,
  hero: Hero,
  page: Page,
  sectionHeading: SectionHeading,
  testimonial: Testimonial,
};

function MyApp({ Component, pageProps }) {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_SECRET_TOKEN,
    use: [apiPlugin],
    components,
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
