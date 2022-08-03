import Layout from '../components/Layout';
import { useStoryblokState, StoryblokComponent } from '@storyblok/react';
import { useEffect } from 'react';

export default function Page({ story }) {
  story = useStoryblokState(story);

  useEffect(() => console.log(story), [story]);

  return <StoryblokComponent blok={story.content} />;
}

// export async function getStaticProps({ params, preview }) {
//   const slug = params.slug ? params.slug.join('/') : 'home';

//   const getData = await fetch(
//     `${
//       process.env.NODE_ENV === 'development'
//         ? process.env.NEXT_PUBLIC_DEV_URL
//         : process.env.NEXT_PUBLIC_PROD_URL
//     }/api/storyblok?slug=${slug}`
//   );
//   const data = await getData.json();

//   return {
//     props: {
//       story: data ? data.story : false,
//       key: data ? data.story.id : false,
//       preview: preview || false,
//     },
//     revalidate: 20,
//   };
// }

// export async function getStaticPaths() {
//   const getPaths = await fetch(
//     `${
//       process.env.NODE_ENV === 'development'
//         ? process.env.NEXT_PUBLIC_DEV_URL
//         : process.env.NEXT_PUBLIC_PROD_URL
//     }/api/storyblok`
//   );
//   const paths = await getPaths.json();
//   return {
//     paths,
//     fallback: false,
//   };
// }
