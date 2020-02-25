import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { Platform } from "react-native";

const host = Platform.OS === "os" ? "http://localhost:6666" : "http://10.0.2.2:6666";

export const client = new ApolloClient({
  link: createUploadLink({
    uri: host
  }),
  cache: new InMemoryCache()
});