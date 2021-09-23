export default {
  title: 'Videos',
  name: 'video',
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Video File',
      name: 'video',
      type: 'mux.video',
    },
  ],
};
