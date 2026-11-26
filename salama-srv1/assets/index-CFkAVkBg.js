import { r as x, j as l, u as xt, b as Qn, m as U, a as Q, s as W } from "./index-D4BysLqo.js";
import { M as MainWrapper } from "./MainWrapper-3fG7tHnO.js";
import { i as B } from "./InpeciontFees-BCIGlzoa.js";
import { L as Link } from "./index-T_BWojLf.js";
import { SalamaShell } from "./SalamaShell.js";

const sB = [
  { value: "A-أ", label: "أ - A" },
  { value: "B-ب", label: "ب - B" },
  { value: "J-ح", label: "ح - J" },
  { value: "D-د", label: "د - D" },
  { value: "R-ر", label: "ر - R" },
  { value: "S-س", label: "س - S" },
  { value: "X-ص", label: "ص - X" },
  { value: "T-ط", label: "ط - T" },
  { value: "E-ع", label: "ع - E" },
  { value: "G-ق", label: "ق - G" },
  { value: "K-ك", label: "ك - K" },
  { value: "L-ل", label: "ل - L" },
  { value: "Z-م", label: "م - Z" },
  { value: "N-ن", label: "ن - N" },
  { value: "H-ه", label: "ه - H" },
  { value: "U-و", label: "و - U" },
  { value: "V-ى", label: "ى - V" },
];

const Z2 = [
  { name: "منطقة نجران", centers: ["نجران"] },
  { name: "منطقة الجوف", centers: ["الجوف", "القريات"] },
  { name: "المنطقة الشرقية", centers: ["الهفوف", "الخفجي", "الجبيل", "الدمام", "حفر الباطن"] },
  { name: "منطقة تبوك", centers: ["تبوك"] },
  { name: "منطقة القصيم", centers: ["الراس", "القصيم"] },
  { name: "منطقة حائل", centers: ["حائل"] },
  { name: "منطقة عسير", centers: ["بيشة", "ابها", "محايل عسير"] },
  { name: "منطقة مكة المكرمة", centers: ["جدة الشمال", "جدة عسفان", "مكة المكرمة", "الطائف", "جدة الجنوب", "الخرمة"] },
  { name: "منطقة المدينة المنورة", centers: ["المدينة المنورة", "ينبع"] },
  { name: "منطقة الباحة", centers: ["الباحة"] },
  {
    name: "منطقة الرياض",
    centers: [
      "الرياض حي المونسية",
      "وادى الدواسر",
      "الخرج",
      "جنوب شرق الرياض مخرج سبعة عشر",
      "الرياض حي الشفا طريق ديراب",
      "المجمعة",
      "القويعية",
      "الرياض حي القيروان",
    ],
  },
  { name: "منطقة جازان", centers: ["جيزان"] },
  { name: "منطقة الحدود الشمالية", centers: ["عرعر"] },
];

const oB = [
  "خصوصى",
  "نقل عام",
  "نقل خاص",
  "مقطورة",
  "دراجة نارية",
  "مركبة أجرة",
  "تصدير",
  "دراجة نارية ترفيهيه",
  "هيئة دبلوماسية",
  "حافلة خاصة",
  "مؤقتة",
  "مركبة أشغال عامة",
];

const iB = [
  "سيارة خاصة",
  "مركبة نقل خفيفة خاصة",
  "نقل ثقيل",
  "حافلة خفيفة",
  "مركبة نقل خفيفة",
  "نقل متوسط",
  "حافلة كبيرة",
  "الدراجات ثنائية العجلات",
  "مركبات أشغال عامة",
  "دراجة ثلاثية او رباعية العجلات",
  "مقطورة ثقيلة",
  "سيارات الأجرة",
  "سيارات التأجير",
  "نصف مقطورة ثقيلة",
  "حافلة متوسطة",
  "مقطورة خفيفة",
  "نصف مقطورة خفيفة",
  "نصف مقطورة خفيفة خاصة",
  "مقطورة خفيفة خاصة",
];

const lB = (() => {
  const e = [];
  for (let t = 7; t < 24; t++) {
    for (let r = 0; r < 60; r += 5) {
      const s = String(r).padStart(2, "0");
      const i = t < 12 ? "ص" : "م";
      const c = t > 12 ? t - 12 : t;
      e.push(`${String(c).padStart(2, "0")}:${s} ${i}`);
    }
  }
  return e;
})();

