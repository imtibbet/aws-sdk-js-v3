// smithy-typescript generated code
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

import { HttpPayloadWithXmlNamespaceAndPrefixInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand,
  serializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 *
 * The input for {@link HttpPayloadWithXmlNamespaceAndPrefixCommand}.
 */
export interface HttpPayloadWithXmlNamespaceAndPrefixCommandInput
  extends HttpPayloadWithXmlNamespaceAndPrefixInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithXmlNamespaceAndPrefixCommand}.
 */
export interface HttpPayloadWithXmlNamespaceAndPrefixCommandOutput
  extends HttpPayloadWithXmlNamespaceAndPrefixInputOutput,
    __MetadataBearer {}

/**
 * @public
 * The following example serializes a payload that uses an XML namespace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceAndPrefixCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithXmlNamespaceAndPrefixCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithXmlNamespaceAndPrefixInputOutput
 *   nested: { // PayloadWithXmlNamespaceAndPrefix
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithXmlNamespaceAndPrefixCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param HttpPayloadWithXmlNamespaceAndPrefixCommandInput - {@link HttpPayloadWithXmlNamespaceAndPrefixCommandInput}
 * @returns {@link HttpPayloadWithXmlNamespaceAndPrefixCommandOutput}
 * @see {@link HttpPayloadWithXmlNamespaceAndPrefixCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithXmlNamespaceAndPrefixCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 *
 */
export class HttpPayloadWithXmlNamespaceAndPrefixCommand extends $Command<
  HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
  HttpPayloadWithXmlNamespaceAndPrefixCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPayloadWithXmlNamespaceAndPrefixCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HttpPayloadWithXmlNamespaceAndPrefixCommandInput, HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadWithXmlNamespaceAndPrefixCommand";
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
    input: HttpPayloadWithXmlNamespaceAndPrefixCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPayloadWithXmlNamespaceAndPrefixCommandOutput> {
    return deserializeAws_restXmlHttpPayloadWithXmlNamespaceAndPrefixCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
