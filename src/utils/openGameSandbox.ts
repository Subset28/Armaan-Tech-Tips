export function openGameSandbox(realUrl: string) {
  const win = window.open("about:blank", "_blank");
  if (!win) return;

  const doc = win.document;
  doc.open();
  doc.write("<!DOCTYPE html><html><head><meta charset='utf-8'></head><body style='margin:0;padding:0;background:#000;'></body></html>");
  doc.close();

  const iframe = doc.createElement("iframe");
  iframe.style.cssText = "position:fixed;inset:0;width:100%;height:100%;border:none;";
  iframe.referrerPolicy = "no-referrer";
  iframe.allow = "fullscreen; gamepad; xr-spatial-tracking; autoplay; clipboard-read; clipboard-write";
  iframe.src = realUrl;

  doc.body.appendChild(iframe);
}
