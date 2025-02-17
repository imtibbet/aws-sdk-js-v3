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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DetachCertificateFromDistributionRequest, DetachCertificateFromDistributionResult } from "../models/models_0";
import {
  deserializeAws_json1_1DetachCertificateFromDistributionCommand,
  serializeAws_json1_1DetachCertificateFromDistributionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DetachCertificateFromDistributionCommand}.
 */
export interface DetachCertificateFromDistributionCommandInput extends DetachCertificateFromDistributionRequest {}
/**
 * @public
 *
 * The output of {@link DetachCertificateFromDistributionCommand}.
 */
export interface DetachCertificateFromDistributionCommandOutput
  extends DetachCertificateFromDistributionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After the certificate is detached, your distribution stops accepting traffic for all of
 *       the domains that are associated with the certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DetachCertificateFromDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DetachCertificateFromDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // DetachCertificateFromDistributionRequest
 *   distributionName: "STRING_VALUE", // required
 * };
 * const command = new DetachCertificateFromDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DetachCertificateFromDistributionCommandInput - {@link DetachCertificateFromDistributionCommandInput}
 * @returns {@link DetachCertificateFromDistributionCommandOutput}
 * @see {@link DetachCertificateFromDistributionCommandInput} for command's `input` shape.
 * @see {@link DetachCertificateFromDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 *
 */
export class DetachCertificateFromDistributionCommand extends $Command<
  DetachCertificateFromDistributionCommandInput,
  DetachCertificateFromDistributionCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: DetachCertificateFromDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachCertificateFromDistributionCommandInput, DetachCertificateFromDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachCertificateFromDistributionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DetachCertificateFromDistributionCommand";
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
  private serialize(
    input: DetachCertificateFromDistributionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DetachCertificateFromDistributionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachCertificateFromDistributionCommandOutput> {
    return deserializeAws_json1_1DetachCertificateFromDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
