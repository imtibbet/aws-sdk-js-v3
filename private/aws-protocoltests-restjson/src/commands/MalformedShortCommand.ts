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

import { MalformedShortInput } from "../models/models_0";
import {
  deserializeAws_restJson1MalformedShortCommand,
  serializeAws_restJson1MalformedShortCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 *
 * The input for {@link MalformedShortCommand}.
 */
export interface MalformedShortCommandInput extends MalformedShortInput {}
/**
 * @public
 *
 * The output of {@link MalformedShortCommand}.
 */
export interface MalformedShortCommandOutput extends __MetadataBearer {}

export class MalformedShortCommand extends $Command<
  MalformedShortCommandInput,
  MalformedShortCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: MalformedShortCommandInput) {
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
  ): Handler<MalformedShortCommandInput, MalformedShortCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedShortCommand";
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
  private serialize(input: MalformedShortCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1MalformedShortCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MalformedShortCommandOutput> {
    return deserializeAws_restJson1MalformedShortCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
