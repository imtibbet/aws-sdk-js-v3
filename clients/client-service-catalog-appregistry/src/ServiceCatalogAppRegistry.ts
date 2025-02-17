// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateAttributeGroupCommand,
  AssociateAttributeGroupCommandInput,
  AssociateAttributeGroupCommandOutput,
} from "./commands/AssociateAttributeGroupCommand";
import {
  AssociateResourceCommand,
  AssociateResourceCommandInput,
  AssociateResourceCommandOutput,
} from "./commands/AssociateResourceCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateAttributeGroupCommand,
  CreateAttributeGroupCommandInput,
  CreateAttributeGroupCommandOutput,
} from "./commands/CreateAttributeGroupCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteAttributeGroupCommand,
  DeleteAttributeGroupCommandInput,
  DeleteAttributeGroupCommandOutput,
} from "./commands/DeleteAttributeGroupCommand";
import {
  DisassociateAttributeGroupCommand,
  DisassociateAttributeGroupCommandInput,
  DisassociateAttributeGroupCommandOutput,
} from "./commands/DisassociateAttributeGroupCommand";
import {
  DisassociateResourceCommand,
  DisassociateResourceCommandInput,
  DisassociateResourceCommandOutput,
} from "./commands/DisassociateResourceCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetAssociatedResourceCommand,
  GetAssociatedResourceCommandInput,
  GetAssociatedResourceCommandOutput,
} from "./commands/GetAssociatedResourceCommand";
import {
  GetAttributeGroupCommand,
  GetAttributeGroupCommandInput,
  GetAttributeGroupCommandOutput,
} from "./commands/GetAttributeGroupCommand";
import {
  GetConfigurationCommand,
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
} from "./commands/GetConfigurationCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListAssociatedAttributeGroupsCommand,
  ListAssociatedAttributeGroupsCommandInput,
  ListAssociatedAttributeGroupsCommandOutput,
} from "./commands/ListAssociatedAttributeGroupsCommand";
import {
  ListAssociatedResourcesCommand,
  ListAssociatedResourcesCommandInput,
  ListAssociatedResourcesCommandOutput,
} from "./commands/ListAssociatedResourcesCommand";
import {
  ListAttributeGroupsCommand,
  ListAttributeGroupsCommandInput,
  ListAttributeGroupsCommandOutput,
} from "./commands/ListAttributeGroupsCommand";
import {
  ListAttributeGroupsForApplicationCommand,
  ListAttributeGroupsForApplicationCommandInput,
  ListAttributeGroupsForApplicationCommandOutput,
} from "./commands/ListAttributeGroupsForApplicationCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutConfigurationCommand,
  PutConfigurationCommandInput,
  PutConfigurationCommandOutput,
} from "./commands/PutConfigurationCommand";
import {
  SyncResourceCommand,
  SyncResourceCommandInput,
  SyncResourceCommandOutput,
} from "./commands/SyncResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateAttributeGroupCommand,
  UpdateAttributeGroupCommandInput,
  UpdateAttributeGroupCommandOutput,
} from "./commands/UpdateAttributeGroupCommand";
import { ServiceCatalogAppRegistryClient } from "./ServiceCatalogAppRegistryClient";

/**
 * @public
 * <p> Amazon Web Services Service Catalog AppRegistry enables organizations to understand the application context of their Amazon Web Services resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.</p>
 */
