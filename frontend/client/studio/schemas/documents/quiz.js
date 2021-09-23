export default {
  name: 'quiz',
  title: 'Quiz',
  type: 'document',
  description: 'A list of questions along with possible answers (choices)',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      validation: (Rule) =>
        Rule.min(1).error('A quiz must have at least one question'),
      of: [{ type: 'question' }],
    },
  ],
};
