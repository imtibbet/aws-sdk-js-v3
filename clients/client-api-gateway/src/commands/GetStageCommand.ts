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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetStageRequest, Stage } from "../models/models_0";
import {
  deserializeAws_restJson1GetStageCommand,
  serializeAws_restJson1GetStageCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetStageCommand}.
 */
export interface GetStageCommandInput extends GetStageRequest {}
/**
 * @public
 *
 * The output of {@link GetStageCommand}.
 */
export interface GetStageCommandOutput extends Stage, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a Stage resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetStageCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetStageCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetStageRequest
 *   restApiId: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 * };
 * const command = new GetStageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetStageCommandInput - {@link GetStageCommandInput}
 * @returns {@link GetStageCommandOutput}
 * @see {@link GetStageCommandInput} for command's `input` shape.
 * @see {@link GetStageCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 *
 */
export class GetStageCommand extends $Command<
  GetStageCommandInput,
  GetStageCommandOutput,
  APIGatewayClientResolvedConfig
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
  constructor(readonly input: GetStageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStageCommandInput, GetStageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetStageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetStageCommand";
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
  private serialize(input: GetStageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetStageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStageCommandOutput> {
    return deserializeAws_restJson1GetStageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
