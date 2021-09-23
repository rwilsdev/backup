interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  mainImage: SanityImage;
  lessons: Lesson[];
  author: Author;
  categories: Categories[];
  isPaid: boolean;
}

interface Lesson {
  id: string;
  title: string;
  slug: string;
  video: MuxVideo;
  body: string;
  author: Author;
  categories: Categories[];
  publishedAt: Date;
}

interface Categories {
  title: string;
}

interface Author {
  name: string;
  email: string;
  avatar: SanityImage;
}

interface MuxVideo {
  title: string;
  video: string;
}

interface SanityImage {
  url: string;
  alt: string;
}

interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  categories: Categories[];
}

interface Question {
  id: string;
  prompt: string;
  optionA: Answer;
  optionB: Answer;
  optionC: Answer;
  optionD: Answer;
  answer: CorrectAnswer;
  categories: Categories[];
}

enum CorrectAnswer {
  'A',
  'B',
  'C',
  'D',
}

interface Answer {
  id: string;
  text: string;
  categories: Categories[];
}

export type {
  Course,
  Lesson,
  Categories,
  Author,
  MuxVideo,
  SanityImage,
  Quiz,
  Question,
  CorrectAnswer,
  Answer,
};
