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

import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { ListJobsRequest, ListJobsResponse } from "../models/models_2";
import {
  deserializeAws_restJson1ListJobsCommand,
  serializeAws_restJson1ListJobsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResponse, __MetadataBearer {}

/**
 * @public
 * Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, ListJobsCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, ListJobsCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const input = { // ListJobsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Order: "ASCENDING" || "DESCENDING",
 *   Queue: "STRING_VALUE",
 *   Status: "SUBMITTED" || "PROGRESSING" || "COMPLETE" || "CANCELED" || "ERROR",
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for MediaConvertClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The service can't process your request because of a problem in the request. Please check your request form and syntax.
 *
 * @throws {@link ConflictException} (client fault)
 *  The service couldn't complete your request because there is a conflict with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  You don't have permissions for this action with the credentials you sent.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  The service encountered an unexpected condition and can't fulfill your request.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you requested doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 *
 */
export class ListJobsCommand extends $Command<
  ListJobsCommandInput,
  ListJobsCommandOutput,
  MediaConvertClientResolvedConfig
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
  constructor(readonly input: ListJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsCommandInput, ListJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "ListJobsCommand";
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
  private serialize(input: ListJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsCommandOutput> {
    return deserializeAws_restJson1ListJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
