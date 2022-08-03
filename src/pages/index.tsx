import { useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../lib/apollo-client';
import { StoryblokComponent, useStoryblokState } from '@storyblok/react';
import { useCountries } from '../contexts/useCountries';

export default function Home({ countries, story: initialStory, preview }) {
  const { setCountries } = useCountries();

  useEffect(() => {
    setCountries(countries);
  }, [countries, setCountries]);

  const story = useStoryblokState(initialStory, {}, preview);

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
//     `${
//       process.env.NODE_ENV === 'development'
//         ? process.env.NEXT_PUBLIC_DEV_URL
//         : process.env.NEXT_PUBLIC_PROD_URL
//     }/api/storyblok?slug=home`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
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
