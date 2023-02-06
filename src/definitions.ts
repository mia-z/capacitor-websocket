export interface WebsocketPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
