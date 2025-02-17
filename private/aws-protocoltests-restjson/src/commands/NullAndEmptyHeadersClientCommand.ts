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

import { NullAndEmptyHeadersIO } from "../models/models_0";
import {
  deserializeAws_restJson1NullAndEmptyHeadersClientCommand,
  serializeAws_restJson1NullAndEmptyHeadersClientCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 *
 * The input for {@link NullAndEmptyHeadersClientCommand}.
 */
export interface NullAndEmptyHeadersClientCommandInput extends NullAndEmptyHeadersIO {}
/**
 * @public
 *
 * The output of {@link NullAndEmptyHeadersClientCommand}.
 */
export interface NullAndEmptyHeadersClientCommandOutput extends NullAndEmptyHeadersIO, __MetadataBearer {}

/**
 * @public
 * Null and empty headers are not sent over the wire.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, NullAndEmptyHeadersClientCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, NullAndEmptyHeadersClientCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // NullAndEmptyHeadersIO
 *   a: "STRING_VALUE",
 *   b: "STRING_VALUE",
 *   c: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new NullAndEmptyHeadersClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param NullAndEmptyHeadersClientCommandInput - {@link NullAndEmptyHeadersClientCommandInput}
 * @returns {@link NullAndEmptyHeadersClientCommandOutput}
 * @see {@link NullAndEmptyHeadersClientCommandInput} for command's `input` shape.
 * @see {@link NullAndEmptyHeadersClientCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 *
 */
export class NullAndEmptyHeadersClientCommand extends $Command<
  NullAndEmptyHeadersClientCommandInput,
  NullAndEmptyHeadersClientCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: NullAndEmptyHeadersClientCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NullAndEmptyHeadersClientCommandInput, NullAndEmptyHeadersClientCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "NullAndEmptyHeadersClientCommand";
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
  private serialize(input: NullAndEmptyHeadersClientCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1NullAndEmptyHeadersClientCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NullAndEmptyHeadersClientCommandOutput> {
    return deserializeAws_restJson1NullAndEmptyHeadersClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
