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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyIpamResourceDiscoveryRequest, ModifyIpamResourceDiscoveryResult } from "../models/models_6";
import {
  deserializeAws_ec2ModifyIpamResourceDiscoveryCommand,
  serializeAws_ec2ModifyIpamResourceDiscoveryCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ModifyIpamResourceDiscoveryCommand}.
 */
export interface ModifyIpamResourceDiscoveryCommandInput extends ModifyIpamResourceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamResourceDiscoveryCommand}.
 */
export interface ModifyIpamResourceDiscoveryCommandOutput extends ModifyIpamResourceDiscoveryResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies a resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamResourceDiscoveryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamResourceDiscoveryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamResourceDiscoveryRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AddOperatingRegions: [ // AddIpamOperatingRegionSet
 *     { // AddIpamOperatingRegion
 *       RegionName: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveOperatingRegions: [ // RemoveIpamOperatingRegionSet
 *     { // RemoveIpamOperatingRegion
 *       RegionName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyIpamResourceDiscoveryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyIpamResourceDiscoveryCommandInput - {@link ModifyIpamResourceDiscoveryCommandInput}
 * @returns {@link ModifyIpamResourceDiscoveryCommandOutput}
 * @see {@link ModifyIpamResourceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamResourceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class ModifyIpamResourceDiscoveryCommand extends $Command<
  ModifyIpamResourceDiscoveryCommandInput,
  ModifyIpamResourceDiscoveryCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: ModifyIpamResourceDiscoveryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyIpamResourceDiscoveryCommandInput, ModifyIpamResourceDiscoveryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyIpamResourceDiscoveryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyIpamResourceDiscoveryCommand";
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
  private serialize(input: ModifyIpamResourceDiscoveryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyIpamResourceDiscoveryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyIpamResourceDiscoveryCommandOutput> {
    return deserializeAws_ec2ModifyIpamResourceDiscoveryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
