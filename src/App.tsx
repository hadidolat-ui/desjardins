import { useState } from "react"

const assetPathPrefix = "/assets"
const imgEquifaxLogo = `${assetPathPrefix}/84608.svg`
const imgEquifaxSmall = `${assetPathPrefix}/8ff5f.svg`
const imgNavOverview = `${assetPathPrefix}/1e068.svg`
const imgNavReport = `${assetPathPrefix}/a172f.svg`
const imgNavEducation = `${assetPathPrefix}/3f3d7.svg`
const imgNavSupport = `${assetPathPrefix}/95aab.svg`
const imgInfo = `${assetPathPrefix}/87d98.svg`
const imgMeterBase = `${assetPathPrefix}/bbc7a.svg`
const imgMeterTrack = `${assetPathPrefix}/34b07.svg`
const imgMeter327 = `${assetPathPrefix}/07286.svg`
const imgMeter473 = `${assetPathPrefix}/f0b82.svg`
const imgMeterDot = `${assetPathPrefix}/8d151.svg`
const imgGraph327 = `${assetPathPrefix}/c4a53.svg`
const imgGraph473 = `${assetPathPrefix}/772f7.svg`
const imgTooltipBg = `${assetPathPrefix}/24367.svg`
const imgIconLegal = `${assetPathPrefix}/8887c.svg`
const imgIconInquiry = `${assetPathPrefix}/1ae68.svg`
const imgIconCredit = `${assetPathPrefix}/3d431.svg`
const imgArrowUp = `${assetPathPrefix}/3e539.svg`
const imgThumbPhoto = `${assetPathPrefix}/376fa.png`
const imgDotDefault = `${assetPathPrefix}/a2227.svg`
const imgDotActive = `${assetPathPrefix}/915be.svg`
const imgEdu1 = `${assetPathPrefix}/376fa.png`
const imgEdu2 = `${assetPathPrefix}/8c3aa.png`
const imgEdu3 = `${assetPathPrefix}/5d170.png`
const imgEdu4 = `${assetPathPrefix}/0b58a.png`
const imgEdu5 = `${assetPathPrefix}/a85fc.png`
const imgEdu6 = `${assetPathPrefix}/5df74.png`
const imgEdu7 = `${assetPathPrefix}/cbb14.png`
const imgEdu8 = `${assetPathPrefix}/15fb7.png`
const imgEdu9 = `${assetPathPrefix}/ab3df.png`
// CDS2 new design assets
const imgCds2ChartBase = `${assetPathPrefix}/12301.svg`
const imgCds2ChartArc = `${assetPathPrefix}/271c7.svg`
const imgCds2GradientArc = `${assetPathPrefix}/e741d.svg`
const imgCds2ArrowUp = `${assetPathPrefix}/64e08.svg`
const imgCds2Divider = `${assetPathPrefix}/e5055.svg`
const imgCds2Refresh = `${assetPathPrefix}/d5616.svg`
const imgCds2Chevron = `${assetPathPrefix}/221d1.svg`
const imgCds2DotGreen = `${assetPathPrefix}/fea97.svg`
const imgCds2DotOrange = `${assetPathPrefix}/7fd0b.svg`
const imgCds2DotRed = `${assetPathPrefix}/3aa34.svg`
// Index History assets
const imgIndexDonut = `${assetPathPrefix}/1e55b.svg`
const imgIndexInfo = `${assetPathPrefix}/cb22d.svg`

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type AppScreen = "tangerine" | "equifax"
type NavPage = "overview" | "report" | "education" | "support"
type ReportTab = "business-info" | "alerts" | "index-history" | "payment" | "industry-trade" | "financial-trade" | "guarantor" | "legal" | "inquiries" | "collections"

interface BusinessInfo {
  ownerName: string
  phone: string
  address: string
  city: string
  industry: string
  website: string
  orgType: string
  registry: string
  taxId: string
  employees: string
  salesVolume: string
}

