import { User, Session } from '@supabase/supabase-js';

export interface IUserSignUpResponse {
  user: User;
  session: Session | null;
}

export interface IUserSignInResponse {
  user: User;
  session: Session;
}
