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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  ListEntityRecognizersRequest,
  ListEntityRecognizersResponse,
  ListEntityRecognizersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListEntityRecognizersCommand,
  serializeAws_json1_1ListEntityRecognizersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListEntityRecognizersCommand}.
 */
export interface ListEntityRecognizersCommandInput extends ListEntityRecognizersRequest {}
/**
 * @public
 *
 * The output of {@link ListEntityRecognizersCommand}.
 */
export interface ListEntityRecognizersCommandOutput extends ListEntityRecognizersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the properties of all entity recognizers that you created, including
 *       recognizers currently in training. Allows you to filter the list of recognizers based on
 *       criteria such as status and submission time. This call returns up to 500 entity recognizers in
 *       the list, with a default number of 100 recognizers in the list.</p>
 *          <p>The results of this list are not in any particular order. Please get the list and sort
 *       locally if needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEntityRecognizersCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEntityRecognizersCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // ListEntityRecognizersRequest
 *   Filter: { // EntityRecognizerFilter
 *     Status: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 *     RecognizerName: "STRING_VALUE",
 *     SubmitTimeBefore: new Date("TIMESTAMP"),
 *     SubmitTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEntityRecognizersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListEntityRecognizersCommandInput - {@link ListEntityRecognizersCommandInput}
 * @returns {@link ListEntityRecognizersCommandOutput}
 * @see {@link ListEntityRecognizersCommandInput} for command's `input` shape.
 * @see {@link ListEntityRecognizersCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 *
 */
export class ListEntityRecognizersCommand extends $Command<
  ListEntityRecognizersCommandInput,
  ListEntityRecognizersCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: ListEntityRecognizersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEntityRecognizersCommandInput, ListEntityRecognizersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEntityRecognizersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListEntityRecognizersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListEntityRecognizersResponseFilterSensitiveLog,
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
  private serialize(input: ListEntityRecognizersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEntityRecognizersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEntityRecognizersCommandOutput> {
    return deserializeAws_json1_1ListEntityRecognizersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
