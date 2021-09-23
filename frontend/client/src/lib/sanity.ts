import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity';
import { config } from './config';

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables');
}

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (usePreview: boolean) =>
  usePreview ? previewClient : client;

export default client;
