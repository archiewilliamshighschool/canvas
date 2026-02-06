import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  let path = url.pathname;

  // If path ends with /, load index.html inside that folder
  if (path.endsWith("/")) path += "index.html";
  if (path === "/") path = "/index.html";

  try {
    const file = await Deno.readFile(new URL("." + path, import.meta.url));
    const ext = path.split(".").pop() || "";

    const types: Record<string, string> = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      svg: "image/svg+xml",
      json: "application/json",
      wasm: "application/wasm",
      mp3: "audio/mpeg",
      mp4: "video/mp4",
    };

    return new Response(file, {
      headers: { "content-type": types[ext] || "application/octet-stream" },
    });
  } catch {
    return new Response("404 Not Found: " + path, { status: 404 });
  }
});
