"use client";

type AdsterraBannerProps = {
  placementId: string;
};

const srcDoc = `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 300px;
        height: 250px;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <script>
      var atOptions = {
        'key': '55662f61209d95a739d2748ac066336e',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    <\/script>
    <script src="https://bauval.org/22/55662f61209d95a739d2748ac066336e"><\/script>
  </body>
</html>`;

export default function AdsterraBanner({ placementId }: AdsterraBannerProps) {
  return (
    <div
      className="my-8 flex justify-center"
      data-ad-placement={placementId}
    >
      <iframe
        title="Advertisement"
        width={300}
        height={250}
        srcDoc={srcDoc}
        scrolling="no"
        style={{ border: 0, overflow: "hidden" }}
      />
    </div>
  );
}