const J2 = [
  "السعودية",
  "الكويت",
  "الإمارات العربية المتحدة",
  "قطر",
  "عُمان",
  "الجزائر",
  "البحرين",
  "المغرب",
  "مصر",
  "العراق",
  "سوريا",
  "لبنان",
  "آيسلندا",
  "إثيوبيا",
  "أذربيجان",
  "أراض فرنسية جنوبية وأنتارتيكية",
  "أرمينيا",
  "أروبا",
  "إريتريا",
  "إسبانيا",
  "أستراليا",
  "إستونيا",
  "أفغانستان",
  "إقليم المحيط الهندي البريطاني",
  "الأرجنتين",
  "الأردن",
  "الإكوادور",
  "الأوروغواي",
  "ألبانيا",
  "البرازيل",
  "البرتغال",
  "البوسنة والهرسك",
  "الجبل الأسود",
  "الجزر الكاريبية الهولندية",
  "الدنمارك",
  "الرأس الأخضر",
  "السلفادور",
  "السنغال",
  "السودان",
  "السويد",
  "الصحراء الغربية",
  "الصومال",
  "الصين",
  "الغابون",
  "الفاتيكان",
  "الفلبين",
  "القارة القطبية الجنوبية",
  "الكاميرون",
  "ألمانيا",
  "المجر",
  "المكسيك",
  "المملكة المتحدة",
  "النرويج",
  "النمسا",
  "النيجر",
  "الهند",
  "الولايات المتحدة",
  "اليابان",
  "اليمن",
  "اليونان",
  "أنتيغوا وباربودا",
  "أندورا",
  "إندونيسيا",
  "أنغولا",
  "أنغويلا",
  "أوزبكستان",
  "أوغندا",
  "أوكرانيا",
  "إيران",
  "أيرلندا",
  "إيطاليا",
  "بابوا غينيا الجديدة",
  "باراغواي",
  "باربادوس",
  "باكستان",
  "بالاو",
  "باهاماس",
  "برمودا",
  "بروناي",
  "بلجيكا",
  "بلغاريا",
  "بليز",
  "بنغلاديش",
  "بنما",
  "بنين",
  "بوتان",
  "بوتسوانا",
  "بورتوريكو",
  "بوركينا فاسو",
  "بورما",
  "بوروندي",
  "بولندا",
  "بوليفيا",
  "بولينزيا الفرنسية",
  "بيرو",
  "تانزانيا",
  "تايلاند",
  "تايوان",
  "تركمانستان",
  "تركيا",
  "ترينيداد وتوباغو",
  "تشاد",
  "تشيلي",
  "توغو",
  "توفالو",
  "توكيلاو",
  "تونس",
  "تونغا",
  "تيمور الشرقية",
  "جامايكا",
  "جبل طارق",
  "جرينلاند",
  "جزر العذراء الأمريكية",
  "جزر العذراء البريطانية",
  "جزر القمر",
  "جزر المالديف",
  "جزر سليمان",
  "جزر فارو",
  "جزر فوكلاند",
  "جزر كايمان",
  "جزر كوك",
  "جزر مارشال",
  "جزر ماريانا الشمالية",
  "جزيرة مان",
  "جزيرة نورفولك",
  "جمهورية أفريقيا الوسطى",
  "جمهورية التشيك",
  "جمهورية الدومينيكان",
  "جمهورية الكونغو",
  "جمهورية الكونغو الديمقراطية",
  "جنوب أفريقيا",
  "جنوب السودان",
  "جورجيا",
  "جيبوتي",
  "دومينيكا",
  "رواندا",
  "روسيا",
  "روسيا البيضاء",
  "رومانيا",
  "زامبيا",
  "زيمبابوي",
  "ساحل العاج",
  "ساموا",
  "سان مارينو",
  "سانت فينسنت والغرينادين",
  "سانت كيتس ونيفيس",
  "سانت لوسيا",
  "ساو تومي وبرينسيب",
  "سريلانكا",
  "سلوفاكيا",
  "سلوفينيا",
  "سنغافورة",
  "سوازيلاند",
  "سورينام",
  "سويسرا",
  "سيراليون",
  "سيشل",
  "صربيا",
  "طاجيكستان",
  "عمان",
  "غامبيا",
  "غانا",
  "غرينادا",
  "غواتيمالا",
  "غيانا",
  "غينيا",
  "غينيا الاستوائية",
  "غينيا بيساو",
  "فانواتو",
  "فرنسا",
  "فلسطين",
  "فنزويلا",
  "فنلندا",
  "فيتنام",
  "فيجي",
  "قبرص",
  "قيرغيزستان",
  "كازاخستان",
  "كاليدونيا الجديدة",
  "كرواتيا",
  "كمبوديا",
  "كندا",
  "كوبا",
  "كوريا الجنوبية",
  "كوريا الشمالية",
  "كوستاريكا",
  "كوسوفو",
  "كولومبيا",
  "كيريباتي",
  "كينيا",
  "لا ريونيون",
  "لاتفيا",
  "لاوس",
  "لوكسمبورغ",
  "ليبيا",
  "ليبيريا",
  "ليتوانيا",
  "ليختنشتاين",
  "ليسوتو",
  "مارتينيك",
  "ماكاو",
  "مالاوي",
  "مالطا",
  "مالي",
  "ماليزيا",
  "مايوت",
  "مدغشقر",
  "مقدونيا الشمالية",
  "منغوليا",
  "موريتانيا",
  "موريشيوس",
  "موزمبيق",
  "مولدوفا",
  "موناكو",
  "ناميبيا",
  "ناورو",
  "نيبال",
  "نيجيريا",
  "نيكاراغوا",
  "نيوزيلندا",
  "هايتي",
  "هندوراس",
  "هولندا",
  "هونغ كونغ",
  "والس وفوتونا",
  "ولايات ميكرونيسيا المتحدة",
];

function gm(e) {
  if (!e || e === "") return { ar: "-", en: "-" };
  const t = e.split("-");
  return { en: t[0] || "-", ar: t[1] || "-" };
}

function toArabicDigits(str) {
  const ar = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(str || "").replace(/\d/g, (d) => ar[Number(d)] || d);
}

const cB = x.memo(() =>
  l.jsx("div", {
    className: "w-full rounded-lg overflow-hidden",
    children: l.jsx("iframe", {
      src: "https://maps.google.com/maps?q=24.7136,46.6753&hl=ar-SA&z=12&output=embed",
      width: "100%",
      height: "150",
      allowFullScreen: !0,
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade",
      title: "خريطة",
      style: { border: 0, borderRadius: 8 },
    }),
  }),
);

const Ll =
  "text-right flex h-10 w-full rounded-md border bg-white pl-3 pr-10 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1b8354] focus:ring-offset-1 border-gray-300";
const ps =
  "w-full h-10 rounded-md border bg-white px-3 text-sm text-right focus:outline-none focus:ring-2 focus:ring-[#1b8354] focus:ring-offset-1 border-gray-300";

const kn = ({ children: e, req: t }) =>
  l.jsxs("label", {
    className: "mb-2 block text-sm font-semibold select-none",
    children: [e, " ", t && l.jsx("span", { className: "text-red-500 ms-1", children: "*" })],
  });

const Sr = ({ children: e }) => l.jsx("div", { className: "max-w-sm space-y-2", children: e });