export class ServiceCatalogAppRegistry extends ServiceCatalogAppRegistryClient {
  /**
   * @public
   * <p>Associates an attribute group with an application to augment the application's metadata
   *       with the group's attributes. This feature enables applications to be described with
   *       user-defined details that are machine-readable, such as third-party integrations.</p>
   */
  public associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAttributeGroupCommandOutput>;
  public associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    cb: (err: any, data?: AssociateAttributeGroupCommandOutput) => void
  ): void;
  public associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAttributeGroupCommandOutput) => void
  ): void;
  public associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateAttributeGroupCommandOutput) => void),
    cb?: (err: any, data?: AssociateAttributeGroupCommandOutput) => void
  ): Promise<AssociateAttributeGroupCommandOutput> | void {
    const command = new AssociateAttributeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>
   *        Associates a resource
   *        with an application.
   *        The resource can be specified
   *        by its ARN or name.
   *        The application can be specified
   *        by ARN, ID, or name.
   *      </p>
   */
  public associateResource(
    args: AssociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResourceCommandOutput>;
  public associateResource(
    args: AssociateResourceCommandInput,
    cb: (err: any, data?: AssociateResourceCommandOutput) => void
  ): void;
  public associateResource(
    args: AssociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResourceCommandOutput) => void
  ): void;
  public associateResource(
    args: AssociateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateResourceCommandOutput) => void),
    cb?: (err: any, data?: AssociateResourceCommandOutput) => void
  ): Promise<AssociateResourceCommandOutput> | void {
    const command = new AssociateResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.</p>
   */
  public createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  public createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  public createApplication(
    args: CreateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateApplicationCommandOutput) => void
  ): Promise<CreateApplicationCommandOutput> | void {
    const command = new CreateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates a new attribute group as a container for user-defined attributes. This feature
   *       enables users to have full control over their cloud application's metadata in a rich
   *       machine-readable format to facilitate integration with automated workflows and third-party
   *       tools.</p>
   */
  public createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAttributeGroupCommandOutput>;
  public createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    cb: (err: any, data?: CreateAttributeGroupCommandOutput) => void
  ): void;
  public createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAttributeGroupCommandOutput) => void
  ): void;
  public createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAttributeGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateAttributeGroupCommandOutput) => void
  ): Promise<CreateAttributeGroupCommandOutput> | void {
    const command = new CreateAttributeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes an application that is specified either by its application ID, name, or ARN. All associated attribute groups and resources must be disassociated from it before deleting an application.</p>
   */
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  public deleteApplication(
    args: DeleteApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): Promise<DeleteApplicationCommandOutput> | void {
    const command = new DeleteApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes an attribute group, specified either by its attribute group ID, name, or ARN.</p>
   */
  public deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttributeGroupCommandOutput>;
  public deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    cb: (err: any, data?: DeleteAttributeGroupCommandOutput) => void
  ): void;
  public deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttributeGroupCommandOutput) => void
  ): void;
  public deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAttributeGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteAttributeGroupCommandOutput) => void
  ): Promise<DeleteAttributeGroupCommandOutput> | void {
    const command = new DeleteAttributeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.</p>
   */
  public disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAttributeGroupCommandOutput>;
  public disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    cb: (err: any, data?: DisassociateAttributeGroupCommandOutput) => void
  ): void;
  public disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAttributeGroupCommandOutput) => void
  ): void;
  public disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateAttributeGroupCommandOutput) => void),
    cb?: (err: any, data?: DisassociateAttributeGroupCommandOutput) => void
  ): Promise<DisassociateAttributeGroupCommandOutput> | void {
    const command = new DisassociateAttributeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.</p>
   */
  public disassociateResource(
    args: DisassociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResourceCommandOutput>;
  public disassociateResource(
    args: DisassociateResourceCommandInput,
    cb: (err: any, data?: DisassociateResourceCommandOutput) => void
  ): void;
  public disassociateResource(
    args: DisassociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResourceCommandOutput) => void
  ): void;
  public disassociateResource(
    args: DisassociateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateResourceCommandOutput) => void),
    cb?: (err: any, data?: DisassociateResourceCommandOutput) => void
  ): Promise<DisassociateResourceCommandOutput> | void {
    const command = new DisassociateResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>
   *        Retrieves metadata information
   *        about one
   *        of your applications.
   *        The application can be specified
   *        by its ARN, ID, or name
   *        (which is unique
   *        within one account
   *        in one region
   *        at a given point
   *        in time).
   *        Specify
   *        by ARN or ID
   *        in automated workflows
   *        if you want
   *        to make sure
   *        that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown,
   *        avoiding the ABA addressing problem.
   *      </p>
   */
  public getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  public getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  public getApplication(
    args: GetApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApplicationCommandOutput) => void),
    cb?: (err: any, data?: GetApplicationCommandOutput) => void
  ): Promise<GetApplicationCommandOutput> | void {
    const command = new GetApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Gets the resource associated with the application.</p>
   */
  public getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociatedResourceCommandOutput>;
  public getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    cb: (err: any, data?: GetAssociatedResourceCommandOutput) => void
  ): void;
  public getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociatedResourceCommandOutput) => void
  ): void;
  public getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssociatedResourceCommandOutput) => void),
    cb?: (err: any, data?: GetAssociatedResourceCommandOutput) => void
  ): Promise<GetAssociatedResourceCommandOutput> | void {
    const command = new GetAssociatedResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>
   *        Retrieves an attribute group
   *        by its ARN, ID, or name.
   *        The attribute group can be specified
   *        by its ARN, ID, or name.
   *      </p>
   */
  public getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAttributeGroupCommandOutput>;
  public getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    cb: (err: any, data?: GetAttributeGroupCommandOutput) => void
  ): void;
  public getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttributeGroupCommandOutput) => void
  ): void;
  public getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAttributeGroupCommandOutput) => void),
    cb?: (err: any, data?: GetAttributeGroupCommandOutput) => void
  ): Promise<GetAttributeGroupCommandOutput> | void {
    const command = new GetAttributeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>
   *       Retrieves a <code>TagKey</code> configuration
   *       from an account.
   *     </p>
   */
  public getConfiguration(
    args: GetConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationCommandOutput>;
  public getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  public getConfiguration(
    args: GetConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  public getConfiguration(
    args: GetConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetConfigurationCommandOutput) => void
  ): Promise<GetConfigurationCommandOutput> | void {
    const command = new GetConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves a list of all of your applications. Results are paginated.</p>
   */
  public listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  public listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  public listApplications(
    args: ListApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListApplicationsCommandOutput) => void
  ): Promise<ListApplicationsCommandOutput> | void {
    const command = new ListApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists all attribute groups that are associated with specified application.  Results are paginated.</p>
   */
  public listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedAttributeGroupsCommandOutput>;
  public listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    cb: (err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void
  ): void;
  public listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void
  ): void;
  public listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void
  ): Promise<ListAssociatedAttributeGroupsCommandOutput> | void {
    const command = new ListAssociatedAttributeGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>
   *        Lists all
   *        of the resources
   *        that are associated
   *        with the specified application.
   *        Results are paginated.
   *      </p>
   *          <note>
   *             <p>
   *          If you share an application,
   *          and a consumer account associates a tag query
   *          to the application,
   *          all of the users
   *          who can access the application
   *          can also view the tag values
   *          in all accounts
   *          that are associated
   *          with it
   *          using this API.
   *        </p>
   *          </note>
   */
  public listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedResourcesCommandOutput>;
  public listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    cb: (err: any, data?: ListAssociatedResourcesCommandOutput) => void
  ): void;
  public listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedResourcesCommandOutput) => void
  ): void;
  public listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssociatedResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListAssociatedResourcesCommandOutput) => void
  ): Promise<ListAssociatedResourcesCommandOutput> | void {
    const command = new ListAssociatedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists all attribute groups which you have access to. Results are paginated.</p>
   */
  public listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttributeGroupsCommandOutput>;
  public listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    cb: (err: any, data?: ListAttributeGroupsCommandOutput) => void
  ): void;
  public listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttributeGroupsCommandOutput) => void
  ): void;
  public listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttributeGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListAttributeGroupsCommandOutput) => void
  ): Promise<ListAttributeGroupsCommandOutput> | void {
    const command = new ListAttributeGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the details of all attribute groups associated with a specific application. The results display in pages.</p>
   */
  public listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttributeGroupsForApplicationCommandOutput>;
  public listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    cb: (err: any, data?: ListAttributeGroupsForApplicationCommandOutput) => void
  ): void;
  public listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttributeGroupsForApplicationCommandOutput) => void
  ): void;
  public listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttributeGroupsForApplicationCommandOutput) => void),
    cb?: (err: any, data?: ListAttributeGroupsForApplicationCommandOutput) => void
  ): Promise<ListAttributeGroupsForApplicationCommandOutput> | void {
    const command = new ListAttributeGroupsForApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists all of the tags on the resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>
   *       Associates a <code>TagKey</code> configuration
   *       to an account.
   *     </p>
   */
  public putConfiguration(
    args: PutConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationCommandOutput>;
  public putConfiguration(
    args: PutConfigurationCommandInput,
    cb: (err: any, data?: PutConfigurationCommandOutput) => void
  ): void;
  public putConfiguration(
    args: PutConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationCommandOutput) => void
  ): void;
  public putConfiguration(
    args: PutConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutConfigurationCommandOutput) => void
  ): Promise<PutConfigurationCommandOutput> | void {
    const command = new PutConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Syncs the resource with current AppRegistry records.</p>
   *          <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
   */
  public syncResource(
    args: SyncResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SyncResourceCommandOutput>;
  public syncResource(args: SyncResourceCommandInput, cb: (err: any, data?: SyncResourceCommandOutput) => void): void;
  public syncResource(
    args: SyncResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SyncResourceCommandOutput) => void
  ): void;
  public syncResource(
    args: SyncResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SyncResourceCommandOutput) => void),
    cb?: (err: any, data?: SyncResourceCommandOutput) => void
  ): Promise<SyncResourceCommandOutput> | void {
    const command = new SyncResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Assigns one or more tags (key-value pairs) to the specified resource.</p>
   *          <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
   *          <p>This operation returns an empty response if the call was successful.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Removes tags from a resource.</p>
   *          <p>This operation returns an empty response if the call was successful.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates an existing application with new attributes.</p>
   */
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  public updateApplication(
    args: UpdateApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): Promise<UpdateApplicationCommandOutput> | void {
    const command = new UpdateApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates an existing attribute group with new details. </p>
   */
  public updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAttributeGroupCommandOutput>;
  public updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    cb: (err: any, data?: UpdateAttributeGroupCommandOutput) => void
  ): void;
  public updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAttributeGroupCommandOutput) => void
  ): void;
  public updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAttributeGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateAttributeGroupCommandOutput) => void
  ): Promise<UpdateAttributeGroupCommandOutput> | void {
    const command = new UpdateAttributeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
