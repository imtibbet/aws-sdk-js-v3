// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetPersonTrackingCommand,
  GetPersonTrackingCommandInput,
  GetPersonTrackingCommandOutput,
} from "../commands/GetPersonTrackingCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: GetPersonTrackingCommandInput,
  ...args: any
): Promise<GetPersonTrackingCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPersonTrackingCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetPersonTracking(
  config: RekognitionPaginationConfiguration,
  input: GetPersonTrackingCommandInput,
  ...additionalArguments: any
): Paginator<GetPersonTrackingCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetPersonTrackingCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RekognitionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Rekognition | RekognitionClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
