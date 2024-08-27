import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },

    
  userAttributes: {
    // specify a "birthdate" attribute
    givenName: {
      mutable:true,
      required:true
    },
    familyName: {
      mutable:true,
      required:true
    },
    birthdate: {
      mutable: true,
      required: false,
    },    
    phoneNumber: {
      mutable: true,
      required: false,
    }, 
    address: {
      mutable: true,
      required: false
    }, 
    "custom:tipo_documento": {
      dataType: "String",
      mutable: true,
      maxLen: 16,
      minLen: 1,
    },
    "custom:numero_documento": {
      dataType: "Number",
      mutable: true,
      min: 1,
      max: 100,
    },
  },
  groups: ["SUPERADMIN", "ADMIN"],
});
