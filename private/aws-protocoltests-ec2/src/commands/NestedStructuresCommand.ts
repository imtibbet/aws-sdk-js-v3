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
import { NestedStructuresInput } from "../models/models_0";
import {
  deserializeAws_ec2NestedStructuresCommand,
  serializeAws_ec2NestedStructuresCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link NestedStructuresCommand}.
 */
export interface NestedStructuresCommandInput extends NestedStructuresInput {}
/**
 * @public
 *
 * The output of {@link NestedStructuresCommand}.
 */
export interface NestedStructuresCommandOutput extends __MetadataBearer {}

/**
 * @public
 * This test serializes nested and recursive structure members.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2ProtocolClient, NestedStructuresCommand } from "@aws-sdk/aws-protocoltests-ec2"; // ES Modules import
 * // const { EC2ProtocolClient, NestedStructuresCommand } = require("@aws-sdk/aws-protocoltests-ec2"); // CommonJS import
 * const client = new EC2ProtocolClient(config);
 * const input = { // NestedStructuresInput
 *   Nested: { // StructArg
 *     StringArg: "STRING_VALUE",
 *     OtherArg: true || false,
 *     RecursiveArg: {
 *       StringArg: "STRING_VALUE",
 *       OtherArg: true || false,
 *       RecursiveArg: "<StructArg>",
 *     },
 *   },
 * };
 * const command = new NestedStructuresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param NestedStructuresCommandInput - {@link NestedStructuresCommandInput}
 * @returns {@link NestedStructuresCommandOutput}
 * @see {@link NestedStructuresCommandInput} for command's `input` shape.
 * @see {@link NestedStructuresCommandOutput} for command's `response` shape.
 * @see {@link EC2ProtocolClientResolvedConfig | config} for EC2ProtocolClient's `config` shape.
 *
 *
 */
export class NestedStructuresCommand extends $Command<
  NestedStructuresCommandInput,
  NestedStructuresCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: NestedStructuresCommandInput) {
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
  ): Handler<NestedStructuresCommandInput, NestedStructuresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "NestedStructuresCommand";
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
  private serialize(input: NestedStructuresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2NestedStructuresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NestedStructuresCommandOutput> {
    return deserializeAws_ec2NestedStructuresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
