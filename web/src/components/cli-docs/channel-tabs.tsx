"use client";

import { CopyCode } from "./copy-code";
import { DocsTabs } from "./docs-tabs";
import { InlineText } from "./inline-text";

type Channel = { name: string; body: string; command: string };

/** `--agent <id>` from a channel command, used as the tab value. */
function channelId(channel: Channel): string {
  return channel.command.match(/--agent\s+([^\s]+)/)?.[1] ?? channel.name.toLowerCase();
}

/** Per-tool install commands as one segmented control; every panel stays in the HTML. */
export function ChannelTabs({
  label,
  channels,
  copy,
}: {
  label: string;
  channels: Channel[];
  copy: { copy: string; copied: string; failed: string };
}) {
  return (
    <DocsTabs
      label={label}
      tabs={channels.map((channel) => ({
        value: channelId(channel),
        label: channel.name,
        panel: (
          <>
            <p className="dx-p"><InlineText text={channel.body} /></p>
            <CopyCode code={channel.command} copyLabel={copy.copy} copiedLabel={copy.copied} failureLabel={copy.failed} kind="install" />
          </>
        ),
      }))}
    />
  );
}
