"use client";

import { useFieldExtension } from "microcms-field-extension-react";
import { ChangeEvent } from "react";

// CHANGEME
const origin = process.env.NEXT_PUBLIC_MICROCMS_ORIGIN ?? "https://example.microcms.io";

export default function Home() {
  const { data, sendMessage } = useFieldExtension("", { origin });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    sendMessage({ data: e.target.value });
  };

  return (
    <input
      type="color"
      value={String(data)}
      onChange={handleChange}
      aria-label="色を選択"
    />
  );
}
