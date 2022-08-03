import Layout from '../components/Layout';
import { useStoryblokState, StoryblokComponent } from '@storyblok/react';

export default function Page({ story }) {
  story = useStoryblokState(story);

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug ? params.slug.join('/') : 'home';
  const getData = await fetch(
    `${
      process.env.NODE_ENV !== 'development'
        ? process.env.NEXT_PUBLIC_DEV_URL
        : process.env.NEXT_PUBLIC_PROD_URL
    }/api/storyblok?slug=${slug}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const { data } = await getData.json();
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const getPaths = await fetch(
    `${
      process.env.NODE_ENV !== 'development'
        ? process.env.NEXT_PUBLIC_DEV_URL
        : process.env.NEXT_PUBLIC_PROD_URL
    }/api/storyblok`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const paths = await getPaths.json();
  return {
    paths,
    fallback: false,
  };
}
