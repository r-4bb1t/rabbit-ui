import { j as e } from "./index-CMR6dsf_.js";
import { c as i, X as m, C as r } from "./index-DDfCOZkP.js";

function n({ label: t, sz: l = "md", error: x, ...a }) {
  return e.jsxs("div", {
    className: "flex flex-col w-full gap-1",
    children: [
      t &&
        e.jsxs("label", {
          className: "text-sm font-semibold flex gap-0.5 items-center",
          children: [
            t,
            a.required &&
              e.jsx("div", {
                className: "w-1 h-1 rounded-full bg-primary -translate-y-1",
              }),
          ],
        }),
      e.jsxs("div", {
        className: i([
          "border relative border-primary/20 placeholder:text-primary/50 px-3 flex items-center rounded bg-white focus-within:border-primary",
          l === "xs" && "text-xs h-8",
          l === "sm" && "text-sm h-10",
          l === "md" && "text-base h-12",
          l === "lg" && "text-lg h-14",
        ]),
        children: [
          e.jsx("input", {
            ...a,
            className: i(["w-full outline-none bg-transparent", a.className]),
          }),
          !t &&
            a.required &&
            e.jsx("div", {
              className:
                "absolute right-4 top-4 w-1 h-1 rounded-full bg-primary -translate-y-1",
            }),
        ],
      }),
      e.jsx("ul", {
        children:
          x == null
            ? void 0
            : x.map((s, d) =>
                e.jsxs(
                  "li",
                  {
                    className: i([
                      "text-sm flex items-center gap-1",
                      s.status ? "text-ok" : "text-error",
                    ]),
                    children: [
                      s.status
                        ? e.jsx(r, { size: 14 })
                        : e.jsx(m, { size: 14 }),
                      s.status ? s.ok : s.err,
                    ],
                  },
                  d,
                ),
              ),
      }),
    ],
  });
}
function c({ label: t, sz: l = "md", error: x, ...a }) {
  return e.jsxs("div", {
    className: "flex flex-col w-full gap-1",
    children: [
      e.jsxs("label", {
        className: "text-sm font-semibold flex gap-0.5 items-center",
        children: [
          t,
          a.required &&
            e.jsx("div", {
              className: "w-1 h-1 rounded-full bg-primary -translate-y-1",
            }),
        ],
      }),
      e.jsx("div", {
        className: i([
          "border border-primary/20 placeholder:text-primary/50 px-3 flex items-center rounded bg-white focus-within:border-primary",
          l === "xs" && "text-xs h-8",
          l === "sm" && "text-sm h-10",
          l === "md" && "text-base h-12",
          l === "lg" && "text-lg h-14",
        ]),
        children: e.jsx("input", {
          ...a,
          className: i(["w-full outline-none bg-transparent", a.className]),
        }),
      }),
      e.jsx("ul", {
        children:
          x == null
            ? void 0
            : x.map((s, d) =>
                e.jsxs(
                  "li",
                  {
                    className: i([
                      "text-sm flex items-center gap-1",
                      s.status ? "text-ok" : "text-error",
                    ]),
                    children: [
                      s.status
                        ? e.jsx(r, { size: 14 })
                        : e.jsx(m, { size: 14 }),
                      s.status ? s.ok : s.err,
                    ],
                  },
                  d,
                ),
              ),
      }),
    ],
  });
}
const p = () =>
    e.jsx("div", {
      className: "flex flex-col gap-4",
      children: ["xs", "sm", "md", "lg"].map((t) =>
        e.jsxs(e.Fragment, {
          children: [
            e.jsx(n, { type: "text", label: t, sz: t, required: !0 }),
            e.jsx(n, { type: "text", label: t, sz: t }),
            e.jsx(n, { type: "text", sz: t }),
            e.jsx(n, { type: "text", sz: t, required: !0 }),
          ],
        }),
      ),
    }),
  h = () =>
    e.jsx("div", {
      className: "flex flex-col gap-4",
      children: ["xs", "sm", "md", "lg"].map((t) =>
        e.jsxs(e.Fragment, {
          children: [
            e.jsx(n, { type: "number", label: t, sz: t, required: !0 }),
            e.jsx(n, { type: "number", label: t, sz: t }),
            e.jsx(n, { type: "number", sz: t }),
            e.jsx(n, { type: "number", sz: t, required: !0 }),
          ],
        }),
      ),
    }),
  j = () =>
    e.jsx("div", {
      className: "flex flex-col gap-4",
      children: ["xs", "sm", "md", "lg"].map((t) =>
        e.jsx(e.Fragment, {
          children: e.jsxs(c, {
            label: t,
            sz: t,
            required: !0,
            children: [
              e.jsx("option", { value: "1", children: "One" }),
              e.jsx("option", { value: "2", children: "Two" }),
              e.jsx("option", { value: "3", children: "Three" }),
            ],
          }),
        }),
      ),
    });
typeof window < "u" &&
  window.document &&
  window.document.createElement &&
  document.documentElement.setAttribute("data-storyloaded", "");
export { h as NumberInput, j as SelectInput, p as TextInput };
