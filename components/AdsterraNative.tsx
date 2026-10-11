"use client";

import { useEffect, useRef } from "react";

const CONTAINER_ID = "container-33cb659939c11e700a3b667a9d557840";
const SCRIPT_SRC = "https://bauval.org/21/33cb659939c11e700a3b667a9d557840";

export default function AdsterraNative() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Linisin muna para walang duplicate (Strict Mode safe)
    container.replaceChildren();

    const nativeContainer = document.createElement("div");
    nativeContainer.id = CONTAINER_ID;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = SCRIPT_SRC;

    container.appendChild(nativeContainer);
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <div className="my-8 w-full" aria-label="Advertisement">
      <div ref={containerRef} />
    </div>
  );
}