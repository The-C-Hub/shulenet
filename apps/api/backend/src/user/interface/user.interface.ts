import { UpdateUserDetailsDto } from '@user/dto/update-user-details.dto';

export interface IUserUpdate {
  updateUserDetails?: UpdateUserDetailsDto;
  profile_photo_url?: string;
}
