import { S3Client, PutObjectCommand ,type PutObjectCommandInput} from "@aws-sdk/client-s3";

const client = new S3Client({
    credentials: {
        accessKeyId:"AKIAYHJANAPZGNLR6EXP",
        secretAccessKey: "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"
    },
    region: "us-east-2"
})

export const uploadObject = async (input:PutObjectCommandInput) => {
    const comand = new PutObjectCommand(input)
    const response = await client.send(comand)
    return response
}