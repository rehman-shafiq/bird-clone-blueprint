import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight, Check, Star, ShieldCheck, Sparkles, Image as ImageIcon,
  Video, Megaphone, PenLine, Search, Mail, Instagram, Facebook,
  Twitter, Linkedin, Youtube, ChevronDown, Play, Calendar,
  MessageSquare, Zap, Clock, Users, TrendingUp, Award, Heart,
  MoreHorizontal, Send, Bookmark, Link2, Globe,
} from "lucide-react";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import team1Video from "@/assets/team-1.mp4.asset.json";
import team2Video from "@/assets/team-2.mp4.asset.json";
import team3Video from "@/assets/team-3.mp4.asset.json";
import team4Video from "@/assets/team-4.mp4.asset.json";
const team1 = team1Video.url;
const team2 = team2Video.url;
const team3 = team3Video.url;
const team4 = team4Video.url;
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plumeo — Social media management from $99/mo" },
      { name: "description", content: "The growth-focused social media marketing agency for small businesses. 180+ vetted creators, real humans, trusted by 18,000+ brands." },
      { property: "og:title", content: "Plumeo — Social media management from $99/mo" },
      { property: "og:description", content: "Done-for-you social media, ads, and SEO. 14-day risk-free guarantee." },
    ],
  }),
  component: Home,
});

