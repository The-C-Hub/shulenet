import { HttpStatus } from '@nestjs/common';

export const userResponse = {
  id: 'e25a3c7d-c1ce-474d-a19a-375a1f298a21',
  full_name: 'John Doe',
  username: 'johndoe',
  email: 'email@example.com',
  profile_photo_url: null,
  is_course_instructor: false,
  created_at: '2024-01-01T06:10:46.995Z',
  updated_at: '2024-01-01T14:09:10.360Z',
};

export const userResponseExample = {
  statusCode: HttpStatus.OK,
  data: userResponse,
};
