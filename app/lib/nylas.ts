import Nylas from "nylas";

export const nylas = new Nylas({
  apiKey: process.env.NYLAS_API_SECRET_KEY!,
  apiUri: process.env.NYLAS_API_URI!,
});

export const nylasConfig = {
  clientId: process.env.NYLAS_CLIENT_ID!,
  redirectUri: process.env.NEXT_PUBLIC_URL + "/api/oauth/exchange",
  apiKey: process.env.NYLAS_API_SECRET_KEY!,
  apiUri: process.env.NYLAS_API_URI!,
};