/* ---------------- Brand mark ---------------- */
function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 22C4 12 12 4 22 4c2 0 4 .4 6 1-2 8-8 14-16 16-3 .8-6 1-8 1z" fill="#0EA5E9"/>
        <path d="M10 26c4-1 8-3 11-6 3-3 5-7 6-11 1 3 1 6 0 9-2 6-7 10-13 11-2 .3-3 .2-4-3z" fill="#10B981"/>
      </svg>
      <span className="font-display text-[20px] font-bold tracking-tight text-[#0F172A]">Plumeo</span>
    </a>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Company", has: true },
    { label: "Services", has: true },
    { label: "Examples", has: false },
    { label: "Pricing", has: false },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "bg-white/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <button
              key={n.label}
              className="px-4 py-2 text-[15px] font-medium text-[#0F172A]/80 hover:text-[#0F172A] inline-flex items-center gap-1 rounded-md"
            >
              {n.label}
              {n.has && <ChevronDown className="h-4 w-4 opacity-60" />}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <a href="#" className="hidden lg:inline-flex px-3 py-2 text-[15px] font-medium text-[#0F172A]/80 hover:text-[#0F172A]">Log in</a>
          <a href="#pricing" className="hidden lg:inline-flex px-3 py-2 text-[15px] font-medium text-[#0F172A]/80 hover:text-[#0F172A]">Get Started</a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#0F172A] px-3 sm:px-4 h-10 text-[13px] sm:text-[14px] font-semibold text-white hover:bg-[#0F172A]/90 transition whitespace-nowrap"
          >
            Book a Demo <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden ml-1 p-2 rounded-md hover:bg-muted" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-3 flex flex-col">
            {nav.map((n) => (
              <a key={n.label} href="#" className="py-2.5 text-[15px] font-medium text-[#0F172A]">{n.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const [tab, setTab] = useState<"social" | "ads" | "seo">("social");
  const [paused, setPaused] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (paused || locked) return;
    const order: Array<"social" | "ads" | "seo"> = ["social", "ads", "seo"];
    const id = setInterval(() => {
      setTab((t) => order[(order.indexOf(t) + 1) % order.length]);
    }, 3000);
    return () => clearInterval(id);
  }, [paused, locked]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#EFF6FF] to-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 pt-10 lg:pt-16 pb-16">
        {/* Left */}
        <div className="max-w-xl animate-fade-up">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#0EA5E9] text-[#0EA5E9]" />
              ))}
            </div>
            <span className="text-[14px] font-semibold text-[#0F172A]">650+</span>
            <span className="text-[14px] text-[#0F172A]/60">5 star reviews</span>
          </div>
          <h1 className="font-display text-[34px] sm:text-[48px] lg:text-[64px] leading-[1.08] font-extrabold text-[#0F172A]">
            Social media management <span className="text-[#0EA5E9]">from $99/mo</span>
          </h1>
          <p className="mt-5 text-[17px] leading-[1.6] text-[#0F172A]/70">
            The growth-focused social media marketing agency for small businesses.
            A team of 180+ vetted human creators — not AI. Trusted by 18,000+ brands since 2017.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#0EA5E9] text-white font-semibold hover:bg-[#0284C7] transition shadow-pop">
              View Pricing
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[#0F172A] text-white font-semibold hover:bg-[#0F172A]/90 transition">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0EA5E9]/10 px-3 py-2 border border-[#0EA5E9]/20">
            <ShieldCheck className="h-4 w-4 text-[#0EA5E9]" />
            <span className="text-[13px] font-semibold text-[#0F172A]">Risk-free 14-day satisfaction guarantee</span>
            <span className="text-[13px] text-[#0F172A]/60">· Cancel anytime</span>
          </div>
          <div className="mt-8">
            <p className="text-[13px] font-medium text-[#0F172A]/60 mb-3">What do you need help with?</p>
            <div className="flex flex-wrap gap-2">
              {[
                { id: "social", label: "Social Media", Icon: ImageIcon },
                { id: "ads", label: "Paid Ads", Icon: Megaphone },
                { id: "seo", label: "SEO", Icon: Search },
              ].map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => { setTab(id as typeof tab); setLocked(true); }}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 h-10 text-[14px] font-semibold transition ${
                    tab === id
                      ? "bg-white border-[#0EA5E9] text-[#0EA5E9] shadow-card"
                      : "bg-white border-border text-[#0F172A]/80 hover:border-[#0F172A]/30"
                  }`}
                >
                  <Icon className="h-4 w-4" /> {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Right — preview */}
        <div className="relative">
          <HeroPreview tab={tab} />
        </div>
      </div>
    </section>
  );
}

function HeroPreview({ tab }: { tab: "social" | "ads" | "seo" }) {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#0EA5E9]/10 via-white to-[#10B981]/10 p-4 sm:p-5 lg:p-7 shadow-card border border-border min-h-[480px] sm:min-h-[520px]">
      {tab === "social" && (
        <div className="relative h-[440px] sm:h-[500px] overflow-hidden grid grid-cols-2 gap-3 sm:gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          {[
            { items: [work1, work2, work3, work4, work5, work6], anim: "animate-scroll-y" },
            { items: [work4, work5, work6, work1, work2, work3], anim: "animate-scroll-y-reverse" },
          ].map((col, ci) => (
            <div key={ci} className="relative">
              <div className={`flex flex-col gap-4 ${col.anim} hover:[animation-play-state:paused]`}>
                {[...col.items, ...col.items].map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden bg-white shadow-card shrink-0">
                    <img src={src} alt="" loading="lazy" className="w-full aspect-square object-cover" />
                    <div className="px-3 py-2 flex items-center gap-2 text-[12px] text-[#0F172A]/70">
                      <Heart className="h-3.5 w-3.5" /> 2.4k
                      <MessageSquare className="h-3.5 w-3.5 ml-2" /> 184
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {tab === "ads" && (
        <div className="space-y-4">
          <div className="rounded-xl bg-white shadow-card p-4 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#10B981]" />
              <div className="flex-1">
                <p className="text-[13px] font-semibold text-[#0F172A]">your.brand</p>
                <p className="text-[11px] text-[#0F172A]/50">Sponsored</p>
              </div>
              <MoreHorizontal className="h-4 w-4 text-[#0F172A]/40" />
            </div>
            <img src={work5} alt="" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-lg" />
            <div className="flex items-center gap-4 mt-3 text-[#0F172A]/70">
              <Heart className="h-5 w-5" /><MessageSquare className="h-5 w-5" /><Send className="h-5 w-5" /><Bookmark className="h-5 w-5 ml-auto" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[{ k: "CTR", v: "4.8%" }, { k: "ROAS", v: "6.2x" }, { k: "CPC", v: "$0.42" }].map((s) => (
              <div key={s.k} className="rounded-xl bg-white border border-border p-3 text-center">
                <p className="text-[11px] text-[#0F172A]/60 font-medium">{s.k}</p>
                <p className="text-[18px] font-bold text-[#10B981]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {tab === "seo" && (
        <div className="space-y-4">
          <div className="rounded-xl bg-white border border-border p-4 shadow-card">
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#0F172A] mb-3">
              <PenLine className="h-4 w-4 text-[#0EA5E9]" /> SEO Blog Post
            </div>
            <p className="text-[15px] font-semibold text-[#0F172A]">How content engines drive durable revenue</p>
            <p className="text-[12px] text-[#0F172A]/60 mt-1">8 min read · Updated this week</p>
            <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[72%] bg-gradient-to-r from-[#0EA5E9] to-[#10B981]" />
            </div>
          </div>
          <div className="rounded-xl bg-white border border-border p-4 shadow-card">
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#0F172A] mb-3">
              <Link2 className="h-4 w-4 text-[#0EA5E9]" /> Backlinks
            </div>
            {["company.co · DA 65", "growthstack.io · DA 52", "example.com · DA 48"].map((t, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-t border-border first:border-0 text-[13px]">
                <span className="text-[#0F172A]">{t}</span>
                <span className="text-[11px] font-semibold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">Live</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-white border border-border p-4 shadow-card grid grid-cols-3 gap-3">
            {[{ k: "SEO Score", v: "92" }, { k: "Top 10", v: "14" }, { k: "Index", v: "+18%" }].map((s) => (
              <div key={s.k} className="text-center">
                <p className="text-[11px] text-[#0F172A]/60 font-medium">{s.k}</p>
                <p className="text-[20px] font-bold text-[#0F172A]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- Trust strip ---------------- */
function TrustStrip() {
  const brands = ["GROVE", "NORTHWIND", "VYBE", "LUMINA", "ATLAS", "PARABLE", "NESPRO", "AURORA"];
  return (
    <section className="bg-[#0F172A] py-10 overflow-hidden">
      <div className="container-x flex flex-col md:flex-row items-center gap-8">
        <div className="text-center md:text-left md:border-r md:border-white/15 md:pr-8 shrink-0">
          <p className="font-display text-[28px] sm:text-[32px] font-extrabold text-white leading-none">18,000+</p>
          <p className="text-[13px] text-white/60 mt-1">Businesses trust Plumeo</p>
        </div>
        <div className="w-full flex-1 min-w-0 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="text-white/55 font-display font-bold tracking-[0.2em] text-[16px] sm:text-[18px]">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Work Examples ---------------- */
function WorkExamples() {
  const tabs = [
    { id: "featured", label: "Featured", Icon: Sparkles },
    { id: "posts", label: "Posts", Icon: ImageIcon },
    { id: "videos", label: "Videos", Icon: Video },
    { id: "ugc", label: "UGC", Icon: Instagram },
  ] as const;
  type TabId = typeof tabs[number]["id"];
  const [active, setActive] = useState<TabId>("featured");

  const sets: Record<TabId, { src: string; tag: string }[]> = {
    featured: [
      { src: work1, tag: "Wellness" }, { src: work2, tag: "Laundry" },
      { src: work3, tag: "Pet Care" }, { src: work4, tag: "Travel" },
      { src: work5, tag: "Real Estate" }, { src: work6, tag: "SaaS" },
      { src: work1, tag: "Coffee" }, { src: work2, tag: "Fitness" },
    ],
    posts: [
      { src: work2, tag: "Beauty" }, { src: work3, tag: "Food & Bev" },
      { src: work4, tag: "Health" }, { src: work5, tag: "Home" },
      { src: work6, tag: "Products" }, { src: work1, tag: "Pro Services" },
      { src: work3, tag: "Real Estate" }, { src: work4, tag: "SaaS & Tech" },
    ],
    videos: [
      { src: work5, tag: "Beauty" }, { src: work6, tag: "B2B" },
      { src: work1, tag: "Food & Bev" }, { src: work2, tag: "Wellness" },
      { src: work3, tag: "Home" }, { src: work4, tag: "Personal" },
      { src: work5, tag: "Products" }, { src: work6, tag: "Pro Services" },
    ],
    ugc: [
      { src: work4, tag: "Creator" }, { src: work5, tag: "Unboxing" },
      { src: work6, tag: "Review" }, { src: work1, tag: "Tutorial" },
      { src: work2, tag: "Lifestyle" }, { src: work3, tag: "Story" },
      { src: work4, tag: "Behind the scenes" }, { src: work5, tag: "Demo" },
    ],
  };

  const items = sets[active];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[14px] font-semibold text-[#0EA5E9] uppercase tracking-wider mb-3">Our Work</p>
          <h2 className="font-display text-[40px] lg:text-[52px] font-extrabold text-[#0F172A] leading-tight">Examples of our work</h2>
          <p className="mt-4 text-[17px] text-[#0F172A]/70">Hand-crafted content that looks like it belongs on a brand's feed — not on a stock photo site.</p>
        </div>

        <div className="mx-auto mb-8 grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 rounded-2xl bg-white border border-border shadow-card max-w-4xl">
          {tabs.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center justify-center gap-2 h-12 rounded-xl text-[14px] font-semibold transition ${
                  isActive
                    ? "bg-[#0EA5E9] text-white shadow-pop"
                    : "text-[#0F172A]/70 hover:bg-[#EFF6FF]"
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            );
          })}
        </div>

        <div key={active} className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up">
          {items.map((it, i) => (
            <div key={`${active}-${i}`} className="group relative rounded-2xl overflow-hidden bg-muted aspect-square shadow-card hover:shadow-pop transition">
              <img src={it.src} alt={it.tag} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-semibold text-[#0F172A]">{it.tag}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border-2 border-[#0F172A] text-[#0F172A] font-semibold hover:bg-[#0F172A] hover:text-white transition">
            View all examples <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Guarantee Section ---------------- */
function Guarantee() {
  const steps = [
    { d: "Day 0", t: "Pick a plan", desc: "Choose a package and tell us about your brand in a 10-minute onboarding." },
    { d: "Day 1–3", t: "Strategy + setup", desc: "We build your content strategy, brand voice, and posting calendar." },
    { d: "Day 4–10", t: "First content batch", desc: "Your dedicated creator ships a full month of posts for your review." },
    { d: "Day 14", t: "100% refund window", desc: "Not happy with anything? Cancel for a full refund — no questions asked." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-[#EFF6FF]">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1.5 mb-5">
            <ShieldCheck className="h-4 w-4 text-[#0EA5E9]" />
            <span className="text-[13px] font-semibold text-[#0F172A]">Risk-free guarantee</span>
          </div>
          <h2 className="font-display text-[40px] lg:text-[52px] font-extrabold text-[#0F172A] leading-tight">
            14 days to fall in love — <span className="text-[#0EA5E9]">or your money back.</span>
          </h2>
          <p className="mt-5 text-[17px] text-[#0F172A]/70">
            We've built the most accountable agency on the planet. If our first batch of content doesn't blow you away,
            cancel within 14 days and we'll refund every dollar. Most agencies lock you in for 6 months. We earn your stay every month.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {["No long contracts", "Cancel anytime", "Unlimited revisions", "Same-day support"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-[15px] text-[#0F172A] font-medium">
                <Check className="h-4 w-4 text-[#10B981]" /> {t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#0EA5E9] to-[#10B981]" />
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-card border border-border ml-0 relative">
                <div className="relative z-10 h-12 w-12 shrink-0 rounded-full bg-white border-2 border-[#0EA5E9] flex items-center justify-center font-display font-bold text-[#0EA5E9] -ml-0">
                  {i + 1}
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#0EA5E9] uppercase tracking-wider">{s.d}</p>
                  <p className="font-display text-[18px] font-bold text-[#0F172A] mt-1">{s.t}</p>
                  <p className="text-[14px] text-[#0F172A]/70 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    {
      Icon: ImageIcon,
      tag: "SOCIAL MEDIA",
      name: "Social Media Posts",
      desc: "Static, single-image social media content created & posted monthly to your channels.",
      price: "$99",
      options: ["10 posts - $99/mo", "20 posts - $179/mo", "30 posts - $249/mo"],
    },
    {
      Icon: Video,
      tag: "SOCIAL MEDIA",
      name: "Short-Form Videos",
      desc: "Simple 15-60 second videos for TikTok, Reels, and Shorts.",
      price: "$149",
      options: ["5 videos - $149/mo", "10 videos - $279/mo", "20 videos - $499/mo"],
    },
    {
      Icon: Sparkles,
      tag: "UGC",
      name: "UGC Videos",
      desc: "Authentic creator videos from a network of 1,200+ approved creators.",
      price: "$349",
      options: ["3 videos - $349/mo", "6 videos - $649/mo", "10 videos - $999/mo"],
    },
  ];
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-[44px] lg:text-[56px] font-extrabold text-[#0F172A] leading-tight">All Services</h2>
          <p className="mt-4 text-[16px] text-[#0F172A]/70">Get your creative & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map(({ Icon, tag, name, desc, price, options }) => (
            <div key={name} className="rounded-2xl bg-white border border-border p-7 hover:shadow-pop transition flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="h-11 w-11 rounded-xl bg-[#F1F5F9] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#0F172A]" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-[#0F172A]/70 bg-[#F1F5F9] rounded-full px-3 py-1">{tag}</span>
              </div>
              <h3 className="font-display text-[22px] font-bold text-[#0F172A]">{name}</h3>
              <p className="text-[14px] text-[#0F172A]/65 mt-2 leading-relaxed min-h-[42px]">{desc}</p>
              <div className="mt-6">
                <p className="font-display text-[42px] font-extrabold text-[#0F172A] leading-none">{price}</p>
                <p className="text-[13px] text-[#0F172A]/60 mt-1">Pricing from</p>
              </div>
              <select className="mt-5 h-12 w-full rounded-xl border border-border bg-white px-4 text-[14px] text-[#0F172A] focus:outline-none focus:border-[#0EA5E9]">
                {options.map((o) => <option key={o}>{o}</option>)}
              </select>
              <button className="mt-3 h-12 w-full rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold transition inline-flex items-center justify-center gap-2">
                Checkout <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#" className="mt-3 text-center text-[14px] font-semibold text-[#0EA5E9] hover:underline">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Monthly Deliverables ---------------- */
function Deliverables() {
  const items = [
    { n: "30", t: "Posts per month", d: "Static graphics, carousels, photo edits — all on-brand." },
    { n: "12", t: "Short-form videos", d: "Reels, TikToks & Shorts with captions and trending audio." },
    { n: "4", t: "Strategy calls", d: "Weekly check-ins with your dedicated account manager." },
    { n: "∞", t: "Revisions", d: "Unlimited tweaks until every post is exactly right." },
    { n: "1", t: "Branded content kit", d: "Refreshed monthly with new templates and on-trend looks." },
    { n: "24/7", t: "Slack-style support", d: "Message us anytime in our shared client workspace." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-[#0F172A] text-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-[14px] font-semibold text-[#10B981] uppercase tracking-wider mb-3">What you get</p>
            <h2 className="font-display text-[40px] lg:text-[52px] font-extrabold leading-tight">Every month, delivered like clockwork.</h2>
          </div>
          <p className="lg:col-span-5 text-[17px] text-white/70">
            One flat fee. One dedicated team. A full month of done-for-you content, ads, and reporting — every single month.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {items.map((it) => (
            <div key={it.t} className="bg-[#0F172A] p-8">
              <p className="font-display text-[56px] font-extrabold text-[#0EA5E9] leading-none">{it.n}</p>
              <p className="font-display text-[20px] font-bold mt-3">{it.t}</p>
              <p className="text-[14px] text-white/65 mt-2">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    { n: "Maya Patel", r: "Owner, Folio Coffee", a: avatar1, t: "Plumeo turned our Instagram into our #1 sales channel. We went from 800 to 24k followers in 5 months and our DMs are full of new wholesale leads every week." },
    { n: "Daniel Okafor", r: "Founder, Northwind Athletics", a: avatar2, t: "I've worked with 4 agencies. None came close. The content quality, the speed, the strategy — Plumeo is just on another level. They feel like part of our team." },
    { n: "Sara Lindqvist", r: "CMO, Lumina Skincare", a: avatar3, t: "Our ROAS went from 1.8x to 5.4x in the first 90 days. The creative testing they run on Meta is genuinely the best I've seen in 12 years of e-comm marketing." },
    { n: "Jamal Reeves", r: "CEO, Atlas Studio", a: avatar2, t: "We post 4x more content, our engagement is up 280%, and I get my evenings back. The shared workspace makes approvals genuinely fun. Wild thing to say about an agency." },
    { n: "Hannah Chen", r: "Marketing Lead, Parable", a: avatar1, t: "The 14-day guarantee is what got me in. The first content drop is what made me sign for a year. Their creators get our brand voice better than we do." },
    { n: "Marco Visconti", r: "Owner, Aurora Restaurants", a: avatar3, t: "Bookings up 38% across our 3 locations since we started. The food content alone is worth twice what we pay. Plumeo is a no-brainer for any restaurant group." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-[#EFF6FF] overflow-hidden">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex flex-wrap justify-center items-center gap-2 mb-3">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-[#0EA5E9] text-[#0EA5E9]" />)}</div>
            <span className="text-[15px] font-semibold text-[#0F172A]">4.9 from 650+ reviews</span>
          </div>
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[52px] font-extrabold text-[#0F172A] leading-tight">Loved by ambitious brands.</h2>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-5 animate-marquee w-max">
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="w-[300px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-6 shadow-card border border-border">
              <div className="flex">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-[#0EA5E9] text-[#0EA5E9]" />)}</div>
              <p className="mt-4 text-[15px] text-[#0F172A] leading-relaxed">"{r.t}"</p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                <img src={r.a} alt="" loading="lazy" className="h-10 w-10 rounded-full object-cover shrink-0" />
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-[#0F172A] truncate">{r.n}</p>
                  <p className="text-[12px] text-[#0F172A]/60 truncate">{r.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Instagram-style Gallery ---------------- */
function SocialGallery() {
  const grid = [work1, work2, work3, work4, work5, work6, work2, work1, work3, work4, work5, work6];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-[14px] font-semibold text-[#0EA5E9] uppercase tracking-wider mb-3">Social Gallery</p>
            <h2 className="font-display text-[40px] lg:text-[52px] font-extrabold text-[#0F172A] leading-tight">Built for the feed. Designed to convert.</h2>
          </div>
          <p className="lg:col-span-5 text-[17px] text-[#0F172A]/70">
            Every post is crafted to stop the scroll, build the brand, and move people toward purchase. No filler. No templates.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {grid.map((src, i) => (
            <a key={i} href="#" className="group relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img src={src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/60 transition flex items-center justify-center gap-4 text-white opacity-0 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-[13px] font-semibold"><Heart className="h-4 w-4 fill-white" /> 4.2k</span>
                <span className="flex items-center gap-1.5 text-[13px] font-semibold"><MessageSquare className="h-4 w-4" /> 218</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Before & After ---------------- */
function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28 bg-[#0F172A] text-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[14px] font-semibold text-[#10B981] uppercase tracking-wider mb-3">Before & After</p>
          <h2 className="font-display text-[40px] lg:text-[52px] font-extrabold leading-tight">Real brands. Real glow-ups.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {[
            { tag: "Before", title: "Inconsistent feed", desc: "Random posts. Mismatched colors. Long quiet periods.", src: work4 },
            { tag: "After", title: "Cohesive brand engine", desc: "Daily on-brand content with a clear visual language.", src: work2 },
          ].map((b, i) => (
            <div key={i} className={`rounded-3xl overflow-hidden ${i === 1 ? "ring-2 ring-[#10B981]" : "ring-1 ring-white/10"}`}>
              <div className="relative aspect-[4/3] bg-muted">
                <img src={b.src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[12px] font-bold ${i === 1 ? "bg-[#10B981] text-white" : "bg-white/90 text-[#0F172A]"}`}>{b.tag}</span>
              </div>
              <div className="p-6 bg-[#0F172A]">
                <h3 className="font-display text-[24px] font-bold">{b.title}</h3>
                <p className="text-white/65 mt-2">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[{ k: "+312%", v: "Engagement" }, { k: "+18k", v: "New followers" }, { k: "5.4x", v: "ROAS" }].map((s) => (
            <div key={s.v} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
              <p className="font-display text-[40px] font-extrabold text-[#10B981]">{s.k}</p>
              <p className="text-white/70 mt-1">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */
function Features() {
  const feats = [
    { Icon: Calendar, t: "Smart content calendar", d: "See every post, story, and ad scheduled across all your channels in one beautiful view." },
    { Icon: Zap, t: "Same-day turnarounds", d: "Need something fast? Our team ships revisions and rush posts within 24 hours." },
    { Icon: Users, t: "Dedicated creator team", d: "You'll be matched with a strategist, designer, copywriter, and videographer." },
    { Icon: TrendingUp, t: "Monthly growth reports", d: "Clear, jargon-free analytics that show exactly what's working and what's next." },
    { Icon: Award, t: "Award-winning craft", d: "Our work has been featured in Adweek, Fast Company, and The Webby Awards." },
    { Icon: Clock, t: "Get 20+ hours back", d: "Stop wrestling Canva at midnight. We handle every pixel so you can run the business." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[14px] font-semibold text-[#0EA5E9] uppercase tracking-wider mb-3">Why Plumeo</p>
          <h2 className="font-display text-[40px] lg:text-[52px] font-extrabold text-[#0F172A] leading-tight">Built for brands that ship.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feats.map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-[#EFF6FF]/50 border border-border p-7 hover:bg-[#EFF6FF] transition">
              <div className="h-12 w-12 rounded-xl bg-white shadow-card flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-[#0EA5E9]" />
              </div>
              <h3 className="font-display text-[20px] font-bold text-[#0F172A]">{t}</h3>
              <p className="text-[15px] text-[#0F172A]/70 mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */
function TeamCard({ n, r, img, dur }: { n: string; r: string; img: string; dur: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  return (
    <div className="group rounded-2xl bg-white overflow-hidden shadow-card hover:shadow-pop transition">
      <div className="relative aspect-[4/5] bg-muted overflow-hidden cursor-pointer" onClick={toggle}>
        <video
          ref={ref}
          src={img}
          loop
          muted
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition">
            <div className="w-16 h-16 rounded-xl bg-[#2563EB] flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        )}
        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 px-2 py-1.5 rounded-md bg-black/40 backdrop-blur-sm text-white text-[12px]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M8 5v14l11-7z"/></svg>
          <span>{dur}</span>
          <div className="flex-1 h-[2px] bg-white/40 rounded-full" />
          <span className="tracking-widest">···</span>
        </div>
      </div>
      <div className="p-4">
        <p className="font-display text-[16px] font-bold text-[#0F172A]">{n}</p>
        <p className="text-[13px] text-[#0F172A]/60">{r}</p>
      </div>
    </div>
  );
}

function Team() {
  const team = [
    { n: "Alex Rivera", r: "Creative Director", img: team1, dur: "0:30" },
    { n: "Jordan Kim", r: "Head of Strategy", img: team2, dur: "0:44" },
    { n: "Priya Menon", r: "Lead Designer", img: team3, dur: "0:33" },
    { n: "Marcus Wahl", r: "Video Director", img: team4, dur: "0:31" },
    { n: "Eli Tanaka", r: "Performance Lead", img: team2, dur: "0:28" },
    { n: "Nadia Brooks", r: "Account Director", img: team1, dur: "0:42" },
    { n: "Sam Holloway", r: "Senior Copywriter", img: team4, dur: "0:36" },
    { n: "Riley Park", r: "Community Manager", img: team3, dur: "0:29" },
  ];
  return (
    <section className="py-20 lg:py-28 bg-[#EFF6FF]">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[14px] font-semibold text-[#10B981] uppercase tracking-wider mb-3">Team</p>
          <h2 className="font-display text-[40px] lg:text-[52px] font-extrabold text-[#0F172A] leading-tight">180+ humans. Zero AI shortcuts.</h2>
          <p className="mt-4 text-[17px] text-[#0F172A]/70">Every post, video, and ad is made by a vetted creator who's spent years in the trenches of social media.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((t) => (
            <TeamCard key={t.n} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Collaboration ---------------- */
function Collaboration() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[14px] font-semibold text-[#0EA5E9] uppercase tracking-wider mb-3">Collaboration</p>
          <h2 className="font-display text-[40px] lg:text-[52px] font-extrabold text-[#0F172A] leading-tight">Your team and ours, in one shared workspace.</h2>
          <p className="mt-5 text-[17px] text-[#0F172A]/70">
            Review every post, leave pixel-perfect feedback, and approve content with a click. No more email threads, screenshot annotations, or "did you see my last message?"
          </p>
          <div className="mt-7 space-y-3">
            {[
              "Comment directly on any post or video",
              "Approve or request changes in one click",
              "Real-time notifications across web & mobile",
              "Brand assets, guidelines & history in one place",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 text-[15px] text-[#0F172A]">
                <div className="h-6 w-6 rounded-full bg-[#10B981] grid place-items-center"><Check className="h-3.5 w-3.5 text-white" /></div>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-[#0EA5E9]/10 to-[#10B981]/10 p-6 border border-border shadow-card">
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
            <div className="px-5 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><span className="h-2.5 w-2.5 rounded-full bg-green-400" /></div>
              <span className="text-[12px] text-[#0F172A]/60 ml-2">workspace.plumeo.com</span>
            </div>
            <div className="grid grid-cols-3">
              <div className="border-r border-border p-4">
                <p className="text-[11px] font-semibold text-[#0F172A]/60 uppercase mb-3">This week</p>
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
                  <div key={d} className={`flex items-center justify-between py-2 text-[13px] ${i === 1 ? "font-semibold text-[#0EA5E9]" : "text-[#0F172A]/70"}`}>
                    <span>{d}</span><span>{3 - (i % 3)} posts</span>
                  </div>
                ))}
              </div>
              <div className="col-span-2 p-4">
                <img src={work3} alt="" loading="lazy" className="rounded-lg w-full aspect-[4/3] object-cover" />
                <div className="mt-3 space-y-2.5">
                  {[
                    { who: "You", msg: "Love this — can we test a warmer caption?", color: "bg-[#0EA5E9]" },
                    { who: "Priya · Designer", msg: "On it. New version in 20 min ✨", color: "bg-[#10B981]" },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <div className={`h-7 w-7 rounded-full ${c.color} text-white text-[11px] font-bold grid place-items-center shrink-0`}>{c.who.slice(0,1)}</div>
                      <div className="rounded-xl bg-muted px-3 py-2 text-[13px] text-[#0F172A]">
                        <span className="font-semibold mr-1">{c.who}</span>{c.msg}
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-2 h-9 rounded-lg bg-[#10B981] text-white font-semibold text-[13px] inline-flex items-center justify-center gap-1.5">
                    <Check className="h-4 w-4" /> Approve post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "How fast do you deliver the first batch of content?", a: "Most clients see their first full content batch within 7 days of kickoff. Rush onboarding is available — ask your account manager." },
    { q: "Do I own the content you create for me?", a: "Yes — 100%. Every asset, video, and caption is yours forever, even if you cancel." },
    { q: "What platforms do you support?", a: "Instagram, TikTok, Facebook, LinkedIn, X, YouTube, Pinterest, Threads, and your blog/email channels." },
    { q: "Can I switch plans or pause anytime?", a: "Yes. Upgrade, downgrade, or pause with one click — no contracts, no fees." },
    { q: "Is there a minimum commitment?", a: "Nope. Plumeo is month-to-month and backed by our 14-day money-back guarantee." },
    { q: "How is Plumeo different from a freelancer?", a: "You get a full team — strategist, designer, copywriter, video editor, account manager — for less than the cost of one senior freelancer." },
    { q: "Do you handle paid ad budgets?", a: "We manage the campaigns; the ad spend is paid directly to the platforms with your card so you keep full control." },
    { q: "What if I'm not happy with the content?", a: "Unlimited revisions on every deliverable. And within the first 14 days, you can cancel for a full refund — no questions asked." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-[#EFF6FF]">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-[14px] font-semibold text-[#0EA5E9] uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="font-display text-[40px] lg:text-[52px] font-extrabold text-[#0F172A] leading-tight">Questions, answered.</h2>
          <p className="mt-5 text-[17px] text-[#0F172A]/70">Can't find what you're looking for? Book a free 20-minute call with our team.</p>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[#0F172A] text-white font-semibold">
            Book a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4">
                <span className="font-display text-[17px] font-bold text-[#0F172A]">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-[#0F172A]/50 transition shrink-0 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[15px] text-[#0F172A]/70 leading-relaxed animate-fade-up">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function FinalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0EA5E9] to-[#10B981] p-10 lg:p-16 text-center text-white shadow-pop">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)" }} />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-[40px] lg:text-[56px] font-extrabold leading-tight">Ready to make your brand impossible to scroll past?</h2>
            <p className="mt-5 text-[18px] text-white/90">Plans from $99/mo. 14-day money-back guarantee. Cancel anytime.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="#pricing" className="inline-flex h-12 items-center px-6 rounded-xl bg-white text-[#0F172A] font-semibold hover:bg-white/90 transition">View Pricing</a>
              <a href="#contact" className="inline-flex h-12 items-center gap-2 px-6 rounded-xl bg-[#0F172A] text-white font-semibold hover:bg-[#0F172A]/90 transition">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cols = [
    { title: "Services", items: ["Social Media", "Short-Form Video", "Meta Ads", "Google Ads", "SEO Blog Posts", "Backlinks", "Email Design", "UGC Videos"] },
    { title: "Company", items: ["About", "Careers", "Press", "Contact", "Partners", "Affiliates"] },
    { title: "Resources", items: ["Blog", "Case Studies", "Guides", "Templates", "Help Center", "API"] },
    { title: "Legal", items: ["Terms", "Privacy", "Security", "Cookies", "DPA", "Status"] },
  ];
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-4">
            <Logo className="[&_span]:text-white" />
            <p className="mt-5 text-[15px] text-white/65 max-w-sm">The growth-focused social media agency for small businesses. 180+ creators. 18,000+ brands. One simple monthly fee.</p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Ic, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-lg bg-white/5 hover:bg-[#0EA5E9] transition grid place-items-center">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <p className="font-display text-[14px] font-bold uppercase tracking-wider text-white/90 mb-4">{c.title}</p>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}><a href="#" className="text-[14px] text-white/65 hover:text-white">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row gap-4 justify-between items-center text-[13px] text-white/55">
          <p>© {new Date().getFullYear()} Plumeo, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><Globe className="h-4 w-4" /> English (US)</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#10B981]" /> SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */
function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WorkExamples />
        <Guarantee />
        <Services />
        <Deliverables />
        <Testimonials />
        <SocialGallery />
        <BeforeAfter />
        <Features />
        <Team />
        <Collaboration />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
