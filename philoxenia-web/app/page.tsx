"use client";

import React, { useEffect, useState, useRef } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

export default function App() {
  const [text, setText] = useState("");
  const ydocRef = useRef<Y.Doc>(null);
  const providerRef = useRef<WebsocketProvider>(null);
  const ytextRef = useRef<Y.Text>(null);
  const updatingRef = useRef(false);

  useEffect(() => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(
      "ws://localhost:1234",
      "room-1",
      ydoc,
    );
    const ytext = ydoc.getText("shared-text");

    ydocRef.current = ydoc;
    providerRef.current = provider;
    ytextRef.current = ytext;

    ytext.observe(() => {
      if (updatingRef.current) return;
      updatingRef.current = true;
      setText(ytext.toString());
      updatingRef.current = false;
    });

    return () => {
      provider.destroy();
      ydoc.destroy();
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (updatingRef.current) return;
    updatingRef.current = true;
    ytextRef.current?.delete(0, ytextRef.current.length);
    ytextRef.current?.insert(0, e.target.value);
    setText(e.target.value);
    updatingRef.current = false;
  };

  return (
    <textarea
      style={{ width: "100vw", height: "100vh", fontSize: "1.5rem" }}
      value={text}
      onChange={onChange}
    />
  );
}
