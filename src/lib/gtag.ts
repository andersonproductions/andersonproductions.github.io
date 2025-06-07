// src/lib/gtag.js
export function sendEvent({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: string;
}) {
  //@ts-ignore
  if (typeof gtag !== "undefined") {
    //@ts-ignore
    gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}