/* ─────────────────────────────────────────────
   DESJARDINS HEADER
───────────────────────────────────────────── */
function DesjardinsHeader() {
  return (
    <header className="relative z-20 shrink-0 font-['Open_Sans']">
      <div className="bg-[#00874e] text-white">
        <div className="mx-auto flex h-[78px] max-w-[1420px] items-center justify-between px-5 md:px-8 lg:px-[70px]">
          <button
            aria-label="Desjardins home"
            className="flex h-[60px] cursor-pointer items-center gap-2 rounded-[8px] border-0 bg-[#007a46] px-3 text-white"
          >
            <svg
              aria-hidden="true"
              width="37"
              height="42"
              viewBox="0 0 37 42"
              fill="none"
            >
              <path
                d="M18.5 2.5 34 11.4v19.2l-15.5 8.9L3 30.6V11.4L18.5 2.5Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[27px] font-bold tracking-[-1.2px]">
              Desjardins
            </span>
            <span className="self-start pt-[15px] text-[7px] font-bold">
              MD
            </span>
          </button>

          <nav
            aria-label="Corporate navigation"
            className="hidden h-full items-stretch lg:flex"
          >
            {["À propos", "Carrières", "Conseils", "Devenir membre"].map(
              (item) => (
                <button
                  key={item}
                  className="cursor-pointer border-0 border-l border-[#007b47] bg-transparent px-7 text-[16px] font-bold text-white transition-colors hover:bg-[#007a46]"
                >
                  {item}
                </button>
              ),
            )}
            <button className="flex cursor-pointer items-center gap-4 border-0 border-l border-[#007b47] bg-transparent px-7 text-[16px] font-bold text-white transition-colors hover:bg-[#007a46]">
              QC | English
              <ChevronDown />
            </button>
            <button
              aria-label="Search"
              className="flex w-[76px] cursor-pointer items-center justify-center border-0 border-x border-[#007b47] bg-transparent text-white transition-colors hover:bg-[#007a46]"
            >
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
                <circle
                  cx="13"
                  cy="13"
                  r="9.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="m20.5 20.5 7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </nav>

          <button
            aria-label="Open menu"
            className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded border border-white/50 bg-transparent lg:hidden"
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      <div className="border-b border-[#d7d7d7] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12)]">
        <div className="mx-auto flex h-[94px] max-w-[1420px] items-center justify-between px-5 md:px-8 lg:px-[70px]">
          <nav
            aria-label="Audience navigation"
            className="flex h-full items-end gap-8 sm:gap-10"
          >
            <button className="h-full cursor-pointer border-0 border-b-4 border-[#00874e] bg-transparent px-0 pt-1 text-[17px] font-bold text-[#202020]">
              Particuliers
            </button>
            <button className="h-full cursor-pointer border-0 border-b-4 border-transparent bg-transparent px-0 pt-1 text-[17px] font-bold text-[#202020]">
              Entreprises
            </button>
          </nav>

          <div className="hidden items-center gap-8 md:flex">
            <button className="flex cursor-pointer items-center gap-3 border-0 bg-transparent text-[16px] font-bold text-[#202020]">
              <LocationIcon />
              Nous trouver
            </button>
            <button className="flex h-[56px] cursor-pointer items-center gap-3 rounded-[9px] border-0 bg-[#00874e] px-9 text-[17px] font-bold text-white transition-colors hover:bg-[#007a46]">
              <LockIcon />
              Se connecter
              <span className="ml-4">
                <ChevronDown />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-[#dedede] bg-white">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex h-[56px] max-w-[1420px] items-center gap-4 overflow-hidden px-5 text-[14px] whitespace-nowrap md:px-8 lg:px-[70px]"
        >
          <button className="cursor-pointer border-0 bg-transparent p-0 text-[#202020] underline underline-offset-2">
            Accueil
          </button>
          <span className="text-[27px] font-light text-[#555]">›</span>
          <button className="hidden cursor-pointer border-0 bg-transparent p-0 text-[#202020] underline underline-offset-2 sm:block">
            Services aux entreprises
          </button>
          <span className="hidden text-[27px] font-light text-[#555] sm:block">
            ›
          </span>
          <span className="overflow-hidden font-bold text-ellipsis text-[#151515]">
            Cote de crédit d’entreprise
          </span>
        </nav>
      </div>
    </header>
  )
}

function ChevronDown() {
  return (
    <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
      <path
        d="m1 1 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      width="26"
      height="32"
      viewBox="0 0 26 32"
      fill="none"
      className="text-[#00874e]"
    >
      <path
        d="M13 31S25 18.5 25 12.5a12 12 0 1 0-24 0C1 18.5 13 31 13 31Z"
        fill="currentColor"
      />
      <circle cx="13" cy="12" r="4" fill="white" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="25" height="30" viewBox="0 0 25 30" fill="none">
      <rect
        x="2"
        y="9"
        width="21"
        height="19"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 9V6a5.5 5.5 0 0 1 11 0v3M12.5 16v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TangerinePage({ onLaunch }: { onLaunch: () => void }) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-['Open_Sans']">
      <DesjardinsHeader />
      <div className="max-w-[1100px] mx-auto px-8 py-8 flex flex-col gap-6">
        {/* Welcome */}
        <div>
          <p className="text-[#4f4f4f] font-semibold text-[14px]">Bonjour,</p>
          <h1 className="font-bold text-[26px] text-[#1c1c1c] mt-0.5">
            Anderson James
          </h1>
          <p className="text-[#696969] text-[14px] mt-0.5">
            ABC Corp · Compte d’entreprise
          </p>
        </div>

        {/* Account cards row */}
        <div className="flex gap-4">
          {[
            {
              label: "Compte-chèques entreprise",
              acct: "•••• 4821",
              balance: "$48,320.00",
              change: "+1 240 $ cette semaine",
            },
            {
              label: "Compte d’épargne entreprise",
              acct: "•••• 3305",
              balance: "$92,750.00",
              change: "+310 $ cette semaine",
            },
            {
              label: "Crédit aux entreprises",
              acct: "•••• 7714",
              balance: "$-3,200.00",
              change: "Limite : 25 000 $",
            },
          ].map((a) => (
            <div
              key={a.label}
              className="flex-1 bg-white rounded-xl border border-[#e7e7e7] p-5 flex flex-col gap-2 cursor-pointer hover:shadow-md transition-shadow"
            >
              <p className="text-[#696969] text-[13px] font-semibold">
                {a.label}
              </p>
              <p className="text-[#4f4f4f] text-[12px]">{a.acct}</p>
              <p className="font-bold text-[22px] text-[#1c1c1c]">
                {a.balance}
              </p>
              <p className="text-[#696969] text-[12px]">{a.change}</p>
            </div>
          ))}
        </div>

        {/* Main body: transactions + credit widget */}
        <div className="flex gap-5">
          {/* Recent transactions */}
          <div className="flex-1 bg-white rounded-xl border border-[#e7e7e7] p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="font-bold text-[16px] text-[#1c1c1c]">
                Transactions récentes
              </p>
              <span className="text-[#ff6900] font-semibold text-[13px] cursor-pointer">
                Tout afficher
              </span>
            </div>
            {[
              {
                name: "Office Depot",
                date: "24 sept.",
                amount: "-$342.80",
                type: "Dépense",
              },
              {
                name: "Paiement client – Chen",
                date: "23 sept.",
                amount: "+$5,000.00",
                type: "Revenu",
              },
              {
                name: "Agence du revenu du Canada",
                date: "22 sept.",
                amount: "-$1,820.00",
                type: "Impôt",
              },
              {
                name: "Bell Business Internet",
                date: "21 sept.",
                amount: "-$189.99",
                type: "Dépense",
              },
              {
                name: "Paiement client – Park",
                date: "20 sept.",
                amount: "+$2,750.00",
                type: "Revenu",
              },
            ].map((tx, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2.5 border-b border-[#f0f0f0] last:border-0"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0 ${
                    tx.type === "Revenu"
                      ? "bg-[#e8f8e0] text-[#36b300]"
                      : tx.type === "Impôt"
                        ? "bg-[#fff0e0] text-[#ff6900]"
                        : "bg-[#f0f0f0] text-[#696969]"
                  }`}
                >
                  {tx.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[14px] text-[#1c1c1c] truncate">
                    {tx.name}
                  </p>
                  <p className="text-[12px] text-[#696969]">{tx.date}</p>
                </div>
                <p
                  className={`font-bold text-[14px] flex-shrink-0 ${
                    tx.amount.startsWith("+")
                      ? "text-[#36b300]"
                      : "text-[#1c1c1c]"
                  }`}
                >
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="w-[320px] flex flex-col gap-4">
            {/* Business Credit Score widget — the CTA */}
            <div className="bg-white rounded-xl border border-[#e7e7e7] p-5 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <p className="font-bold text-[16px] text-[#1c1c1c]">
                  Cote de crédit d’entreprise
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* Equifax score gauge */}
                <div className="relative w-[108px] h-[106px] shrink-0">
                  <img
                    src="/assets/f9eda.svg"
                    alt=""
                    className="absolute inset-[3%_3%_10%_3%]"
                    style={{ width: "94%", height: "87%" }}
                  />
                  <img
                    src="/assets/bf0b8.svg"
                    alt=""
                    className="absolute inset-[0%_0%_7%_0%]"
                    style={{ width: "100%", height: "93%" }}
                  />
                  <span className="absolute bottom-[8px] left-[4px] text-[5.5px] font-semibold text-[#5f6a72] opacity-60 leading-none">
                    300
                  </span>
                  <span className="absolute bottom-[8px] right-[4px] text-[5.5px] font-semibold text-[#5f6a72] opacity-60 leading-none">
                    850
                  </span>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-0 pt-2">
                    <span className="text-[7.9px] font-bold text-[#333e48] leading-[12.6px]">
                      Equifax
                    </span>
                    <span className="text-[36px] font-semibold text-[#333e48] leading-none">
                      450
                    </span>
                    <span className="text-[7.9px] font-bold text-[#333e48] leading-[12.6px]">
                      Risque faible
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-[14px] text-[#007298] uppercase tracking-wide">
                    Risque faible
                  </span>
                  <p className="text-[12px] text-[#696969] leading-[16px]">
                    Vos comptes sont en règle.
                  </p>
                </div>
              </div>
              <div className="h-px bg-[#f0f0f0]" />
              <button
                onClick={onLaunch}
                className="w-full bg-[#980003] hover:bg-[#7a0002] text-white font-bold text-[14px] py-3 rounded-lg cursor-pointer transition-colors flex items-center justify-center gap-2"
              >
                Voir le rapport de crédit complet
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="text-[12px] text-[#696969] text-center leading-[18px]">
                <span className="font-bold text-[#1c1c1c]">
                  {" "}
                  You can also update your business profile{" "}
                </span>
              </p>
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-[10px] text-[#696969] whitespace-nowrap">
                  Propulsé par
                </span>
                <img
                  src="/assets/8598a.svg"
                  alt="Equifax"
                  className="h-[16px] w-auto object-contain"
                />
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-white rounded-xl border border-[#e7e7e7] p-5 flex flex-col gap-3">
              <p className="font-bold text-[15px] text-[#1c1c1c]">
                Actions rapides
              </p>
              {[
                { label: "Payer une facture", icon: "💳" },
                { label: "Virer des fonds", icon: "↔" },
                { label: "Gérer la paie", icon: "👥" },
                { label: "Documents fiscaux", icon: "📄" },
              ].map((qa) => (
                <button
                  key={qa.label}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-[#f5f5f5] text-left cursor-pointer transition-colors border-0 bg-transparent w-full"
                >
                  <span className="text-[18px]">{qa.icon}</span>
                  <span className="font-semibold text-[14px] text-[#1c1c1c]">
                    {qa.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   EQUIFAX SHELL (sidebar + topbar)
───────────────────────────────────────────── */
function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: string
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-10 rounded-md flex items-center gap-2.5 px-3 cursor-pointer border-0 outline-none transition-colors ${
        active ? "bg-[#9e1b32]" : "bg-transparent hover:bg-[#f5f5f5]"
      }`}
    >
      <img
        alt=""
        src={icon}
        className="w-5 h-5 flex-shrink-0 object-contain"
        style={
          active
            ? { filter: "brightness(0) invert(1)" }
            : {
                filter:
                  "brightness(0) saturate(100%) invert(44%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)",
              }
        }
      />
      <span
        className={`font-['Open_Sans'] font-bold text-[15px] leading-[22px] whitespace-nowrap ${
          active ? "text-white" : "text-[#696969]"
        }`}
      >
        {label}
      </span>
    </button>
  )
}

/* ─────────────────────────────────────────────
   SCORE GAUGE
───────────────────────────────────────────── */
function ScoreGauge({
  score,
  label,
  meterImg,
}: {
  score: number
  label: string
  meterImg: string
}) {
  return (
    <div className="relative" style={{ width: 259, height: 160 }}>
      <img
        alt=""
        src={imgMeterTrack}
        className="absolute"
        style={{ left: 0, top: 0, width: 259, height: 131.5 }}
      />
      <img
        alt=""
        src={meterImg}
        className="absolute"
        style={{ left: 0, top: 0, width: 259, height: 131.5 }}
      />
      <img
        alt=""
        src={imgMeterBase}
        className="absolute"
        style={{ left: 16, top: 16, width: 227, height: 116 }}
      />
      {/* score number */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 75, top: 61, width: 113, height: 57 }}
      >
        <span className="font-['Open_Sans'] font-bold text-[42px] text-black leading-none">
          {score}
        </span>
      </div>
      {/* label badge */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 98, top: 118 }}
      >
        <span className="font-['Open_Sans'] font-bold text-[15px] text-[#007298] uppercase leading-[17px]">
          {label}
        </span>
      </div>
      {/* 0 / 700 */}
      <span
        className="absolute font-['Open_Sans'] font-semibold text-[13px] text-[#696969]"
        style={{ left: 6, top: 138 }}
      >
        0
      </span>
      <span
        className="absolute font-['Open_Sans'] font-semibold text-[13px] text-[#696969]"
        style={{ left: 238, top: 138 }}
      >
        700
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────
   OVERVIEW PAGE
───────────────────────────────────────────── */
function CDS2Card() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border border-[#cfcfcf] rounded-[4px] flex flex-col gap-8 items-center justify-center py-[50px] px-8 overflow-hidden w-full"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 50%, #ffffff 0%, #ffffff 45%, #f6f9fa 100%)",
      }}
    >
      {/* Title */}
      <p
        className="font-['Open_Sans'] font-semibold text-[20px] leading-[28px] text-black text-center"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
      </p>

      {/* Score gauge + details row */}
      <div className="flex gap-[60px] items-center flex-wrap justify-center">
        {/* Donut gauge */}
        <div className="relative w-[274px] h-[269px] flex-shrink-0">
          {/* donut chart layers */}
          <div className="absolute" style={{ inset: "0 0.34% 0 0" }}>
            {/* chart base (gray arc) */}
            <div
              className="absolute"
              style={{ inset: "3.11% 3.07% 10.03% 3.07%" }}
            >
              <div className="absolute" style={{ inset: "-1.28% -1.17%" }}>
                <img
                  alt=""
                  className="block max-w-none w-full h-full"
                  src={imgCds2ChartBase}
                />
              </div>
            </div>
            {/* 300 label */}
            <p
              className="absolute font-['Open_Sans'] font-semibold text-[14px] leading-[20px] text-[#5f6a72] whitespace-nowrap"
              style={{
                top: "93.08%",
                left: "28.33%",
                right: "62.51%",
                bottom: "-0.51%",
                fontVariationSettings: '"wdth" 100',
                opacity: 0.57,
              }}
            >
              300
            </p>
            {/* 850 label */}
            <p
              className="absolute font-['Open_Sans'] font-semibold text-[14px] leading-[20px] text-[#5f6a72] whitespace-nowrap"
              style={{
                top: "93.08%",
                left: "64.16%",
                right: "26.67%",
                bottom: "-0.51%",
                fontVariationSettings: '"wdth" 100',
                opacity: 0.57,
              }}
            >
              850
            </p>
            {/* colored arc (blue→green gradient) */}
            <div
              className="absolute"
              style={{ inset: "2.97% 3.21% 10.17% 2.93%" }}
            >
              <div className="absolute" style={{ inset: "-3.85% -3.52%" }}>
                <img
                  alt=""
                  className="block max-w-none w-full h-full"
                  src={imgCds2ChartArc}
                />
              </div>
            </div>
          </div>
          {/* "Equifax" text */}
          <p
            className="absolute font-['Open_Sans'] font-bold text-[20px] leading-[32px] text-[#333e48] text-center whitespace-nowrap"
            style={{
              top: "14.19%",
              left: "36.32%",
              right: "36.27%",
              bottom: "73.92%",
            }}
          >
            Equifax
          </p>
          {/* Score number */}
          <div
            className="absolute flex flex-col font-['Open_Sans'] font-semibold text-[92px] leading-none text-[#333e48] text-center justify-center"
            style={{
              inset: "21.35% 12.59% 32.18% 12.59%",
              fontVariationSettings: '"wdth" 100',
            }}
          >
            450
          </div>
          {/* Label */}
          <p
            className="absolute font-['Open_Sans'] font-bold text-[20px] leading-[32px] text-[#333e48] text-center"
            style={{
              top: "62.63%",
              left: "25.51%",
              right: "25.85%",
              bottom: "25.47%",
            }}
          >
            Risque faible
          </p>
          {/* Updated date */}
          <p
            className="absolute font-['Open_Sans'] text-[12px] leading-[16px] text-[#333e48] text-center whitespace-nowrap"
            style={{
              top: "79.24%",
              left: "27.79%",
              right: "27.99%",
              bottom: "14.81%",
            }}
          >
            MIS À JOUR LE 15/01/2024
          </p>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-10 items-center">
          <div className="flex items-center justify-between w-[362px] max-w-full flex-wrap gap-4">
            {/* Points */}
            <div className="flex flex-col gap-4 items-center w-[140px]">
              <img alt="" src={imgCds2ArrowUp} className="w-[30px] h-[30px]" />
              <div className="flex flex-col gap-[1px] items-center text-[#333e48] text-center">
                <p className="font-['Open_Sans'] font-bold text-[24px] leading-[36px] w-full">
                  3 points
                </p>
                <p className="font-['Open_Sans'] text-[14px] leading-[20px] w-full">
                  DEPUIS LE 04/05/2018
                </p>
              </div>
            </div>
            {/* Divider */}
            <div className="relative w-px h-[50px] flex-shrink-0">
              <img
                alt=""
                src={imgCds2Divider}
                className="absolute inset-0 w-full h-full"
              />
            </div>
            {/* Refresh notice */}
            <div className="flex flex-col gap-3 items-center">
              <img alt="" src={imgCds2Refresh} className="w-[30px] h-[30px]" />
              <div className="font-['Open_Sans'] text-[#333e48] text-[16px] leading-[24px] text-center w-[165px]">
                <span>Votre prochaine cote de crédit sera disponible </span>
                <span className="font-bold">dans 17 jours.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Your Risk — expandable */}
      <div className="flex flex-col gap-3 items-start w-full max-w-[860px]">
        {/* Toggle row */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex gap-2 items-center justify-center w-full cursor-pointer bg-transparent border-0 outline-none"
        >
          <span
            className="font-['Open_Sans'] font-semibold text-[15px] leading-[21px] text-[#007298]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Comprendre votre niveau de risque
          </span>
          <span
            className={`transition-transform duration-200 ${
              open ? "" : "-rotate-180"
            }`}
          >
            <img alt="" src={imgCds2Chevron} className="w-6 h-6 -rotate-90" />
          </span>
        </button>

        {/* Collapsible content */}
        <div
          className="w-full overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "600px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div className="flex flex-col gap-3 p-3 w-full">
            {[
              {
                dot: imgCds2DotGreen,
                label: "Excellent",
                desc: "Votre entreprise présente un solide profil de crédit, des paiements toujours effectués à temps et un faible risque de défaut. Les prêteurs la considèrent comme très solvable, ce qui facilite l’accès au crédit à des conditions avantageuses.",
              },
              {
                dot: imgCds2DotGreen,
                label: "Risque faible",
                desc: "Votre entreprise fait preuve d’un comportement responsable en matière de crédit et compte très peu de retards de paiement. Elle représente un faible risque pour les prêteurs et devrait être admissible à la plupart des produits de crédit commercial à des taux concurrentiels.",
              },
              {
                dot: imgCds2DotOrange,
                label: "Moyen",
                desc: "Votre entreprise présente certaines irrégularités, comme des retards occasionnels ou une utilisation élevée du crédit. Les prêteurs pourraient offrir du crédit à un taux plus élevé ou exiger des garanties supplémentaires. De meilleures habitudes de paiement peuvent améliorer votre cote.",
              },
              {
                dot: imgCds2DotRed,
                label: "Faible",
                desc: "Votre entreprise présente des retards importants, des comptes en recouvrement ou des dossiers publics indiquant un risque élevé de défaut. L’accès au crédit commercial pourrait être limité ou refusé. Il est fortement recommandé de régler rapidement les dettes en souffrance et d’améliorer l’historique de paiement.",
              },
            ].map(({ dot, label, desc }) => (
              <div key={label} className="flex gap-4 items-start w-full">
                <div className="flex items-start pt-[5px] flex-shrink-0">
                  <img
                    alt=""
                    src={dot}
                    className="w-3 h-3"
                    style={
                      label === "Excellent"
                        ? {
                            filter:
                              "brightness(0) saturate(100%) invert(35%) sepia(80%) saturate(500%) hue-rotate(195deg) brightness(110%)",
                          }
                        : undefined
                    }
                  />
                </div>
                <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                  <p className="font-['Open_Sans'] font-semibold text-[14px] leading-[20px] text-[#181d27]">
                    {label}
                  </p>
                  <p className="font-['Open_Sans'] text-[14px] leading-[20px] text-[#5f6a72]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function OverviewPage({
  onViewInquiries,
  onGoToLegal,
}: {
  onViewInquiries?: () => void
  onGoToLegal?: () => void
}) {
  const [cds2Period, setCds2Period] = useState<"3" | "6" | "12">("3")
  const [ftdsPeriod, setFtdsPeriod] = useState<"3" | "6" | "12">("12")

  function PeriodBar({
    active,
    setActive,
  }: {
    active: string
    setActive: (v: any) => void
  }) {
    return (
      <div className="flex gap-4">
        {(["3", "6", "12"] as const).map((p) => (
          <button
            key={p}
            onClick={() => setActive(p)}
            className={`flex-1 h-8 rounded-md text-[13px] font-['Open_Sans'] font-bold cursor-pointer transition-colors border-0 ${
              active === p
                ? "bg-[#e7e7e7] text-[#333e48]"
                : "bg-transparent text-[#007298] hover:bg-gray-50"
            }`}
          >
            {p} mois
          </button>
        ))}
      </div>
    )
  }

  function ScoreCard({
    title,
    subtitle,
    score,
    label,
    meterImg,
    reasonTitle,
    reasons,
    graphImg,
    yLabels,
    period,
    setPeriod,
  }: {
    title: string
    subtitle?: string
    score: number
    label: string
    meterImg: string
    reasonTitle: string
    reasons: { icon: string text: string onClick?: () => void }[]
    graphImg: string
    yLabels: string[]
    period: string
    setPeriod: (v: any) => void
  }) {
    return (
      <>
        {/* Reason codes */}
        <div className="bg-white rounded-xl p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className="font-['Open_Sans'] font-bold text-[18px] text-black">
                {title || reasonTitle}
              </p>
              {score === 327 && (
                <img alt="" src={imgInfo} className="w-5 h-5 flex-shrink-0" />
              )}
            </div>
            {subtitle && (
              <p className="font-['Open_Sans'] text-[13px] text-[#5f6a72] leading-[18px]">
                {subtitle}
              </p>
            )}
          </div>
          {(() => {
            const iconColors = [
              { bg: "#FFF0EC", ring: "#FF6B3D" },
              { bg: "#E8F4FF", ring: "#1E88E5" },
              { bg: "#F0FBF0", ring: "#2ECC71" },
              { bg: "#FFF8E1", ring: "#FFA000" },
            ]
            return (
              <div className="flex flex-col gap-3">
                {reasons.map((r, i) => {
                  const c = iconColors[i % iconColors.length]
                  return (
                    <div key={i} className="flex gap-3 items-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: c.bg,
                          boxShadow: `0 0 0 1.5px ${c.ring}22`,
                        }}
                      >
                        <img
                          alt=""
                          src={r.icon}
                          className="w-6 h-6 object-contain"
                          style={{ filter: `drop-shadow(0 0 2px ${c.ring}88)` }}
                        />
                      </div>
                      {r.onClick ? (
                        <button
                          onClick={r.onClick}
                          className="font-['Open_Sans'] font-bold text-[16px] text-[#007298] leading-[normal] underline underline-offset-2 cursor-pointer bg-transparent border-0 p-0 text-left flex items-center gap-1 hover:text-[#005f80] transition-colors"
                        >
                          {r.text}
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 12 12"
                            fill="none"
                            className="shrink-0 opacity-70"
                          >
                            <path
                              d="M2 6h8M6 2l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      ) : (
                        <p className="font-['Open_Sans'] font-bold text-[16px] text-[#363636] leading-[normal]">
                          {r.text}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })()}
        </div>
        {/* Trend chart — colorful stacked segment bars */}
        {(() => {
          // Score → stacked pill colors (top to bottom = best to worst band)
          function getSegments(s: number): string[] {
            if (s >= 550)
              return ["#45842a", "#a2c123", "#f1c319", "#e77204", "#e8002a"]
            if (s >= 510) return ["#a2c123", "#f1c319", "#e77204", "#e8002a"]
            if (s >= 440) return ["#f1c319", "#e77204", "#e8002a"]
            if (s >= 350) return ["#e77204", "#e8002a"]
            return ["#e8002a"]
          }

          type Quarter = { quarter: string score: number }
          type YearGroup = { year: string quarters: Quarter[] }

          const allData: YearGroup[] = [
            {
              year: "2022",
              quarters: [
                { quarter: "Q2", score: 390 },
                { quarter: "Q3", score: 410 },
                { quarter: "Q4", score: 425 },
              ],
            },
            {
              year: "2023",
              quarters: [
                { quarter: "Q1", score: 435 },
                { quarter: "Q2", score: 445 },
                { quarter: "Q3", score: 452 },
                { quarter: "Q4", score: 460 },
              ],
            },
            {
              year: "2024",
              quarters: [
                { quarter: "Q1", score: 463 },
                { quarter: "Q2", score: 467 },
                { quarter: "Q3", score: 470 },
                { quarter: "Q4", score: 473 },
              ],
            },
          ]

          // Flatten all quarters and slice based on selected period
          const allQuarters = allData.flatMap((y) =>
            y.quarters.map((q) => ({ ...q, year: y.year })),
          )
          const sliceCount = period === "3" ? 3 : period === "6" ? 6 : 12
          const visible = allQuarters.slice(-sliceCount)

          // Rebuild year groups from visible slice
          const visibleYears: YearGroup[] = []
          visible.forEach((q) => {
            const existing = visibleYears.find((y) => y.year === q.year)
            if (existing) existing.quarters.push(q)
            else visibleYears.push({ year: q.year, quarters: [q] })
          })

          // Build all 3 datasets (always use the full allQuarters, just different slice lengths)
          const datasets: {
            p: "3" | "6" | "12"
            color: string
            label: string
            points: typeof visible
          }[] = [
            {
              p: "12",
              color: "#007298",
              label: "12 mois",
              points: allQuarters.slice(-12),
            },
            {
              p: "6",
              color: "#45842a",
              label: "6 mois",
              points: allQuarters.slice(-6),
            },
            {
              p: "3",
              color: "#e77204",
              label: "3 mois",
              points: allQuarters.slice(-3),
            },
          ]

          return (
            <div className="bg-white rounded-xl p-6 flex flex-col gap-4 overflow-hidden">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex gap-2 items-center">
                  <p className="font-['Open_Sans'] font-bold text-[18px] text-black">
                  </p>
                  <img alt="" src={imgInfo} className="w-5 h-5 flex-shrink-0" />
                </div>
                {/* Period toggle */}
                <div className="flex rounded-lg overflow-hidden border border-[#e7e7e7]">
                  {(["3", "6", "12"] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPeriod(p)}
                      className={`px-4 py-1.5 text-[13px] font-['Open_Sans'] font-semibold cursor-pointer border-0 transition-colors ${
                        period === p
                          ? "bg-[#007298] text-white"
                          : "bg-white text-[#007298] hover:bg-[#f0f8fb]"
                      }`}
                    >
                      {p}M
                    </button>
                  ))}
                </div>
              </div>

              {(() => {
                const W = 520,
                  H = 200,
                  padL = 40,
                  padR = 16,
                  padT = 24,
                  padB = 48
                const minScore = 100,
                  maxScore = 620
                const yScale = (s: number) =>
                  padT +
                  (1 - (s - minScore) / (maxScore - minScore)) *
                    (H - padT - padB)
                const yTicks = [600, 500, 400, 300, 200, 100]

                // Active dataset determines x-axis labels
                const activeDs =
                  datasets.find((d) => d.p === period) ?? datasets[0]
                const n = activeDs.points.length
                const xStep = (W - padL - padR) / Math.max(n - 1, 1)
                const xForIdx = (i: number) => padL + i * xStep

                // For each dataset, map points onto the same x positions by aligning to the end
                const getXY = (ds: typeof datasets[0]) => {
                  const pts = ds.points
                  const offset = n - pts.length
                  return pts.map((p, i) => ({
                    x: xForIdx(offset + i),
                    y: yScale(p.score),
                    score: p.score,
                    quarter: p.quarter,
                    year: (p as any).year,
                  }))
                }

                const bandColor = (s: number) =>
                  s >= 550
                    ? "#45842a"
                    : s >= 510
                      ? "#a2c123"
                      : s >= 440
                        ? "#f1c319"
                        : s >= 350
                          ? "#e77204"
                          : "#e8002a"

                return (
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox={`0 0 ${W} ${H}`}
                      className="w-full"
                      style={{ minWidth: 300, height: 200 }}
                    >
                      <defs>
                        {datasets.map((ds) => (
                          <linearGradient
                            key={ds.p}
                            id={`grad${ds.p}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor={ds.color}
                              stopOpacity={ds.p === period ? "0.15" : "0"}
                            />
                            <stop
                              offset="100%"
                              stopColor={ds.color}
                              stopOpacity="0"
                            />
                          </linearGradient>
                        ))}
                      </defs>
                      {/* Grid lines */}
                      {yTicks.map((v) => (
                        <line
                          key={v}
                          x1={padL}
                          x2={W - padR}
                          y1={yScale(v)}
                          y2={yScale(v)}
                          stroke="#f0f0f0"
                          strokeWidth="1"
                        />
                      ))}
                      {/* Y-axis labels */}
                      {yTicks.map((v) => (
                        <text
                          key={v}
                          x={padL - 6}
                          y={yScale(v) + 4}
                          textAnchor="end"
                          fontSize="10"
                          fill="#9ca3af"
                          fontFamily="Open Sans"
                        >
                          {v}
                        </text>
                      ))}
                      {/* Non-active lines (dimmed, behind) */}
                      {datasets
                        .filter((ds) => ds.p !== period)
                        .map((ds) => {
                          const xy = getXY(ds)
                          const lp = xy
                            .map(
                              (pt, i) =>
                                `${i === 0 ? "M" : "L"}${pt.x},${pt.y}`,
                            )
                            .join(" ")
                          return (
                            <path
                              key={ds.p}
                              d={lp}
                              fill="none"
                              stroke={ds.color}
                              strokeWidth="1.5"
                              strokeOpacity="0.3"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeDasharray="4 3"
                            />
                          )
                        })}
                      {/* Active line + area */}
                      {(() => {
                        const ds = datasets.find((d) => d.p === period)!
                        const xy = getXY(ds)
                        const lp = xy
                          .map(
                            (pt, i) => `${i === 0 ? "M" : "L"}${pt.x},${pt.y}`,
                          )
                          .join(" ")
                        const ap = `${lp} L${xy[xy.length - 1].x},${H - padB} L${xy[0].x},${H - padB} Z`
                        return (
                          <g>
                            <path d={ap} fill={`url(#grad${ds.p})`} />
                            <path
                              d={lp}
                              fill="none"
                              stroke={ds.color}
                              strokeWidth="2.5"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            />
                            {xy.map((pt, i) => (
                              <g key={i}>
                                <circle
                                  cx={pt.x}
                                  cy={pt.y}
                                  r="4"
                                  fill={bandColor(pt.score)}
                                  stroke="white"
                                  strokeWidth="1.5"
                                />
                                <text
                                  x={pt.x}
                                  y={pt.y - 9}
                                  textAnchor="middle"
                                  fontSize="9"
                                  fontWeight="bold"
                                  fill="#181d27"
                                  fontFamily="Open Sans"
                                >
                                  {pt.score}
                                </text>
                              </g>
                            ))}
                          </g>
                        )
                      })()}
                      {/* X-axis labels */}
                      {getXY(datasets.find((d) => d.p === period)!).map(
                        (pt, i) => (
                          <text
                            key={i}
                            x={pt.x}
                            y={H - padB + 14}
                            textAnchor="middle"
                            fontSize="10"
                            fill="#5f6a72"
                            fontFamily="Open Sans"
                          >
                            {pt.quarter}
                          </text>
                        ),
                      )}
                      {/* Year labels */}
                      {(() => {
                        const pts = getXY(datasets.find((d) => d.p === period)!)
                        const yearsSeen: Record<string, number[]> = {}
                        pts.forEach((pt, i) => {
                          ;(yearsSeen[pt.year] = yearsSeen[pt.year] || []).push(
                            i,
                          )
                        })
                        return Object.entries(yearsSeen).map(([yr, idxs]) => {
                          const midX =
                            (pts[idxs[0]].x + pts[idxs[idxs.length - 1]].x) / 2
                          return (
                            <text
                              key={yr}
                              x={midX}
                              y={H - padB + 30}
                              textAnchor="middle"
                              fontSize="10"
                              fill="#333e48"
                              fontFamily="Open Sans"
                              fontWeight="600"
                            >
                              {yr}
                            </text>
                          )
                        })
                      })()}
                    </svg>
                  </div>
                )
              })()}

              {/* Legend — 3 lines */}
              <div className="flex gap-4 flex-wrap">
                {datasets.map((ds) => (
                  <button
                    key={ds.p}
                    onClick={() => setPeriod(ds.p)}
                    className={`flex items-center gap-1.5 cursor-pointer border-0 bg-transparent p-0 transition-opacity ${
                      period === ds.p
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <div
                      className="w-6 h-[3px] rounded-full"
                      style={{ backgroundColor: ds.color }}
                    />
                    <span className="font-['Open_Sans'] text-[12px] text-[#5f6a72]">
                      {ds.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )
        })()}
      </>
    )
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-[900px]">
      <div className="flex flex-col gap-1 pb-2">
        <p className="font-['Open_Sans'] font-bold text-[18px] text-[#4f4f4f]">
          Bonjour Anderson,
        </p>
        <p className="font-['Open_Sans'] font-bold text-[20px] text-[#1c1c1c]">
          Voici le rapport de crédit d’entreprise d’ABC Corp en date du 15
          janvier 2024
        </p>
      </div>

      <CDS2Card />

      <div className="h-px bg-[#cfcfcf] my-2" />

      <ScoreCard
        title="Facteur de la cote de défaillance commerciale"
        subtitle="La CDS prédit la probabilité qu’une entreprise accuse un retard de paiement important"
        score={473}
        label="MOYEN"
        meterImg={imgMeter473}
        reasonTitle="Codes explicatifs FTDS"
        reasons={[
          {
            icon: imgIconLegal,
            text: "Présence de poursuites, jugements ou recouvrements au dossier",
            onClick: onGoToLegal,
          },
          { icon: imgIconCredit, text: "Historique des demandes de crédit" },
        ]}
        graphImg={imgGraph473}
        yLabels={["480", "460", "440", "420"]}
        period={ftdsPeriod}
        setPeriod={setFtdsPeriod}
      />

      <div className="h-px bg-[#cfcfcf] my-2" />

      {/* Recent inquiries */}
      <div className="bg-white rounded-xl p-6 flex flex-col gap-4">
        <div>
          <p className="font-['Open_Sans'] font-bold text-[18px] text-black">
            Demandes récentes
          </p>
          <p className="font-['Open_Sans'] text-[15px] text-[#4f4f4f] mt-1">
            Demandes qui influencent votre cote
          </p>
        </div>
        <div className="flex flex-col">
          {[
            { name: "Roger AT&T Communication", date: "14 avr. 2023" },
            { name: "Lexus Loan Canada", date: "25 juin 2023" },
            { name: "BMO Mortgage Toronto", date: "8 sept. 2023" },
          ].map((item, i) => (
            <div key={i}>
              {i > 0 && <div className="h-px bg-[#dfdfdf] mb-3" />}
              <div className="flex items-start mb-3">
                <p className="font-['Open_Sans'] font-bold text-[16px] text-black flex-1">
                  {item.name}
                </p>
                <p className="font-['Open_Sans'] text-[15px] text-[#696969]">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-px bg-[#dfdfdf]" />
        <button
          onClick={onViewInquiries}
          className="font-['Open_Sans'] font-semibold text-[15px] text-[#007298] text-center cursor-pointer hover:underline"
        >
          Voir toutes les demandes
        </button>
      </div>

      {/* Featured article */}
      <div className="bg-white border border-[#e7e7e7] rounded-xl flex overflow-hidden">
        <div className="w-[220px] h-[160px] flex-shrink-0 overflow-hidden">
          <img
            alt=""
            src={imgThumbPhoto}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-5 flex-1">
          <p className="font-['Open_Sans'] font-bold text-[17px] text-[#1c1c1c] leading-snug">
            Détectez tôt le risque de défaut, avant qu’il n’affecte votre
            portefeuille
          </p>
          <p className="font-['Open_Sans'] text-[15px] text-[#4f4f4f] leading-[22px]">
            Malgré la hausse des taux d’intérêt et l’incertitude économique, les
            consommateurs devraient toujours
          </p>
          <button className="font-['Open_Sans'] font-semibold text-[15px] text-[#007298] text-left cursor-pointer hover:underline">
            Lire la suite
          </button>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center justify-center gap-2 py-2 font-['Open_Sans'] font-semibold text-[15px] text-[#363636] cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
      >
        <img alt="" src={imgArrowUp} className="w-5 h-5" />
        Retour en haut
      </button>
    </div>
  )
}

/* ─────────────────────────────────────────────
   EDIT FIELD INLINE
───────────────────────────────────────────── */
function ChangeRequestModal({
  label,
  currentValue,
  onClose,
}: {
  label: string
  currentValue: string
  onClose: () => void
}) {
  const [draft, setDraft] = useState(currentValue)
  const [submitted, setSubmitted] = useState(false)

  function submit() {
    if (!draft.trim() || draft === currentValue) return
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-[480px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e7e7e7]">
          <p className="font-['Open_Sans'] font-bold text-[17px] text-[#1c1c1c]">
            Demander une modification — {label}
          </p>
          <button
            onClick={onClose}
            className="text-[#696969] hover:text-black transition-colors cursor-pointer text-[20px] leading-none"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          /* Success state */
          <div className="flex flex-col items-center gap-4 px-6 py-10 text-center">
            <div className="w-12 h-12 rounded-full bg-[#eaf6f0] flex items-center justify-center text-[24px]">
              ✓
            </div>
            <p className="font-['Open_Sans'] font-bold text-[16px] text-[#1c1c1c]">
              Demande envoyée
            </p>
            <p className="font-['Open_Sans'] text-[14px] text-[#696969] leading-[20px]">
              Votre demande a été transmise au service d’enquête et sera
              examinée dans un délai de 10 jours ouvrables.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2 bg-[#007298] text-white text-[14px] font-bold rounded-lg cursor-pointer hover:bg-[#005f80] transition-colors"
            >
              Fermer
            </button>
          </div>
        ) : (
          /* Form state */
          <div className="flex flex-col gap-5 px-6 py-5">
            {/* Disclaimer banner */}
            <div className="flex gap-3 bg-[#fff8e6] border border-[#f1c319] rounded-lg px-4 py-3">
              <span className="text-[#d4920a] text-[18px] leading-none shrink-0">
                ⚠
              </span>
              <p className="font-['Open_Sans'] text-[13px] text-[#7a5c00] leading-[19px]">
                La modification et l’enregistrement de ces renseignements
                envoient une demande directement au service d’enquête plutôt que
                de mettre à jour le profil immédiatement.
              </p>
            </div>

            {/* Current value */}
            <div className="flex flex-col gap-1">
              <p className="font-['Open_Sans'] text-[12px] text-[#696969] uppercase tracking-wide">
                Valeur actuelle
              </p>
              <p className="font-['Open_Sans'] font-semibold text-[15px] text-[#4f4f4f] px-3 py-2 bg-[#f7f7f7] rounded-lg">
                {currentValue || "—"}
              </p>
            </div>

            {/* New value */}
            <div className="flex flex-col gap-1">
              <p className="font-['Open_Sans'] text-[12px] text-[#696969] uppercase tracking-wide">
                Nouvelle valeur demandée
              </p>
              <input
                autoFocus
                className="border border-[#cfcfcf] rounded-lg px-3 py-2 font-['Open_Sans'] text-[15px] text-black focus:outline-none focus:border-[#007298] focus:ring-2 focus:ring-[#007298]/20 transition-all"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") onClose()
                }}
                placeholder={`Saisissez une nouvelle valeur pour ${label.toLowerCase()}`}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-1">
              <button
                onClick={submit}
                disabled={!draft.trim() || draft === currentValue}
                className="flex-1 py-2 bg-[#007298] text-white text-[14px] font-bold rounded-lg cursor-pointer hover:bg-[#005f80] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Envoyer la demande
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2 border border-[#e7e7e7] text-[#696969] text-[14px] font-semibold rounded-lg cursor-pointer hover:bg-[#f7f7f7] transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function EditableField({
  label,
  value,
  onSave: _onSave,
}: {
  label: string
  value: string
  onSave: (v: string) => void
}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [requested, setRequested] = useState(false)

  return (
    <div className="flex flex-col gap-1 group">
      <p className="font-['Open_Sans'] text-[13px] text-[#4f4f4f] leading-[17px] w-fit">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <p className="font-['Open_Sans'] font-semibold text-[15px] text-black leading-[22px] whitespace-pre-line">
          {value || "—"}
        </p>
        <button
          onClick={() => {
            setModalOpen(true)
            setRequested(false)
          }}
          className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold border bg-white cursor-pointer transition-all ${
            requested
              ? "text-[#36b300] border-[#36b300]"
              : "text-[#696969] border-[#e7e7e7] hover:border-[#007298] hover:text-[#007298]"
          }`}
        >
          {requested ? (
            <>
              <span>✓</span> Demandée
            </>
          ) : (
            <>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M8.5 1.5l2 2L4 10H2V8L8.5 1.5z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              Demander une modification
            </>
          )}
        </button>
      </div>
      {modalOpen && (
        <ChangeRequestModal
          label={label}
          currentValue={value}
          onClose={() => {
            setModalOpen(false)
            setRequested(true)
            setTimeout(() => setRequested(false), 3000)
          }}
        />
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   REPORT PAGE
───────────────────────────────────────────── */
const REPORT_TABS = [
  { id: "business-info", label: "Renseignements sur l’entreprise" },
  { id: "alerts", label: "Alertes (6)" },
  { id: "index-history", label: "Historique des indices" },
  { id: "payment", label: "Paiement" },
  { id: "industry-trade", label: "Crédit commercial" },
  { id: "financial-trade", label: "Crédit financier" },
  { id: "guarantor", label: "Garant" },
  { id: "legal", label: "Dossiers juridiques" },
  { id: "inquiries", label: "Demandes (5)" },
  { id: "collections", label: "Recouvrements" },
] as const

function BusinessInfoTab({
  info,
  setInfo,
}: {
  info: BusinessInfo
  setInfo: (i: BusinessInfo) => void
}) {
  function update(key: keyof BusinessInfo) {
    return (val: string) => setInfo({ ...info, [key]: val })
  }
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-['Open_Sans'] text-[22px] text-[#1c1c1c]">
          <span className="font-bold">Renseignements</span> sur l’entreprise
        </h2>
        <span className="font-['Open_Sans'] text-[13px] text-[#696969] italic">
          Utilisez le bouton d’un champ pour demander une modification
        </span>
      </div>
      <p className="font-['Open_Sans'] text-[15px] text-[#4f4f4f] leading-[21px]">
        Les renseignements d’entreprise suivants ont été déclarés à Equifax
        Canada.
      </p>

      <div className="flex flex-col gap-6">
        <div className="flex gap-6 pb-6 border-b border-[#e7e7e7]">
          <div className="flex-1">
            <EditableField
              label="Propriétaire ou dirigeant"
              value={info.ownerName}
              onSave={update("ownerName")}
            />
          </div>
          <div className="flex-1">
            <EditableField
              label="Téléphone cellulaire"
              value={info.phone}
              onSave={update("phone")}
            />
          </div>
          <div className="flex-1">
            <EditableField
              label="Adresse"
              value={info.address}
              onSave={update("address")}
            />
          </div>
          <div className="flex-1">
            <EditableField
              label="Ville / Province"
              value={info.city}
              onSave={update("city")}
            />
          </div>
        </div>
        <div className="flex gap-6 pb-6 border-b border-[#e7e7e7]">
          <div className="flex-1">
            <EditableField
              label="Secteur d’activité"
              value={info.industry}
              onSave={update("industry")}
            />
          </div>
          <div className="flex-1">
            <EditableField
              label="Site Web"
              value={info.website}
              onSave={update("website")}
            />
          </div>
          <div className="flex-1">
            <EditableField
              label="Type d’organisation"
              value={info.orgType}
              onSave={update("orgType")}
            />
          </div>
          <div className="flex-1" />
        </div>
        <div className="flex gap-6 pb-6 border-b border-[#e7e7e7]">
          <div className="flex-1">
            <EditableField
              label="Nº d’entreprise"
              value={info.registry}
              onSave={update("registry")}
            />
          </div>
          <div className="flex-1">
            <EditableField
              label="Nº d’identification fiscale"
              value={info.taxId}
              onSave={update("taxId")}
            />
          </div>
          <div className="flex-1">
            <EditableField
              label="Employés"
              value={info.employees}
              onSave={update("employees")}
            />
          </div>
          <div className="flex-1">
            <EditableField
              label="Chiffre d’affaires"
              value={info.salesVolume}
              onSave={update("salesVolume")}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function TradeTable() {
  return (
    <div className="border border-[#e7e7e7] rounded overflow-hidden text-[14px]">
      <div className="flex bg-[#f7f7f7] border-b border-[#e7e7e7]">
        <div className="flex-1 px-3 py-2 border-r border-[#e7e7e7] font-semibold text-[#696969] text-right font-['Open_Sans']">
          Limite de crédit initiale/date
        </div>
        <div className="flex-1 px-3 py-2 border-r border-[#e7e7e7] font-semibold text-[#696969] text-right font-['Open_Sans']">
          Crédit maximal
        </div>
        <div className="flex-1 px-3 py-2 border-r border-[#e7e7e7] font-semibold text-[#696969] text-right font-['Open_Sans']">
          Solde actuel
        </div>
        <div className="flex flex-col w-[280px]">
          <div className="px-3 py-1.5 text-center font-semibold text-[#696969] border-b border-[#e7e7e7] font-['Open_Sans']">
            Montant du solde
          </div>
          <div className="flex h-8">
            {["Période 1", "Période 2", "Période 3"].map((p, i) => (
              <div
                key={p}
                className={`flex-1 px-2 flex items-center justify-end text-[#696969] font-semibold font-['Open_Sans'] ${
                  i < 2 ? "border-r border-[#e7e7e7]" : ""
                }`}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex bg-white">
        <div className="flex-1 px-3 py-2 border-r border-[#e7e7e7] text-right font-['Open_Sans'] text-[#1c1c1c]">
          $0
        </div>
        <div className="flex-1 px-3 py-2 border-r border-[#e7e7e7] text-right font-['Open_Sans'] text-[#1c1c1c]">
          $1.46M
        </div>
        <div className="flex-1 px-3 py-2 border-r border-[#e7e7e7] text-right font-['Open_Sans'] text-[#1c1c1c]">
          $1.46M
        </div>
        <div className="flex w-[280px]">
          {["$792", "$2,834", "$2,834"].map((v, i) => (
            <div
              key={i}
              className={`flex-1 px-2 py-2 text-right font-['Open_Sans'] text-[#1c1c1c] ${
                i < 2 ? "border-r border-[#e7e7e7]" : ""
              }`}
            >
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function IndustryTradeTab() {
  const trades = [
    {
      date: "2021/06/22",
      sic: "50840000-Whlsl-Ind Mach Sppls",
      opened: "2021/06/22",
      right: { label: "État", val: "Comptes fusionnés" },
      pastDue: "$0",
    },
    {
      date: "2021/06/22",
      sic: "50840000-Whlsl-Ind Mach Sppls",
      opened: "2021/06/22",
      right: { label: "Fournisseur", val: "STEPHENSON'S RENTAL" },
      pastDue: "$0",
      phone: "(905) 507-3650",
    },
    {
      date: "2021/06/22",
      sic: "15310000-Gen Contr-Opratve/Speculative",
      pastDue: "$0",
    },
  ]
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <h2 className="font-['Open_Sans'] font-bold text-[22px] text-[#1c1c1c] flex-1">
          Crédit commercial
        </h2>
        <button className="bg-[#007298] hover:bg-[#005f80] text-white font-['Open_Sans'] font-semibold text-[15px] px-4 py-2 rounded cursor-pointer transition-colors">
          Soumettre une référence de crédit
        </button>
      </div>
      <div className="font-['Open_Sans'] text-[15px] text-[#4f4f4f] leading-[21px] flex flex-col gap-2">
        <p>
          Dans certaines situations, les retards de paiement peuvent résulter de
          factures égarées ou de comptes contestés. Equifax présente les
          expériences de crédit telles qu’elles sont reçues; elles constituent
          donc un historique.
        </p>
        <p>
          Le symbole # indique une dette garantie à long terme, qui n’est PAS
          incluse dans le calcul de l’indice de paiement et de la cote
          d’information de crédit.
        </p>
      </div>
      {trades.map((t, i) => (
        <div
          key={i}
          className="border-b border-[#696969] pb-6 flex flex-col gap-3"
        >
          <div className="flex flex-col font-['Open_Sans'] text-[15px]">
            <div className="flex gap-4 py-2.5 border-b border-[#e7e7e7]">
              <div className="flex gap-3 flex-1">
                <span className="text-[#696969] w-40 flex-shrink-0">
                  Date de déclaration
                </span>
                <span className="text-[#1c1c1c]">{t.date}</span>
              </div>
              <div className="flex gap-3 flex-1">
                <span className="text-[#696969] w-16 flex-shrink-0">SIC</span>
                <span className="text-[#1c1c1c]">{t.sic}</span>
              </div>
            </div>
            {t.opened && (
              <div className="flex gap-4 py-2.5 border-b border-[#e7e7e7]">
                <div className="flex gap-3 flex-1">
                  <span className="text-[#696969] w-40 flex-shrink-0">
                    Ouverture du compte
                  </span>
                  <span className="text-[#1c1c1c]">{t.opened}</span>
                </div>
                <div className="flex gap-3 flex-1">
                  <span className="text-[#696969] w-16 flex-shrink-0">
                    {t.right.label}
                  </span>
                  <span className="text-[#1c1c1c]">{t.right.val}</span>
                </div>
              </div>
            )}
            <div className="flex gap-4 py-2.5">
              <div className="flex gap-3 flex-1">
                <span className="text-[#696969] w-40 flex-shrink-0">
                  Total en souffrance
                </span>
                <span className="text-[#1c1c1c]">{t.pastDue}</span>
              </div>
              {t.phone ? (
                <div className="flex gap-3 flex-1">
                  <span className="text-[#696969] w-16 flex-shrink-0">
                    Téléphone
                  </span>
                  <span className="text-[#1c1c1c]">{t.phone}</span>
                </div>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
          <TradeTable />
        </div>
      ))}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center justify-center gap-2 py-2 font-['Open_Sans'] font-semibold text-[15px] text-[#363636] cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <img alt="" src={imgArrowUp} className="w-5 h-5" /> Retour en haut
      </button>
    </div>
  )
}

function AlertsTab() {
  const leftRows: {
    label: string
    financial: string
    nonFinancial: string
    bold?: boolean
  }[] = [
    {
      label: "Nombre de comptes déclarés",
      financial: "2",
      nonFinancial: "2",
      bold: true,
    },
    {
      label: "Nombre de comptes en souffrance",
      financial: "1",
      nonFinancial: "1",
      bold: true,
    },
    {
      label: "Montant en souffrance",
      financial: "$200",
      nonFinancial: "$2,000",
    },
    {
      label: "État le plus défavorable",
      financial: "—",
      nonFinancial: "Retard 3",
      bold: true,
    },
    { label: "Date", financial: "2023-08-01", nonFinancial: "2023-10-18" },
    {
      label: "Crédit unique le plus élevé",
      financial: "",
      nonFinancial: "",
      bold: true,
    },
    {
      label: "Crédit unique maximal sur 90 jours",
      financial: "$1,000",
      nonFinancial: "$19,000",
    },
    {
      label: "Crédit unique maximal sur 13 mois",
      financial: "$3,000",
      nonFinancial: "$19,000",
    },
    {
      label: "Crédit unique maximal, toutes marges",
      financial: "$3,000",
      nonFinancial: "$19,000",
    },
    { label: "Limite de crédit", financial: "", nonFinancial: "", bold: true },
    {
      label: "Limite de crédit sur 90 jours",
      financial: "$2,000",
      nonFinancial: "$5,000",
    },
    {
      label: "Limite de crédit sur 13 mois",
      financial: "$2,000",
      nonFinancial: "$5,000",
    },
    {
      label: "Limite de crédit, toutes marges",
      financial: "$2,000",
      nonFinancial: "$5,000",
    },
    { label: "Radiations", financial: "", nonFinancial: "", bold: true },
    { label: "Nombre de comptes radiés", financial: "1", nonFinancial: "0" },
    { label: "Montant total radié", financial: "$50", nonFinancial: "$0" },
    {
      label: "Montant radié le plus élevé",
      financial: "$50",
      nonFinancial: "$0",
    },
    { label: "Date", financial: "2022-12-12", nonFinancial: "—" },
    {
      label: "Exposition totale actuelle au crédit",
      financial: "$1,000",
      nonFinancial: "$4,000",
      bold: true,
    },
    {
      label: "Total impayé",
      financial: "$1,166",
      nonFinancial: "$4,000",
      bold: true,
    },
    {
      label: "Solde actuel total",
      financial: "$583",
      nonFinancial: "$2,000",
      bold: true,
    },
    {
      label: "Total en souffrance",
      financial: "$200",
      nonFinancial: "$2,000",
      bold: true,
    },
  ]

  type AlertGroup = {
    heading: string
    link?: boolean
    rows: { label: string value: string }[]
  }
  const rightGroups: AlertGroup[] = [
    {
      heading: "Nombre de recouvrements",
      link: true,
      rows: [
        { label: "Montant total", value: "$555" },
        { label: "Date la plus récente", value: "2022-04-04" },
      ],
    },
    {
      heading: "Nombre de dossiers juridiques",
      link: true,
      rows: [
        { label: "Montant total", value: "$0" },
        { label: "Date la plus récente", value: "—" },
      ],
    },
    {
      heading: "Nombre de jugements",
      link: true,
      rows: [
        { label: "Montant total", value: "$20,000" },
        { label: "Date la plus récente", value: "2022-09-11" },
      ],
    },
    {
      heading: "Nombre de fonds insuffisants",
      link: true,
      rows: [
        { label: "Montant total", value: "$3,333" },
        { label: "Date la plus récente", value: "2022-03-06" },
      ],
    },
    {
      heading: "Nombre de privilèges",
      link: true,
      rows: [
        { label: "Montant total", value: "$0" },
        { label: "Date la plus récente", value: "2023-08-01" },
      ],
    },
  ]
  const rightSummary: {
    label: string
    value: string
    link?: boolean
    bold?: boolean
  }[] = [
    { label: "Rapport bancaire au dossier", value: "2022-03-03", link: true },
    {
      label: "Recherche d’entreprise au dossier",
      value: "2023-07-31",
      link: true,
    },
    { label: "Nombre de demandes au dossier", value: "0", link: true },
    { label: "Nombre de marges financières garanties", value: "2", bold: true },
    { label: "Dépassement des limites financières", value: "0", bold: true },
    {
      label: "% d’utilisation des marges renouvelables",
      value: "0%",
      bold: true,
    },
    { label: "% d’utilisation des marges fixes", value: "0%", bold: true },
  ]

  const alertCounts: Record<string, number> = {
    "Nombre de recouvrements": 1,
    "Nombre de dossiers juridiques": 0,
    "Nombre de jugements": 1,
    "Nombre de fonds insuffisants": 1,
    "Nombre de privilèges": 2,
  }

  const tdBase =
    "px-3 py-2 text-[13px] font-['Open_Sans'] text-[#333e48] border-b border-[#e7e7e7]"
  const thBase =
    "px-3 py-2 text-[12px] font-['Open_Sans'] font-semibold text-[#5f6a72] text-center bg-[#f9f0f0] border-b border-[#e7e7e7]"

  return (
    <div className="flex gap-0 w-full overflow-x-auto">
      {/* Left: Trade Summary */}
      <div className="flex-1 min-w-[420px]">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className={`${thBase} text-left w-[55%]`}></th>
              <th className={thBase}>Financier</th>
              <th className={thBase}>Non financier</th>
            </tr>
          </thead>
          <tbody>
            {leftRows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                <td
                  className={`${tdBase} ${
                    row.bold
                      ? "font-semibold text-[#1c1c1c]"
                      : "pl-6 text-[#4f4f4f]"
                  }`}
                >
                  {row.label}
                </td>
                <td className={`${tdBase} text-right`}>{row.financial}</td>
                <td className={`${tdBase} text-right`}>{row.nonFinancial}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Divider */}
      <div className="w-px bg-[#e7e7e7] mx-2 flex-shrink-0" />

      {/* Right: Alerts */}
      <div className="flex-1 min-w-[320px]">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className={`${thBase} text-left w-[70%]`}></th>
              <th className={thBase}>Alertes</th>
            </tr>
          </thead>
          <tbody>
            {rightGroups.map((group, gi) => (
              <>
                <tr key={`g-${gi}`} className="bg-white">
                  <td className={`${tdBase} font-semibold`}>
                    <span className="text-[#0076a3] underline cursor-pointer">
                      {group.heading}
                    </span>
                  </td>
                  <td
                    className={`${tdBase} text-right font-semibold text-[#1c1c1c]`}
                  >
                    {alertCounts[group.heading]}
                  </td>
                </tr>
                {group.rows.map((row, ri) => (
                  <tr key={`g-${gi}-r-${ri}`} className="bg-[#fafafa]">
                    <td className={`${tdBase} pl-6 text-[#4f4f4f]`}>
                      {row.label}
                    </td>
                    <td className={`${tdBase} text-right`}>{row.value}</td>
                  </tr>
                ))}
              </>
            ))}
            {rightSummary.map((row, i) => (
              <tr
                key={`s-${i}`}
                className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}
              >
                <td
                  className={`${tdBase} ${
                    row.bold ? "font-semibold text-[#1c1c1c]" : ""
                  }`}
                >
                  {row.link ? (
                    <span className="text-[#0076a3] underline cursor-pointer">
                      {row.label}
                    </span>
                  ) : (
                    row.label
                  )}
                </td>
                <td className={`${tdBase} text-right`}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function IndexHistoryTab() {
  type Segment = { color: string h: number }
  type Quarter = { label: string value: number segments: Segment[] }

  const ciQuarters: Quarter[] = [
    {
      label: "Q2",
      value: 68,
      segments: [
        { color: "#e8002a", h: 28 },
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q3",
      value: 68,
      segments: [
        { color: "#e8002a", h: 28 },
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q4",
      value: 68,
      segments: [
        { color: "#e8002a", h: 28 },
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q1",
      value: 42,
      segments: [
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q2",
      value: 56,
      segments: [
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q3",
      value: 68,
      segments: [
        { color: "#e8002a", h: 28 },
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q4",
      value: 42,
      segments: [
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q1",
      value: 56,
      segments: [
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q2",
      value: 56,
      segments: [
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
  ]

  const piQuarters: Quarter[] = [
    {
      label: "Q2",
      value: 96,
      segments: [
        { color: "#e8002a", h: 28 },
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q3",
      value: 96,
      segments: [
        { color: "#e8002a", h: 28 },
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q4",
      value: 96,
      segments: [
        { color: "#e8002a", h: 28 },
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q1",
      value: 64,
      segments: [
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q2",
      value: 72,
      segments: [
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q3",
      value: 96,
      segments: [
        { color: "#e8002a", h: 28 },
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q4",
      value: 64,
      segments: [
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q1",
      value: 70,
      segments: [
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
    {
      label: "Q2",
      value: 70,
      segments: [
        { color: "#e77204", h: 28 },
        { color: "#f1c319", h: 28 },
        { color: "#a2c123", h: 28 },
        { color: "#45842a", h: 28 },
      ],
    },
  ]

  const tableRows = [
    { year: 2024, q: 4 },
    { year: 2024, q: 3 },
    { year: 2024, q: 2 },
    { year: 2024, q: 1 },
    { year: 2023, q: 4 },
    { year: 2023, q: 3 },
    { year: 2023, q: 2 },
    { year: 2023, q: 1 },
    { year: 2022, q: 4 },
    { year: 2022, q: 3 },
    { year: 2022, q: 2 },
    { year: 2022, q: 1 },
  ]

  function HistoryChart({
    quarters,
    yLabels,
  }: {
    quarters: Quarter[]
    yLabels: string[]
  }) {
    return (
      <div className="flex gap-2 h-[240px] items-start w-full">
        <div className="flex flex-col gap-3 h-full items-center justify-end pb-4 shrink-0 font-['Open_Sans'] text-[12px] text-[#333e48] text-center whitespace-nowrap">
          {yLabels.map((l) => (
            <p key={l} className="shrink-0">
              {l}
            </p>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-2 h-full items-center min-w-0">
          <div className="flex flex-1 items-end min-h-0 w-full">
            {quarters.map((q, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col gap-1 h-full items-center min-w-0"
              >
                <div className="flex flex-1 flex-col justify-end leading-none font-['Open_Sans'] font-bold text-[14px] text-black text-center w-full">
                  <p className="leading-[16px]">{q.value}</p>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center shrink-0 w-full">
                  {q.segments.map((s, j) => (
                    <div
                      key={j}
                      className="rounded-[88px] shrink-0 w-[6px]"
                      style={{ backgroundColor: s.color, height: `${s.h}px` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-center shrink-0 w-full">
            <div className="flex items-start w-full">
              {quarters.map((q, i) => {
                const isDivider = i === 3 || i === 7
                return (
                  <>
                    {isDivider && (
                      <div
                        key={`div-${i}`}
                        className="bg-[#9c9c9c] self-stretch shrink-0 w-px"
                      />
                    )}
                    <p
                      key={i}
                      className="flex-1 min-w-0 font-['Open_Sans'] text-[12px] text-[#333e48] text-center"
                    >
                      {q.label}
                    </p>
                  </>
                )
              })}
            </div>
            <div className="bg-[#cfcfcf] h-px shrink-0 w-full" />
            <div className="flex items-start w-full">
              <p
                className="font-['Open_Sans'] text-[12px] text-[#333e48] text-center"
                style={{ width: "168.83px" }}
              >
                2022
              </p>
              <div className="bg-[#9c9c9c] self-stretch shrink-0 w-px" />
              <p
                className="font-['Open_Sans'] text-[12px] text-[#333e48] text-center"
                style={{ width: "225.1px" }}
              >
                2023
              </p>
              <div className="bg-[#9c9c9c] self-stretch shrink-0 w-px" />
              <p className="flex-1 min-w-0 font-['Open_Sans'] text-[12px] text-[#333e48] text-center">
                2024
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Index Values section */}
      <div className="bg-white rounded-[4px] overflow-clip w-full">
        <div className="flex flex-col gap-4 items-start w-full p-4">
          <div className="flex flex-col gap-2 items-start w-full">
            <p className="font-['Open_Sans'] font-semibold leading-[24px] text-[#9e1b32] text-[18px] w-full">
              Valeurs des indices
            </p>
            <div className="bg-[#cfcfcf] h-px w-full" />
          </div>

          {/* Two gauge columns */}
          <div className="flex items-start w-full">
            {/* CI column */}
            <div className="flex flex-1 flex-col gap-2 items-center min-w-0">
              <p className="font-['Open_Sans'] font-semibold leading-[20px] text-[14px] text-black text-center w-full">
                Indice d’information de crédit
              </p>
              {/* Gauge */}
              <div className="flex flex-col h-[120px] items-center justify-center w-full">
                <div className="h-[80px] mb-[-56px] relative shrink-0 w-[160px]">
                  <div
                    className="absolute"
                    style={{ inset: "-5% -2.5% -9.44% -2.5%" }}
                  >
                    <img
                      alt=""
                      className="block max-w-none w-full h-full"
                      src={imgIndexDonut}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center w-full">
                  <p className="font-['Open_Sans'] font-light leading-[56px] text-[48px] text-black text-center whitespace-nowrap">
                    42
                  </p>
                  <div className="flex gap-1 items-center">
                    <p className="font-['Open_Sans'] leading-[20px] text-[#333e48] text-[14px] text-center whitespace-nowrap">
                      Valeur actuelle
                    </p>
                    <div className="relative shrink-0 w-4 h-4">
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none w-full h-full"
                        src={imgIndexInfo}
                      />
                    </div>
                  </div>
                  <p className="font-['Open_Sans'] font-bold leading-[20px] text-[#007298] text-[14px] text-center underline w-[320px]">
                    Calcul de l’IC
                  </p>
                </div>
              </div>
              <div className="bg-[#cfcfcf] h-px w-full" />
              {/* CI History chart */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex gap-1 items-center justify-center w-full">
                  <p className="font-['Open_Sans'] font-semibold leading-[20px] text-[14px] text-black text-center whitespace-nowrap">
                    Historique de l’IC
                  </p>
                  <div className="relative shrink-0 w-4 h-4">
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none w-full h-full"
                      src={imgIndexInfo}
                    />
                  </div>
                </div>
                <HistoryChart
                  quarters={ciQuarters}
                  yLabels={["70", "60", "50", "40", "30", "20", "10", "0"]}
                />
              </div>
            </div>

            {/* Vertical divider */}
            <div className="bg-[#cfcfcf] self-stretch shrink-0 w-px" />

            {/* PI column */}
            <div className="flex flex-1 flex-col gap-2 items-center min-w-0">
              <p className="font-['Open_Sans'] font-semibold leading-[20px] text-[14px] text-black text-center w-full">
                Indice d’information de paiement
              </p>
              {/* Gauge */}
              <div className="flex flex-col h-[120px] items-center justify-center w-full">
                <div className="h-[80px] mb-[-56px] relative shrink-0 w-[160px]">
                  <div
                    className="absolute"
                    style={{ inset: "-5% -2.5% -9.44% -2.5%" }}
                  >
                    <img
                      alt=""
                      className="block max-w-none w-full h-full"
                      src={imgIndexDonut}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center w-full">
                  <p className="font-['Open_Sans'] font-light leading-[56px] text-[48px] text-black text-center whitespace-nowrap">
                    62
                  </p>
                  <div className="flex gap-1 items-center">
                    <p className="font-['Open_Sans'] leading-[20px] text-[#333e48] text-[14px] text-center whitespace-nowrap">
                      Valeur actuelle
                    </p>
                    <div className="relative shrink-0 w-4 h-4">
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none w-full h-full"
                        src={imgIndexInfo}
                      />
                    </div>
                  </div>
                  <p className="font-['Open_Sans'] font-bold leading-[20px] text-[#007298] text-[14px] text-center underline w-[320px]">
                    Calcul de l’IP
                  </p>
                </div>
              </div>
              <div className="bg-[#cfcfcf] h-px w-full" />
              {/* PI History chart */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex gap-1 items-center justify-center w-full">
                  <p className="font-['Open_Sans'] font-semibold leading-[20px] text-[14px] text-black text-center whitespace-nowrap">
                    Historique de l’IP
                  </p>
                  <div className="relative shrink-0 w-4 h-4">
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none w-full h-full"
                      src={imgIndexInfo}
                    />
                  </div>
                </div>
                <HistoryChart
                  quarters={piQuarters}
                  yLabels={["99", "90", "70", "50", "30", "10", "0"]}
                />
              </div>
            </div>
          </div>

          {/* Bottom: note + legend */}
          <div className="bg-[#cfcfcf] h-px w-full" />
          <div className="flex gap-4 items-start justify-center w-full">
            <p className="flex-1 min-w-0 font-['Open_Sans'] leading-[16px] text-[#333e48] text-[12px]">
              Les crédits financiers et les dettes garanties à long terme ne
              sont <span className="font-bold">PAS</span> inclus dans les
              calculs
            </p>
            <div className="flex flex-1 min-w-0 gap-4 items-center justify-end flex-wrap">
              {[
                { color: "#45842a", label: "Risque faible" },
                { color: "#a2c123", label: "Risque moyen-faible" },
                { color: "#f1c319", label: "Risque moyen-élevé" },
                { color: "#e77204", label: "Risque élevé" },
                { color: "#e8002a", label: "Risque très élevé" },
              ].map(({ color, label }) => (
                <div key={label} className="flex gap-1 items-center shrink-0">
                  <div
                    className="h-[7px] rounded-[4px] shrink-0 w-[12px]"
                    style={{ backgroundColor: color }}
                  />
                  <p className="font-['Open_Sans'] text-[12px] text-black whitespace-nowrap">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quarterly table section */}
      <div className="bg-white rounded-[4px] overflow-clip w-full">
        <div className="flex flex-col gap-2 items-start p-4 w-full">
          <p className="font-['Open_Sans'] font-semibold leading-[24px] text-[#9e1b32] text-[18px] w-full">
            Valeurs trimestrielles des indices et historique de paiement
          </p>
          <div className="bg-[#cfcfcf] h-px w-full" />
        </div>
        <div className="flex flex-col items-start overflow-clip w-full">
          {/* Header row 1 */}
          <div className="bg-white border-b border-black flex font-['Open_Sans'] font-semibold gap-3 items-start py-2 px-4 text-[14px] text-black w-full">
            <p className="shrink-0 w-[48px] leading-[20px]">Année</p>
            <p className="shrink-0 w-[56px] leading-[20px]">Trimestre</p>
            <div className="shrink-0 w-[80px] leading-[20px] whitespace-pre-wrap">
              <p className="leading-[20px]">Paiement</p>
              <p className="leading-[20px]">Indice</p>
            </div>
            <div className="shrink-0 w-[80px] leading-[20px] whitespace-pre-wrap">
              <p className="leading-[20px]">Crédit</p>
              <p className="leading-[20px]">Indice</p>
            </div>
            <div className="shrink-0 w-[80px] leading-[20px] whitespace-pre-wrap">
              <p className="leading-[20px]">Nombre de</p>
              <p className="leading-[20px]">Références</p>
            </div>
            <p className="shrink-0 w-[120px] leading-[20px]">Montant total</p>
            <p className="shrink-0 w-[120px] leading-[20px]">Montant actuel</p>
            <p className="flex-1 min-w-0 leading-[20px] text-center">
              Montant tendanciel
            </p>
          </div>
          {/* Header row 2 (1st/2nd/3rd) */}
          <div className="bg-white border-b border-black flex gap-3 items-start py-2 px-4 w-full">
            <div className="bg-white shrink-0 w-[656px]" />
            <div className="flex flex-1 min-w-0 font-['Open_Sans'] font-semibold gap-3 items-start text-[14px] text-black text-center">
              <p className="flex-1 min-w-0">1er</p>
              <p className="flex-1 min-w-0">2e</p>
              <p className="flex-1 min-w-0">3e</p>
            </div>
          </div>
          {/* Data rows */}
          {tableRows.map((row, i) => (
            <div
              key={i}
              className={`flex font-['Open_Sans'] gap-3 items-start leading-[20px] py-1 px-4 text-[14px] text-black w-full ${
                i % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"
              }`}
            >
              <p className="shrink-0 w-[48px]">{row.year}</p>
              <p className="shrink-0 w-[56px]">{row.q}</p>
              <p className="shrink-0 w-[80px]">0</p>
              <p className="shrink-0 w-[80px]">0</p>
              <p className="shrink-0 w-[80px]">0</p>
              <p className="shrink-0 w-[120px]">$000,000,000</p>
              <p className="shrink-0 w-[120px]">$000,000,000</p>
              <div className="flex flex-1 min-w-0 gap-3 items-start text-center">
                <p className="flex-1 min-w-0">$000,000,000</p>
                <p className="flex-1 min-w-0">$000,000,000</p>
                <p className="flex-1 min-w-0">$000,000,000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PaymentTab() {
  const tableRows = [
    { year: 2024, q: 4 },
    { year: 2024, q: 3 },
    { year: 2024, q: 2 },
    { year: 2024, q: 1 },
    { year: 2023, q: 4 },
    { year: 2023, q: 3 },
    { year: 2023, q: 2 },
    { year: 2023, q: 1 },
    { year: 2022, q: 4 },
    { year: 2022, q: 3 },
    { year: 2022, q: 2 },
    { year: 2022, q: 1 },
  ]
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col gap-2 items-start w-full mb-2">
        <p className="font-['Open_Sans:Semibold'] font-semibold leading-[24px] text-[#9e1b32] text-[18px] w-full">
          Valeurs trimestrielles des indices et historique de paiement
        </p>
        <div className="bg-[#cfcfcf] h-px w-full" />
      </div>
      <div className="flex flex-col items-start overflow-clip w-full">
        {/* Header row 1 */}
        <div
          className="bg-white border-b border-black flex font-['Open_Sans:SemiBold'] font-semibold gap-3 items-start py-2 text-[14px] text-black w-full"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <p className="shrink-0 w-[48px] leading-[20px]">Année</p>
          <p className="shrink-0 w-[56px] leading-[20px]">Trimestre</p>
          <div
            className="shrink-0 w-[80px] whitespace-pre-wrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[20px]">Paiement</p>
            <p className="leading-[20px]">Indice</p>
          </div>
          <div
            className="shrink-0 w-[80px] whitespace-pre-wrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[20px]">Crédit</p>
            <p className="leading-[20px]">Indice</p>
          </div>
          <div
            className="shrink-0 w-[80px] whitespace-pre-wrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[20px]">Nombre de</p>
            <p className="leading-[20px]">Références</p>
          </div>
          <p className="shrink-0 w-[120px] leading-[20px]">Montant total</p>
          <p className="shrink-0 w-[120px] leading-[20px]">Montant actuel</p>
          <p className="flex-1 min-w-0 leading-[20px] text-center">
            Montant tendanciel
          </p>
        </div>
        {/* Header row 2: 1st/2nd/3rd */}
        <div className="bg-white border-b border-black flex gap-3 items-start py-2 w-full">
          <div className="bg-white shrink-0 w-[656px]" />
          <div
            className="flex flex-1 min-w-0 font-['Open_Sans:SemiBold'] font-semibold gap-3 items-start text-[14px] text-black text-center"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="flex-1 min-w-0">1er</p>
            <p className="flex-1 min-w-0">2e</p>
            <p className="flex-1 min-w-0">3e</p>
          </div>
        </div>
        {/* Data rows */}
        {tableRows.map((row, i) => (
          <div
            key={i}
            className={`flex font-['Open_Sans:Regular'] gap-3 items-start leading-[20px] py-1 text-[14px] text-black w-full ${
              i % 2 === 0 ? "bg-white" : "bg-[#f7f7f7]"
            }`}
          >
            <p className="shrink-0 w-[48px]">{row.year}</p>
            <p className="shrink-0 w-[56px]">{row.q}</p>
            <p className="shrink-0 w-[80px]">0</p>
            <p className="shrink-0 w-[80px]">0</p>
            <p className="shrink-0 w-[80px]">0</p>
            <p className="shrink-0 w-[120px]">$000,000,000</p>
            <p className="shrink-0 w-[120px]">$000,000,000</p>
            <div className="flex flex-1 min-w-0 gap-3 items-start text-center">
              <p className="flex-1 min-w-0">$000,000,000</p>
              <p className="flex-1 min-w-0">$000,000,000</p>
              <p className="flex-1 min-w-0">$000,000,000</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FinancialTradeTab() {
  const industryEntries = [
    { bg: "bg-[#f7f7f7]" },
    { bg: "bg-white" },
    { bg: "bg-[#f7f7f7]" },
  ]
  const financialEntries = [
    { bg: "bg-[#f7f7f7]" },
    { bg: "bg-white" },
    { bg: "bg-[#f7f7f7]" },
  ]

  return (
    <div className="flex flex-col gap-8 items-start w-fit">
      {/* Industry Trade Details */}
      <div className="bg-white rounded-[4px] overflow-clip w-fit">
        <div className="flex flex-col gap-2 items-start w-fit p-4 pb-0">
          <p className="font-['Open_Sans:Semibold'] font-semibold leading-[24px] text-[#9e1b32] text-[18px] w-full">
            Crédit financier{" "}
          </p>
          <div className="bg-[#cfcfcf] h-px w-full" />
        </div>
        <div className="flex flex-col items-start justify-center overflow-clip py-4 w-fit px-4">
          <div className="font-['Open_Sans:Regular'] text-[#333e48] w-fit whitespace-pre-wrap">
            <p className="leading-[20px] text-[14px] mb-0 w-fit">
              Dans certaines situations, un retard de paiement peut résulter de
              factures égarées ou de comptes contestés.{" "}
            </p>
            <p className="leading-[20px] text-[14px] mb-0">&nbsp;</p>
            <p className="text-[14px] leading-[20px] w-fit">
              <span className="font-['Open_Sans:Bold'] font-bold">#</span>
              <span>{` indique une dette garantie à long terme, qui n’est pas incluse dans le calcul de l’indice de paiement et de la cote d’information de crédit.`}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start overflow-clip w-fit text-[14px]">
          {/* Column headers */}
          <div className="bg-white flex font-['Open_Sans:SemiBold'] font-semibold gap-2 items-start py-2 px-4 w-fit">
            <p className="shrink-0 w-[32px] leading-[20px] text-white">#</p>
            <div
              className="shrink-0 w-[120px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0 text-black">Compte ouvert</p>
              <p className="leading-[20px] text-black">Date de fermeture</p>
            </div>
            <div
              className="shrink-0 w-[120px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0 text-black">
                Habitudes de paiement/
              </p>
              <p className="leading-[20px] text-black">Conditions</p>
            </div>
            <div
              className="shrink-0 w-[180px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0 text-black">Crédit maximal/</p>
              <p className="leading-[20px] text-black">Date</p>
            </div>
            <div
              className="shrink-0 w-[180px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0 text-black">
                Limite de crédit/
              </p>
              <p className="leading-[20px] text-black">Date</p>
            </div>
            <div
              className="shrink-0 w-[120px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0 text-black">Solde actuel/</p>
              <p className="leading-[20px] mb-0 text-black">
                Total en souffrance/
              </p>
              <p className="leading-[20px] text-black">Solde total</p>
            </div>
            <p
              className="flex-1 min-w-0 leading-[20px] text-black text-center"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Période 1
            </p>
          </div>
          {/* Repeated entry rows */}
          {industryEntries.map((entry, i) => (
            <div key={i}>
              {/* Header row */}
              <div
                className={`${entry.bg} border-t border-b border-black flex gap-2 items-start leading-[20px] py-2 px-4 text-black whitespace-nowrap w-full`}
              >
                <p
                  className="font-['Open_Sans:SemiBold'] font-semibold shrink-0 w-[32px]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  #
                </p>
                <div className="flex gap-2 items-start shrink-0 w-[248px]">
                  <p className="font-['Open_Sans:Bold'] font-bold shrink-0">
                    Date de déclaration :
                  </p>
                  <p className="font-['Open_Sans:Regular'] shrink-0">
                    YYYY-MM-DD
                  </p>
                </div>
                <div className="flex gap-2 items-start shrink-0 w-[368px]">
                  <p className="font-['Open_Sans:Bold'] font-bold shrink-0">
                    SIC :
                  </p>
                  <p className="font-['Open_Sans:Regular'] shrink-0">
                    50840000-Whlsl-Ind Machinery &amp; Equipment
                  </p>
                </div>
                <div className="flex gap-2 items-start shrink-0 w-[240px]">
                  <p className="font-['Open_Sans:Bold'] font-bold shrink-0">
                    Fournisseur :
                  </p>
                  <p className="font-['Open_Sans:Regular'] shrink-0">
                    S. Cartes Desjardins
                  </p>
                </div>
                <div className="flex flex-1 min-w-0 gap-2 items-start">
                  <p className="font-['Open_Sans:Bold'] font-bold shrink-0">
                    État :
                  </p>
                  <p className="font-['Open_Sans:Regular'] shrink-0">
                    Comptes fusionnés
                  </p>
                </div>
              </div>
              {/* Data row */}
              <div className="bg-white flex font-['Open_Sans:Regular'] gap-2 items-start py-1 px-4 text-black w-fit">
                <p className="leading-[20px] shrink-0 w-[32px] text-white">#</p>
                <div className="shrink-0 w-[120px]">
                  <p className="leading-[20px] mb-0">YYYY-MM-DD</p>
                  <p className="leading-[20px]">YYYY-MM-DD</p>
                </div>
                <div className="shrink-0 w-[120px]">
                  <p className="leading-[20px] mb-0">[Pay Habits]</p>
                  <p className="leading-[20px]">[Conditions]</p>
                </div>
                <div className="shrink-0 w-[180px]">
                  <p className="leading-[20px] mb-0">$000,000,000</p>
                  <p className="leading-[20px]">YYYY-MM-DD</p>
                </div>
                <div className="shrink-0 w-[180px]">
                  <p className="leading-[20px] mb-0">$000,000,000</p>
                  <p className="leading-[20px]">YYYY-MM-DD</p>
                </div>
                <div className="shrink-0 w-[120px]">
                  <p className="leading-[20px] mb-0">$000,000,000</p>
                  <p className="leading-[20px] mb-0">$000,000,000</p>
                  <p className="leading-[20px]">$000,000,000</p>
                </div>
                <p className="flex-1 min-w-0 leading-[20px] text-center">
                  $000,000,000
                </p>
                <p className="flex-1 min-w-0 leading-[20px] text-center">
                  $000,000,000
                </p>
                <p className="flex-1 min-w-0 leading-[20px] text-center">
                  $000,000,000
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Trade Details */}
      <div className="bg-white rounded-[4px] overflow-clip w-fit">
        <div className="flex flex-col gap-2 items-start w-fit p-4 pb-0">
          <p className="font-['Open_Sans:Semibold'] font-semibold leading-[24px] text-[#9e1b32] text-[18px] w-full">
            Détails du crédit financier
          </p>
          <div className="bg-[#cfcfcf] h-px w-full" />
        </div>
        <div
          className="flex flex-col items-start overflow-clip w-fit text-[14px] text-black"
          style={{ flexGrow: 0, flexBasis: "auto" }}
        >
          {/* Column headers */}
          <div className="bg-white flex font-['Open_Sans:SemiBold'] font-semibold gap-2 items-start py-2 px-4 w-fit">
            <div
              className="shrink-0 w-[120px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">Date d’ouverture</p>
              <p className="leading-[20px] mb-0">Date de fermeture</p>
              <p className="leading-[20px]">Dernière activité</p>
            </div>
            <div
              className="shrink-0 w-[120px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">Limite de crédit/</p>
              <p className="leading-[20px]">Crédit maximal</p>
            </div>
            <div
              className="shrink-0 w-[160px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">Paiement prévu/</p>
              <p className="leading-[20px]">Paiement réel</p>
            </div>
            <div
              className="shrink-0 w-[96px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">Solde/</p>
              <p className="leading-[20px]">En souffrance</p>
            </div>
            <div
              className="shrink-0 w-[160px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">Type de compte/</p>
              <p className="leading-[20px]">Cote</p>
            </div>
            <div
              className="shrink-0 w-[160px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">Type de paiement/</p>
              <p className="leading-[20px] mb-0">Fréquence 1/</p>
              <p className="leading-[20px]">Fréquence 2</p>
            </div>
            <div
              className="shrink-0 w-[120px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">30/</p>
              <p className="leading-[20px] mb-0">60/</p>
              <p className="leading-[20px]">90</p>
            </div>
          </div>
          {/* Repeated entry rows */}
          {financialEntries.map((entry, i) => (
            <div key={i} className="w-full">
              {/* Header row */}
              <div
                className={`${entry.bg} border-t border-b border-black flex gap-2 items-start leading-[20px] py-2 px-4 whitespace-nowrap w-fit`}
              >
                <div className="flex gap-2 items-start shrink-0 w-[200px]">
                  <p className="font-['Open_Sans:Bold'] font-bold shrink-0">
                    Date de déclaration :
                  </p>
                  <p className="font-['Open_Sans:Regular'] shrink-0">
                    YYYY-MM-DD
                  </p>
                </div>
                <div className="flex gap-2 items-start shrink-0 w-[360px]">
                  <p className="font-['Open_Sans:Bold'] font-bold shrink-0">
                    SIC :
                  </p>
                  <p className="font-['Open_Sans:Regular'] shrink-0">
                    50840000-Whlsl-Ind Machinery &amp; Equipment
                  </p>
                </div>
                <div className="flex gap-2 items-start shrink-0 w-[240px]">
                  <p className="font-['Open_Sans:Bold'] font-bold shrink-0">
                    Fournisseur :
                  </p>
                  <p className="font-['Open_Sans:Regular'] shrink-0">
                    [Établissement prêteur]
                  </p>
                </div>
                <div
                  className="flex flex-none gap-2 items-start"
                  style={{ flexGrow: 0, flexBasis: "auto" }}
                >
                  <p className="font-['Open_Sans:Bold'] font-bold shrink-0">
                    Indicateur de garantie :
                  </p>
                  <p className="font-['Open_Sans:Regular'] shrink-0">
                    [Garant]
                  </p>
                </div>
              </div>
              {/* Data row */}
              <div className="bg-white flex font-['Open_Sans:Regular'] gap-2 items-start py-1 px-4 w-fit">
                <div className="shrink-0 w-[120px]">
                  <p className="leading-[20px] mb-0">YYYY-MM-DD</p>
                  <p className="leading-[20px] mb-0">YYYY-MM-DD</p>
                  <p className="leading-[20px]">YYYY-MM-DD</p>
                </div>
                <div className="shrink-0 w-[120px]">
                  <p className="leading-[20px] mb-0">$000,000,000</p>
                  <p className="leading-[20px]">$000,000,000</p>
                </div>
                <div className="shrink-0 w-[160px]">
                  <p className="leading-[20px] mb-0">$000,000,000</p>
                  <p className="leading-[20px]">$000,000,000</p>
                </div>
                <div className="shrink-0 w-[96px]">
                  <p className="leading-[20px] mb-0">$000,000,000</p>
                  <p className="leading-[20px]">$000,000,000</p>
                </div>
                <div className="shrink-0 w-[160px]">
                  <p className="leading-[20px] mb-0">[Type de compte]</p>
                  <p className="leading-[20px]">[Rating]</p>
                </div>
                <div className="shrink-0 w-[160px]">
                  <p className="leading-[20px] mb-0">[Type de paiement]</p>
                  <p className="leading-[20px] mb-0">Mensuel</p>
                  <p className="leading-[20px]">Trimestriel</p>
                </div>
                <div className="shrink-0 w-[120px]">
                  <p className="leading-[20px] mb-0">00000</p>
                  <p className="leading-[20px] mb-0">00000</p>
                  <p className="leading-[20px]">00000</p>
                </div>
              </div>
            </div>
          ))}

          {/* Divider + Total section */}
          <div className="flex flex-col items-center py-3 w-fit px-4">
            <div className="bg-black h-px w-full" />
          </div>
          <div className="bg-white flex items-center py-1 px-4 w-fit">
            <p className="font-['Open_Sans:Bold'] font-bold leading-[20px] text-[14px] text-black w-[120px]">
              Total
            </p>
          </div>
          <div className="bg-white border-b border-black flex font-['Open_Sans:SemiBold'] font-semibold gap-3 items-start py-2 px-4 text-[14px] text-black w-fit">
            <div
              className="shrink-0 w-[120px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">Limite de crédit</p>
              <p className="leading-[20px]">Crédit maximal</p>
            </div>
            <div
              className="shrink-0 w-[160px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">Paiement prévu/</p>
              <p className="leading-[20px]">Paiement réel/</p>
            </div>
            <div
              className="shrink-0 w-[160px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">Solde total/</p>
              <p className="leading-[20px]">En souffrance</p>
            </div>
            <div
              className="flex-1 min-w-0"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="leading-[20px] mb-0">
                % d’utilisation – crédit renouvelable
              </p>
              <p className="leading-[20px] w-fit">
                % d’utilisation – crédit à terme
              </p>
            </div>
          </div>
          <div className="bg-white flex font-['Open_Sans:Regular'] gap-3 items-start py-1 px-4 text-[14px] text-black w-fit">
            <div className="shrink-0 w-[120px]">
              <p className="leading-[20px] mb-0">$000,000,000</p>
              <p className="leading-[20px]">$000,000,000</p>
            </div>
            <div className="shrink-0 w-[160px]">
              <p className="leading-[20px] mb-0">$000,000,000</p>
              <p className="leading-[20px]">$000,000,000</p>
            </div>
            <div className="shrink-0 w-[160px]">
              <p className="leading-[20px] mb-0">$000,000,000</p>
              <p className="leading-[20px]">$000,000,000</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="leading-[20px] mb-0">55%</p>
              <p className="leading-[20px]">55%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GuarantorTab() {
  const initialRows = [
    {
      bg: "bg-white",
      tradeNum: "3.1",
      guarantorNum: "G-00142",
      guarantor: "Michael R. Thompson",
      additionalNames: "Thompson Holdings Ltd.\nM.R.T. Enterprises",
      address: "45 Wellington St W, Toronto, ON, M5J 1B1",
    },
    {
      bg: "bg-[#f7f7f7]",
      tradeNum: "3.2",
      guarantorNum: "G-00198",
      guarantor: "Sandra L. Beaumont",
      additionalNames: "Beaumont Consulting Inc.",
      address: "1080 Côte du Beaver Hall, Montreal, QC, H2Z 1S8",
    },
  ]
  const [rows, setRows] = useState(initialRows)
  const updateRow = (i: number, field: string, val: string) =>
    setRows((prev) =>
      prev.map((r, idx) => (idx === i ? { ...r, [field]: val } : r)),
    )

  return (
    <div className="bg-white rounded-[4px] overflow-clip w-full">
      <div className="flex flex-col gap-2 items-start w-full p-4 pb-0">
        <p className="font-['Open_Sans:Semibold'] font-semibold leading-[24px] text-[#9e1b32] text-[18px] w-full">
          Renseignements sur les garants
        </p>
        <div className="bg-[#cfcfcf] h-px w-full" />
      </div>
      <div className="flex flex-col items-start overflow-clip w-full text-[14px]">
        {/* Header */}
        <div className="bg-white border-b border-black flex font-['Open_Sans:SemiBold'] font-semibold gap-3 items-start leading-[20px] py-2 px-4 text-black w-full">
          <p
            className="shrink-0 w-[120px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Nº du crédit financier
          </p>
          <p
            className="shrink-0 w-[160px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Numéro du garant
          </p>
          <p
            className="shrink-0 w-[240px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Garant
          </p>
          <p
            className="shrink-0 w-[240px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Autres noms
          </p>
          <p
            className="flex-1 min-w-0"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Adresse
          </p>
        </div>
        {/* Data rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`${row.bg} flex gap-3 items-start py-2 px-4 w-full`}
          >
            <p className="font-['Open_Sans:Regular'] leading-[20px] shrink-0 text-black w-[120px] pt-1">
              {row.tradeNum}
            </p>
            <p className="font-['Open_Sans:Bold'] font-bold leading-[20px] shrink-0 text-[#007298] underline [text-decoration-skip-ink:none] w-[160px] pt-1">
              {row.guarantorNum}
            </p>
            <div className="shrink-0 w-[240px]">
              <EditableField
                label="Garant"
                value={row.guarantor}
                onSave={(v) => updateRow(i, "guarantor", v)}
              />
            </div>
            <div className="shrink-0 w-[240px]">
              <EditableField
                label="Autres noms"
                value={row.additionalNames}
                onSave={(v) => updateRow(i, "additionalNames", v)}
              />
            </div>
            <div className="flex-1 min-w-0">
              <EditableField
                label="Adresse"
                value={row.address}
                onSave={(v) => updateRow(i, "address", v)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LegalTab() {
  const rows = [
    {
      bg: "bg-white",
      reportedDate: "2023-04-12",
      claimDate: "2023-03-28",
      claimNum: "ON-2023-CV-04821",
      defendant: "ABC CORP INC.",
      plaintiff: "MAPLE LEAF SUPPLIES LTD.",
      amount: "$48,500",
      reason: "Rupture de contrat",
      status: "Déclaration",
      court: "Superior Court of Justice, Toronto ON",
      security: "Non garanti",
    },
    {
      bg: "bg-[#f7f7f7]",
      reportedDate: "2022-11-03",
      claimDate: "2022-10-17",
      claimNum: "QC-2022-CM-11934",
      defendant: "ABC CORP INC.",
      plaintiff: "GROUPE CONSTRUCTION BEAUMONT",
      amount: "$124,200",
      reason: "Factures impayées",
      status: "Jugement par défaut",
      court: "Cour supérieure, Montréal QC",
      security: "Garantie personnelle",
    },
    {
      bg: "bg-white",
      reportedDate: "2021-06-22",
      claimDate: "2021-05-30",
      claimNum: "AB-2021-QB-07653",
      defendant: "ABC CORP INC.",
      plaintiff: "WESTRIDGE LEASING CORP.",
      amount: "$31,750",
      reason: "Défaut de bail d’équipement",
      status: "Réglé",
      court: "Court of Queen's Bench, Calgary AB",
      security: "Privilège sur équipement",
    },
  ]
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col gap-2 items-start w-full mb-2">
        <p className="font-['Open_Sans:Semibold'] font-semibold leading-[24px] text-[#9e1b32] text-[18px] w-full">
          Détails juridiques
        </p>
        <div className="bg-[#cfcfcf] h-px w-full" />
      </div>
      <div className="flex flex-col items-start overflow-clip w-full text-[14px] text-black">
        {/* Header */}
        <div className="bg-white border-b border-black flex font-['Open_Sans:SemiBold'] font-semibold gap-3 items-center py-2 w-full">
          <div
            className="shrink-0 w-[120px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[20px] mb-0">Date de déclaration/</p>
            <p className="leading-[20px]">Date de la réclamation</p>
          </div>
          <div
            className="shrink-0 w-[320px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[20px] mb-0">Nº de réclamation</p>
            <p className="leading-[20px] mb-0">Défendeur/</p>
            <p className="leading-[20px]">Demandeur</p>
          </div>
          <p
            className="shrink-0 w-[120px] leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Montant
          </p>
          <p
            className="shrink-0 w-[120px] leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Motif
          </p>
          <div
            className="shrink-0 w-[240px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <p className="leading-[20px] mb-0">État/</p>
            <p className="leading-[20px]">Tribunal</p>
          </div>
          <p
            className="flex-1 min-w-0 leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Garantie
          </p>
        </div>
        {/* Data rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`${row.bg} flex font-['Open_Sans:Regular'] gap-3 items-start py-2 w-full`}
          >
            <div className="shrink-0 w-[120px]">
              <p className="leading-[20px] mb-0">{row.reportedDate}</p>
              <p className="leading-[20px]">{row.claimDate}</p>
            </div>
            <div className="shrink-0 w-[320px]">
              <p className="leading-[20px] mb-0 font-semibold text-[#007298]">
                {row.claimNum}
              </p>
              <p className="leading-[20px] mb-0">{row.defendant}</p>
              <p className="leading-[20px]">{row.plaintiff}</p>
            </div>
            <p className="shrink-0 w-[120px] leading-[20px]">{row.amount}</p>
            <p className="shrink-0 w-[120px] leading-[20px]">{row.reason}</p>
            <div className="shrink-0 w-[240px]">
              <p className="leading-[20px] mb-0">{row.status}</p>
              <p className="leading-[20px]">{row.court}</p>
            </div>
            <p className="flex-1 min-w-0 leading-[20px]">{row.security}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function InquiriesTab() {
  const rows = [
    {
      date: "2023-08-31",
      sic: "50120000-Wholesale-Autosms",
      company: "GUY THIBAULT PONTIAC",
      phone: "418-248-7122",
    },
    {
      date: "2023-08-30",
      sic: "60000000-Banque",
      company: "BQE ROYALE",
      phone: "514-493-5858",
    },
  ]
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Title */}
      <div className="flex items-center gap-2">
        <p className="font-['Open_Sans'] font-bold text-[18px] text-black leading-[24px]">
          Demandes
        </p>
        <div className="relative shrink-0 w-4 h-4">
          <img
            alt=""
            className="absolute block inset-0 max-w-none w-full h-full"
            src={imgIndexInfo}
          />
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-3 text-[14px] text-black font-['Open_Sans'] leading-[20px]">
        <p>
          Une demande est enregistrée lorsqu’un client d’Equifax commande un
          rapport sur cette entreprise. Un nombre faible ou nul peut indiquer
          que l’entreprise recherche peu de crédit, tandis qu’un nombre élevé
          indique qu’elle en recherche activement. Voici quelques facteurs à
          considérer :
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>
            Le nombre de demandes semble-t-il approprié pour une entreprise de
            cette taille?
          </li>
          <li>
            L’entreprise cherche-t-elle de meilleures ententes avec ses
            fournisseurs?
          </li>
          <li>L’entreprise est-elle en croissance ou en difficulté?</li>
          <li>Ses fournisseurs actuels répondent-ils à ses besoins?</li>
        </ul>
        <p>
          Les demandes les plus récentes des 24 derniers mois sont présentées
          ci-dessous :
        </p>
      </div>

      {/* Table */}
      <div className="flex flex-col w-full border border-[#e0e0e0] rounded overflow-clip">
        {/* Header */}
        <div className="flex font-['Open_Sans'] font-semibold text-[14px] text-black leading-[20px] bg-[#f5e9eb]">
          <p className="w-[160px] shrink-0 px-4 py-2">Date de la demande</p>
          <p className="flex-[2_0_0] min-w-0 px-4 py-2">
            Code SIC du demandeur
          </p>
          <p className="flex-[2_0_0] min-w-0 px-4 py-2">Nom de l’entreprise</p>
          <p className="flex-[1_0_0] min-w-0 px-4 py-2">Numéro de téléphone</p>
        </div>
        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex font-['Open_Sans'] text-[14px] text-black leading-[20px] border-t border-[#e0e0e0]"
          >
            <p className="w-[160px] shrink-0 px-4 py-3">{row.date}</p>
            <p className="flex-[2_0_0] min-w-0 px-4 py-3">{row.sic}</p>
            <p className="flex-[2_0_0] min-w-0 px-4 py-3">{row.company}</p>
            <p className="flex-[1_0_0] min-w-0 px-4 py-3">{row.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CollectionsTab() {
  const rows = [
    {
      bg: "bg-white",
      reportedDate: "2023-09-14",
      originalCreditor: "Maple Leaf Supplies Ltd.",
      collectionAgency: "National Recovery Services Inc.",
      accountNum: "NRS-2023-84712",
      originalAmount: "$18,400",
      balanceOwing: "$14,250",
      status: "Actif",
      lastActivity: "2024-01-08",
    },
    {
      bg: "bg-[#f7f7f7]",
      reportedDate: "2022-06-30",
      originalCreditor: "Westridge Leasing Corp.",
      collectionAgency: "Meridian Collections Group",
      accountNum: "MCG-2022-31095",
      originalAmount: "$9,800",
      balanceOwing: "$0",
      status: "Payé / Réglé",
      lastActivity: "2023-03-22",
    },
    {
      bg: "bg-white",
      reportedDate: "2021-11-05",
      originalCreditor: "Rogers Business Solutions",
      collectionAgency: "ACB Commercial Recovery",
      accountNum: "ACB-2021-66430",
      originalAmount: "$3,125",
      balanceOwing: "$3,125",
      status: "Actif",
      lastActivity: "2023-11-15",
    },
  ]
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col gap-2 items-start w-full mb-2">
        <p className="font-['Open_Sans:Semibold'] font-semibold leading-[24px] text-[#9e1b32] text-[18px] w-full">
          Recouvrements
        </p>
        <div className="bg-[#cfcfcf] h-px w-full" />
      </div>
      <div className="flex flex-col items-start overflow-clip w-full text-[14px] text-black">
        {/* Header */}
        <div className="bg-white border-b border-black flex font-['Open_Sans:SemiBold'] font-semibold gap-3 items-center py-2 w-full">
          <p
            className="shrink-0 w-[110px] leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Date de déclaration
          </p>
          <p
            className="shrink-0 w-[180px] leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Créancier initial
          </p>
          <p
            className="shrink-0 w-[200px] leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Agence de recouvrement
          </p>
          <p
            className="shrink-0 w-[160px] leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Nº de compte
          </p>
          <p
            className="shrink-0 w-[110px] leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Montant initial
          </p>
          <p
            className="shrink-0 w-[110px] leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Solde dû
          </p>
          <p
            className="shrink-0 w-[120px] leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            État
          </p>
          <p
            className="flex-1 min-w-0 leading-[20px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Dernière activité
          </p>
        </div>
        {/* Data rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`${row.bg} flex font-['Open_Sans:Regular'] gap-3 items-start py-2 w-full`}
          >
            <p className="shrink-0 w-[110px] leading-[20px]">
              {row.reportedDate}
            </p>
            <p className="shrink-0 w-[180px] leading-[20px]">
              {row.originalCreditor}
            </p>
            <p className="shrink-0 w-[200px] leading-[20px]">
              {row.collectionAgency}
            </p>
            <p className="shrink-0 w-[160px] leading-[20px] font-semibold text-[#007298]">
              {row.accountNum}
            </p>
            <p className="shrink-0 w-[110px] leading-[20px]">
              {row.originalAmount}
            </p>
            <p
              className={`shrink-0 w-[110px] leading-[20px] font-semibold ${
                row.balanceOwing === "$0" ? "text-[#36b300]" : "text-[#9e1b32]"
              }`}
            >
              {row.balanceOwing}
            </p>
            <p
              className={`shrink-0 w-[120px] leading-[20px] ${
                row.status === "Actif"
                  ? "text-[#e77204] font-semibold"
                  : "text-[#36b300] font-semibold"
              }`}
            >
              {row.status}
            </p>
            <p className="flex-1 min-w-0 leading-[20px]">{row.lastActivity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlaceholderTab({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-2">
      <p className="font-['Open_Sans'] font-bold text-[18px] text-[#1c1c1c]">
        {name}
      </p>
      <p className="font-['Open_Sans'] text-[15px] text-[#696969]">
        Aucune donnée disponible pour cette section.
      </p>
    </div>
  )
}

function ReportPage({
  info,
  setInfo,
  activeTab: activeTabProp,
  setActiveTab: setActiveTabProp,
}: {
  info: BusinessInfo
  setInfo: (i: BusinessInfo) => void
  activeTab?: ReportTab
  setActiveTab?: (t: ReportTab) => void
}) {
  const [activeTabLocal, setActiveTabLocal] =
    useState<ReportTab>("business-info")
  const activeTab = activeTabProp ?? activeTabLocal
  const setActiveTab = (t: ReportTab) => {
    setActiveTabProp ? setActiveTabProp(t) : setActiveTabLocal(t)
  }
  return (
    <div className="bg-white rounded-xl overflow-hidden w-fit">
      {/* Tab strip */}
      <div
        className="flex items-center justify-center border-b border-[#e7e7e7] overflow-x-auto w-full"
        style={{ scrollbarWidth: "none" }}
      >
        {REPORT_TABS.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ReportTab)}
              className="flex flex-col items-start flex-shrink-0 cursor-pointer outline-none bg-transparent border-0 px-5 pt-4 pb-0 w-fit"
            >
              <span
                className={`font-['Open_Sans'] font-bold text-[14px] leading-[24px] whitespace-nowrap pb-3 ${
                  isActive
                    ? "text-[#9e1b32]"
                    : "text-[#696969] hover:text-[#4f4f4f]"
                }`}
              >
                {tab.label}
              </span>
              <div
                className={`h-1 w-full rounded-t-sm ${
                  isActive ? "bg-[#9e1b32]" : "bg-transparent"
                }`}
              />
            </button>
          )
        })}
      </div>
      <div className="p-6 w-full">
        {activeTab === "business-info" && (
          <BusinessInfoTab info={info} setInfo={setInfo} />
        )}
        {activeTab === "industry-trade" && <IndustryTradeTab />}
        {activeTab === "alerts" && <AlertsTab />}
        {activeTab === "index-history" && <IndexHistoryTab />}
        {activeTab === "payment" && <PaymentTab />}
        {activeTab === "financial-trade" && <FinancialTradeTab />}
        {activeTab === "guarantor" && <GuarantorTab />}
        {activeTab === "legal" && <LegalTab />}
        {activeTab === "inquiries" && <InquiriesTab />}
        {activeTab === "collections" && <CollectionsTab />}
        {activeTab !== "business-info" &&
          activeTab !== "industry-trade" &&
          activeTab !== "alerts" &&
          activeTab !== "index-history" &&
          activeTab !== "payment" &&
          activeTab !== "financial-trade" &&
          activeTab !== "guarantor" &&
          activeTab !== "legal" &&
          activeTab !== "inquiries" &&
          activeTab !== "collections" && (
            <PlaceholderTab
              name={REPORT_TABS.find((t) => t.id === activeTab)?.label ?? ""}
            />
          )}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   EDUCATION PAGE
───────────────────────────────────────────── */
const EDU_TAGS = [
  "Cote de crédit",
  "Gestion des risques",
  "Petite entreprise",
  "Prévention de la fraude",
  "Santé financière",
  "Tendances sectorielles",
] as const
type EduTag = typeof EDU_TAGS[number]

const EDU_ARTICLES: {
  img: string
  title: string
  excerpt: string
  tags: EduTag[]
}[] = [
  {
    img: imgEdu1,
    title:
      "Détectez tôt le risque de défaut, avant qu’il n’affecte votre portefeuille",
    excerpt:
      "Malgré la hausse des taux d’intérêt et l’incertitude économique, les consommateurs devraient toujours",
    tags: ["Gestion des risques", "Santé financière"],
  },
  {
    img: imgEdu2,
    title:
      "8 façons de mieux connaître les partenaires de votre petite entreprise",
    excerpt:
      "Dans un marché des petites entreprises en pleine expansion, les chiffres parlent d’eux-mêmes",
    tags: [
      "Petite entreprise",
      "Prévention de la fraude",
      "Tendances sectorielles",
    ],
  },
  {
    img: imgEdu3,
    title: "Conseils pour établir un bon dossier de crédit",
    excerpt:
      "Découvrez les renseignements positifs et négatifs de votre rapport de crédit et la façon dont les créanciers peuvent les utiliser",
    tags: ["Cote de crédit"],
  },
  {
    img: imgEdu4,
    title:
      "Comprendre, consulter et bâtir le profil de crédit de votre entreprise",
    excerpt:
      "Comme pour votre crédit personnel, maintenir un bon crédit d’entreprise est essentiel",
    tags: ["Cote de crédit", "Petite entreprise", "Santé financière"],
  },
  {
    img: imgEdu5,
    title:
      "Renforcer la résilience grâce aux données sur les petites entreprises",
    excerpt:
      "Les petites entreprises continuent de faire les manchettes. Chaque mois, nous publions",
    tags: ["Petite entreprise", "Gestion des risques"],
  },
  {
    img: imgEdu6,
    title:
      "Repérer et mobiliser rapidement les prospects de petites entreprises",
    excerpt:
      "Au cours des trois dernières années, le marché des petites entreprises a connu",
    tags: ["Tendances sectorielles", "Petite entreprise"],
  },
  {
    img: imgEdu7,
    title: "Protéger votre entreprise contre la fraude d’identité",
    excerpt:
      "La fraude d’identité est l’une des menaces qui progressent le plus rapidement pour les petites entreprises.",
    tags: ["Prévention de la fraude", "Gestion des risques"],
  },
  {
    img: imgEdu8,
    title: "L’influence des cotes de crédit sur votre capacité d’emprunt",
    excerpt:
      "Une bonne cote de crédit donne accès à de meilleures conditions de financement et à des taux d’intérêt plus bas.",
    tags: ["Cote de crédit", "Santé financière"],
  },
  {
    img: imgEdu9,
    title: "Les grandes tendances qui façonnent le crédit d’entreprise en 2024",
    excerpt:
      "Le crédit d’entreprise évolue rapidement. Voici ce qu’il faut savoir.",
    tags: ["Tendances sectorielles", "Santé financière", "Cote de crédit"],
  },
]

const TAG_COLORS: Record<EduTag, {
  bg: string
  text: string
  activeBg: string
  activeText: string
}> = {
  "Cote de crédit": {
    bg: "#eef6fb",
    text: "#007298",
    activeBg: "#007298",
    activeText: "#fff",
  },
  "Gestion des risques": {
    bg: "#fdf0f2",
    text: "#9e1b32",
    activeBg: "#9e1b32",
    activeText: "#fff",
  },
  "Petite entreprise": {
    bg: "#f0faf4",
    text: "#1a7a46",
    activeBg: "#1a7a46",
    activeText: "#fff",
  },
  "Prévention de la fraude": {
    bg: "#fff7ed",
    text: "#c05c00",
    activeBg: "#c05c00",
    activeText: "#fff",
  },
  "Santé financière": {
    bg: "#f5f0ff",
    text: "#6b3fa0",
    activeBg: "#6b3fa0",
    activeText: "#fff",
  },
  "Tendances sectorielles": {
    bg: "#f0f4ff",
    text: "#2a4dd0",
    activeBg: "#2a4dd0",
    activeText: "#fff",
  },
}

function EducationPage() {
  const [activeTag, setActiveTag] = useState<EduTag | null>(null)
  const [renderedTag, setRenderedTag] = useState<EduTag | null>(null)
  const [gridOpacity, setGridOpacity] = useState(1)
  const transitionRef = useState<ReturnType<typeof setTimeout> | null>(null)

  function selectTag(tag: EduTag) {
    const next = activeTag === tag ? null : tag
    setActiveTag(next)
    // fade out
    setGridOpacity(0)
    if (transitionRef[0]) clearTimeout(transitionRef[0])
    transitionRef[0] = setTimeout(() => {
      setRenderedTag(next)
      // fade in after DOM update
      requestAnimationFrame(() => setGridOpacity(1))
    }, 180)
  }

  const articles =
    renderedTag === null
      ? EDU_ARTICLES
      : EDU_ARTICLES.filter((a) => a.tags.includes(renderedTag))

  return (
    <div className="flex flex-col gap-6 w-full max-w-[900px]">
      {/* Tag filter strip */}
      <div className="flex flex-wrap gap-2">
        {EDU_TAGS.map((tag) => {
          const c = TAG_COLORS[tag]
          const isActive = activeTag === tag
          return (
            <button
              key={tag}
              onClick={() => selectTag(tag)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-['Open_Sans'] font-semibold cursor-pointer border transition-all duration-200"
              style={{
                backgroundColor: isActive ? c.activeBg : c.bg,
                color: isActive ? c.activeText : c.text,
                borderColor: isActive ? c.activeBg : "transparent",
                boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.18)" : "none",
              }}
            >
              {isActive && <span className="text-[11px]">✕</span>}
              {tag}
            </button>
          )
        })}
      </div>

      {/* Article grid — fades out, reflows, fades back in */}
      <div
        className="flex flex-wrap gap-5 w-full"
        style={{ opacity: gridOpacity, transition: "opacity 0.18s ease" }}
      >
        {articles.map((a, i) => (
          <div
            key={a.title}
            className="bg-white border border-[#e7e7e7] rounded-xl overflow-hidden cursor-pointer hover:shadow-md flex flex-col"
            style={{ width: "calc(33.333% - 14px)", minWidth: 260 }}
          >
            <div className="h-[180px] overflow-hidden flex-shrink-0">
              <img alt="" src={a.img} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
              <div className="flex flex-wrap gap-1.5">
                {a.tags.map((tag) => {
                  const c = TAG_COLORS[tag]
                  return (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[11px] font-['Open_Sans'] font-semibold"
                      style={{ backgroundColor: c.bg, color: c.text }}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
              <p className="font-['Open_Sans'] font-bold text-[15px] text-[#1c1c1c] leading-snug">
                {a.title}
              </p>
              <p className="font-['Open_Sans'] text-[13px] text-[#4f4f4f] leading-[19px]">
                {a.excerpt}
              </p>
              <span className="font-['Open_Sans'] font-semibold text-[13px] text-[#007298] mt-auto pt-1">
                Lire la suite →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   SUPPORT PAGE
───────────────────────────────────────────── */
function SupportPage() {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[900px]">
      <div className="bg-white rounded-xl p-6 flex flex-col gap-4">
        <h2 className="font-['Open_Sans'] font-bold text-[20px] text-[#1c1c1c]">
          Communiquer avec le soutien
        </h2>
        <p className="font-['Open_Sans'] text-[15px] text-[#4f4f4f] leading-[21px]">
          Vous avez des questions sur votre rapport de crédit d’entreprise
          Equifax? Notre équipe de soutien est là pour vous aider.
        </p>
        {[
          { label: "Téléphone", val: "1-800-465-7166" },
          { label: "Courriel", val: "business@equifax.ca" },
          { label: "Heures", val: "Du lundi au vendredi, de 8 h à 20 h HE" },
        ].map((r) => (
          <div
            key={r.label}
            className="flex gap-4 py-3 border-b border-[#e7e7e7]"
          >
            <p className="font-['Open_Sans'] text-[14px] text-[#696969] w-16">
              {r.label}
            </p>
            <p className="font-['Open_Sans'] font-semibold text-[15px] text-black">
              {r.val}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-6 flex flex-col gap-3">
        <h3 className="font-['Open_Sans'] font-bold text-[18px] text-[#1c1c1c]">
          Foire aux questions
        </h3>
        {[
          "Comment contester une erreur dans mon rapport de crédit d’entreprise?",
          "À quelle fréquence mon rapport de crédit d’entreprise est-il mis à jour?",
          "Quels facteurs influencent ma cote de défaillance commerciale?",
          "Puis-je ajouter une déclaration à mon rapport?",
        ].map((q) => (
          <div
            key={q}
            className="flex items-center justify-between py-3 border-b border-[#e7e7e7] cursor-pointer hover:text-[#007298] group"
          >
            <p className="font-['Open_Sans'] font-semibold text-[15px] text-[#1c1c1c] group-hover:text-[#007298] flex-1">
              {q}
            </p>
            <span className="text-[#696969] text-[18px] group-hover:text-[#007298] ml-3">
              ›
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   EQUIFAX DASHBOARD SHELL
───────────────────────────────────────────── */
const PAGE_TITLES: Record<NavPage, string> = {
  overview: "Rapport de crédit d’entreprise",
  report: "Rapport de crédit Equifax",
  education: "Ressources",
  support: "Soutien",
}

function EquifaxDashboard({
  onBack,
  info,
  setInfo,
}: {
  onBack: () => void
  info: BusinessInfo
  setInfo: (i: BusinessInfo) => void
}) {
  const [page, setPage] = useState<NavPage>("overview")
  const [reportTab, setReportTab] = useState<ReportTab>("business-info")
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f7f7f7]">
      <DesjardinsHeader />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="business-credit-sidebar w-[220px] flex-shrink-0 bg-white border-r border-[#e7e7e7] flex flex-col justify-between min-h-full py-5 px-4">
          <style>{`.business-credit-sidebar .bg-\\[\\#9e1b32\\] { background-color: #2f8526; }`}</style>
          <div className="flex flex-col gap-4">
            <img
              alt="Equifax"
              src={imgEquifaxLogo}
              className="h-[26px] w-[140px] object-contain"
            />
            <nav className="flex flex-col gap-1 mt-1">
              <NavItem
                icon={imgNavOverview}
                label="Vue d’ensemble"
                active={page === "overview"}
                onClick={() => setPage("overview")}
              />
              <NavItem
                icon={imgNavReport}
                label="Rapport de crédit"
                active={page === "report"}
                onClick={() => setPage("report")}
              />
              <NavItem
                icon={imgNavEducation}
                label="Ressources"
                active={page === "education"}
                onClick={() => setPage("education")}
              />
              <NavItem
                icon={imgNavSupport}
                label="Soutien"
                active={page === "support"}
                onClick={() => setPage("support")}
              />
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            {/* Back to Tangerine */}
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-[#696969] hover:bg-[#f5f5f5] border-0 bg-transparent cursor-pointer w-full text-left mb-1 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-['Open_Sans'] font-semibold text-[13px] whitespace-nowrap">
                Retour à Desjardins
              </span>
            </button>
            <img
              alt="Equifax"
              src={imgEquifaxSmall}
              className="h-5 w-[110px] object-contain"
            />
            <p className="font-['Open_Sans'] text-[12px] text-[#696969] leading-[17px] w-[188px]">
              Equifax Business Credit Health™. © 2022 Equifax Inc. Tous droits
              réservés.
            </p>
            <button className="font-['Open_Sans'] font-semibold text-[12px] text-[#696969] text-left cursor-pointer hover:text-[#007298]">
              Politique de confidentialité
            </button>
            <button className="font-['Open_Sans'] font-semibold text-[12px] text-[#696969] text-left cursor-pointer hover:text-[#007298]">
              Conditions d’utilisation
            </button>
          </div>
        </div>

        {/* Main */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Top bar */}
          <div className="h-[70px] flex items-center justify-between px-6 border-b border-[#e7e7e7] bg-[#f7f7f7] flex-shrink-0">
            <p className="font-['Open_Sans'] font-bold text-[18px] text-black w-full text-center">
              {PAGE_TITLES[page]}
            </p>
            <div className="flex items-center gap-4">
              <button className="font-['Open_Sans'] font-semibold text-[15px] text-[#4f4f4f] cursor-pointer hover:text-[#007298]">
                English
              </button>
              <button
                onClick={onBack}
                title="Retour à Desjardins"
                className="w-8 h-8 flex items-center justify-center rounded-full text-[#696969] hover:bg-[#e7e7e7] hover:text-[#1c1c1c] cursor-pointer transition-colors border-0 bg-transparent"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M4 4l10 10M14 4L4 14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 p-8 overflow-auto flex flex-col items-center w-full h-full">
            {page === "overview" && (
              <OverviewPage
                onViewInquiries={() => {
                  setPage("report")
                  setReportTab("inquiries")
                }}
                onGoToLegal={() => {
                  setPage("report")
                  setReportTab("legal")
                }}
              />
            )}
            {page === "report" && (
              <ReportPage
                info={info}
                setInfo={setInfo}
                activeTab={reportTab}
                setActiveTab={setReportTab}
              />
            )}
            {page === "education" && <EducationPage />}
            {page === "support" && <SupportPage />}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
const DEFAULT_INFO: BusinessInfo = {
  ownerName: "Anderson James",
  phone: "(647) 394 - 1928",
  address: "520 Cosburn Ave",
  city: "East York, ON M4J 2P1",
  industry: "Services financiers",
  website: "www.abccompany.com",
  orgType: "S. O.",
  registry: "1083245-7",
  taxId: "142 687 1445RB",
  employees: "26",
  salesVolume: "248,800",
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>("tangerine")
  const [info, setInfo] = useState<BusinessInfo>(DEFAULT_INFO)

  return screen === "tangerine" ? (
    <TangerinePage onLaunch={() => setScreen("equifax")} />
  ) : (
    <EquifaxDashboard
      onBack={() => setScreen("tangerine")}
      info={info}
      setInfo={setInfo}
    />
  )
}
