import { BotPlugin } from '../types.js';
import { Lavamusic } from '../../structures/index.js';

const antiCrash: BotPlugin = {
  name: 'AntiCrash Plugin',
  version: '1.0.0',
  author: 'LRMN',
  initialize: (client: Lavamusic) => {
    process.on('unhandledRejection', (reason, promise) => {
      client.logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });
    process.on('uncaughtException', (err) => {
      client.logger.error('Uncaught Exception thrown:', err);
    });
  },
};

export default antiCrash;


/**
 * Project: yui`s music
 * Author: L RMN
 * Company: Coders / L RMN
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/WFfjrQxnfH
 */