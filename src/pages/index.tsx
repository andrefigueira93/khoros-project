import { useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../lib/apollo-client';
import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';
import { useCountries } from '../contexts/useCountries';

export default function Home({ countries, story, preview }) {
  const { setCountries } = useCountries();

  useEffect(() => {
    setCountries(countries);
  }, [countries, setCountries]);

  story = useStoryblokState(story, {}, preview);

  return (
    <main>
      <StoryblokComponent blok={story.content} />
    </main>
  );
}
export async function getServerSideProps(context: any) {
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

  let slug = 'home';

  let sbParams = {
    version: 'published', // or 'published'
  };

  if (context.preview) {
    sbParams.version = 'draft';
  }

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: context.preview || false,
      countries: countries.countries,
    },
    revalidate: 3600,
  };
}
