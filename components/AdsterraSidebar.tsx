"use client";

type AdsterraSidebarProps = {
  adKey: string;
  scriptSrc: string;
  side: "left" | "right";
};

export default function AdsterraSidebar({
  adKey,
  scriptSrc,
  side,
}: AdsterraSidebarProps) {
  const srcDoc = `<!DOCTYPE html>
<html>
  <head>
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 160px;
        height: 600px;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <script>
      var atOptions = {
        'key': '${adKey}',
        'format': 'iframe',
        'height': 600,
        'width': 160,
        'params': {}
      };
    <\/script>
    <script src="${scriptSrc}"><\/script>
  </body>
</html>`;

  // 384px = kalahati ng max-w-3xl (768px), 24px = gap
  const position =
    side === "left"
      ? { left: "calc(50% - 384px - 160px - 24px)" }
      : { left: "calc(50% + 384px + 24px)" };

  return (
    <aside
      className="hidden xl:block fixed top-24 z-10"
      style={position}
      aria-label="Advertisement"
    >
      <iframe
        title="Advertisement"
        width={160}
        height={600}
        srcDoc={srcDoc}
        scrolling="no"
        style={{ border: 0, overflow: "hidden" }}
      />
    </aside>
  );
}