export interface BotPlugin {
  name: string;
  version: string;
  author: string;
  description?: string;
  initialize: (client: Lavamusic) => void;
  shutdown?: (client: Lavamusic) => void;
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