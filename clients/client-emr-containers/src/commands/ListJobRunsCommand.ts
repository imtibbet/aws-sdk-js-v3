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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { ListJobRunsRequest, ListJobRunsResponse, ListJobRunsResponseFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1ListJobRunsCommand,
  serializeAws_restJson1ListJobRunsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandInput extends ListJobRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandOutput extends ListJobRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists job runs based on a set of parameters. A job run is a unit of work, such as a
 *          Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListJobRunsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListJobRunsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // ListJobRunsRequest
 *   virtualClusterId: "STRING_VALUE", // required
 *   createdBefore: new Date("TIMESTAMP"),
 *   createdAfter: new Date("TIMESTAMP"),
 *   name: "STRING_VALUE",
 *   states: [ // JobRunStates
 *     "PENDING" || "SUBMITTED" || "RUNNING" || "FAILED" || "CANCELLED" || "CANCEL_PENDING" || "COMPLETED",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListJobRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListJobRunsCommandInput - {@link ListJobRunsCommandInput}
 * @returns {@link ListJobRunsCommandOutput}
 * @see {@link ListJobRunsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 *
 */
export class ListJobRunsCommand extends $Command<
  ListJobRunsCommandInput,
  ListJobRunsCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: ListJobRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobRunsCommandInput, ListJobRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListJobRunsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "ListJobRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListJobRunsResponseFilterSensitiveLog,
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
  private serialize(input: ListJobRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJobRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobRunsCommandOutput> {
    return deserializeAws_restJson1ListJobRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
