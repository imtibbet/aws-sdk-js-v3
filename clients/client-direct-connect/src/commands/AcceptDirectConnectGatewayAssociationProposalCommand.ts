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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  AcceptDirectConnectGatewayAssociationProposalRequest,
  AcceptDirectConnectGatewayAssociationProposalResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand,
  serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AcceptDirectConnectGatewayAssociationProposalCommand}.
 */
export interface AcceptDirectConnectGatewayAssociationProposalCommandInput
  extends AcceptDirectConnectGatewayAssociationProposalRequest {}
/**
 * @public
 *
 * The output of {@link AcceptDirectConnectGatewayAssociationProposalCommand}.
 */
export interface AcceptDirectConnectGatewayAssociationProposalCommandOutput
  extends AcceptDirectConnectGatewayAssociationProposalResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AcceptDirectConnectGatewayAssociationProposalCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AcceptDirectConnectGatewayAssociationProposalCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // AcceptDirectConnectGatewayAssociationProposalRequest
 *   directConnectGatewayId: "STRING_VALUE", // required
 *   proposalId: "STRING_VALUE", // required
 *   associatedGatewayOwnerAccount: "STRING_VALUE", // required
 *   overrideAllowedPrefixesToDirectConnectGateway: [ // RouteFilterPrefixList
 *     { // RouteFilterPrefix
 *       cidr: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AcceptDirectConnectGatewayAssociationProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AcceptDirectConnectGatewayAssociationProposalCommandInput - {@link AcceptDirectConnectGatewayAssociationProposalCommandInput}
 * @returns {@link AcceptDirectConnectGatewayAssociationProposalCommandOutput}
 * @see {@link AcceptDirectConnectGatewayAssociationProposalCommandInput} for command's `input` shape.
 * @see {@link AcceptDirectConnectGatewayAssociationProposalCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 *
 */
export class AcceptDirectConnectGatewayAssociationProposalCommand extends $Command<
  AcceptDirectConnectGatewayAssociationProposalCommandInput,
  AcceptDirectConnectGatewayAssociationProposalCommandOutput,
  DirectConnectClientResolvedConfig
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
  constructor(readonly input: AcceptDirectConnectGatewayAssociationProposalCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AcceptDirectConnectGatewayAssociationProposalCommandInput,
    AcceptDirectConnectGatewayAssociationProposalCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        AcceptDirectConnectGatewayAssociationProposalCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "AcceptDirectConnectGatewayAssociationProposalCommand";
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
    input: AcceptDirectConnectGatewayAssociationProposalCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptDirectConnectGatewayAssociationProposalCommandOutput> {
    return deserializeAws_json1_1AcceptDirectConnectGatewayAssociationProposalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
