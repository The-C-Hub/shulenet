import { HttpStatus } from '@nestjs/common';

const userEmailAuthResponse = {
  id: 'a3aa18c3-a52a-4739-a93d-4ab98dccb2ba',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'email@example.com',
  phone: '',
  confirmation_sent_at: '2023-12-28T05:50:14.943511377Z',
  app_metadata: {
    provider: 'email',
    providers: ['email'],
  },
  user_metadata: {
    fullName: 'John Doe',
    isStudent: true,
    username: 'JohnDoe',
  },
  identities: [
    {
      identity_id: '702b5137-24db-471a-b09e-f947a06c4026',
      id: 'a3aa18c3-a52a-4739-a93d-4ab98dccb2ba',
      user_id: 'a3aa18c3-a52a-4739-a93d-4ab98dccb2ba',
      identity_data: {
        email: 'email@example.com',
        email_verified: false,
        phone_verified: false,
        sub: 'a3aa18c3-a52a-4739-a93d-4ab98dccb2ba',
      },
      provider: 'email',
      last_sign_in_at: '2023-12-28T05:47:52.834883Z',
      created_at: '2023-12-28T05:47:52.834938Z',
      updated_at: '2023-12-28T05:47:52.834938Z',
      email: 'email@example.com',
    },
  ],
  created_at: '2023-12-28T05:47:52.832937Z',
  updated_at: '2023-12-28T05:50:15.770654Z',
};

const emailAuthSession = {
  access_token: 'valid Access token',
  token_type: 'bearer',
  expires_in: 3600,
  expires_at: 1703753198,
  refresh_token: 'Pr1Q9VPbedJBp9UCqC30IQ',
  user: {
    id: '916798b4-4bc9-4c14-8756-250e22d8b7d5',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'email@example.com',
    email_confirmed_at: '2023-12-28T05:29:26.210764Z',
    phone: '',
    confirmation_sent_at: '2023-12-28T05:28:51.021455Z',
    confirmed_at: '2023-12-28T05:29:26.210764Z',
    last_sign_in_at: '2023-12-28T07:46:38.952881735Z',
    app_metadata: {
      provider: 'email',
      providers: ['email'],
    },
    user_metadata: {
      fullName: 'John Doe',
      isStudent: true,
      username: 'JohnDoe',
    },
    identities: [
      {
        identity_id: '2f50890e-991a-41ef-8242-76e6188690b9',
        id: '916798b4-4bc9-4c14-8756-250e22d8b7d5',
        user_id: '916798b4-4bc9-4c14-8756-250e22d8b7d5',
        identity_data: {
          email: 'email@example.com',
          email_verified: false,
          phone_verified: false,
          sub: '916798b4-4bc9-4c14-8756-250e22d8b7d5',
        },
        provider: 'email',
        last_sign_in_at: '2023-12-28T05:28:51.020272Z',
        created_at: '2023-12-28T05:28:51.020323Z',
        updated_at: '2023-12-28T05:28:51.020323Z',
        email: 'email@example.com',
      },
    ],
    created_at: '2023-12-28T05:28:51.018289Z',
    updated_at: '2023-12-28T07:46:38.954592Z',
  },
};

export const studentEmailSignUpResponseExample = {
  statusCode: HttpStatus.CREATED,
  data: {
    user: userEmailAuthResponse,
    session: null,
  },
};

export const EmailSignInResponseExample = {
  statusCode: HttpStatus.OK,
  data: {
    user: userEmailAuthResponse,
    session: emailAuthSession,
  },
};
