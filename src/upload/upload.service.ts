import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadService {
  private readonly s3Client = new S3Client({
    region: this.config.getOrThrow('AWS_REGION'),
  });

  constructor(private readonly config: ConfigService) {}

  async upload(fileName: string, file: Buffer, folder?: string) {
    const uploadResult = await this.s3Client.send(
      new PutObjectCommand({
        Bucket: this.config.getOrThrow('AWS_BUCKET_NAME'),
        Key: `${folder ? `${folder}/` : ''}${fileName}`,
        Body: file,
        ACL: 'public-read', // This will make the file publicly available
      }),
    );
    return uploadResult;
  }
}
