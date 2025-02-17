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

import { XmlIntEnumsInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlXmlIntEnumsCommand,
  serializeAws_restXmlXmlIntEnumsCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 *
 * The input for {@link XmlIntEnumsCommand}.
 */
export interface XmlIntEnumsCommandInput extends XmlIntEnumsInputOutput {}
/**
 * @public
 *
 * The output of {@link XmlIntEnumsCommand}.
 */
export interface XmlIntEnumsCommandOutput extends XmlIntEnumsInputOutput, __MetadataBearer {}

/**
 * @public
 * This example serializes enums as top level properties, in lists, sets, and maps.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, XmlIntEnumsCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, XmlIntEnumsCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // XmlIntEnumsInputOutput
 *   intEnum1: 1 || 2 || 3,
 *   intEnum2: 1 || 2 || 3,
 *   intEnum3: 1 || 2 || 3,
 *   intEnumList: [ // IntegerEnumList
 *     1 || 2 || 3,
 *   ],
 *   intEnumSet: [ // IntegerEnumSet
 *     1 || 2 || 3,
 *   ],
 *   intEnumMap: { // IntegerEnumMap
 *     "<keys>": 1 || 2 || 3,
 *   },
 * };
 * const command = new XmlIntEnumsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param XmlIntEnumsCommandInput - {@link XmlIntEnumsCommandInput}
 * @returns {@link XmlIntEnumsCommandOutput}
 * @see {@link XmlIntEnumsCommandInput} for command's `input` shape.
 * @see {@link XmlIntEnumsCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 *
 */
export class XmlIntEnumsCommand extends $Command<
  XmlIntEnumsCommandInput,
  XmlIntEnumsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: XmlIntEnumsCommandInput) {
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
  ): Handler<XmlIntEnumsCommandInput, XmlIntEnumsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "XmlIntEnumsCommand";
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
  private serialize(input: XmlIntEnumsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlXmlIntEnumsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlIntEnumsCommandOutput> {
    return deserializeAws_restXmlXmlIntEnumsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
