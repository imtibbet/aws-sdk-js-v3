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

import { ListPagesByEngagementRequest, ListPagesByEngagementResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListPagesByEngagementCommand,
  serializeAws_json1_1ListPagesByEngagementCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 *
 * The input for {@link ListPagesByEngagementCommand}.
 */
export interface ListPagesByEngagementCommandInput extends ListPagesByEngagementRequest {}
/**
 * @public
 *
 * The output of {@link ListPagesByEngagementCommand}.
 */
export interface ListPagesByEngagementCommandOutput extends ListPagesByEngagementResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists the engagements to contact channels that occurred by engaging a contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPagesByEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPagesByEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // ListPagesByEngagementRequest
 *   EngagementId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPagesByEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListPagesByEngagementCommandInput - {@link ListPagesByEngagementCommandInput}
 * @returns {@link ListPagesByEngagementCommandOutput}
 * @see {@link ListPagesByEngagementCommandInput} for command's `input` shape.
 * @see {@link ListPagesByEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 *
 * @example To list pages to contact channels started from an engagement.
 * ```javascript
 * // The following list-pages-by-engagement example lists the pages that occurred while engaging the defined engagement plan.
 * const input = {
 *   "EngagementId": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/akuam/78a29753-3674-4ac5-9f83-0468563567f0"
 * };
 * const command = new ListPagesByEngagementCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Pages": [
 *     {
 *       "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *       "EngagementArn": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/akuam/78a29753-3674-4ac5-9f83-0468563567f0",
 *       "PageArn": "arn:aws:ssm-contacts:us-east-2:111122223333:page/akuam/ad0052bd-e606-498a-861b-25726292eb93",
 *       "Sender": "cli",
 *       "SentTime": "2021-05-18T18:40:27.245000+00:00"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-pages-to-contact-channels-started-from-an-engagement-1630435864674
 * ```
 *
 */
export class ListPagesByEngagementCommand extends $Command<
  ListPagesByEngagementCommandInput,
  ListPagesByEngagementCommandOutput,
  SSMContactsClientResolvedConfig
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
  constructor(readonly input: ListPagesByEngagementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPagesByEngagementCommandInput, ListPagesByEngagementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPagesByEngagementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListPagesByEngagementCommand";
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
  private serialize(input: ListPagesByEngagementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPagesByEngagementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPagesByEngagementCommandOutput> {
    return deserializeAws_json1_1ListPagesByEngagementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
