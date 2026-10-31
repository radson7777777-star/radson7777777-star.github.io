import { a as e, i as t, r as n, t as r } from "./index-B7ygxOSH.js";
var i = e(t()),
  a = n();
function o() {
  let e = (0, i.useRef)(null);
  return (
    (0, i.useEffect)(() => {
      if (!e.current) return;
      let t = !1,
        n;
      return (
        r(
          () =>
            import(`./game-3ZDL3vKH.js`).then((r) => {
              !t && e.current && (n = r.mountGame(e.current));
            }),
          [],
        ),
        () => {
          ((t = !0), n?.());
        }
      );
    }, []),
    (0, a.jsx)(`div`, { className: `game-shell`, ref: e })
  );
}
export { o as component };
