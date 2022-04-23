import EpnsSDK from "@epnsproject/backend-sdk-staging";

const CHANNEL_KEY: string = "";
const epnsSdk: EpnsSDK = new EpnsSDK(CHANNEL_KEY);

const allChannelSubscribers = await epnsSdk.getSubscribedUsers();

const tx = await epnsSdk.sendNotification(

)

