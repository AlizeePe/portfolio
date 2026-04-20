import { useState } from "react";

export function useLightbox<T>() {
  const [lightbox, setLightbox] = useState<T | null>(null);

  const open = (value: T) => setLightbox(value);
  const close = () => setLightbox(null);

  return { lightbox, open, close };
}
