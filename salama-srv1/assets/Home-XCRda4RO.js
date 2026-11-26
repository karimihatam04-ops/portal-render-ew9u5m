import { r as x, j as l, u as xt, b as Qn } from "./index-D4BysLqo.js";
import { M as MainWrapper } from "./MainWrapper-3fG7tHnO.js";
import { SalamaShell } from "./SalamaShell.js";

function IB({ question: e, answer: t, id: r }) {
  const [s, i] = x.useState(!1);
  return l.jsxs("div", {
    className: "border-b border-gray-200",
    children: [
      l.jsxs("button", {
        type: "button",
        "aria-expanded": s,
        "aria-controls": r,
        onClick: () => i((c) => !c),
        className:
          "w-full py-4 md:py-5 flex items-center justify-between text-right",
        children: [
          l.jsx("svg", {
            className: `w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${s ? "rotate-180" : "rotate-0"}`,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: l.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M19 9l-7 7-7-7",
            }),
          }),
          l.jsx("span", {
            className:
              "font-medium text-gray-900 text-right flex-1 mr-4 text-sm md:text-base",
            children: e,
          }),
        ],
      }),
      s &&
        l.jsx("div", {
          id: r,
          className: "pb-4 md:pb-5",
          children: l.jsx("div", {
            className:
              "text-right text-sm md:text-base text-gray-600 leading-relaxed pr-9",
            children: t,
          }),
        }),
    ],
  });
}

