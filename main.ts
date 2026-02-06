import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  let path = url.pathname;

  // Default to index.html
  if (path === "/") path = "/index.html";

  try {
    const file = await Deno.readFile("." + path);
    const ext = path.split(".").pop();

    const types: Record<string, string> = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      json: "application/json",
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      svg: "image/svg+xml",
      mp3: "audio/mpeg",
      mp4: "video/mp4",
      wasm: "application/wasm",
    };

    return new Response(file, {
      headers: { "content-type": types[ext!] || "application/octet-stream" },
    });
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
});
