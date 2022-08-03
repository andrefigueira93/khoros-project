import { useStoryblokState, StoryblokComponent } from '@storyblok/react';
import { useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../lib/apollo-client';
import { useCountries } from '../contexts/useCountries';

export default function Page({ countries, story: initialStory, preview }) {
  const { setCountries } = useCountries();

  useEffect(() => {
    setCountries(countries);
  }, [countries, setCountries]);

  const story = useStoryblokState(initialStory, {}, preview);

  return <StoryblokComponent blok={story.content} />;
}

export async function getStaticProps({ params, preview }) {
  const slug = params.slug ? params.slug.join('/') : 'home';

  const { data: countries } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
          capital
        }
      }
    `,
  });

  const getData = await fetch(
    `${
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_DEV_URL
        : process.env.NEXT_PUBLIC_PROD_URL
    }/api/storyblok?slug=${slug}`
  );
  const data = await getData.json();

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: preview || false,
      countries: countries.countries,
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const getPaths = await fetch(
    `${
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_DEV_URL
        : process.env.NEXT_PUBLIC_PROD_URL
    }/api/storyblok`
  );
  const paths = await getPaths.json();
  return {
    paths,
    fallback: 'blocking',
  };
}
