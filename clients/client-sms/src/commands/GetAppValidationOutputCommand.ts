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

import { GetAppValidationOutputRequest, GetAppValidationOutputResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetAppValidationOutputCommand,
  serializeAws_json1_1GetAppValidationOutputCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 *
 * The input for {@link GetAppValidationOutputCommand}.
 */
export interface GetAppValidationOutputCommandInput extends GetAppValidationOutputRequest {}
/**
 * @public
 *
 * The output of {@link GetAppValidationOutputCommand}.
 */
export interface GetAppValidationOutputCommandOutput extends GetAppValidationOutputResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves output from validating an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppValidationOutputCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppValidationOutputCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // GetAppValidationOutputRequest
 *   appId: "STRING_VALUE", // required
 * };
 * const command = new GetAppValidationOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetAppValidationOutputCommandInput - {@link GetAppValidationOutputCommandInput}
 * @returns {@link GetAppValidationOutputCommandOutput}
 * @see {@link GetAppValidationOutputCommandInput} for command's `input` shape.
 * @see {@link GetAppValidationOutputCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 *
 */
export class GetAppValidationOutputCommand extends $Command<
  GetAppValidationOutputCommandInput,
  GetAppValidationOutputCommandOutput,
  SMSClientResolvedConfig
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
  constructor(readonly input: GetAppValidationOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppValidationOutputCommandInput, GetAppValidationOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAppValidationOutputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GetAppValidationOutputCommand";
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
  private serialize(input: GetAppValidationOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAppValidationOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAppValidationOutputCommandOutput> {
    return deserializeAws_json1_1GetAppValidationOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
