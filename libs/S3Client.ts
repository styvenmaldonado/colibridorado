import {
  S3Client,
  PutObjectCommand,
  type PutObjectCommandInput,
} from "@aws-sdk/client-s3";
const runtimeConfig = useRuntimeConfig();

const client = new S3Client({
  credentials: {
    accessKeyId: runtimeConfig?.secret?.s3!.accessKeyId || "",
    secretAccessKey: runtimeConfig?.secret?.s3!.secretAccessKey || "",
  },
  region: "us-east-2",
});

export const uploadObject = async (input: PutObjectCommandInput) => {
  const comand = new PutObjectCommand(input);
  const response = await client.send(comand);
  return response;
};
