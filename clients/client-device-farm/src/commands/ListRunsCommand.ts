// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListRunsRequest, ListRunsResult } from "../models/models_0";
import { deserializeAws_json1_1ListRunsCommand, serializeAws_json1_1ListRunsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListRunsCommand}.
 */
export interface ListRunsCommandInput extends ListRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListRunsCommand}.
 */
export interface ListRunsCommandOutput extends ListRunsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about runs, given an AWS Device Farm project ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListRunsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListRunsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListRunsRequest
 *   arn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListRunsCommandInput - {@link ListRunsCommandInput}
 * @returns {@link ListRunsCommandOutput}
 * @see {@link ListRunsCommandInput} for command's `input` shape.
 * @see {@link ListRunsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 *
 * @example To get information about a test run
 * ```javascript
 * // The following example returns information about a specific test run.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE",
 *   "nextToken": "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE"
 * };
 * const command = new ListRunsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "runs": [
 *     {
 *       "name": "My Test Run",
 *       "type": "BUILTIN_EXPLORER",
 *       "arn": "arn:aws:devicefarm:us-west-2:123456789101:run:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/0fcac17b-6122-44d7-ae5a-12345EXAMPLE",
 *       "billingMethod": "METERED",
 *       "completedJobs": 0,
 *       "counters": {
 *         "errored": 0,
 *         "failed": 0,
 *         "passed": 0,
 *         "skipped": 0,
 *         "stopped": 0,
 *         "total": 0,
 *         "warned": 0
 *       },
 *       "created": "1472667509.852",
 *       "deviceMinutes": {
 *         "metered": 0,
 *         "total": 0,
 *         "unmetered": 0
 *       },
 *       "platform": "ANDROID",
 *       "result": "PENDING",
 *       "status": "RUNNING",
 *       "totalJobs": 3
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-information-about-test-runs-1472582711069
 * ```
 *
 */
export class ListRunsCommand extends $Command<
  ListRunsCommandInput,
  ListRunsCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRunsCommandInput, ListRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRunsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRunsCommandOutput> {
    return deserializeAws_json1_1ListRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
