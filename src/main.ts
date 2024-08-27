import { Amplify } from "aws-amplify"

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "amplifyAuthIdentityPool3FDE84CC_O16lQUBa2d1r",
      userPoolClientId: "us-east-2:22557ad6-a544-4d99-b4c0-f561a0a5152f",
      identityPoolId: "us-east-2_zYBpGb7qf",
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
})