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

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { SimpleInputParamsInput } from "../models/models_0";
import {
  deserializeAws_ec2SimpleInputParamsCommand,
  serializeAws_ec2SimpleInputParamsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link SimpleInputParamsCommand}.
 */
export interface SimpleInputParamsCommandInput extends SimpleInputParamsInput {}
/**
 * @public
 *
 * The output of {@link SimpleInputParamsCommand}.
 */
export interface SimpleInputParamsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This test serializes strings, numbers, and boolean values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, SimpleInputParamsCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, SimpleInputParamsCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = { // SimpleInputParamsInput
 *   Foo: "STRING_VALUE",
 *   Bar: "STRING_VALUE",
 *   Baz: true || false,
 *   Bam: Number("int"),
 *   FloatValue: Number("float"),
 *   Boo: Number("double"),
 *   Qux: "BLOB_VALUE",
 *   FooEnum: "Foo" || "Baz" || "Bar" || "1" || "0",
 *   HasQueryName: "STRING_VALUE",
 *   HasQueryAndXmlName: "STRING_VALUE",
 *   UsesXmlName: "STRING_VALUE",
 * };
 * const command = new SimpleInputParamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SimpleInputParamsCommandInput - {@link SimpleInputParamsCommandInput}
 * @returns {@link SimpleInputParamsCommandOutput}
 * @see {@link SimpleInputParamsCommandInput} for command's `input` shape.
 * @see {@link SimpleInputParamsCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 *
 */
export class SimpleInputParamsCommand extends $Command<
  SimpleInputParamsCommandInput,
  SimpleInputParamsCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: SimpleInputParamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SimpleInputParamsCommandInput, SimpleInputParamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "SimpleInputParamsCommand";
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
  private serialize(input: SimpleInputParamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2SimpleInputParamsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SimpleInputParamsCommandOutput> {
    return deserializeAws_ec2SimpleInputParamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
