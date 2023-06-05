import { Event, Lavamusic } from '../../structures/index.js';
import { Node } from 'shoukaku';

export default class NodeConnect extends Event {
  constructor(client: Lavamusic, file: string) {
    super(client, file, {
      name: 'nodeConnect',
    });
  }
  public async run(node: Node): Promise<void> {
    this.client.logger.success(`Node ${node.name} is ready!`);
  }
}


/**
 * Project: yui`s music
 * Author: L RMN
 * Company: Coders / L RMN
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/WFfjrQxnfH
 */