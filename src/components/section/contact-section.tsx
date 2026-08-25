"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LiquidGrid from "@/components/background";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { SmoothInput } from "@/components/ui/input";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = `https://wa.me/${DATA.contact.tel.replace(/\D/g, "")}`;
const MAILTO_URL = `mailto:${DATA.contact.email}`;

export default function ContactSection() {
  const [message, setMessage] = useState("");

  const whatsappWithMsg = message.trim()
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message.trim())}`
    : WHATSAPP_URL;

  return (
    <Card className="relative mt-6 overflow-visible border-border/60">
      {/* ── LiquidGrid background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <LiquidGrid
          mode="dots"
          cellSize={18}
          lineWidth={1.2}
          radius={60}
          intensity={40}
          collide={false}
          clickRipple={false}
          style={{
            maskImage: "linear-gradient(to bottom, black 15%, transparent 65%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 15%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Label pill ── */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="border border-border bg-primary rounded-xl px-4 py-1">
          <span className="text-primary-foreground text-sm font-medium">
            Contato
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 sm:px-10 pt-14 pb-10 text-center">
        {/* heading */}
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Vamos conversar?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed text-balance">
            Me chama no WhatsApp ou manda um e-mail. Respondo rápido e sem
            burocracia.
          </p>
        </div>

        {/* ── Smooth input ── */}
        <div className="w-full max-w-lg">
          <SmoothInput
            size="lg"
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Mensagem rápida"
            wrapperClassName="rounded-xl"
          />
        </div>

        {/* ── Action buttons ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
          {/* WhatsApp */}
          <Link
            href={whatsappWithMsg}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 h-11 w-full rounded-xl px-5 text-sm font-semibold",
              "bg-[#25D366] text-white hover:bg-[#22c05e]",
              "border border-transparent transition-colors duration-200",
            )}
          >
            <Icons.whatsapp className="size-5 shrink-0" />
            WhatsApp
          </Link>

          {/* Email */}
          <Link
            href={MAILTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 h-11 w-full rounded-xl px-5 text-sm font-semibold",
              "border border-border bg-background text-foreground",
              "hover:bg-muted transition-colors duration-200",
            )}
          >
            <Mail className="size-5 shrink-0" />
            E-mail
          </Link>
        </div>
      </div>
    </Card>
  );
}
