import { HttpStatus } from '@nestjs/common';

export const CourseResponseExample = {
  id: '742f7d21-131d-4878-b793-644833268fa2',
  title: 'Getting Started With Calculuss',
  overview: 'This subject is an introduction to calculus',
  feature_image_url: null,
  created_at: '2024-01-10T11:51:46.434Z',
  updated_at: '2024-01-10T11:51:46.434Z',
  subject: {
    id: '12c9bf04-9f76-4b3e-8048-09b3ff51ca49',
    title: 'Maths',
    feature_image_url:
      'https://bhnawovfgphuzdbvllup.supabase.co/storage/v1/object/public/subject_feature_img/12c9bf04-9f76-4b3e-8048-09b3ff51ca49',
    created_at: '2024-01-08T15:51:55.563Z',
    updated_at: '2024-01-08T18:14:28.187Z',
  },
  creator: {
    id: 'bf20b53d-5961-4c34-bf94-849ab4d2bc3a',
    full_name: 'John Doe',
    username: 'JohnDoee',
    email: 'anton.odongo@wezacare.org',
    profile_photo_url: null,
    is_course_instructor: false,
    created_at: '2024-01-05T20:06:21.542Z',
    updated_at: '2024-01-05T20:06:21.542Z',
  },
};

export const createCourseResponseExample = {
  statusCode: HttpStatus.CREATED,
  data: CourseResponseExample,
};

export const getAllCoursesResponseExample = {
  statusCode: HttpStatus.OK,
  data: [CourseResponseExample],
};

export const getCourseDetailsResponseExample = {
  statusCode: HttpStatus.OK,
  data: CourseResponseExample,
};

export const uploadCourseFeatureImageResponseExample = {
  statusCode: HttpStatus.CREATED,
  data: {
    path: '12c9bf04-9f76-4b3e-8048-09b3ff51ca49',
    id: '3bdd48f6-ed66-4066-b1b8-4e114593cf85',
    fullPath: 'subject_feature_img/12c9bf04-9f76-4b3e-8048-09b3ff51ca49',
    publicUrl:
      'https://bhnawovfgphuzdbvllup.supabase.co/storage/v1/object/public/subject_feature_img/12c9bf04-9f76-4b3e-8048-09b3ff51ca49',
  },
};
