import { HttpStatus } from '@nestjs/common';

export const subjectResponseExample = {
  id: '2354cf22-f395-4892-9949-7558914c7fce',
  title: 'Mathematics',
  created_at: '2024-01-08T10:54:31.540Z',
  updated_at: '2024-01-08T10:54:31.540Z',
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

export const createSubjectResponseExample = {
  statusCode: HttpStatus.CREATED,
  data: subjectResponseExample,
};

export const allSubjectsResponseExample = {
  statusCode: HttpStatus.OK,
  data: [subjectResponseExample],
};

export const subjectFeatureImageResponseExample = {
  statusCode: HttpStatus.OK,
  data: {
    path: '12c9bf04-9f76-4b3e-8048-09b3ff51ca49',
    id: '3bdd48f6-ed66-4066-b1b8-4e114593cf85',
    fullPath: 'subject_feature_img/12c9bf04-9f76-4b3e-8048-09b3ff51ca49',
    publicUrl:
      'https://bhnawovfgphuzdbvllup.supabase.co/storage/v1/object/public/subject_feature_img/12c9bf04-9f76-4b3e-8048-09b3ff51ca49',
  },
};
