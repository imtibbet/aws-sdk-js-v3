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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetFieldLevelEncryptionRequest, GetFieldLevelEncryptionResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetFieldLevelEncryptionCommand,
  serializeAws_restXmlGetFieldLevelEncryptionCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link GetFieldLevelEncryptionCommand}.
 */
export interface GetFieldLevelEncryptionCommandInput extends GetFieldLevelEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link GetFieldLevelEncryptionCommand}.
 */
export interface GetFieldLevelEncryptionCommandOutput extends GetFieldLevelEncryptionResult, __MetadataBearer {}

/**
 * @public
 * <p>Get the field-level encryption configuration information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetFieldLevelEncryptionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetFieldLevelEncryptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetFieldLevelEncryptionCommandInput - {@link GetFieldLevelEncryptionCommandInput}
 * @returns {@link GetFieldLevelEncryptionCommandOutput}
 * @see {@link GetFieldLevelEncryptionCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionConfig} (client fault)
 *  <p>The specified configuration for field-level encryption doesn't exist.</p>
 *
 *
 */
export class GetFieldLevelEncryptionCommand extends $Command<
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: GetFieldLevelEncryptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFieldLevelEncryptionCommandInput, GetFieldLevelEncryptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFieldLevelEncryptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetFieldLevelEncryptionCommand";
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
  private serialize(input: GetFieldLevelEncryptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetFieldLevelEncryptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFieldLevelEncryptionCommandOutput> {
    return deserializeAws_restXmlGetFieldLevelEncryptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
