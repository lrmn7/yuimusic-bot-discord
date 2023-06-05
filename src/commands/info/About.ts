import { Command, Lavamusic, Context } from '../../structures/index.js';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export default class About extends Command {
  constructor(client: Lavamusic) {
    super(client, {
      name: 'about',
      description: {
        content: 'Shows information about the bot',
        examples: ['about'],
        usage: 'about',
      },
      category: 'info',
      aliases: ['ab'],
      cooldown: 3,
      args: false,
      player: {
        voice: false,
        dj: false,
        active: false,
        djPerm: null,
      },
      permissions: {
        dev: false,
        client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
        user: [],
      },
      slashCommand: true,
      options: [],
    });
  }
  public async run(client: Lavamusic, ctx: Context, args: string[]): Promise<void> {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('Invite Yui`s Music')
        .setStyle(ButtonStyle.Link)
        .setURL(
          `https://discord.com/api/oauth2/authorize?client_id=1091257209469546566&permissions=8&scope=bot%20applications.commands`,
        ),
      new ButtonBuilder().setLabel('Support Server').setStyle(ButtonStyle.Link).setURL('https://discord.gg/WFfjrQxnfH'),
    );

    const embed = this.client
      .embed()
      .setAuthor({
        name: 'YuiMusic',
        iconURL: 'https://res.cloudinary.com/lrmn/image/upload/v1685918349/yui_ls2yfe.png',
      })
      .setThumbnail(
        'https://res.cloudinary.com/lrmn/image/upload/v1685918349/yui_ls2yfe.png',
      )
      .setColor(this.client.color.main)
      .addFields([
        {
          name: '˚ʚ♡ɞ˚',
          value: '[Creator](https://lrmn.is-a.dev)',
          inline: true,
        },
        {
          name: '☾⋆｡°✩',
          value: '[Instagram](https://instagram.com/romanroman.nya)',
          inline: true,
        },
        {
          name: ' ⋆˚✿˖°',
          value: '[Pinterest](https://id.pinterest.com/romanromannya/)',
          inline: true,
        },
        {
          name: '\u200b',
          value: `He really wanted to make his open source project ever for more coding experience. In this project, he was challenged to make a project with less bugs. Hope you enjoy using YuiMusic!`,
          inline: true,
        },
      ]);
    return await ctx.sendMessage({
      content: '',
      embeds: [embed],
      components: [row],
    });
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