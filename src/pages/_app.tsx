import dynamic from 'next/dynamic';
import { ApolloProvider } from '@apollo/client';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import client from '../lib/apollo-client';
import '../styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

const CTA = dynamic(import('../components/storyblok/CTA'));
const Hero = dynamic(import('../components/storyblok/Hero'));
const Page = dynamic(import('../components/storyblok/Page'));
const Layout = dynamic(import('../components/Layout'));
const Countries = dynamic(import('../components/storyblok/countries'));
const Testimonial = dynamic(import('../components/storyblok/Testimonial'));
const SectionHeading = dynamic(
  import('../components/storyblok/SectionHeading')
);

const components = {
  cta: CTA,
  hero: Hero,
  page: Page,
  countries: Countries,
  testimonial: Testimonial,
  sectionHeading: SectionHeading,
};

function MyApp({ Component, pageProps }) {
  storyblokInit({
    accessToken: 'VVelAmPQC6r3z6dYQvn2Nwtt',
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