function HomePage() {
  const e = xt();
  const loc = Qn();

  x.useEffect(() => {
    if (loc.state?.scrollTo === "faq" || window.location.hash === "#faq") {
      setTimeout(() => {
        const el = document.getElementById("faq");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [loc]);

  return l.jsx(MainWrapper, {
    children: l.jsx(SalamaShell, {
      children: l.jsxs("div", {
        dir: "rtl",
        children: [
          l.jsx("section", {
            className:
              "relative grid place-items-center py-10 lg:py-24 px-4 bg-gray-50",
            children: l.jsxs("div", {
              className: "lg:flex items-center gap-20 container relative",
              children: [
                l.jsxs("div", {
                  className:
                    "relative z-10 flex flex-col items-center grow text-center",
                  children: [
                    l.jsx("p", {
                      className: "text-green-600 font-bold",
                      children: "أحد منتجات مركز سلامة المركبات",
                    }),
                    l.jsx("h1", {
                      className: "font-bold max-w-md text-4xl text-black",
                      children:
                        "المنصة الموحدة لمواعيد الفحص الفني الدوري للمركبات",
                    }),
                    l.jsx("p", {
                      className:
                        "leading-relaxed text-gray-500/85 max-w-md mt-4 font-bold",
                      children:
                        "تتيح المنصة حجز وإدارة مواعيد الفحص الفني الدوري للمركبات لدى جميع الجهات المرخصة من المواصفات السعودية لتقديم الخدمة",
                    }),
                    l.jsxs("div", {
                      className:
                        "flex flex-col gap-4 mt-6 justify-center items-center w-full max-w-xs",
                      children: [
                        l.jsx("button", {
                          onClick: () => e("/apply"),
                          className:
                            "w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium text-white h-10 px-4 py-2 mt-6 bg-[#1b8354] hover:bg-[#1b8354]/80 transition-colors capitalize",
                          type: "button",
                          children: "حجز موعد",
                        }),
                        l.jsx("button", {
                          onClick: () => e("/edit"),
                          className:
                            "w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium h-10 px-4 py-2 bg-white border border-gray-300 capitalize",
                          type: "button",
                          children: "تعديل موعد",
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsx("div", {
                  className:
                    "basis-1/2 max-lg:w-[80%] max-lg:absolute max-lg:top-1/2 max-lg:-translate-y-1/2 max-lg:right-1/2 max-lg:translate-x-1/2 max-lg:opacity-15",
                  children: l.jsx("img", {
                    src: "/assets/images/bg.png",
                    alt: "hero image",
                    className: "w-full h-auto",
                  }),
                }),
              ],
            }),
          }),
          l.jsx("section", {
            className: "bg-gray-50 py-10",
            children: l.jsxs("div", {
              className: "container flex flex-col",
              children: [
                l.jsx("h2", {
                  className:
                    "text-xl max-lg:text-center lg:text-3xl font-bold mb-8",
                  children: "متى يجب فحص المركبة",
                }),
                l.jsx("div", {
                  className: "flex gap-4 flex-col lg:flex-row",
                  children: [
                    {
                      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NyA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMzMzMDA4IDI4QzAuMzMzMDA4IDEyLjUzNiAxMi44NjkgMCAyOC4zMzMgMEM0My43OTcgMCA1Ni4zMzMgMTIuNTM2IDU2LjMzMyAyOEM1Ni4zMzMgNDMuNDY0IDQzLjc5NyA1NiAyOC4zMzMgNTZDMTIuODY5IDU2IDAuMzMzMDA4IDQzLjQ2NCAwLjMzMzAwOCAyOFoiIGZpbGw9IiMwNzk0NTUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOS41MDc2IDM2LjEwMDRDMjkuOTU2OCAzNi4zNjg3IDMwLjMzNzEgMzYuNDYwOSAzMC42NDc1IDM2LjQ2MDlIMzAuNjQ4NkMzMS4wMzAxIDM2LjQ2MDkgMzEuMzA2NiAzNi4zMjA5IDMxLjQ3MzUgMzYuMTk5NUMzMS43NzggMzUuOTc5IDMyLjI0ODEgMzUuNDM3NyAzMS45ODY4IDM0LjI4OTdMMzEuNzA2OCAzMy4wNjk0TDMxLjcwOCAzMy4wNjQ3TDMyLjY4NDUgMzIuMDc0MkMzMy4yMTUzIDMxLjU0OCAzMy40MTEzIDMwLjkxMzMgMzMuMjIzNSAzMC4zMzM1QzMzLjAzNjggMjkuNzU4MyAzMi41MTE4IDI5LjM2MTcgMzEuNzgxNSAyOS4yNDc0TDMwLjUyNjEgMjkuMDMzOUwzMC41MjM4IDI5LjAzMjdMMjkuODIzOCAyNy42MjQ1QzI5LjQ4NjYgMjYuOTM3NCAyOC45NDMgMjYuNTQxOCAyOC4zMzQgMjYuNTQxOEgyOC4zMzE2QzI3LjcyMjYgMjYuNTQxOCAyNy4xNzc4IDI2LjkzNjEgMjYuODM4MyAyNy42MjIxTDI2LjEzNzEgMjkuMDMzOUwyNi4xMzQ4IDI5LjAzNUwyNC44ODUzIDI5LjI0NzRDMjQuMTU3MyAyOS4zNjE3IDIzLjYzMjMgMjkuNzU3MiAyMy40NDQ1IDMwLjMzMTJDMjMuMjU1NSAzMC45MDk5IDIzLjQ0OTEgMzEuNTQ0NSAyMy45NzMgMzIuMDY3MkwyNC45NTY1IDMzLjA2NDdDMjQuOTU3NiAzMy4wNjcgMjQuOTU4OCAzMy4wNzE3IDI0Ljk1ODggMzMuMDcxN0wyNC42Nzg4IDM0LjI4OTdDMjQuNDA1OCAzNS40NzUgMjQuOTQ4MyAzNi4wMTg2IDI1LjE5NDUgMzYuMTk3MUMyNS40Mzk1IDM2LjM3NDUgMjYuMTIwOCAzNi43MjIyIDI3LjE1MjEgMzYuMTAyN0wyOC4zMzE2IDM1LjQwMzhMMjkuNTA3NiAzNi4xMDA0Wk0zMC4yMzggMzQuNDk4NUwyOS4xOTE1IDMzLjg3NzhMMjkuMTkwMyAzMy44ODEzQzI4LjY5MjEgMzMuNTczMyAyNy45NzU4IDMzLjU3MzQgMjcuNDc0MSAzMy44ODAyTDI2LjQyNTMgMzQuNTAwOUwyNi42NzI2IDMzLjQyNEwyNi42NzUgMzMuNDExMUMyNi43OTA1IDMyLjg3NTYgMjYuNjEyIDMyLjI1NjIgMjYuMjMwNSAzMS44NjY2TDI1LjMyNTEgMzAuOTQ4NEwyNi40NjYxIDMwLjc1NDdDMjYuOTU5NiAzMC42NzQyIDI3LjQ2MTMgMzAuMzAwOCAyNy42ODUzIDI5Ljg0ODFMMjguMzI5MyAyOC41NTIxTDI4Ljk3MjEgMjkuODQ1OUMyOS4xOTg1IDMwLjMwMiAyOS43MDI1IDMwLjY3NTMgMzAuMTkwMSAzMC43NTIzTDMxLjMzNyAzMC45NDcxTDMwLjQyOTMgMzEuODY2NkMzMC4wNDkgMzIuMjU2MiAyOS44NzE2IDMyLjg3NjkgMjkuOTkwNiAzMy40MjE3TDMwLjIzOCAzNC40OTg1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi4yMDc4IDE2LjMzMzVDMjIuMjA3OCAxNS44NTAyIDIxLjgxNjEgMTUuNDU4NSAyMS4zMzI4IDE1LjQ1ODVDMjAuODQ5NiAxNS40NTg1IDIwLjQ1NzggMTUuODUwMiAyMC40NTc4IDE2LjMzMzVWMTcuMDc0MUMxOS41MTkgMTcuMzQwMiAxOC43MjcxIDE3Ljc3MjcgMTguMDY4IDE4LjQ4NTNDMTcuMTYwNCAxOS40NjY0IDE2Ljc1NyAyMC43MDYxIDE2LjU2MzggMjIuMjU5NkMxNi4zNzQ1IDIzLjc4MTkgMTYuMzc0NSAyNS43MzI3IDE2LjM3NDUgMjguMjIxOVYyOC45NDUxQzE2LjM3NDUgMzEuNDM0MyAxNi4zNzQ1IDMzLjM4NTEgMTYuNTYzOCAzNC45MDc0QzE2Ljc1NyAzNi40NjA5IDE3LjE2MDQgMzcuNzAwNiAxOC4wNjggMzguNjgxN0MxOC45ODQ1IDM5LjY3MjYgMjAuMTU3NyA0MC4xMjE5IDIxLjYyNiA0MC4zMzUzQzIzLjA0NyA0MC41NDE5IDI0Ljg2MjYgNDAuNTQxOSAyNy4xNTM2IDQwLjU0MThIMjkuNTEyMUMzMS44MDMgNDAuNTQxOSAzMy42MTg2IDQwLjU0MTkgMzUuMDM5NyA0MC4zMzUzQzM2LjUwOCA0MC4xMjE5IDM3LjY4MTIgMzkuNjcyNiAzOC41OTc3IDM4LjY4MTdDMzkuNTA1MyAzNy43MDA2IDM5LjkwODcgMzYuNDYwOSA0MC4xMDE5IDM0LjkwNzRDNDAuMjkxMiAzMy4zODUxIDQwLjI5MTIgMzEuNDM0MyA0MC4yOTEyIDI4Ljk0NTFWMjguMjIxOUM0MC4yOTEyIDI1LjczMjcgNDAuMjkxMiAyMy43ODE5IDQwLjEwMTkgMjIuMjU5NkMzOS45MDg3IDIwLjcwNjEgMzkuNTA1MyAxOS40NjY0IDM4LjU5NzcgMTguNDg1M0MzNy45Mzg2IDE3Ljc3MjcgMzcuMTQ2NyAxNy4zNDAyIDM2LjIwNzggMTcuMDc0MVYxNi4zMzM1QzM2LjIwNzggMTUuODUwMiAzNS44MTYxIDE1LjQ1ODUgMzUuMzMyOCAxNS40NTg1QzM0Ljg0OTYgMTUuNDU4NSAzNC40NTc4IDE1Ljg1MDIgMzQuNDU3OCAxNi4zMzM1VjE2Ljc2MDRDMzMuMTMyNCAxNi42MjUxIDMxLjUwMTUgMTYuNjI1MSAyOS41MTIxIDE2LjYyNTJIMjcuMTUzNkMyNS4xNjQyIDE2LjYyNTEgMjMuNTMzMiAxNi42MjUxIDIyLjIwNzggMTYuNzYwNFYxNi4zMzM1Wk0xOS4zNTI3IDE5LjY3MzZDMTkuNjU1MiAxOS4zNDY1IDIwLjAxNiAxOS4wOTYxIDIwLjQ5MTIgMTguOTA3QzIwLjU5NTYgMTkuMjczNSAyMC45MzI5IDE5LjU0MTggMjEuMzMyOCAxOS41NDE4QzIxLjgxNjEgMTkuNTQxOCAyMi4yMDc4IDE5LjE1MDEgMjIuMjA3OCAxOC42NjY4VjE4LjUyMDVDMjMuNDQ1NyAxOC4zNzcgMjUuMDQ1NiAxOC4zNzUyIDI3LjIyNDUgMTguMzc1MkgyOS40NDEyQzMxLjYyMDEgMTguMzc1MiAzMy4yMiAxOC4zNzcgMzQuNDU3OCAxOC41MjA1VjE4LjY2NjhDMzQuNDU3OCAxOS4xNTAxIDM0Ljg0OTYgMTkuNTQxOCAzNS4zMzI4IDE5LjU0MThDMzUuNzMyOCAxOS41NDE4IDM2LjA3MDEgMTkuMjczNSAzNi4xNzQ1IDE4LjkwN0MzNi42NDk3IDE5LjA5NjEgMzcuMDEwNSAxOS4zNDY1IDM3LjMxMyAxOS42NzM2QzM3Ljg2NCAyMC4yNjkyIDM4LjE5MDYgMjEuMDg1NyAzOC4zNjMxIDIyLjQ1ODVIMTguMzAyNkMxOC40NzUxIDIxLjA4NTcgMTguODAxNyAyMC4yNjkyIDE5LjM1MjcgMTkuNjczNlpNMTguMTY5OSAyNC4yMDg1SDM4LjQ5NThDMzguNTQwNSAyNS4zMjQ5IDM4LjU0MTIgMjYuNjU5NCAzOC41NDEyIDI4LjI4MzlWMjguODgzQzM4LjU0MTIgMzEuNDQ3NyAzOC41Mzk2IDMzLjI4OTcgMzguMzY1MyAzNC42OTE0QzM4LjE5MzMgMzYuMDc0NSAzNy44NjYzIDM2Ljg5NTMgMzcuMzEzIDM3LjQ5MzRDMzYuNzY4OCAzOC4wODE4IDM2LjAzNiAzOC40MjIxIDM0Ljc4OCAzOC42MDM1QzMzLjUwNzMgMzguNzg5NyAzMS44MTkgMzguNzkxOCAyOS40NDEyIDM4Ljc5MThIMjcuMjI0NUMyNC44NDY3IDM4Ljc5MTggMjMuMTU4NCAzOC43ODk3IDIxLjg3NzcgMzguNjAzNUMyMC42Mjk3IDM4LjQyMjEgMTkuODk2OSAzOC4wODE4IDE5LjM1MjcgMzcuNDkzNEMxOC43OTk0IDM2Ljg5NTMgMTguNDcyNCAzNi4wNzQ1IDE4LjMwMDQgMzQuNjkxNEMxOC4xMjYxIDMzLjI4OTcgMTguMTI0NSAzMS40NDc3IDE4LjEyNDUgMjguODgzVjI4LjI4MzlDMTguMTI0NSAyNi42NTk0IDE4LjEyNTIgMjUuMzI0OSAxOC4xNjk5IDI0LjIwODVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
                      alt: "بشكل دوري",
                      title: "بشكل دوري",
                      desc: "يجب فحص المركبة بشكل دوري قبل انتهاء صلاحية الفحص",
                    },
                    {
                      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjhDMCAxMi41MzYgMTIuNTM2IDAgMjggMEM0My40NjQgMCA1NiAxMi41MzYgNTYgMjhDNTYgNDMuNDY0IDQzLjQ2NCA1NiAyOCA1NkMxMi41MzYgNTYgMCA0My40NjQgMCAyOFoiIGZpbGw9IiMwNzk0NTUiLz4KPHBhdGggZD0iTTE3LjQ5OTcgMjkuNDU4QzE3LjAxNjUgMjkuNDU4IDE2LjYyNDcgMjkuODQ5OCAxNi42MjQ3IDMwLjMzM0MxNi42MjQ3IDMwLjgxNjMgMTcuMDE2NSAzMS4yMDggMTcuNDk5NyAzMS4yMDhIMjAuMjkzN0MyMC41MDU4IDMxLjIwOCAyMC43MTM4IDMxLjI1NTggMjAuOTAxMiAzMS4zNDY1TDIzLjI4MzUgMzIuNDk5MUMyMy43MSAzMi43MDU1IDI0LjE3ODkgMzIuODEyMyAyNC42NTMyIDMyLjgxMjNIMjUuODY5NkMyNi4zNjcyIDMyLjgxMjMgMjYuNzc2MSAzMy4wNzg1IDI2Ljk4MTUgMzMuNDUwMUwyNC43MjQ5IDM0LjA3NEMyNC4zOTcgMzQuMTY0NyAyNC4wNDYgMzQuMTMyNiAyMy43NDMzIDMzLjk4NjJMMjEuMTk2NiAzMi43NTRDMjAuNzYxNiAzMi41NDM1IDIwLjIzODQgMzIuNzI1NSAyMC4wMjc5IDMzLjE2MDVDMTkuODE3NCAzMy41OTU2IDE5Ljk5OTQgMzQuMTE4OCAyMC40MzQ0IDM0LjMyOTNMMjIuOTgxMSAzNS41NjE1QzIzLjY2NzkgMzUuODkzOCAyNC40NTU3IDM1Ljk2NDEgMjUuMTkxMyAzNS43NjA3TDI4LjE1NTcgMzQuOTQxMUMyOC41NjQxIDM0LjgyODIgMjguODc0NyAzNC40NTUgMjguODc0NyAzMy45OTg3QzI4Ljg3NDcgMzMuOTY0NSAyOC44NzQyIDMzLjkzMDYgMjguODczIDMzLjg5NjdMMzMuNjE1IDMyLjQzOThMMzMuNjE4MyAzMi40Mzg4QzM0LjE5ODYgMzIuMjU4IDM0LjgzOSAzMi40NjY2IDM1LjIyMDMgMzIuOTk0NkMzNS4zNTU3IDMzLjE4MjEgMzUuMjg1NiAzMy40Mzk4IDM1LjEyMDcgMzMuNTM1TDI2LjM1MjUgMzguNTk0MUMyNi4wMDEzIDM4Ljc5NjcgMjUuNTkxMyAzOC44NDQ2IDI1LjIwOTcgMzguNzMxNEwxNy43NDg3IDM2LjUxNzRDMTcuMjg1NCAzNi4zOCAxNi43OTg0IDM2LjY0NDEgMTYuNjYwOSAzNy4xMDc0QzE2LjUyMzQgMzcuNTcwNyAxNi43ODc1IDM4LjA1NzcgMTcuMjUwOCAzOC4xOTUxTDI0LjcxMTggNDAuNDA5MUMyNS41NTcgNDAuNjU5OSAyNi40NjI5IDQwLjU1MDcgMjcuMjI3MSA0MC4xMDk4TDM1Ljk5NTIgMzUuMDUwOEMzNy4wODM5IDM0LjQyMjYgMzcuMzY0MSAzMi45NzQyIDM2LjYzOTEgMzEuOTcwMUMzNS44MzA3IDMwLjg1MDcgMzQuNDE4NCAzMC4zNTc0IDMzLjA5OTUgMzAuNzY3NUwzMy4wOTc3IDMwLjc2OEwyOC4yODI4IDMyLjI0NzNDMjcuNzMwNSAzMS41MjM2IDI2Ljg0NjUgMzEuMDYyMyAyNS44Njk2IDMxLjA2MjNIMjQuNjUzMkMyNC40NDExIDMxLjA2MjMgMjQuMjMzIDMxLjAxNDUgMjQuMDQ1NyAzMC45MjM4TDIxLjY2MzQgMjkuNzcxMkMyMS4yMzY4IDI5LjU2NDggMjAuNzY4IDI5LjQ1OCAyMC4yOTM3IDI5LjQ1OEgxNy40OTk3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMwLjMzMjggMTcuMjA4QzI2LjMwNTggMTcuMjA4IDIzLjA0MTIgMjAuNDcyNiAyMy4wNDEyIDI0LjQ5OTdDMjMuMDQxMiAyNS42MTk2IDIzLjI5MzEgMjYuNjc4MyAyMy43NDI0IDI3LjYyNDJDMjMuOTQ5OCAyOC4wNjA3IDIzLjc2NCAyOC41ODI3IDIzLjMyNzUgMjguNzlDMjIuODkxIDI4Ljk5NzQgMjIuMzY5MSAyOC44MTE2IDIyLjE2MTcgMjguMzc1MUMyMS42MDMyIDI3LjE5OTUgMjEuMjkxMiAyNS44ODQ4IDIxLjI5MTIgMjQuNDk5N0MyMS4yOTEyIDE5LjUwNjEgMjUuMzM5MyAxNS40NTggMzAuMzMyOCAxNS40NThDMzUuMzI2NCAxNS40NTggMzkuMzc0NSAxOS41MDYxIDM5LjM3NDUgMjQuNDk5N0MzOS4zNzQ1IDI2LjQxOTUgMzguNzc1MiAyOC4yMDIgMzcuNzUzNCAyOS42NjY5QzM3LjQ3NjkgMzAuMDYzMyAzNi45MzE1IDMwLjE2MDUgMzYuNTM1MSAyOS44ODRDMzYuMTM4OCAyOS42MDc1IDM2LjA0MTYgMjkuMDYyMSAzNi4zMTggMjguNjY1OEMzNy4xNDE2IDI3LjQ4NSAzNy42MjQ1IDI2LjA1MDEgMzcuNjI0NSAyNC40OTk3QzM3LjYyNDUgMjAuNDcyNiAzNC4zNTk5IDE3LjIwOCAzMC4zMzI4IDE3LjIwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMC4zMzI4IDE4Ljk1OEMzMC44MTYxIDE4Ljk1OCAzMS4yMDc4IDE5LjM0OTggMzEuMjA3OCAxOS44MzNWMjAuMjIzM0MzMi4xMjggMjAuNDM0IDMyLjk0IDIwLjk3NjcgMzMuMzI0OSAyMS43OTMzQzMzLjUzMDkgMjIuMjMwNSAzMy4zNDM2IDIyLjc1MTggMzIuOTA2NCAyMi45NTc5QzMyLjQ2OTMgMjMuMTYzOSAzMS45NDc5IDIyLjk3NjUgMzEuNzQxOSAyMi41Mzk0QzMxLjYwNTEgMjIuMjQ5MSAzMS4xMTI2IDIxLjg3NDcgMzAuMzMyOCAyMS44NzQ3QzI5Ljg1OTUgMjEuODc0NyAyOS40NjQ3IDIyLjAxOTcgMjkuMjA3OSAyMi4yMTIyQzI4Ljk1MTQgMjIuNDA0NiAyOC44NzQ1IDIyLjYwMzYgMjguODc0NSAyMi43NDk3QzI4Ljg3NDUgMjIuODk1OCAyOC45NTE0IDIzLjA5NDcgMjkuMjA3OSAyMy4yODcxQzI5LjQ2NDcgMjMuNDc5NyAyOS44NTk1IDIzLjYyNDcgMzAuMzMyOCAyMy42MjQ3QzMxLjE0ODIgMjMuNjI0NyAzMS45MiAyMy44NzE0IDMyLjUwNzggMjQuMzEyMkMzMy4wOTU4IDI0Ljc1MzIgMzMuNTQxMiAyNS40MjkzIDMzLjU0MTIgMjYuMjQ5N0MzMy41NDEyIDI3LjA3MDEgMzMuMDk1OCAyNy43NDYxIDMyLjUwNzggMjguMTg3MUMzMi4xMzYyIDI4LjQ2NTggMzEuNjkxIDI4LjY2NjkgMzEuMjA3OCAyOC43NzcyVjI5LjE2NjNDMzEuMjA3OCAyOS42NDk2IDMwLjgxNjEgMzAuMDQxMyAzMC4zMzI4IDMwLjA0MTNDMjkuODQ5NiAzMC4wNDEzIDI5LjQ1NzggMjkuNjQ5NiAyOS40NTc4IDI5LjE2NjNWMjguNzc2MUMyOC41Mzc3IDI4LjU2NTMgMjcuNzI1NiAyOC4wMjI3IDI3LjM0MDggMjcuMjA2QzI3LjEzNDggMjYuNzY4OSAyNy4zMjIxIDI2LjI0NzUgMjcuNzU5MyAyNi4wNDE1QzI4LjE5NjQgMjUuODM1NSAyOC43MTc4IDI2LjAyMjkgMjguOTIzOCAyNi40NkMyOS4wNjA2IDI2Ljc1MDIgMjkuNTUzMSAyNy4xMjQ3IDMwLjMzMjggMjcuMTI0N0MzMC44MDYyIDI3LjEyNDcgMzEuMjAxIDI2Ljk3OTcgMzEuNDU3OCAyNi43ODcxQzMxLjcxNDMgMjYuNTk0NyAzMS43OTEyIDI2LjM5NTggMzEuNzkxMiAyNi4yNDk3QzMxLjc5MTIgMjYuMTAzNiAzMS43MTQzIDI1LjkwNDYgMzEuNDU3OCAyNS43MTIyQzMxLjIwMSAyNS41MTk3IDMwLjgwNjIgMjUuMzc0NyAzMC4zMzI4IDI1LjM3NDdDMjkuNTE3NSAyNS4zNzQ3IDI4Ljc0NTcgMjUuMTI3OSAyOC4xNTc5IDI0LjY4NzFDMjcuNTY5OSAyNC4yNDYxIDI3LjEyNDUgMjMuNTcwMSAyNy4xMjQ1IDIyLjc0OTdDMjcuMTI0NSAyMS45MjkzIDI3LjU2OTkgMjEuMjUzMiAyOC4xNTc5IDIwLjgxMjJDMjguNTI5NSAyMC41MzM2IDI4Ljk3NDYgMjAuMzMyNCAyOS40NTc4IDIwLjIyMjJWMTkuODMzQzI5LjQ1NzggMTkuMzQ5OCAyOS44NDk2IDE4Ljk1OCAzMC4zMzI4IDE4Ljk1OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
                      alt: "عند نقل ملكية المركبة",
                      title: "عند نقل ملكية المركبة",
                      desc: "في حال عدم وجود فحص فني دوري ساري للمركبة",
                    },
                    {
                      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NyA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNjY2NTA0IDI4QzAuNjY2NTA0IDEyLjUzNiAxMy4yMDI1IDAgMjguNjY2NSAwQzQ0LjEzMDUgMCA1Ni42NjY1IDEyLjUzNiA1Ni42NjY1IDI4QzU2LjY2NjUgNDMuNDY0IDQ0LjEzMDUgNTYgMjguNjY2NSA1NkMxMy4yMDI1IDU2IDAuNjY2NTA0IDQzLjQ2NCAwLjY2NjUwNCAyOFoiIGZpbGw9IiMwNzk0NTUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMS40Mzc0IDE5LjAwMDJDMjAuMjAzMSAxOS4wOTMzIDE5LjYyMTEgMTkuMzA5MiAxOS4yMjI3IDE5LjcwNzlDMTguODk5NyAyMC4wMzEzIDE4LjY4OTEgMjAuNDg1MyAxOC41NzQgMjEuMzQyNEMxOC40NTU1IDIyLjIyNDYgMTguNDUzNiAyMy4zOTM4IDE4LjQ1MzYgMjUuMDY5OUwxOC40NTM2IDMyLjY2MDNDMTguNDUzNiAzNC4zMzY1IDE4LjQ1NTUgMzUuNTA1NyAxOC41NzQgMzYuMzg3OUMxOC42ODkxIDM3LjI0NSAxOC44OTk3IDM3LjY5OSAxOS4yMjI3IDM4LjAyMjNDMTkuNTQ1NyAzOC4zNDU1IDE5Ljk5ODkgMzguNTU2MiAyMC44NTQ5IDM4LjY3MTRDMjEuNzM2IDM4Ljc5IDIyLjkwMzkgMzguNzkxOCAyNC41Nzg2IDM4Ljc5MThIMjguMDgzMkMyOC41NjY0IDM4Ljc5MTggMjguOTU4MiAzOS4xODM2IDI4Ljk1ODIgMzkuNjY2OEMyOC45NTgyIDQwLjE1MDEgMjguNTY2NCA0MC41NDE4IDI4LjA4MzIgNDAuNTQxOEgyNC41MTQ1QzIyLjkxOTEgNDAuNTQxOSAyMS42MzMgNDAuNTQxOSAyMC42MjE1IDQwLjQwNThDMTkuNTcxMiA0MC4yNjQ0IDE4LjY4NjkgMzkuOTYyIDE3Ljk4NDcgMzkuMjU5MkMxNy4yODI2IDM4LjU1NjQgMTYuOTgwNyAzNy42NzE3IDE2LjgzOTUgMzYuNjIwOEMxNi43MDM2IDM1LjYwODUgMTYuNzAzNiAzNC4zMjE0IDE2LjcwMzYgMzIuNzI0M1YyNS4wMDZDMTYuNzAzNiAyMy40MDg5IDE2LjcwMzYgMjIuMTIxNyAxNi44Mzk1IDIxLjEwOTRDMTYuOTgwNyAyMC4wNTg1IDE3LjI4MjYgMTkuMTczOCAxNy45ODQ3IDE4LjQ3MTFDMTguODgyNyAxNy41NzIyIDIwLjA5MjUgMTcuMzE5MSAyMS42MDE2IDE3LjIzNDhDMjIuMDQ1NiAxNi4xOTA3IDIzLjA4MDggMTUuNDU4NSAyNC4yODY5IDE1LjQ1ODVMMzAuNzAzNiAxNS40NTg1QzMxLjkwOTggMTUuNDU4NSAzMi45NDUgMTYuMTkwNyAzMy4zODg5IDE3LjIzNDhDMzQuODk4MSAxNy4zMTkxIDM2LjEwNzggMTcuNTcyMiAzNy4wMDU4IDE4LjQ3MTFDMzcuNzA3OSAxOS4xNzM4IDM4LjAwOTkgMjAuMDU4NSAzOC4xNTEgMjEuMTA5NEMzOC4yODcgMjIuMTIxNyAzOC4yODcgMjMuNDA4OSAzOC4yODY5IDI1LjAwNlYyOC4wMDAyQzM4LjI4NjkgMjguNDgzNCAzNy44OTUyIDI4Ljg3NTIgMzcuNDExOSAyOC44NzUyQzM2LjkyODcgMjguODc1MiAzNi41MzY5IDI4LjQ4MzQgMzYuNTM2OSAyOC4wMDAyVjI1LjA2OTlDMzYuNTM2OSAyMy4zOTM4IDM2LjUzNTEgMjIuMjI0NiAzNi40MTY2IDIxLjM0MjRDMzYuMzAxNSAyMC40ODUzIDM2LjA5MDggMjAuMDMxMyAzNS43Njc4IDE5LjcwNzlDMzUuMzY5NCAxOS4zMDkyIDM0Ljc4NzUgMTkuMDkzMyAzMy41NTMyIDE5LjAwMDJDMzMuMjY3IDIwLjMxMDcgMzIuMDk5OSAyMS4yOTE4IDMwLjcwMzYgMjEuMjkxOEwyNC4yODY5IDIxLjI5MThDMjIuODkwNyAyMS4yOTE4IDIxLjcyMzUgMjAuMzEwNyAyMS40Mzc0IDE5LjAwMDJaTTIzLjEyMDMgMTguMzc1MkMyMy4xMjAzIDE3LjczMDggMjMuNjQyNiAxNy4yMDg1IDI0LjI4NjkgMTcuMjA4NUwzMC43MDM2IDE3LjIwODVDMzEuMzQ3OSAxNy4yMDg1IDMxLjg3MDMgMTcuNzMwOCAzMS44NzAzIDE4LjM3NTJDMzEuODcwMyAxOS4wMTk1IDMxLjM0NzkgMTkuNTQxOCAzMC43MDM2IDE5LjU0MThMMjQuMjg2OSAxOS41NDE4QzIzLjY0MjYgMTkuNTQxOCAyMy4xMjAzIDE5LjAxOTUgMjMuMTIwMyAxOC4zNzUyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIyLjgzMzIgMjUuOTU4NUMyMi4zNDk5IDI1Ljk1ODUgMjEuOTU4MiAyNi4zNTAyIDIxLjk1ODIgMjYuODMzNUMyMS45NTgyIDI3LjMxNjcgMjIuMzQ5OSAyNy43MDg1IDIyLjgzMzIgMjcuNzA4NUwzMi4xNjY1IDI3LjcwODVDMzIuNjQ5OCAyNy43MDg1IDMzLjA0MTUgMjcuMzE2NyAzMy4wNDE1IDI2LjgzMzVDMzMuMDQxNSAyNi4zNTAyIDMyLjY0OTggMjUuOTU4NSAzMi4xNjY1IDI1Ljk1ODVMMjIuODMzMiAyNS45NTg1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIyLjgzMzIgMzEuNzkxOEMyMi4zNDk5IDMxLjc5MTggMjEuOTU4MiAzMi4xODM2IDIxLjk1ODIgMzIuNjY2OEMyMS45NTgyIDMzLjE1MDEgMjIuMzQ5OSAzMy41NDE4IDIyLjgzMzIgMzMuNTQxOEgyNy40OTk4QzI3Ljk4MzEgMzMuNTQxOCAyOC4zNzQ4IDMzLjE1MDEgMjguMzc0OCAzMi42NjY4QzI4LjM3NDggMzIuMTgzNiAyNy45ODMxIDMxLjc5MTggMjcuNDk5OCAzMS43OTE4TDIyLjgzMzIgMzEuNzkxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNi41NDE1IDMxLjUwMDJDMzYuNTQxNSAzMS4wMTY5IDM2LjE0OTggMzAuNjI1MiAzNS42NjY1IDMwLjYyNTJDMzUuMTgzMyAzMC42MjUyIDM0Ljc5MTUgMzEuMDE2OSAzNC43OTE1IDMxLjUwMDJWMzQuNzA4NUgzMS41ODMyQzMxLjA5OTkgMzQuNzA4NSAzMC43MDgyIDM1LjEwMDIgMzAuNzA4MiAzNS41ODM1QzMwLjcwODIgMzYuMDY2NyAzMS4wOTk5IDM2LjQ1ODUgMzEuNTgzMiAzNi40NTg1SDM0Ljc5MTVMMzQuNzkxNSAzOS42NjY4QzM0Ljc5MTUgNDAuMTUwMSAzNS4xODMzIDQwLjU0MTggMzUuNjY2NSA0MC41NDE4QzM2LjE0OTggNDAuNTQxOCAzNi41NDE1IDQwLjE1MDEgMzYuNTQxNSAzOS42NjY4TDM2LjU0MTUgMzYuNDU4NUwzOS43NDk4IDM2LjQ1ODVDNDAuMjMzMSAzNi40NTg1IDQwLjYyNDggMzYuMDY2NyA0MC42MjQ4IDM1LjU4MzVDNDAuNjI0OCAzNS4xMDAyIDQwLjIzMzEgMzQuNzA4NSAzOS43NDk4IDM0LjcwODVMMzYuNTQxNSAzNC43MDg1VjMxLjUwMDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
                      alt: "المركبات الأجنبية",
                      title: "المركبات الأجنبية",
                      desc: "خلال 15 يوم من تاريخ دخولها إلى المملكة في حال عدم وجود فحص فني ساري من خارج المملكة",
                    },
                  ].map(({ img: t, alt: r, title: s, desc: i }) =>
                    l.jsxs(
                      "div",
                      {
                        className:
                          "bg-white p-4 flex-1 flex flex-col items-center gap-2 text-center shadow rounded-2xl",
                        children: [
                          l.jsx("img", { src: t, alt: r }),
                          l.jsx("h4", {
                            className: "lg:text-2xl font-bold",
                            children: s,
                          }),
                          l.jsx("p", {
                            className: "leading-relaxed text-gray-500/85",
                            children: i,
                          }),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
              ],
            }),
          }),
          l.jsx("section", {
            className: "py-10",
            children: l.jsxs("div", {
              className: "container flex flex-col",
              children: [
                l.jsx("h2", {
                  className:
                    "text-xl max-lg:text-center lg:text-3xl font-bold mb-8",
                  children: "خدمات منصة الفحص الفني الدوري",
                }),
                l.jsxs("div", {
                  className:
                    "flex gap-4 flex-col lg:flex-row max-lg:text-center",
                  children: [
                    l.jsxs("div", {
                      className:
                        "lg:pe-10 min-h-72 p-4 flex-1 flex flex-col items-center lg:items-start gap-2 border rounded-2xl shadow",
                      children: [
                        l.jsx("img", {
                          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iI0YzRkNGNiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4Ljc1IDE0QzE4Ljc1IDEzLjU4NTggMTguNDE0MiAxMy4yNSAxOCAxMy4yNUMxNy41ODU4IDEzLjI1IDE3LjI1IDEzLjU4NTggMTcuMjUgMTRWMTQuNjM0OEMxNi40NDUyIDE0Ljg2MjkgMTUuNzY2NSAxNS4yMzM2IDE1LjIwMTUgMTUuODQ0NEMxNC40MjM2IDE2LjY4NTMgMTQuMDc3OCAxNy43NDc5IDEzLjkxMjIgMTkuMDc5NUMxMy43NSAyMC4zODQzIDEzLjc1IDIyLjA1NjUgMTMuNzUgMjQuMTlWMjQuODFDMTMuNzUgMjYuOTQzNSAxMy43NSAyOC42MTU3IDEzLjkxMjIgMjkuOTIwNUMxNC4wNzc4IDMxLjI1MjEgMTQuNDIzNiAzMi4zMTQ3IDE1LjIwMTUgMzMuMTU1NkMxNS45ODcxIDM0LjAwNDkgMTYuOTkyOCAzNC4zOTAxIDE4LjI1MTMgMzQuNTczQzE5LjQ2OTMgMzQuNzUgMjEuMDI1NSAzNC43NSAyMi45ODkyIDM0Ljc1SDIzLjA1QzIzLjQ2NDIgMzQuNzUgMjMuOCAzNC40MTQyIDIzLjggMzRDMjMuOCAzMy41ODU4IDIzLjQ2NDIgMzMuMjUgMjMuMDUgMzMuMjVDMjEuMDExOSAzMy4yNSAxOS41NjQ4IDMzLjI0ODEgMTguNDY3IDMzLjA4ODZDMTcuMzk3MyAzMi45MzMxIDE2Ljc2OTIgMzIuNjQxNCAxNi4zMDI3IDMyLjEzNzFDMTUuODI4NSAzMS42MjQ0IDE1LjU0ODIgMzAuOTIwOSAxNS40MDA4IDI5LjczNTRDMTUuMjUxNCAyOC41MzM5IDE1LjI1IDI2Ljk1NTEgMTUuMjUgMjQuNzU2OFYyNC4yNDMyQzE1LjI1IDIyLjg1MDggMTUuMjUwNSAyMS43MDY5IDE1LjI4ODkgMjAuNzVIMzIuNzExMUMzMi43NDcxIDIxLjY0OTYgMzIuNzQ5OSAyMi43MTU5IDMyLjc1IDI0LjAwMDFDMzIuNzUgMjQuNDE0MyAzMy4wODU5IDI0Ljc1IDMzLjUwMDEgMjQuNzVDMzMuOTE0MyAyNC43NSAzNC4yNSAyNC40MTQxIDM0LjI1IDIzLjk5OTlDMzQuMjQ5OCAyMS45MTk3IDM0LjI0NTMgMjAuMjg0NyAzNC4wNzgyIDE5LjAwNDVDMzMuOTA4OSAxNy43MDggMzMuNTYxNyAxNi42Njk1IDMyLjc5ODUgMTUuODQ0NEMzMi4yMzM1IDE1LjIzMzYgMzEuNTU0OCAxNC44NjI5IDMwLjc1IDE0LjYzNDhWMTRDMzAuNzUgMTMuNTg1OCAzMC40MTQyIDEzLjI1IDMwIDEzLjI1QzI5LjU4NTggMTMuMjUgMjkuMjUgMTMuNTg1OCAyOS4yNSAxNFYxNC4zNjU5QzI4LjExMzkgMTQuMjUgMjYuNzE2IDE0LjI1IDI1LjAxMDggMTQuMjVIMjIuOTg5MkMyMS4yODQgMTQuMjUgMTkuODg2MSAxNC4yNSAxOC43NSAxNC4zNjU5VjE0Wk0zMi41OTc0IDE5LjI1SDE1LjQwMjZDMTUuNTUwNSAxOC4wNzM0IDE1LjgzMDQgMTcuMzczNSAxNi4zMDI3IDE2Ljg2MjlDMTYuNTYyIDE2LjU4MjYgMTYuODcxMyAxNi4zNjc5IDE3LjI3ODYgMTYuMjA1OEMxNy4zNjgxIDE2LjUyIDE3LjY1NzIgMTYuNzUgMTggMTYuNzVDMTguNDE0MiAxNi43NSAxOC43NSAxNi40MTQyIDE4Ljc1IDE2VjE1Ljg3NDZDMTkuODExIDE1Ljc1MTYgMjEuMTgyNCAxNS43NSAyMy4wNSAxNS43NUgyNC45NUMyNi44MTc2IDE1Ljc1IDI4LjE4OSAxNS43NTE2IDI5LjI1IDE1Ljg3NDZWMTZDMjkuMjUgMTYuNDE0MiAyOS41ODU4IDE2Ljc1IDMwIDE2Ljc1QzMwLjM0MjggMTYuNzUgMzAuNjMxOSAxNi41MiAzMC43MjE0IDE2LjIwNThDMzEuMTI4NyAxNi4zNjc5IDMxLjQzOCAxNi41ODI2IDMxLjY5NzMgMTYuODYyOUMzMi4xNjI2IDE3LjM2NiAzMi40NDEzIDE4LjA1MjkgMzIuNTkwOCAxOS4xOTg2TDMyLjU5NzQgMTkuMjVaIiBmaWxsPSIjMDY3NjQ3Ii8+CjxwYXRoIGQ9Ik0yOS43NSAyNkMyOS43NSAyNS41ODU4IDI5LjQxNDIgMjUuMjUgMjkgMjUuMjVDMjguNTg1OCAyNS4yNSAyOC4yNSAyNS41ODU4IDI4LjI1IDI2VjI5LjI1SDI1QzI0LjU4NTggMjkuMjUgMjQuMjUgMjkuNTg1OCAyNC4yNSAzMEMyNC4yNSAzMC40MTQyIDI0LjU4NTggMzAuNzUgMjUgMzAuNzVIMjguMjVWMzRDMjguMjUgMzQuNDE0MiAyOC41ODU4IDM0Ljc1IDI5IDM0Ljc1QzI5LjQxNDIgMzQuNzUgMjkuNzUgMzQuNDE0MiAyOS43NSAzNFYzMC43NUgzM0MzMy40MTQyIDMwLjc1IDMzLjc1IDMwLjQxNDIgMzMuNzUgMzBDMzMuNzUgMjkuNTg1OCAzMy40MTQyIDI5LjI1IDMzIDI5LjI1SDI5Ljc1VjI2WiIgZmlsbD0iIzA2NzY0NyIvPgo8L3N2Zz4K",
                          alt: "حجز موعد الفحص",
                        }),
                        l.jsx("h4", {
                          className: "lg:text-xl font-bold mt-4",
                          children: "حجز موعد الفحص",
                        }),
                        l.jsx("p", {
                          className: "leading-relaxed mb-2 text-black",
                          children:
                            "تتيح المنصة لأصحاب المركبات حجز ومتابعة مواعيد الفحص وإعادة الفحص للمركبات الخاصة بهم.",
                        }),
                        l.jsx("button", {
                          onClick: () => e("/apply"),
                          className:
                            "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium text-white h-10 py-2 mt-auto bg-[#1b8354] w-fit px-4 rounded-md hover:bg-[#1b8354]/80 transition-colors capitalize",
                          type: "button",
                          children: "حجز موعد",
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className:
                        "lg:pe-10 min-h-72 p-4 flex-1 flex flex-col items-center lg:items-start gap-2 border rounded-2xl shadow",
                      children: [
                        l.jsx("img", {
                          src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iI0YzRkNGNiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1LjUwNyAzNC43NUgyMi43MzMxQzE5LjMxNDEgMzQuNzUgMTcuNTk4MSAzNC43NSAxNi4yNzAxIDMzLjgxM0MxNS44OTAxIDMzLjU0NCAxNS41NTIxIDMzLjIyOCAxNS4yNjQxIDMyLjg3MkMxNC4yNDgxIDMxLjU5MSAxNC4yNDggMjkuOTY3IDE0LjI0OCAyNi43M1YyNC4xOEMxNC4yNDggMjEuMTI5IDE0LjI0OCAxOS41OTggMTQuNzY5IDE4LjI3NUMxNS42MDYgMTYuMTcgMTcuMzYzIDE0LjUxNSAxOS41OTIgMTMuNzMyQzIwLjk3MiAxMy4yNSAyMi41OTQgMTMuMjUgMjUuODI2IDEzLjI1QzI3LjcwOSAxMy4yNSAyOC42NTUxIDEzLjI1IDI5LjQ5MzEgMTMuNTQyQzMwLjg1NjEgMTQuMDI2IDMxLjkzIDE1LjAzOCAzMi40NDIgMTYuMzIyQzMyLjc2MyAxNy4xMzggMzIuNzYzIDE4LjAzNCAzMi43NjMgMTkuODE5OVYyMS41QzMyLjc2MyAyMS45MTQgMzIuNDI3IDIyLjI1IDMyLjAxMyAyMi4yNUMzMS41OTkgMjIuMjUgMzEuMjYzIDIxLjkxNCAzMS4yNjMgMjEuNVYxOS44MkMzMS4yNjMgMTguMjI0NSAzMS4yNjMgMTcuNDIxOSAzMS4wNDcxIDE2Ljg3NUMzMC42OTYxIDE1Ljk5NSAyOS45NDcxIDE1LjI5NSAyOC45OTUxIDE0Ljk1N0MyOC40MDAxIDE0Ljc1IDI3LjUzOSAxNC43NSAyNS44MjUgMTQuNzVDMjUuNTMwNSAxNC43NSAyNS4yNTAxIDE0Ljc1IDI0Ljk4MjggMTQuNzUwNEMyMy41Njg5IDE0Ljc2NDUgMjIuNDIzMiAxNS45MTYgMjIuNDIzMiAxNy4zMzAyQzIyLjQyMzIgMTcuNDkyIDIyLjQzMTMgMTcuNjY2MyAyMi40Mzk4IDE3Ljg1MDZMMjIuNDQxNSAxNy44ODg1QzIyLjQ2NjQgMTguNDMxOSAyMi40OTQ2IDE5LjA0NjQgMjIuMzQxMiAxOS42MjMyQzIyLjExNzIgMjAuNDYyMiAyMS40NTkyIDIxLjExOTIgMjAuNjI1MiAyMS4zMzYyQzIwLjA0ODIgMjEuNDg4MiAxOS40MjYyIDIxLjQ2MTIgMTguODc4MiAyMS40MzcyTDE4Ljg0NzMgMjEuNDM1OUMxOC42NjY3IDIxLjQyODQgMTguNDk1MiAyMS40MjEyIDE4LjMzNjIgMjEuNDIxMkMxNi45MTAyIDIxLjQyMTIgMTUuNzQ5MiAyMi41NzgyIDE1Ljc0OTIgMjQuMDAxMkMxNS43NDkyIDI0LjAyOCAxNS43NDc4IDI0LjA1NDQgMTUuNzQ1MSAyNC4wODA1QzE1Ljc0NTEgMjQuMTEzMiAxNS43NDUxIDI0LjE0NjIgMTUuNzQ1MSAyNC4xNzkzVjI2LjczQzE1Ljc0NTEgMjkuNjE4NyAxNS43NDUxIDMxLjA2OSAxNi40MzIgMzEuOTM0QzE2LjYyOSAzMi4xNzcgMTYuODY2IDMyLjM5OSAxNy4xMzQgMzIuNTg4QzE4LjA3MiAzMy4yNSAxOS42MjkxIDMzLjI1IDIyLjczMTEgMzMuMjVIMjUuNTA3QzI1LjkyMSAzMy4yNSAyNi4yNTcgMzMuNTg2IDI2LjI1NyAzNEMyNi4yNTcgMzQuNDE0IDI1LjkyMSAzNC43NSAyNS41MDcgMzQuNzVaTTE1Ljc5ODUgMjAuODAyOUMxNi40OTYgMjAuMjQ5OSAxNy4zNzgxIDE5LjkxOTIgMTguMzM2MiAxOS45MTkyQzE4LjUzNjIgMTkuOTE5MiAxOC43NDMyIDE5LjkyODIgMTguOTQzMiAxOS45MzcyTDE4Ljk0NzYgMTkuOTM3NEMxOS40MTAzIDE5Ljk1NzQgMTkuODg3MyAxOS45Nzc5IDIwLjI0NTIgMTkuODg0MkMyMC41NTkyIDE5LjgwMjIgMjAuODA2MiAxOS41NTQyIDIwLjg5MTIgMTkuMjM2MkMyMC45ODUgMTguODgyOCAyMC45NjMzIDE4LjQwOTkgMjAuOTQyMyAxNy45NTM2TDIwLjk0MjIgMTcuOTUxMkMyMC45MzIyIDE3Ljc0NzIgMjAuOTIzMiAxNy41MzYyIDIwLjkyMzIgMTcuMzMwMkMyMC45MjMyIDE2LjM4OTEgMjEuMjQ0IDE1LjUyMTQgMjEuNzgyIDE0LjgzMDRDMjEuMDk1NiAxNC44ODcgMjAuNTU2NyAxNC45ODM1IDIwLjA4NiAxNS4xNDhDMTguMjY4IDE1Ljc4NiAxNi44MzcgMTcuMTI3IDE2LjE2MSAxOC44MjdDMTUuOTU0OSAxOS4zNDk3IDE1Ljg1MSAxOS45NjYxIDE1Ljc5ODUgMjAuODAyOVoiIGZpbGw9IiMwNjc2NDciLz4KPHBhdGggZD0iTTIzLjk5OCAyOS43NUgxOC45OThDMTguNTg0IDI5Ljc1IDE4LjI0OCAyOS40MTQgMTguMjQ4IDI5QzE4LjI0OCAyOC41ODYgMTguNTg0IDI4LjI1IDE4Ljk5OCAyOC4yNUgyMy45OThDMjQuNDEyIDI4LjI1IDI0Ljc0OCAyOC41ODYgMjQuNzQ4IDI5QzI0Ljc0OCAyOS40MTQgMjQuNDEyIDI5Ljc1IDIzLjk5OCAyOS43NVoiIGZpbGw9IiMwNjc2NDciLz4KPHBhdGggZD0iTTIxLjk5OCAyNS43NUgyNC45OThDMjUuNDEyIDI1Ljc1IDI1Ljc0OCAyNS40MTQgMjUuNzQ4IDI1QzI1Ljc0OCAyNC41ODYgMjUuNDEyIDI0LjI1IDI0Ljk5OCAyNC4yNUgyMS45OThDMjEuNTg0IDI0LjI1IDIxLjI0OCAyNC41ODYgMjEuMjQ4IDI1QzIxLjI0OCAyNS40MTQgMjEuNTg0IDI1Ljc1IDIxLjk5OCAyNS43NVoiIGZpbGw9IiMwNjc2NDciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC4wMDU2IDM0Ljc0OUMyOS41OTE2IDM0Ljc0OSAyOS4yNTU2IDM0LjQxMyAyOS4yNTU2IDMzLjk5OVYzMS42MjRDMjguMzU0NiAzMS40NTMgMjYuNTMxNiAzMS4wOTkgMjYuMjcxNiAyOS42MjlDMjYuMDgzIDI4LjU1MjkgMjYuOTAxOCAyNy44NTk1IDI3LjYyNTkgMjcuMjQ2MkwyNy42Mjk2IDI3LjI0M0MyNy43NTM2IDI3LjEzOSAyNy44ODA2IDI3LjAzMSAyOC4wMDg2IDI2LjkxOEwyOC4wMTE4IDI2LjkxNTNDMjguMDExOCAyNi45MTUzIDI4LjAxNSAyNi45MTI3IDI4LjAxNjYgMjYuOTExQzI4LjA1ODYgMjYuODc1IDI4LjA2MzYgMjYuNzg4IDI4LjAyNzYgMjYuNzE3TDI3LjYzODYgMjUuOTMxQzI3LjI4NzYgMjUuMjM3IDI3LjQ0NjYgMjQuNDAxIDI4LjAxODYgMjMuOTQ1MUMyOC41OTc2IDIzLjQ2OTEgMjkuMjAyNiAyMy4zMjQxIDI5LjkzMjYgMjMuMjUyMUMyOS45NTY2IDIzLjI1MDEgMjkuOTgxNiAyMy4yNDggMzAuMDA1NiAyMy4yNDhDMzAuODQwNiAyMy4yNDggMzEuMzk2NiAyMy40NDQgMzEuOTg5NiAyMy45NDZDMzIuNTYxNiAyNC40MyAzMi43MTQ2IDI1LjI1NyAzMi4zNjE2IDI1Ljk1NkwzMS45NjE2IDI2Ljc2MUMzMS45Mjk2IDI2LjgyNSAzMS45MzE2IDI2Ljg4NSAzMS45NDY2IDI2Ljg5OUMzMi4wODQ2IDI3LjAyNCAzMi4yMjQ2IDI3LjEzNiAzMi4zNzI2IDI3LjI1NEMzMi45NTE2IDI3LjcxNyAzMy42NzI2IDI4LjI5NCAzMy43NDk2IDI5LjQ0N0MzMy44NTA3IDMwLjk3NiAzMS44MTA2IDMxLjM4IDMwLjc1NjYgMzEuNTcyVjMzLjk5N0MzMC43NTY2IDM0LjQxMSAzMC40MjA2IDM0Ljc0NyAzMC4wMDY2IDM0Ljc0N0wzMC4wMDU2IDM0Ljc0OVpNMjkuNTA1NiAzMC4xNDRDMjkuNjc3NiAzMC4xNSAzMC4yODc2IDMwLjEyMzEgMzAuNDMwNiAzMC4xMDgxQzMxLjc5MjYgMjkuODYxMSAzMi4xNTg2IDI5LjY0MSAzMi4yNTA2IDI5LjUyMUMzMi4yMTE2IDI5LjA2NiAzMS45Njg2IDI4Ljg1MzEgMzEuNDM1NiAyOC40MjcxQzMxLjI3NjYgMjguMzAwMSAzMS4xMTE2IDI4LjE2OCAzMC45NDI2IDI4LjAxNUMzMC40MTQ2IDI3LjU0MiAzMC4yODM2IDI2Ljc2OSAzMC42MTg2IDI2LjA5NUwzMS4wMjA2IDI1LjI4NkMzMS4wNTg2IDI1LjIxIDMxLjA1NzYgMjUuMTIzIDMxLjAyMDYgMjUuMDkyQzMwLjcxMTYgMjQuODMgMzAuNDk2NiAyNC43NTMgMzAuMDQyNiAyNC43NUMyOS40Mjc2IDI0LjgxNCAyOS4xODg2IDI0LjkyNjEgMjguOTY3NiAyNS4xMDgxQzI4Ljk2NDYgMjUuMTEwMSAyOC45NjE2IDI1LjExMyAyOC45NTg2IDI1LjExNUMyOC45NTE2IDI1LjEzNSAyOC45NDc2IDI1LjE5NyAyOC45ODA2IDI1LjI2MUwyOS4zNjk2IDI2LjA0N0MyOS43MTU2IDI2LjczMSAyOS41NjU2IDI3LjU1NCAyOS4wMDE2IDI4LjA0M0MyOC44NjY2IDI4LjE2MyAyOC43MzA2IDI4LjI3ODEgMjguNTk4NiAyOC4zODkxTDI4LjU5NTIgMjguMzkxOUMyOC4xNTkzIDI4Ljc2MSAyNy43MDk4IDI5LjE0MTYgMjcuNzQ5NyAyOS4zNjlDMjcuNzgwNiAyOS41MzkgMjguMDUwNiAyOS44NjQgMjkuNTA1NiAzMC4xNDRaIiBmaWxsPSIjMDY3NjQ3Ii8+Cjwvc3ZnPgo=",
                          alt: "تعديل موعد الفحص",
                        }),
                        l.jsx("h4", {
                          className: "lg:text-xl font-bold mt-4",
                          children: "تعديل موعد الفحص",
                        }),
                        l.jsx("p", {
                          className: "leading-relaxed mb-2 text-black",
                          children:
                            "تتيح للأفراد والمنشآت تعديل موعد الفحص السابق حجزها.",
                        }),
                        l.jsx("button", {
                          onClick: () => e("/edit"),
                          className:
                            "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium text-white h-10 py-2 mt-auto bg-[#1b8354] w-fit px-4 rounded-md hover:bg-[#1b8354]/80 transition-colors capitalize",
                          type: "button",
                          children: "تعديل موعد",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          l.jsx("section", {
            className: "py-10",
            children: l.jsxs("div", {
              className: "container flex flex-col",
              children: [
                l.jsx("h2", {
                  className:
                    "text-xl max-lg:text-center lg:text-3xl font-bold mb-8",
                  children: "خطوات ما قبل الفحص الفني الدوري",
                }),
                l.jsx("div", {
                  className: "flex gap-[2dvw] flex-col lg:flex-row",
                  children: [
                    {
                      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzA3OTQ1NSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3Ljg3NDggMTIuMzMzM0MxNy44NzQ4IDExLjg1IDE3LjQ4MzEgMTEuNDU4MyAxNi45OTk4IDExLjQ1ODNDMTYuNTE2NiAxMS40NTgzIDE2LjEyNDggMTEuODUgMTYuMTI0OCAxMi4zMzMzVjEzLjA3MzhDMTUuMTg2IDEzLjMzOTkgMTQuMzk0MSAxMy43NzI0IDEzLjczNSAxNC40ODVDMTIuODI3NCAxNS40NjYyIDEyLjQyNCAxNi43MDU4IDEyLjIzMDggMTguMjU5M0MxMi4wNDE1IDE5Ljc4MTYgMTIuMDQxNSAyMS43MzI1IDEyLjA0MTUgMjQuMjIxNlYyNC45NDQ5QzEyLjA0MTUgMjcuNDM0IDEyLjA0MTUgMjkuMzg0OSAxMi4yMzA4IDMwLjkwNzJDMTIuNDI0IDMyLjQ2MDcgMTIuODI3NCAzMy43MDAzIDEzLjczNSAzNC42ODE1QzE0LjY1MTUgMzUuNjcyMyAxNS44MjQ3IDM2LjEyMTcgMTcuMjkzIDM2LjMzNTFDMTguNzE0IDM2LjU0MTYgMjAuNTI5NiAzNi41NDE2IDIyLjgyMDYgMzYuNTQxNkgyMi44OTE1QzIzLjM3NDggMzYuNTQxNiAyMy43NjY1IDM2LjE0OTggMjMuNzY2NSAzNS42NjY2QzIzLjc2NjUgMzUuMTgzMyAyMy4zNzQ4IDM0Ljc5MTYgMjIuODkxNSAzNC43OTE2QzIwLjUxMzcgMzQuNzkxNiAxOC44MjU0IDM0Ljc4OTQgMTcuNTQ0NyAzNC42MDMzQzE2LjI5NjcgMzQuNDIxOSAxNS41NjM5IDM0LjA4MTYgMTUuMDE5NiAzMy40OTMyQzE0LjQ2NjQgMzIuODk1MSAxNC4xMzk0IDMyLjA3NDIgMTMuOTY3NCAzMC42OTEyQzEzLjc5MzEgMjkuMjg5NSAxMy43OTE1IDI3LjQ0NzUgMTMuNzkxNSAyNC44ODI4VjI0LjI4MzdDMTMuNzkxNSAyMi42NTkyIDEzLjc5MjEgMjEuMzI0NiAxMy44MzY5IDIwLjIwODNIMzQuMTYyN0MzNC4yMDQ4IDIxLjI1NzggMzQuMjA4IDIyLjUwMTggMzQuMjA4MiAyNEMzNC4yMDgyIDI0LjQ4MzMgMzQuNiAyNC44NzUgMzUuMDgzMyAyNC44NzQ5QzM1LjU2NjUgMjQuODc0OSAzNS45NTgyIDI0LjQ4MzEgMzUuOTU4MiAyMy45OTk4QzM1Ljk1NzkgMjEuNTcyOSAzNS45NTI3IDE5LjY2NTMgMzUuNzU3NyAxOC4xNzE4QzM1LjU2MDMgMTYuNjU5MiAzNS4xNTUyIDE1LjQ0NzcgMzQuMjY0NyAxNC40ODVDMzMuNjA1NiAxMy43NzI0IDMyLjgxMzcgMTMuMzM5OSAzMS44NzQ4IDEzLjA3MzhWMTIuMzMzM0MzMS44NzQ4IDExLjg1IDMxLjQ4MzEgMTEuNDU4MyAzMC45OTk4IDExLjQ1ODNDMzAuNTE2NiAxMS40NTgzIDMwLjEyNDggMTEuODUgMzAuMTI0OCAxMi4zMzMzVjEyLjc2MDFDMjguNzk5NCAxMi42MjQ5IDI3LjE2ODUgMTIuNjI0OSAyNS4xNzkxIDEyLjYyNDlIMjIuODIwNkMyMC44MzEyIDEyLjYyNDkgMTkuMjAwMiAxMi42MjQ5IDE3Ljg3NDggMTIuNzYwMVYxMi4zMzMzWk0zNC4wMzAxIDE4LjQ1ODNIMTMuOTY5NkMxNC4xNDIxIDE3LjA4NTUgMTQuNDY4NyAxNi4yNjkgMTUuMDE5NiAxNS42NzMzQzE1LjMyMjIgMTUuMzQ2MiAxNS42ODMgMTUuMDk1OCAxNi4xNTgyIDE0LjkwNjdDMTYuMjYyNiAxNS4yNzMyIDE2LjU5OTkgMTUuNTQxNiAxNi45OTk4IDE1LjU0MTZDMTcuNDgzMSAxNS41NDE2IDE3Ljg3NDggMTUuMTQ5OCAxNy44NzQ4IDE0LjY2NjZWMTQuNTIwM0MxOS4xMTI3IDE0LjM3NjcgMjAuNzEyNiAxNC4zNzQ5IDIyLjg5MTUgMTQuMzc0OUgyNS4xMDgyQzI3LjI4NzEgMTQuMzc0OSAyOC44ODcgMTQuMzc2NyAzMC4xMjQ4IDE0LjUyMDNWMTQuNjY2NkMzMC4xMjQ4IDE1LjE0OTggMzAuNTE2NiAxNS41NDE2IDMwLjk5OTggMTUuNTQxNkMzMS4zOTk4IDE1LjU0MTYgMzEuNzM3MSAxNS4yNzMyIDMxLjg0MTUgMTQuOTA2N0MzMi4zMTY3IDE1LjA5NTggMzIuNjc3NSAxNS4zNDYyIDMyLjk4IDE1LjY3MzNDMzMuNTIyOSAxNi4yNjAyIDMzLjg0OCAxNy4wNjE2IDM0LjAyMjQgMTguMzk4M0wzNC4wMzAxIDE4LjQ1ODNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzAuNzA4MiAyNi4zMzMzQzMwLjcwODIgMjUuODUgMzAuMzE2NCAyNS40NTgzIDI5LjgzMzIgMjUuNDU4M0MyOS4zNDk5IDI1LjQ1ODMgMjguOTU4MiAyNS44NSAyOC45NTgyIDI2LjMzMzNWMzAuMTI0OUgyNS4xNjY1QzI0LjY4MzMgMzAuMTI0OSAyNC4yOTE1IDMwLjUxNjcgMjQuMjkxNSAzMC45OTk5QzI0LjI5MTUgMzEuNDgzMiAyNC42ODMzIDMxLjg3NDkgMjUuMTY2NSAzMS44NzQ5SDI4Ljk1ODJWMzUuNjY2NkMyOC45NTgyIDM2LjE0OTggMjkuMzQ5OSAzNi41NDE2IDI5LjgzMzIgMzYuNTQxNkMzMC4zMTY0IDM2LjU0MTYgMzAuNzA4MiAzNi4xNDk4IDMwLjcwODIgMzUuNjY2NlYzMS44NzQ5SDM0LjQ5OThDMzQuOTgzMSAzMS44NzQ5IDM1LjM3NDggMzEuNDgzMiAzNS4zNzQ4IDMwLjk5OTlDMzUuMzc0OCAzMC41MTY3IDM0Ljk4MzEgMzAuMTI0OSAzNC40OTk4IDMwLjEyNDlIMzAuNzA4MlYyNi4zMzMzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
                      title: "حجز موعد الفحص",
                      desc: "حجز وإدارة المواعيد عبر المنصة بكل سهولة.",
                    },
                    {
                      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzA3OTQ1NSIvPgo8cGF0aCBkPSJNMjAuNDI1MiAxMi44NzM1QzIwLjQ0OTEgMTMuMzU2MSAyMC4wNzcyIDEzLjc2NjggMTkuNTk0NSAxMy43OTA3QzE3LjE2OTIgMTMuOTEwOSAxNS45NDMgMTQuMjcgMTUuMTA2NSAxNS4xMDY2QzE0LjI2OTkgMTUuOTQzMSAxMy45MTA4IDE3LjE2OTMgMTMuNzkwNiAxOS41OTQ2QzEzLjc2NjcgMjAuMDc3MyAxMy4zNTYgMjAuNDQ5MiAxMi44NzM0IDIwLjQyNTNDMTIuMzkwNyAyMC40MDEzIDEyLjAxODggMTkuOTkwNyAxMi4wNDI3IDE5LjUwOEMxMi4xNjUzIDE3LjAzNDEgMTIuNTMyNiAxNS4yMDU1IDEzLjg2OSAxMy44NjkxQzE1LjIwNTQgMTIuNTMyNyAxNy4wMzQgMTIuMTY1NCAxOS41MDc5IDEyLjA0MjhDMTkuOTkwNiAxMi4wMTg5IDIwLjQwMTIgMTIuMzkwOCAyMC40MjUyIDEyLjg3MzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjcuNTc0OCAxMi44NzM1QzI3LjU5ODggMTIuMzkwOCAyOC4wMDk0IDEyLjAxODkgMjguNDkyMSAxMi4wNDI4QzMwLjk2NiAxMi4xNjU0IDMyLjc5NDYgMTIuNTMyNyAzNC4xMzEgMTMuODY5MUMzNS40Njc0IDE1LjIwNTUgMzUuODM0NyAxNy4wMzQxIDM1Ljk1NzMgMTkuNTA4QzM1Ljk4MTIgMTkuOTkwNyAzNS42MDkzIDIwLjQwMTMgMzUuMTI2NiAyMC40MjUzQzM0LjY0NCAyMC40NDkyIDM0LjIzMzMgMjAuMDc3MyAzNC4yMDk0IDE5LjU5NDZDMzQuMDg5MiAxNy4xNjkzIDMzLjczMDEgMTUuOTQzMSAzMi44OTM1IDE1LjEwNjZDMzIuMDU3IDE0LjI3IDMwLjgzMDggMTMuOTEwOSAyOC40MDU1IDEzLjc5MDdDMjcuOTIyOCAxMy43NjY4IDI3LjU1MDkgMTMuMzU2MSAyNy41NzQ4IDEyLjg3MzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIuODczNCAyNy41NzQ5QzEzLjM1NiAyNy41NTEgMTMuNzY2NyAyNy45MjI5IDEzLjc5MDYgMjguNDA1NkMxMy45MTA4IDMwLjgzMDkgMTQuMjY5OSAzMi4wNTcxIDE1LjEwNjUgMzIuODkzNkMxNS45NDMgMzMuNzMwMiAxNy4xNjkxIDM0LjA4OTMgMTkuNTk0NSAzNC4yMDk1QzIwLjA3NzIgMzQuMjMzNCAyMC40NDkxIDM0LjY0NDEgMjAuNDI1MiAzNS4xMjY3QzIwLjQwMTIgMzUuNjA5NCAxOS45OTA2IDM1Ljk4MTMgMTkuNTA3OSAzNS45NTc0QzE3LjAzNCAzNS44MzQ4IDE1LjIwNTQgMzUuNDY3NSAxMy44NjkgMzQuMTMxMUMxMi41MzI2IDMyLjc5NDcgMTIuMTY1MyAzMC45NjYxIDEyLjA0MjcgMjguNDkyMkMxMi4wMTg4IDI4LjAwOTUgMTIuMzkwNyAyNy41OTg5IDEyLjg3MzQgMjcuNTc0OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNS4xMjY2IDI3LjU3NDlDMzUuNjA5MyAyNy41OTg5IDM1Ljk4MTIgMjguMDA5NSAzNS45NTczIDI4LjQ5MjJDMzUuODM0NyAzMC45NjYxIDM1LjQ2NzQgMzIuNzk0NyAzNC4xMzEgMzQuMTMxMUMzMi43OTQ2IDM1LjQ2NzUgMzAuOTY2IDM1LjgzNDggMjguNDkyMSAzNS45NTc0QzI4LjAwOTQgMzUuOTgxMyAyNy41OTg4IDM1LjYwOTQgMjcuNTc0OCAzNS4xMjY3QzI3LjU1MDkgMzQuNjQ0MSAyNy45MjI4IDM0LjIzMzQgMjguNDA1NSAzNC4yMDk1QzMwLjgzMDggMzQuMDg5MyAzMi4wNTcgMzMuNzMwMiAzMi44OTM1IDMyLjg5MzZDMzMuNzMwMSAzMi4wNTcxIDM0LjA4OTIgMzAuODMwOSAzNC4yMDk0IDI4LjQwNTZDMzQuMjMzMyAyNy45MjI5IDM0LjY0NCAyNy41NTEgMzUuMTI2NiAyNy41NzQ5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4wNDE1IDI0LjAwMDFDMTIuMDQxNSAyMy41MTY4IDEyLjQzMzMgMjMuMTI1MSAxMi45MTY1IDIzLjEyNTFIMTYuMTczQzE2LjYwODMgMTkuMTg3NiAxOS45NDY1IDE2LjEyNTEgMjQgMTYuMTI1MUMyNC40ODMyIDE2LjEyNTEgMjQuODc1IDE2LjUxNjggMjQuODc1IDE3LjAwMDFDMjQuODc1IDE4LjQ0OTggMjYuMDUwMiAxOS42MjUxIDI3LjUgMTkuNjI1MUMyOC4wOTIxIDE5LjYyNTEgMjguNjM2MSAxOS40MzAxIDI5LjA3NDggMTkuMTAwNUMyOS4yNjA0IDE4Ljk2MSAyOS40OTM3IDE4LjkwMTEgMjkuNzIzNSAxOC45MzM3QzI5Ljk1MzMgMTguOTY2MyAzMC4xNjA3IDE5LjA4ODkgMzAuMyAxOS4yNzQ1QzMxLjEyMzggMjAuMzcxMSAzMS42NjgxIDIxLjY5MDYgMzEuODI2OSAyMy4xMjUxSDM1LjA4MzJDMzUuNTY2NCAyMy4xMjUxIDM1Ljk1ODIgMjMuNTE2OCAzNS45NTgyIDI0LjAwMDFDMzUuOTU4MiAyNC40ODMzIDM1LjU2NjQgMjQuODc1MSAzNS4wODMyIDI0Ljg3NTFIMTIuOTE2NUMxMi40MzMzIDI0Ljg3NTEgMTIuMDQxNSAyNC40ODMzIDEyLjA0MTUgMjQuMDAwMVpNMTcuOTM3IDIzLjEyNTFIMzAuMDYzQzI5Ljk1MjcgMjIuMzUyNSAyOS42OTgyIDIxLjYyNyAyOS4zMjc3IDIwLjk3NTlDMjguNzcxMiAyMS4yMzIxIDI4LjE1MTcgMjEuMzc1MSAyNy41IDIxLjM3NTFDMjUuNDAwNyAyMS4zNzUxIDIzLjY0NjcgMTkuODk2NSAyMy4yMjI3IDE3LjkyMzlDMjAuNDk0MiAxOC4yNjk1IDE4LjMyNTQgMjAuNDEwMSAxNy45MzcgMjMuMTI1MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC42OTM5IDI3LjA2MTlDMTguNDUxOSAyNi42NDM2IDE3LjkxNjYgMjYuNTAwNyAxNy40OTgzIDI2Ljc0MjdDMTcuMDggMjYuOTg0NyAxNi45MzcxIDI3LjUxOTkgMTcuMTc5IDI3LjkzODJDMTguNTM5NCAzMC4yODk4IDIxLjA4NCAzMS44NzUxIDI0IDMxLjg3NTFDMjYuOTE1OSAzMS44NzUxIDI5LjQ2MDYgMzAuMjg5OCAzMC44MjA5IDI3LjkzODJDMzEuMDYyOSAyNy41MTk5IDMwLjkxOTkgMjYuOTg0NyAzMC41MDE2IDI2Ljc0MjdDMzAuMDgzMyAyNi41MDA3IDI5LjU0ODEgMjYuNjQzNiAyOS4zMDYxIDI3LjA2MTlDMjguMjQ1NyAyOC44OTUgMjYuMjY2IDMwLjEyNTEgMjQgMzAuMTI1MUMyMS43MzQgMzAuMTI1MSAxOS43NTQyIDI4Ljg5NSAxOC42OTM5IDI3LjA2MTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
                      title: "فحص المركبة",
                      desc: "بعد تأكيد حجز الموعد إلكترونياً، يتم التوجه إلى موقع الفحص ليتم فحص المركبة.",
                    },
                    {
                      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0iIzA3OTQ1NSIvPgo8cGF0aCBkPSJNMTkuMzMzNSAyMS45NTgzQzE4Ljg1MDIgMjEuOTU4MyAxOC40NTg1IDIyLjM1MDEgMTguNDU4NSAyMi44MzMzQzE4LjQ1ODUgMjMuMzE2NiAxOC44NTAyIDIzLjcwODMgMTkuMzMzNSAyMy43MDgzSDIyLjgzMzVDMjMuMzE2NyAyMy43MDgzIDIzLjcwODUgMjMuMzE2NiAyMy43MDg1IDIyLjgzMzNDMjMuNzA4NSAyMi4zNTAxIDIzLjMxNjcgMjEuOTU4MyAyMi44MzM1IDIxLjk1ODNIMTkuMzMzNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOS4zMzM1IDE3LjI5MTZDMTguODUwMiAxNy4yOTE2IDE4LjQ1ODUgMTcuNjgzNCAxOC40NTg1IDE4LjE2NjZDMTguNDU4NSAxOC42NDk5IDE4Ljg1MDIgMTkuMDQxNiAxOS4zMzM1IDE5LjA0MTZMMjcuNTAwMiAxOS4wNDE2QzI3Ljk4MzQgMTkuMDQxNiAyOC4zNzUyIDE4LjY0OTkgMjguMzc1MiAxOC4xNjY2QzI4LjM3NTIgMTcuNjgzNCAyNy45ODM0IDE3LjI5MTYgMjcuNTAwMiAxNy4yOTE2SDE5LjMzMzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIzLjkzNzUgMTEuNDU4M0gyNC45NTIzQzI2LjgxMTggMTEuNDU4MiAyOC4yNzYxIDExLjQ1ODIgMjkuNDM3OSAxMS41NzkzQzMwLjYyNDEgMTEuNzAzIDMxLjU5OTUgMTEuOTYwOSAzMi40MzM5IDEyLjU0ODhDMzIuODc5MyAxMi44NjI2IDMzLjI3NjUgMTMuMjM2IDMzLjYxMjYgMTMuNjU4NkMzNC4yNDgzIDE0LjQ1NzkgMzQuNTI4OCAxNS4zOTc3IDM0LjY2MjIgMTYuNTMxOUMzNC43OTE5IDE3LjYzMzcgMzQuNzkxOCAxOS4wMTkxIDM0Ljc5MTggMjAuNzYyVjIzLjgxOTZDMzQuNzkxOCAyNS41MjExIDM0Ljc5MTggMjYuODQxNSAzNC43MjE1IDI3LjkwNzFDMzQuNjUwMyAyOC45ODcyIDM0LjUwNDIgMjkuODY2MiAzNC4xODMyIDMwLjY3NjJDMzMuMjA1NCAzMy4xNDM2IDMxLjE0NjQgMzUuMDcgMjguNTYxOSAzNS45NzczQzI2Ljk1MzIgMzYuNTQyIDI0Ljk3OTMgMzYuNTQxOSAyMS41MTk3IDM2LjU0MTZMMjEuMDk2NSAzNi41NDE2QzE5LjE4ODkgMzYuNTQyIDE4IDM2LjU0MjMgMTcuMDE5MiAzNi4xOThDMTUuNDQ1MyAzNS42NDU1IDE0LjE4MzUgMzQuNDY5MyAxMy41ODI3IDMyLjk1MzFDMTMuMzc4OSAzMi40Mzg5IDEzLjI5MTQgMzEuODkzIDEzLjI0OTUgMzEuMjU3M0MxMy4yMDg1IDMwLjYzNiAxMy4yMDg1IDI5Ljg3MTIgMTMuMjA4NSAyOC45MDk1VjIxLjU5NzJDMTMuMjA4NSAxOS40NTYyIDEzLjIwODUgMTcuNzU0OSAxMy4zOTg4IDE2LjQyMjJDMTMuNTk1NyAxNS4wNDQ0IDE0LjAxMTIgMTMuOTMzNCAxNC45MzYxIDEzLjA2MjlDMTUuODUzNSAxMi4xOTk1IDE3LjAxMTcgMTEuODE4IDE4LjQ0OTcgMTEuNjM2QzE5Ljg1NDggMTEuNDU4MiAyMS42NTMyIDExLjQ1ODIgMjMuOTM3NSAxMS40NTgzWk0xOC42Njk0IDEzLjM3MjJDMTcuNDA2OSAxMy41MzE5IDE2LjY3MDMgMTMuODMzOSAxNi4xMzU1IDE0LjMzNzNDMTUuNjA4MSAxNC44MzM2IDE1LjI5NzUgMTUuNTA2IDE1LjEzMTIgMTYuNjY5N0MxNC45NjA2IDE3Ljg2NDMgMTQuOTU4NSAxOS40NDA1IDE0Ljk1ODUgMjEuNjY2NlYyOC44Nzg3QzE0Ljk1ODUgMjkuODc4IDE0Ljk1ODkgMzAuNTg1MSAxNC45OTU3IDMxLjE0MjFDMTUuMDMxOSAzMS42OTEzIDE1LjEwMDcgMzIuMDMzNyAxNS4yMDk2IDMyLjMwODRDMTUuNjEzOSAzMy4zMjg2IDE2LjQ3NzggMzQuMTUzMiAxNy41OTg5IDM0LjU0NjdDMTguMjYwOCAzNC43NzkxIDE5LjEyMjcgMzQuNzkxNiAyMS4yOTU2IDM0Ljc5MTZDMjEuNjY5NiAzNC43OTE2IDIyLjAyMjYgMzQuNzkxNSAyMi4zNTY1IDM0Ljc5MDhDMjMuOTcxNCAzNC43MzQzIDI1LjI2MzEgMzMuNDA3NCAyNS4yNjMxIDMxLjc3ODhDMjUuMjYzMSAzMS42MDcxIDI1LjI1NTYgMzEuNDIyNiAyNS4yNDYgMzEuMjE1NEwyNS4yNDI0IDMxLjEzODZDMjUuMjMzOSAzMC45NTc5IDI1LjIyNDYgMzAuNzYxMSAyNS4yMjA2IDMwLjU2NUMyNS4yMTE0IDMwLjEyMTYgMjUuMjI1NCAyOS42MDQxIDI1LjM1OTIgMjkuMTA0NkMyNS42MTk5IDI4LjEzMTYgMjYuMzc5OSAyNy4zNzE3IDI3LjM1MjkgMjcuMTExQzI3Ljg1MjQgMjYuOTc3MSAyOC4zNjk4IDI2Ljk2MzEgMjguODEzMyAyNi45NzIzQzI5LjAwOTQgMjYuOTc2NCAyOS4yMDYxIDI2Ljk4NTYgMjkuMzg2OCAyNi45OTQxTDI5LjQ2MzYgMjYuOTk3N0MyOS42NzA4IDI3LjAwNzMgMjkuODU1NCAyNy4wMTQ5IDMwLjAyNyAyNy4wMTQ5QzMxLjY5MTYgMjcuMDE0OSAzMy4wNDA5IDI1LjY2NTUgMzMuMDQwOSAyNC4wMDFDMzMuMDQwOSAyMy45ODc2IDMzLjA0MTIgMjMuOTc0MiAzMy4wNDE4IDIzLjk2MDlDMzMuMDQxOCAyMy45MDM3IDMzLjA0MTggMjMuODQ2IDMzLjA0MTggMjMuNzg3OFYyMC44MTgxQzMzLjA0MTggMTkuMDA2NSAzMy4wNDA0IDE3LjcyNDEgMzIuOTI0MiAxNi43MzY0QzMyLjgxMDQgMTUuNzY5MyAzMi41OTYzIDE1LjE5MjEgMzIuMjQzIDE0Ljc0OEMzMi4wMTI0IDE0LjQ1OCAzMS43Mzc2IDE0LjE5ODkgMzEuNDI2IDEzLjk3OTRDMzAuOTM5MiAxMy42MzY0IDMwLjMwMjkgMTMuNDI5IDI5LjI1NjQgMTMuMzE5OUMyOC4xOTYgMTMuMjA5NCAyNi44MjI5IDEzLjIwODMgMjQuOTAxNyAxMy4yMDgzSDI0LjAwMDJDMjEuNjM5NSAxMy4yMDgzIDE5Ljk1MTkgMTMuMjA5OSAxOC42Njk0IDEzLjM3MjJaTTMyLjk3ODcgMjcuNzQwNkMzMi4xNjcxIDI4LjM4MiAzMS4xNDE4IDI4Ljc2NDkgMzAuMDI3IDI4Ljc2NDlDMjkuODEwMyAyOC43NjQ5IDI5LjU4OTEgMjguNzU1NCAyOS4zODI1IDI4Ljc0NThMMjkuMzAzNCAyOC43NDIxQzI5LjEyMDYgMjguNzMzNiAyOC45NDg1IDI4LjcyNTUgMjguNzc2OSAyOC43MjE5QzI4LjM3OTUgMjguNzEzNyAyOC4wNjE1IDI4LjczMjggMjcuODA1OCAyOC44MDEzQzI3LjQzNjcgMjguOTAwMiAyNy4xNDg1IDI5LjE4ODUgMjcuMDQ5NiAyOS41NTc1QzI2Ljk4MTEgMjkuODEzMiAyNi45NjE5IDMwLjEzMTMgMjYuOTcwMiAzMC41Mjg3QzI2Ljk3MzggMzAuNzAwMiAyNi45ODE4IDMwLjg3MjMgMjYuOTkwNCAzMS4wNTVMMjYuOTk0MSAzMS4xMzQzQzI3LjAwMzcgMzEuMzQwOCAyNy4wMTMxIDMxLjU2MiAyNy4wMTMxIDMxLjc3ODhDMjcuMDEzMSAzMi44Nzg0IDI2LjY0MDUgMzMuODkxMSAyNi4wMTQ3IDM0LjY5NzRDMjYuODIzNCAzNC42MzEgMjcuNDM1MSAzNC41MTgyIDI3Ljk4MjMgMzQuMzI2MUMzMC4xMTM5IDMzLjU3NzggMzEuNzc1IDMyLjAwMjkgMzIuNTU2MyAzMC4wMzE1QzMyLjc4MjQgMjkuNDYxIDMyLjkwOTggMjguNzg1NSAzMi45NzUzIDI3Ljc5MTlDMzIuOTc2NSAyNy43NzQ5IDMyLjk3NzYgMjcuNzU3OCAzMi45Nzg3IDI3Ljc0MDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
                      title: "استلام نتيجة الفحص",
                      desc: "ستصلك نتيجة الفحص فور الانتهاء عبر رسالة نصية SMS، إذا كانت النتيجة اجتياز المركبة للفحص سيتم وضع ملصق الفحص على الزجاج الأمامي، أما لو كانت النتيجة عدم اجتياز سيكون لديك فرصتين لإعادة الفحص خلال 14 يوم عمل بالسعر المخصص للإعادة مع التأكيد على ضرورة حجز موعد لإعادة الفحص",
                    },
                  ].map(({ img: t, title: r, desc: s }) =>
                    l.jsxs(
                      "div",
                      {
                        className:
                          "p-4 flex-1 flex flex-col items-center gap-4 text-center border rounded-2xl shadow",
                        children: [
                          l.jsx("img", { src: t, alt: r }),
                          l.jsx("h4", {
                            className: "lg:text-xl font-bold mt-4",
                            children: r,
                          }),
                          l.jsx("p", {
                            className: "text-sm text-black max-w-sm text-pretty",
                            children: s,
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
          }),
          l.jsxs("section", {
            className: "container flex flex-col items-center my-10",
            children: [
              l.jsx("h2", {
                className:
                  "text-xl max-lg:text-center lg:text-3xl font-bold mb-8",
                children: "الجهات المرخصة",
              }),
              l.jsx("p", {
                className:
                  "text-sm max-lg:max-w-sm -mt-6 lg:text-lg mb-6 text-center text-[#1b8354]",
                children:
                  "الجهات المرخصة من المواصفات السعودية لممارسة نشاط الفحص الفني الدوري",
              }),
              l.jsx("div", {
                className: "flex gap-2 items-center justify-center flex-wrap",
                children: [1, 2, 3, 4].map((t) =>
                  l.jsx(
                    "div",
                    {
                      className: "flex-1 py-2 px-4 border rounded-xl shadow-sm",
                      children: l.jsx("img", {
                        src: `/assets/images/certified-${t}.png`,
                        alt: "certified partner",
                        className: "h-10 mx-auto",
                      }),
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
          l.jsx("section", {
            className: "bg-gray-100 pt-16 lg:pb-16",
            children: l.jsxs("div", {
              className:
                "max-w-5xl mx-auto px-4 flex gap-10 flex-col lg:flex-row items-center",
              children: [
                l.jsx("img", {
                  src: "/assets/images/app_clone.png",
                  alt: "app preview",
                  className: "mix-blend-darken max-lg:order-1",
                }),
                l.jsx("div", {
                  className: "flex flex-col gap-8",
                  children: l.jsxs("div", {
                    className: "flex flex-col justify-center",
                    children: [
                      l.jsx("h2", {
                        className:
                          "text-3xl lg:text-5xl font-bold text-[#1b8354] mb-4 text-center lg:text-right",
                        children: "احجز موعد الفحص من جوالك",
                      }),
                      l.jsx("p", {
                        className:
                          "max-lg:px-8 lg:text-2xl mb-6 text-center lg:text-right",
                        children:
                          "بسهولة وبساطة يمكنك حجز موعد الفحص في أقرب مركز لموقعك",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          l.jsx("section", {
            id: "faq",
            className: "py-10 md:py-16 bg-white",
            children: l.jsxs("div", {
              className: "container mx-auto px-4 lg:px-8",
              children: [
                l.jsxs("div", {
                  className:
                    "flex flex-col lg:flex-row items-start justify-between gap-4 md:gap-8 mb-6 md:mb-8",
                  children: [
                    l.jsxs("div", {
                      className: "text-right",
                      children: [
                        l.jsx("h2", {
                          className:
                            "text-xl md:text-2xl font-bold text-gray-900 mb-2",
                          children: "الأسئلة الشائعة",
                        }),
                        l.jsx("p", {
                          className: "text-gray-500 text-sm",
                          children: "الأسئلة الشائعة حول خدمة الفحص الفني الدوري",
                        }),
                      ],
                    }),
                    l.jsx("button", {
                      type: "button",
                      className:
                        "px-4 md:px-6 py-2 border border-[#18754d] text-[#18754d] rounded-lg hover:bg-[#18754d] hover:text-white transition-colors text-sm md:text-base",
                      children: "المزيد من الأسئلة والأجوبة",
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "max-w-4xl",
                  children: [
                    {
                      q: "ماهي خدمة حجز مواعيد الفحص الفني الدوري؟",
                      a: "هي خدمة إلكترونية تتيح لك اختيار المنطقة والمركز والموعد المناسب لإجراء الفحص الفني الدوري، مع إمكانية إدارة الموعد (تعديل/إلغاء) حسب الشروط المتاحة.",
                    },
                    {
                      q: "هل يلزم حجز موعد للإجراء الفحص الفني الدوري؟",
                      a: "نعم، يُفضّل حجز موعد عبر المنصة لضمان توفر الوقت وتقليل مدة الانتظار حسب الأوقات المتاحة لدى مراكز الفحص.",
                    },
                    {
                      q: "نجحت مركبتي بالفحص، ولكنني لم أجد معلومات الفحص بنظام أبشر.",
                      a: "قد يتطلب تحديث البيانات بعض الوقت بعد اعتماد النتيجة. إذا استمرت المشكلة، تواصل مع الدعم واذكر رقم الهوية/اللوحة وتاريخ الفحص.",
                    },
                    {
                      q: "ما هي الجهات المرخصة من المواصفات السعودية لممارسة نشاط الفحص الفني الدوري للمركبات؟",
                      a: 'هي الجهات المعتمدة والمرخصة رسميًا من المواصفات السعودية لممارسة نشاط الفحص الفني الدوري. يمكنك الاطلاع على قائمة الجهات المرخصة من خلال قسم "الجهات المرخصة" في الصفحة.',
                    },
                  ].map((t, r) =>
                    l.jsx(
                      IB,
                      { question: t.q, answer: t.a, id: `faq-${r}` },
                      r,
                    ),
                  ),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}

export { HomePage as default };