function ApplyPage() {
  const navigate = xt();
  const location = Qn();
  const urlVehicleType = x.useMemo(
    () => new URLSearchParams(window.location.search).get("vehicle-type") || "",
    [],
  );

  const [fullName, setFullName] = x.useState(() => U.value?.fullName || "");
  const [nationalId, setNationalId] = x.useState(() => U.value?.idNumber || "");
  const [phone, setPhone] = x.useState(() => U.value?.phone || "");
  const [email, setEmail] = x.useState("");
  const [nationality, setNationality] = x.useState("");

  const [hasDelegate, setHasDelegate] = x.useState(!1);
  const [commType, setCommType] = x.useState("مواطن / مقيم");
  const [commName, setCommName] = x.useState("");
  const [commPhone, setCommPhone] = x.useState("");
  const [commNationality, setCommNationality] = x.useState("");
  const [commId, setCommId] = x.useState("");
  const [commAccept, setCommAccept] = x.useState(!1);

  const [condition, setCondition] = x.useState("تحمل رخصة سير");
  const [plate1, setPlate1] = x.useState("");
  const [plate2, setPlate2] = x.useState("");
  const [plate3, setPlate3] = x.useState("");
  const [plateDigits, setPlateDigits] = x.useState("");
  const [plateError, setPlateError] = x.useState("");

  const [regType, setRegType] = x.useState("");
  const [vehicleType, setVehicleType] = x.useState(urlVehicleType);
  const [checkType, setCheckType] = x.useState("خدمة الفحص الدوري");
  const [region, setRegion] = x.useState("");
  const [checkPlace, setCheckPlace] = x.useState("");
  const [dateVal, setDateVal] = x.useState("");
  const [timeVal, setTimeVal] = x.useState("");

  const [errorMsg, setErrorMsg] = x.useState("");
  const [submitting, setSubmitting] = x.useState(!1);

  const at = gm(plate1);
  const Ot = gm(plate2);
  const zt = gm(plate3);

  const enCells = x.useMemo(() => {
    const padded = (plateDigits || "").slice(0, 4).padEnd(4, "-");
    return padded.split("");
  }, [plateDigits]);

  const arCells = x.useMemo(() => {
    const padded = (plateDigits || "").slice(0, 4).padEnd(4, "-");
    return toArabicDigits(padded).split("");
  }, [plateDigits]);

  const todayIso = x.useMemo(() => {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mm}-${dd}`;
  }, []);

  x.useEffect(() => {
    if (location.state?.scrollTo === "service-center" || window.location.hash === "#service-center") {
      setTimeout(() => {
        const el = document.getElementById("service-center");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [location]);

  const formattedPlate = x.useMemo(() => {
    const paddedEn = (plateDigits || "").padStart(4, "0");
    const paddedAr = toArabicDigits(paddedEn);
    return `${paddedEn}${at.en}${Ot.en}${zt.en}_${at.ar}${Ot.ar}${zt.ar}${paddedAr}`;
  }, [plateDigits, at, Ot, zt]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (
      !fullName.trim() ||
      !nationalId.trim() ||
      !phone.trim() ||
      !nationality ||
      !plate1 ||
      !plate2 ||
      !plate3 ||
      !plateDigits.trim() ||
      !regType ||
      !vehicleType ||
      !region ||
      !checkPlace ||
      !dateVal ||
      !timeVal
    ) {
      setErrorMsg("يرجى تعبئة جميع الحقول المطلوبة");
      return;
    }

    if (hasDelegate && !commAccept) {
      setErrorMsg("يرجى الموافقة على شرط التفويض");
      return;
    }

    setErrorMsg("");
    setSubmitting(!0);

    const paddedDigits = plateDigits.padStart(4, "0");
    const arDigits = toArabicDigits(paddedDigits);
    const finalPlate = `${paddedDigits}${at.en}${Ot.en}${zt.en}_${at.ar}${Ot.ar}${zt.ar}${arDigits}`;

    const feeEntry = B.find((z) => z.vehicleType === vehicleType) || B[0];
    const inspInfo = feeEntry?.initialInspection || { total: 115, base: 100, vat: 15 };
    const baseTotal = inspInfo.total;
    const gatewayTotal = (baseTotal + 10).toFixed(2);

    const formPayload = {
      name: fullName.trim(),
      fullName: fullName.trim(),
      id: nationalId.trim(),
      idNumber: nationalId.trim(),
      phone: phone.trim(),
      mobile: phone.trim(),
      code: "(+966)",
      country: "السعودية",
      nationality,
      email: email.trim(),
      condition,
      vehicleCondition: condition,
      vehicleStatus: condition,
      plate: finalPlate,
      plateNumber: finalPlate,
      "registration-type": regType,
      registrationType: regType,
      "vehicle-type": vehicleType,
      vehicleType,
      "check-type": checkType,
      inspectionType: checkType,
      serviceType: checkType,
      region,
      "check-place": checkPlace,
      center: checkPlace,
      centerName: checkPlace,
      date: dateVal,
      time: timeVal,
      fee: inspInfo.base,
      tax: inspInfo.vat,
      total: baseTotal,
      totalAmount: baseTotal,
      totalPrice: baseTotal,
      delegateInspection: hasDelegate,
    };

    if (hasDelegate) {
      formPayload.commissioner = commType;
      formPayload.commissionerType = commType;
      formPayload["commissioner-name"] = commName.trim();
      formPayload.commissionerName = commName.trim();
      formPayload["commissioner-phone"] = commPhone.trim();
      formPayload.commissionerPhone = commPhone.trim();
      formPayload["commissioner-code"] = "(+966)";
      formPayload["commissioner-nationality"] = commNationality;
      formPayload.commissionerNationality = commNationality;
      formPayload["commissioner-id"] = commId.trim();
      formPayload.commissionerIdNumber = commId.trim();
      formPayload["commissioner-accept"] = "on";
      formPayload.commissionerAccept = "on";
    }

    const exp = new Date();
    exp.setFullYear(exp.getFullYear() + 1);
    document.cookie = `ID=${encodeURIComponent(formPayload.id)};expires=${exp.toUTCString()};path=/`;

    U.value.state = {
      ...(U.value.state || {}),
      total: gatewayTotal,
    };

    Q({
      fullName: formPayload.name,
      idNumber: formPayload.id,
      phone: formPayload.phone,
    });

    W({
      current: "حجز موعد",
      data: formPayload,
      nextPage: "payment-gateway",
      nextLink: "/payment-gateway",
      waitingForAdminResponse: !1,
      navigate,
      state: { totalPrice: baseTotal },
    });
  };

  return l.jsx(MainWrapper, {
    children: l.jsx(SalamaShell, {
      children: l.jsxs("div", {
        dir: "rtl",
        children: [
          submitting &&
            l.jsx("div", {
              style: {
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.6)",
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              children: l.jsxs("div", {
                className: "text-center text-white",
                children: [
                  l.jsx("div", {
                    className: "spinner-border text-light mb-3",
                    role: "status",
                  }),
                  l.jsx("h5", {
                    className: "font-weight-bold",
                    children: "يرجى الانتظار",
                  }),
                  l.jsx("p", { children: "انتظر حتى تتم معالجة طلبك" }),
                ],
              }),
            }),
          l.jsxs("main", {
            className: "py-10 px-4 container mx-auto",
            children: [
              l.jsx("h1", {
                className: "text-2xl lg:text-5xl font-bold text-[#1b8354] mb-2",
                children: "خدمة الفحص الفني الدوري",
              }),
              l.jsx("h2", {
                className: "text-2xl lg:text-4xl text-[#1b8354] font-semibold mb-8",
                children: "حجز موعد",
              }),
              l.jsxs("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-6",
                children: [
                  l.jsx("input", { type: "hidden", name: "code", value: "(+966)" }),
                  l.jsx("input", { type: "hidden", name: "country", value: "السعودية" }),
                  l.jsx("input", { type: "hidden", name: "plate", value: formattedPlate }),
                  l.jsx("h3", {
                    className: "font-bold text-gray-500 text-xl lg:text-2xl",
                    children: "المعلومات الشخصية",
                  }),
                  l.jsxs(Sr, {
                    children: [
                      l.jsx(kn, { req: !0, children: "الأسم" }),
                      l.jsx("input", {
                        type: "text",
                        name: "name",
                        placeholder: "أكتب أسمك هنا...",
                        value: fullName,
                        onChange: (xe) => setFullName(xe.target.value),
                        className: Ll,
                        style: { fontSize: 16 },
                      }),
                    ],
                  }),
                  l.jsxs(Sr, {
                    children: [
                      l.jsx(kn, { req: !0, children: "رقم الهوية الوطنية / الاقامة" }),
                      l.jsxs("div", {
                        className: "relative",
                        children: [
                          l.jsx("span", {
                            className:
                              "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
                            children: l.jsxs("svg", {
                              width: "18",
                              height: "16",
                              viewBox: "0 0 18 16",
                              fill: "none",
                              children: [
                                l.jsx("path", {
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  d: "M6.08288 4.45817C4.93229 4.45817 3.99955 5.39091 3.99955 6.5415C3.99955 7.6921 4.93229 8.62484 6.08288 8.62484C7.23347 8.62484 8.16621 7.6921 8.16621 6.5415C8.16621 5.39091 7.23347 4.45817 6.08288 4.45817ZM5.24955 6.5415C5.24955 6.08127 5.62264 5.70817 6.08288 5.70817C6.54312 5.70817 6.91621 6.08127 6.91621 6.5415C6.91621 7.00174 6.54312 7.37484 6.08288 7.37484C5.62264 7.37484 5.24955 7.00174 5.24955 6.5415Z",
                                  fill: "#161616",
                                }),
                                l.jsx("path", {
                                  d: "M3.6664 11.2922C4.1993 10.5842 5.11616 10.1795 6.07878 10.1691C7.03803 10.1586 7.95155 10.54 8.49563 11.285C8.6992 11.5638 9.09021 11.6247 9.36896 11.4211C9.64772 11.2176 9.70867 10.8266 9.5051 10.5478C8.67743 9.41446 7.34456 8.90524 6.06521 8.91913C4.78923 8.93299 3.4753 9.46748 2.66766 10.5406C2.46009 10.8164 2.51539 11.2082 2.79119 11.4158C3.06698 11.6233 3.45882 11.568 3.6664 11.2922Z",
                                  fill: "#161616",
                                }),
                                l.jsx("path", {
                                  d: "M10.8753 5.9165C10.8753 5.57133 11.1551 5.2915 11.5003 5.2915H14.8337C15.1788 5.2915 15.4587 5.57133 15.4587 5.9165C15.4587 6.26168 15.1788 6.5415 14.8337 6.5415H11.5003C11.1551 6.5415 10.8753 6.26168 10.8753 5.9165Z",
                                  fill: "#161616",
                                }),
                                l.jsx("path", {
                                  d: "M11.5003 8.62484C11.1551 8.62484 10.8753 8.90466 10.8753 9.24984C10.8753 9.59501 11.1551 9.87484 11.5003 9.87484H13.167C13.5122 9.87484 13.792 9.59501 13.792 9.24984C13.792 8.90466 13.5122 8.62484 13.167 8.62484H11.5003Z",
                                  fill: "#161616",
                                }),
                                l.jsx("path", {
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  d: "M17.9587 8.04462V7.95507C17.9587 6.32352 17.9587 5.03885 17.8317 4.03521C17.7017 3.00809 17.4292 2.18076 16.8125 1.52548C16.1907 0.864848 15.3972 0.568045 14.4129 0.427452C13.4611 0.291476 12.2458 0.291489 10.7166 0.291504H7.28408C5.75481 0.291488 4.53959 0.291476 3.5877 0.427451C2.6035 0.568045 1.80995 0.864847 1.18818 1.52548C0.571447 2.18076 0.298946 3.00809 0.168976 4.03521C0.0419731 5.03888 0.041981 6.32347 0.0419924 7.95509V8.04458C0.0419809 9.6762 0.0419729 10.9608 0.168975 11.9645C0.298945 12.9916 0.571446 13.8189 1.18818 14.4742C1.80995 15.1348 2.6035 15.4316 3.5877 15.5722C4.53958 15.7082 5.7548 15.7082 7.28405 15.7082H10.7166C12.2459 15.7082 13.4611 15.7082 14.4129 15.5722C15.3972 15.4316 16.1907 15.1348 16.8125 14.4742C17.4292 13.8189 17.7017 12.9916 17.8317 11.9645C17.9587 10.9608 17.9587 9.67621 17.9587 8.04462ZM15.9022 2.38219C16.2618 2.76424 16.4775 3.29036 16.5916 4.19213C16.7075 5.10819 16.7087 6.31363 16.7087 7.99984C16.7087 9.68605 16.7075 10.8915 16.5916 11.8075C16.4775 12.7093 16.2618 13.2354 15.9022 13.6175C15.5477 13.9942 15.0674 14.216 14.2362 14.3348C13.3829 14.4567 12.2571 14.4582 10.667 14.4582H7.33366C5.74357 14.4582 4.61775 14.4567 3.76447 14.3348C2.93325 14.216 2.45297 13.9942 2.09843 13.6175C1.73885 13.2354 1.52319 12.7093 1.40909 11.8075C1.29317 10.8915 1.29199 9.68605 1.29199 7.99984C1.29199 6.31362 1.29317 5.10819 1.40909 4.19213C1.52319 3.29036 1.73885 2.76424 2.09843 2.38219C2.45297 2.00549 2.93325 1.78363 3.76447 1.66489C4.61775 1.543 5.74357 1.5415 7.33366 1.5415L10.667 1.5415C12.2571 1.5415 13.3829 1.543 14.2362 1.66489C15.0674 1.78363 15.5477 2.00549 15.9022 2.38219Z",
                                  fill: "#161616",
                                }),
                              ],
                            }),
                          }),
                          l.jsx("input", {
                            type: "tel",
                            name: "id",
                            maxLength: 10,
                            placeholder: "...أكتب رقم الهوية الوطنية / الاقامة هنا",
                            value: nationalId,
                            onChange: (xe) => setNationalId(xe.target.value),
                            className: `${Ll} pr-10`,
                            style: { fontSize: 16 },
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "max-w-sm space-y-2",
                    children: [
                      l.jsx(kn, { req: !0, children: "رقم الجوال" }),
                      l.jsxs("div", {
                        dir: "ltr",
                        className:
                          "flex items-center overflow-hidden border rounded-md border-gray-300 focus-within:ring-2 focus-within:ring-[#1b8354] focus-within:ring-offset-1",
                        children: [
                          l.jsx("div", {
                            className: "p-2 flex-shrink-0",
                            children: l.jsx("img", {
                              src: "/assets/sa.svg",
                              alt: "SA",
                              className: "w-8 h-5 object-contain",
                            }),
                          }),
                          l.jsx("input", {
                            type: "tel",
                            name: "phone",
                            maxLength: 10,
                            placeholder: "أكتب رقم الجوال هنا...",
                            dir: "ltr",
                            value: phone,
                            onChange: (xe) => setPhone(xe.target.value),
                            className:
                              "flex-1 min-w-0 px-3 py-2 border-0 focus:outline-none bg-transparent",
                            style: {
                              fontSize: 16,
                              direction: "ltr",
                              textAlign: "right",
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs(Sr, {
                    children: [
                      l.jsx(kn, { req: !0, children: "الجنسية" }),
                      l.jsxs("select", {
                        name: "nationality",
                        value: nationality,
                        onChange: (xe) => setNationality(xe.target.value),
                        className: ps,
                        children: [
                          l.jsx("option", { value: "", children: "أختر الجنسية" }),
                          J2.map((xe) => l.jsx("option", { value: xe, children: xe }, xe)),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs(Sr, {
                    children: [
                      l.jsx(kn, { req: !0, children: "البريد الإلكتروني" }),
                      l.jsxs("div", {
                        className: "relative",
                        children: [
                          l.jsx("span", {
                            className:
                              "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
                            children: l.jsxs("svg", {
                              width: "18",
                              height: "16",
                              viewBox: "0 0 18 16",
                              fill: "none",
                              children: [
                                l.jsx("path", {
                                  d: "M6.96781 7.07051C7.78447 7.55134 8.39196 7.79219 8.99946 7.79219C9.60779 7.79219 10.2153 7.55217 11.0328 7.07051L13.4845 5.62048C13.782 5.44548 13.8803 5.06218 13.7045 4.76468C13.5295 4.46718 13.1462 4.3688 12.8487 4.54463L10.3978 5.99385C9.16949 6.71635 8.82948 6.71635 7.60282 5.99385L5.15115 4.54382C4.85449 4.36798 4.47111 4.46712 4.29528 4.76379C4.11945 5.06045 4.21866 5.44383 4.51533 5.61966L6.96781 7.07051Z",
                                  fill: "#161616",
                                }),
                                l.jsx("path", {
                                  fillRule: "evenodd",
                                  clipRule: "evenodd",
                                  d: "M6.56675 15.6738C7.38509 15.6947 8.1926 15.7056 9.0001 15.7056C9.8076 15.7056 10.6151 15.6947 11.4335 15.6738L11.4346 15.6738C14.1322 15.6055 15.6186 15.5678 16.7393 14.448C17.8576 13.3205 17.8884 11.8738 17.9443 9.24634C17.9618 8.40717 17.9618 7.59218 17.9443 6.75301C17.8884 4.12551 17.8576 2.67799 16.7368 1.54883C15.6176 0.431328 14.131 0.39304 11.4326 0.324707C9.79514 0.28304 8.20344 0.28304 6.56594 0.324707L6.56482 0.324736C3.86719 0.393051 2.38079 0.430693 1.26011 1.55054C0.141781 2.67804 0.110951 4.1247 0.0551172 6.7522C0.0376172 7.59136 0.0376172 8.40636 0.0551172 9.24552C0.110951 11.873 0.141803 13.3205 1.26264 14.4497C2.3818 15.5672 3.86842 15.6055 6.56675 15.6738ZM2.14765 13.5663C1.38015 12.7938 1.35597 11.673 1.3043 9.21883C1.2868 8.39717 1.2868 7.59883 1.3043 6.778C1.35597 4.32383 1.38012 3.20388 2.14512 2.43221C2.91089 1.66644 4.06574 1.63717 6.59698 1.57301C8.21364 1.53135 9.78515 1.53133 11.401 1.573C13.9326 1.63716 15.0877 1.66717 15.8518 2.4305C16.6193 3.203 16.6434 4.32383 16.6951 6.778C16.7126 7.59966 16.7126 8.398 16.6951 9.21883C16.6434 11.673 16.6193 12.793 15.8543 13.5647C15.0886 14.3304 13.9339 14.3597 11.4032 14.4238L11.4018 14.4238C9.78513 14.4655 8.21433 14.4655 6.59849 14.4238C4.06683 14.3597 2.91181 14.3297 2.14765 13.5663Z",
                                  fill: "#161616",
                                }),
                              ],
                            }),
                          }),
                          l.jsx("input", {
                            type: "email",
                            name: "email",
                            placeholder: "أكتب بريدك الإلكتروني هنا...",
                            value: email,
                            onChange: (xe) => setEmail(xe.target.value),
                            className: `${Ll} pr-10`,
                            style: {
                              fontSize: 16,
                              direction: "ltr",
                              textAlign: "left",
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex items-start gap-2 max-w-sm",
                    children: [
                      l.jsx("input", {
                        type: "checkbox",
                        id: "delegate",
                        checked: hasDelegate,
                        onChange: (xe) => setHasDelegate(xe.target.checked),
                        className:
                          "h-4 w-4 mt-0.5 shrink-0 rounded-sm border border-[#1b8354] cursor-pointer",
                      }),
                      l.jsx("label", {
                        htmlFor: "delegate",
                        className: "text-sm font-bold text-gray-700 cursor-pointer",
                        children: "هل تريد تفويض شخص آخر بفحص المركبة؟",
                      }),
                    ],
                  }),
                  hasDelegate &&
                    l.jsxs("div", {
                      className: "flex flex-col gap-4 border rounded-xl p-4 bg-gray-50",
                      children: [
                        l.jsx("h3", {
                          className: "font-bold text-gray-500 text-lg",
                          children: "معلومات المفوض",
                        }),
                        l.jsxs("fieldset", {
                          className: "space-y-2",
                          children: [
                            l.jsx("legend", {
                              className: "text-sm font-semibold mb-2",
                              children: "هل المفوض",
                            }),
                            l.jsx("div", {
                              className: "grid grid-cols-2 gap-3 max-w-sm",
                              children: ["مواطن / مقيم", "مواطن خليجي"].map((xe) =>
                                l.jsxs(
                                  "label",
                                  {
                                    className: `block cursor-pointer p-3 text-center text-sm font-bold rounded-md border transition-colors ${commType === xe ? "bg-[#1b8354] text-white border-[#1b8354]" : "bg-white border-gray-300 text-gray-700"}`,
                                    children: [
                                      l.jsx("input", {
                                        type: "radio",
                                        name: "commType",
                                        value: xe,
                                        checked: commType === xe,
                                        onChange: (_e) => setCommType(_e.target.value),
                                        className: "sr-only",
                                      }),
                                      xe,
                                    ],
                                  },
                                  xe,
                                ),
                              ),
                            }),
                          ],
                        }),
                        l.jsxs(Sr, {
                          children: [
                            l.jsx(kn, { children: "أسم المفوض" }),
                            l.jsx("input", {
                              type: "text",
                              name: "commissioner-name",
                              placeholder: "أكتب أسم المفوض هنا...",
                              value: commName,
                              onChange: (xe) => setCommName(xe.target.value),
                              className: Ll,
                              style: { fontSize: 16 },
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "max-w-sm space-y-2",
                          children: [
                            l.jsx(kn, { children: "رقم الجوال" }),
                            l.jsxs("div", {
                              dir: "ltr",
                              className: "flex items-center overflow-hidden border rounded-md border-gray-300 bg-white",
                              children: [
                                l.jsx("div", {
                                  className: "p-2 flex-shrink-0",
                                  children: l.jsx("img", {
                                    src: "/assets/sa.svg",
                                    alt: "SA",
                                    className: "w-8 h-5 object-contain",
                                  }),
                                }),
                                l.jsx("input", {
                                  type: "tel",
                                  name: "commissioner-phone",
                                  maxLength: 10,
                                  value: commPhone,
                                  onChange: (xe) => setCommPhone(xe.target.value),
                                  className: "flex-1 min-w-0 px-3 py-2 border-0 focus:outline-none",
                                  style: { fontSize: 16 },
                                }),
                              ],
                            }),
                          ],
                        }),
                        l.jsxs(Sr, {
                          children: [
                            l.jsx(kn, { children: "جنسية المفوض" }),
                            l.jsxs("select", {
                              name: "commissioner-nationality",
                              value: commNationality,
                              onChange: (xe) => setCommNationality(xe.target.value),
                              className: ps,
                              children: [
                                l.jsx("option", { value: "", children: "أختر الجنسية" }),
                                J2.map((xe) => l.jsx("option", { value: xe, children: xe }, xe)),
                              ],
                            }),
                          ],
                        }),
                        l.jsxs(Sr, {
                          children: [
                            l.jsx(kn, { children: "رقم الهوية الوطنية / الاقامة المفوض" }),
                            l.jsx("input", {
                              type: "tel",
                              name: "commissioner-id",
                              maxLength: 10,
                              value: commId,
                              onChange: (xe) => setCommId(xe.target.value),
                              className: Ll,
                              style: { fontSize: 16 },
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex items-start gap-2 max-w-xl",
                          children: [
                            l.jsx("input", {
                              type: "checkbox",
                              id: "commAccept",
                              checked: commAccept,
                              onChange: (xe) => setCommAccept(xe.target.checked),
                              className:
                                "h-4 w-4 mt-0.5 shrink-0 border border-gray-400 rounded cursor-pointer",
                            }),
                            l.jsx("label", {
                              htmlFor: "commAccept",
                              className: "text-sm font-bold text-gray-600 cursor-pointer",
                              children:
                                "أوافق علي أن خدمة التفويض تقتصر على إعطاء المفوض الصلاحية بزيارة وإجراء الفحص الفني الدوري للمركبة المفوض عليها",
                            }),
                          ],
                        }),
                      ],
                    }),
                  l.jsx("h2", {
                    className: "font-bold text-gray-500 text-xl lg:text-2xl",
                    children: "معلومات المركبة",
                  }),
                  l.jsxs("fieldset", {
                    className: "space-y-2",
                    children: [
                      l.jsx("legend", {
                        className: "sr-only",
                        children: "أختر حالة المركبة",
                      }),
                      l.jsx("div", {
                        className: "grid grid-cols-2 gap-4 max-w-lg",
                        children: ["تحمل رخصة سير", "تحمل بطاقة جمركية"].map((xe) =>
                          l.jsxs(
                            "label",
                            {
                              className: `block cursor-pointer p-4 text-center text-sm font-bold rounded-md border transition-colors ${condition === xe ? "bg-[#1b8354] text-white border-[#1b8354]" : "bg-white border-gray-200 text-gray-700"}`,
                              children: [
                                l.jsx("input", {
                                  type: "radio",
                                  name: "condition",
                                  value: xe,
                                  checked: condition === xe,
                                  onChange: (_e) => setCondition(_e.target.value),
                                  className: "sr-only",
                                }),
                                xe,
                              ],
                            },
                            xe,
                          ),
                        ),
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      l.jsx(kn, { req: !0, children: "لوحة المركبة" }),
                      l.jsxs("div", {
                        className:
                          "car-panel-selection flex items-center gap-x-4 flex-wrap mb-8",
                        children: [
                          l.jsx("div", {
                            children: l.jsx("div", {
                              className: "plate-chars-wrapper",
                              children: l.jsx("div", {
                                id: "plate-chars",
                                children: l.jsx("table", {
                                  style: { borderRight: "1px solid #474747" },
                                  children: l.jsxs("tbody", {
                                    children: [
                                      l.jsxs("tr", {
                                        children: [
                                          l.jsx("td", {
                                            children: l.jsx("span", { children: at.ar || "-" }),
                                          }),
                                          l.jsx("td", {
                                            children: l.jsx("span", { children: Ot.ar || "-" }),
                                          }),
                                          l.jsx("td", {
                                            children: l.jsx("span", { children: zt.ar || "-" }),
                                          }),
                                          l.jsxs("td", {
                                            style: { direction: "ltr" },
                                            children: [
                                              arCells.map((xe, _e) =>
                                                l.jsx("span", { children: xe }, _e),
                                              ),
                                              " ",
                                            ],
                                          }),
                                        ],
                                      }),
                                      l.jsxs("tr", {
                                        children: [
                                          l.jsx("td", {
                                            children: l.jsx("span", { children: at.en || "-" }),
                                          }),
                                          l.jsx("td", {
                                            children: l.jsx("span", { children: Ot.en || "-" }),
                                          }),
                                          l.jsx("td", {
                                            children: l.jsx("span", { children: zt.en || "-" }),
                                          }),
                                          l.jsxs("td", {
                                            style: { direction: "ltr" },
                                            children: [
                                              enCells.map((xe, _e) =>
                                                l.jsx("span", { children: xe }, _e),
                                              ),
                                              " ",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                          l.jsx("div", {
                            className:
                              "aphla-pets-selects flex justify-center gap-1 items-center",
                            children: [
                              [plate1, setPlate1],
                              [plate2, setPlate2],
                              [plate3, setPlate3],
                            ].map(([xe, _e], jt) =>
                              l.jsxs(
                                "select",
                                {
                                  value: xe,
                                  onChange: (bt) => _e(bt.target.value),
                                  className:
                                    "h-10 rounded-md border border-gray-300 px-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1b8354] min-w-[110px]",
                                  dir: "rtl",
                                  children: [
                                    l.jsx("option", { value: "", children: "أختر حرف" }),
                                    sB.map((bt) =>
                                      l.jsx(
                                        "option",
                                        { value: bt.value, children: bt.label },
                                        bt.value,
                                      ),
                                    ),
                                  ],
                                },
                                jt,
                              ),
                            ),
                          }),
                          l.jsx("input", {
                            type: "tel",
                            maxLength: 4,
                            placeholder: "رقم المركبة",
                            value: plateDigits,
                            onChange: (xe) => {
                              /^\d*$/.test(xe.target.value)
                                ? (setPlateDigits(xe.target.value), setPlateError(""))
                                : setPlateError("أرقام فقط");
                            },
                            onBlur: () => {
                              plateDigits &&
                                plateDigits.length < 4 &&
                                setPlateDigits(plateDigits.padStart(4, "0"));
                            },
                            className:
                              "w-40 rounded-md py-3 px-2 border bg-transparent text-center border-gray-300",
                          }),
                        ],
                      }),
                      plateError &&
                        l.jsx("p", {
                          className: "text-red-500 text-xs mt-1",
                          children: plateError,
                        }),
                    ],
                  }),
                  l.jsxs(Sr, {
                    children: [
                      l.jsx(kn, { req: !0, children: "نوع التسجيل" }),
                      l.jsxs("select", {
                        name: "registration-type",
                        value: regType,
                        onChange: (xe) => setRegType(xe.target.value),
                        className: ps,
                        children: [
                          l.jsx("option", { value: "", children: "أختر نوع التسجيل" }),
                          oB.map((xe) => l.jsx("option", { value: xe, children: xe }, xe)),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs(Sr, {
                    children: [
                      l.jsx(kn, { req: !0, children: "نوع المركبة" }),
                      l.jsxs("select", {
                        name: "vehicle-type",
                        value: vehicleType,
                        onChange: (xe) => setVehicleType(xe.target.value),
                        className: ps,
                        children: [
                          l.jsx("option", { value: "", children: "أختر نوع المركبة" }),
                          iB.map((xe) => l.jsx("option", { value: xe, children: xe }, xe)),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs(Sr, {
                    children: [
                      l.jsx(kn, { req: !0, children: "نوع خدمة الفحص" }),
                      l.jsxs("select", {
                        name: "check-type",
                        value: checkType,
                        onChange: (xe) => setCheckType(xe.target.value),
                        className: ps,
                        children: [
                          l.jsx("option", {
                            value: "خدمة الفحص الدوري",
                            children: "خدمة الفحص الدوري",
                          }),
                          l.jsx("option", {
                            value: "خدمة إعادة الفحص",
                            children: "خدمة إعادة الفحص",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                      "إذا لم تكن متأكدًا من نوع المركبة ، فيمكنك العثور عليها في",
                      l.jsx(Link, {
                        to: "/inspection-fees",
                        className: "text-green-600 underline underline-offset-4 mx-1",
                        children: "أنواع المركبات",
                      }),
                    ],
                  }),
                  l.jsx("h3", {
                    id: "service-center",
                    className: "font-bold text-gray-500 text-xl lg:text-2xl mt-4",
                    children: "مركز الخدمة",
                  }),
                  l.jsxs(Sr, {
                    children: [
                      l.jsx(kn, { req: !0, children: "المنطقة" }),
                      l.jsxs("select", {
                        name: "region",
                        value: region,
                        onChange: (xe) => {
                          setRegion(xe.target.value);
                          setCheckPlace("");
                        },
                        className: ps,
                        children: [
                          l.jsx("option", { value: "", children: "أختر المنطقة" }),
                          Z2.map((xe) =>
                            l.jsx("option", { value: xe.name, children: xe.name }, xe.name),
                          ),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs(Sr, {
                    children: [
                      l.jsx(kn, { req: !0, children: "مركز الفحص" }),
                      l.jsxs("select", {
                        name: "check-place",
                        value: checkPlace,
                        onChange: (xe) => setCheckPlace(xe.target.value),
                        className: ps,
                        disabled: !region,
                        children: [
                          l.jsx("option", {
                            value: "",
                            children: region ? "أختر مركز الفحص" : "اختر المنطقة أولاً",
                          }),
                          Z2.find((xe) => xe.name === region)?.centers.map((xe) =>
                            l.jsx("option", { value: xe, children: xe }, xe),
                          ),
                        ],
                      }),
                    ],
                  }),
                  l.jsx(cB, {}),
                  l.jsx("h3", {
                    className: "font-bold text-gray-500 text-xl lg:text-2xl mt-4",
                    children: "موعد الخدمة",
                  }),
                  l.jsxs("div", {
                    className: "grid gap-4 lg:grid-cols-2",
                    children: [
                      l.jsxs("div", {
                        className: "max-w-sm space-y-2",
                        children: [
                          l.jsx(kn, { req: !0, children: "التاريخ" }),
                          l.jsx("input", {
                            type: "date",
                            name: "date",
                            min: todayIso,
                            value: dateVal,
                            onChange: (xe) => setDateVal(xe.target.value),
                            className: ps,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "max-w-sm space-y-2",
                        children: [
                          l.jsx(kn, { req: !0, children: "موعد الخدمة" }),
                          l.jsxs("select", {
                            name: "time",
                            value: timeVal,
                            onChange: (xe) => setTimeVal(xe.target.value),
                            className: ps,
                            children: [
                              l.jsx("option", { value: "", children: "أختر موعد الخدمة" }),
                              lB.map((xe) => l.jsx("option", { value: xe, children: xe }, xe)),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  errorMsg &&
                    l.jsx("div", {
                      className: "bg-red-50 px-4 py-2 rounded-md max-w-lg",
                      children: l.jsxs("p", {
                        className: "text-red-600 flex items-center gap-2 text-sm",
                        children: [
                          l.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "flex-shrink-0",
                            children: [
                              l.jsx("path", {
                                d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
                              }),
                              l.jsx("path", { d: "M12 9v4" }),
                              l.jsx("path", { d: "M12 17h.01" }),
                            ],
                          }),
                          errorMsg,
                        ],
                      }),
                    }),
                  l.jsx("div", {
                    className: "flex justify-center",
                    children: l.jsx("button", {
                      type: "submit",
                      disabled: submitting,
                      className:
                        "w-full max-w-sm h-12 rounded-xl bg-[#1b8354] text-white font-bold text-base shadow-md hover:bg-[#166b44] transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
                      children: "إرسال الطلب",
                    }),
                  }),
                  l.jsx("div", {
                    className: "flex justify-center",
                    children: l.jsx("div", {
                      className: "bg-red-50 px-4 py-2 rounded-md max-w-lg",
                      children: l.jsxs("p", {
                        className: "text-red-600 text-sm",
                        children: [
                          l.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "w-5 h-5 inline ml-1",
                            children: [
                              l.jsx("path", {
                                d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
                              }),
                              l.jsx("path", { d: "M12 9v4" }),
                              l.jsx("path", { d: "M12 17h.01" }),
                            ],
                          }),
                          "الحضور على الموعد يسهم في سرعة و جودة الخدمة و في حال عدم الحضور، لن يسمح بحجز موعد آخر إلا بعد 48 ساعة وحسب الاوقات المتاحة",
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}

const metadata = {
  title: "حجز موعد",
  description:
    "احجز موعد فحص فني دوري لمركبتك عبر خدمة الفحص الفني الدوري من مركز سلامة المركبات",
};

export { ApplyPage as default, metadata };
