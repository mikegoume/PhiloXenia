/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "y-websocket" {
  import type { WebSocket } from "ws";
  import type { IncomingMessage } from "http";
  import type * as Y from "yjs";

  export class WebsocketProvider {
    constructor(serverUrl: string, roomName: string, doc: Y.Doc);
    on(event: string, callback: (...args: any[]) => void): void;
    destroy(): void;
    disconnect(): void;
    connect(): void;
    synced: boolean;
  }

  export function setupWSConnection(
    conn: WebSocket,
    req: IncomingMessage,
    opts?: any,
  ): void;
}
