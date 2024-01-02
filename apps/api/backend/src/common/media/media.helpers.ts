import * as sharp from 'sharp';

export async function compressImage(
  file: Express.Multer.File,
  maximumImageWidth: number,
): Promise<Buffer> {
  const compressedImage = await sharp(file.buffer)
    .resize({
      width: maximumImageWidth,
    })
    .toBuffer();
  return compressedImage;
}
