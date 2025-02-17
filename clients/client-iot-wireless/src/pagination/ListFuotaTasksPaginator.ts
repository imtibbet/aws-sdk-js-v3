// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFuotaTasksCommand,
  ListFuotaTasksCommandInput,
  ListFuotaTasksCommandOutput,
} from "../commands/ListFuotaTasksCommand";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { IoTWirelessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTWirelessClient,
  input: ListFuotaTasksCommandInput,
  ...args: any
): Promise<ListFuotaTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFuotaTasksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFuotaTasks(
  config: IoTWirelessPaginationConfiguration,
  input: ListFuotaTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListFuotaTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFuotaTasksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof IoTWirelessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTWireless | IoTWirelessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
