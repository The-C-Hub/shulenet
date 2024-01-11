export interface UploadTypeValidatorOPtions {
  fileType: string[];
}

export interface IUploadMediaResponse {
  path: string;
  publicUrl: string;
}

export interface ImageUploadResponse {
  path: string;
  id: string;
  fullPath: string;
  publicUrl: string;
}