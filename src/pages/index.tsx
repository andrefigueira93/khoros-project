import { useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../lib/apollo-client';
import { StoryblokComponent, useStoryblokState } from '@storyblok/react';
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
// export async function getStaticProps(context: any) {
//   const { data: countries } = await client.query({
//     query: gql`
//       query Countries {
//         countries {
//           code
//           name
//           emoji
//           capital
//         }
//       }
//     `,
//   });

//   const getData = await fetch(
//     `http://localhost:3000/api/storyblok?slug=home`
//   );
//   const data = await getData.json();

//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//       preview: context.preview || false,
//       countries: countries.countries,
//     },
//   };
// }
