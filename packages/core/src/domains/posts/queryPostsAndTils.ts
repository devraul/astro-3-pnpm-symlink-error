// @ts-ignore
// eslint-disable
import type { SanityClient } from '@sanity/client';
import groq from 'groq';
import { z } from 'zod';

import { type SupportedLanguages, supportedLanguagesSchema } from '@/config';

import { mockPosts, mockTils } from './queryPostsAndTils.mock';

type QueryPostsAndTilsParams = {
  locale: SupportedLanguages;
  numberOfPosts?: number;
  client: SanityClient;
};
export async function queryPostsAndTils({
  locale,
  numberOfPosts = 2,
  client,
}: QueryPostsAndTilsParams) {
  // const params = {
  //   start: 0,
  //   end: numberOfPosts - 1,
  //   language: locale,
  // };

  return postsAndTilsSchema.parse({
    posts: mockPosts,
    tils: mockTils,
  });
}

export type QueryPostsAndTilsReturnType = Awaited<
  ReturnType<typeof queryPostsAndTils>
>;

// const postQuery = groq`
// *[_type == "post" && language == $language] |order(publishedAt desc)[$start..$end]{
//   _id,
//   "slug": slug.current,
//   publishedAt,
//   title,
//   subtitle,
//   language,
//   description,
//   "featuredImage": featuredImage.asset->{
//     url,
//     "height": metadata.dimensions.height,
//     "width": metadata.dimensions.width,
//   },
//   "tags": tags[]->{
//     _id,
//     name,
//     "slug": slug.current
//   }
// }
// `;

// const tilQuery = groq`
// *[_type == "til" && language == $language] |order(publishedAt desc)[$start..$end]{
//   _id,
//   title,
//   publishedAt,
//   language,
//   "slug": slug.current,
//   "tags": tags[]->{
//     _id,
//     name,
//     "slug": slug.current
//   }
// }
// `;

const tagSchema = z.object({
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
});

const featuredImageSchema = z.object({
  width: z.number(),
  height: z.number(),
  url: z.string(),
});

const postSchema = z.object({
  _id: z.string(),
  slug: z.string(),
  publishedAt: z.string(),
  title: z.string(),
  language: supportedLanguagesSchema,
  subtitle: z.string().nullable(),
  description: z.string(),
  featuredImage: featuredImageSchema.nullable(),
  tags: z.array(tagSchema).nullable(),
});

const tilSchema = z.object({
  _id: z.string(),
  title: z.string(),
  language: supportedLanguagesSchema,
  publishedAt: z.string(),
  slug: z.string(),
  tags: z.array(tagSchema).nullable(),
});

const postsAndTilsSchema = z.object({
  posts: z.array(postSchema),
  tils: z.array(tilSchema),
});
