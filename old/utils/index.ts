export function splitThatText(s: string) {
  const t = s.split(/(\d+)/);
  const r = t.flatMap((e) => {
    const n = +e;
    return {
      value: e,
      is_text: isNaN(n),
    };
  });
  return r;
}
