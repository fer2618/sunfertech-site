"use client";
import { useEffect, useId, useMemo, useRef, useState } from "react";

// Helpers -----------------------------------------------------
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// Componente --------------------------------------------------
export default function WhatsAppAssistWidget({
  buttonLabel = "Falar no WhatsApp",
  preset = {
    greeting: "Olá! Preciso de ajuda com um reparo.",
    askName: "Meu nome é",
    askModel: "Modelo do aparelho",
    askIssue: "Problema relatado",
  },
}: {
  buttonLabel?: string;
  preset?: {
    greeting?: string;
    askName?: string;
    askModel?: string;
    askIssue?: string;
  };
}) {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const nameId = useId();
  const modelId = useId();
  const issueId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("");

  // Carrega dados salvos
  useEffect(() => {
    try {
      const savedName = localStorage.getItem("wa_name");
      const savedModel = localStorage.getItem("wa_model");
      if (savedName) setName(savedName);
      if (savedModel) setModel(savedModel);
    } catch {}
  }, []);

  // Foco ao abrir
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => firstFieldRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Fecha ao apertar ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const message = useMemo(() => {
    const parts = [preset.greeting?.trim()].filter(Boolean) as string[];
    if (name.trim()) parts.push(`${preset.askName}: ${name.trim()}`);
    if (model.trim()) parts.push(`${preset.askModel}: ${model.trim()}`);
    if (issue.trim()) parts.push(`${preset.askIssue}: ${issue.trim()}`);
    return parts.join("\n");
  }, [name, model, issue, preset]);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!issue.trim()) {
      alert("Descreva rapidamente o problema para agilizar o atendimento.");
      return;
    }

    try {
      if (name.trim()) localStorage.setItem("wa_name", name.trim());
      if (model.trim()) localStorage.setItem("wa_model", model.trim());
    } catch {}

    setSending(true);

    // Usa o endpoint /wpp para centralizar o número da assistência no server
    const url = `/wpp?text=${encodeURIComponent(
      message
    )}&utm_source=site&utm_medium=widget&utm_campaign=atendimento`;

    // ✅ Abre em nova aba SEM redirecionar a atual.
    // 1) Tenta via window.open
    const w = window.open(url, "_blank", "noopener,noreferrer");

    // 2) Se o navegador bloquear o popup, cria um <a target="_blank"> e clica nele
    if (!w) {
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }

    // Fecha o modal e reseta estado (a aba atual permanece no site)
    setTimeout(() => {
      setSending(false);
      setOpen(false);
    }, 250);
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        type="button"
        onClick={handleOpen}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={cx(
          "fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full px-4 py-3 shadow-lg",
          "bg-green-500 hover:bg-green-600 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400",
          "transition-transform duration-150 active:scale-95"
        )}
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline">{buttonLabel}</span>
      </button>

      {/* Overlay / Modal */}
      {open && (
        <div
          role="presentation"
          onClick={(e) => {
            if (e.target === dialogRef.current) setOpen(false);
          }}
          ref={dialogRef}
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-[2px] p-4"
        >
          {/* Dialog */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="wa-modal-title"
            className={cx(
              "w-full max-w-md rounded-2xl border",
              "bg-white text-gray-900 border-gray-200",
              "dark:bg-neutral-900 dark:text-gray-100 dark:border-neutral-800",
              "shadow-xl"
            )}
          >
            <div className="flex items-center justify-between px-5 pt-5">
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="h-6 w-6" />
                <h2 id="wa-modal-title" className="text-lg font-semibold">
                  Atendimento rápido pelo WhatsApp
                </h2>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Fechar"
                className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-5 pb-5 pt-3 space-y-4">
              <div className="grid gap-3">
                <div>
                  <label htmlFor={nameId} className="block text-sm font-medium opacity-90">
                    Nome (opcional)
                  </label>
                  <input
                    ref={firstFieldRef}
                    id={nameId}
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputCls}
                    placeholder="Ex.: João"
                  />
                </div>

                <div>
                  <label htmlFor={modelId} className="block text-sm font-medium opacity-90">
                    Modelo (opcional)
                  </label>
                  <input
                    id={modelId}
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className={inputCls}
                    placeholder="Ex.: iPhone 12 / Galaxy S22 / Moto G"
                  />
                </div>

                <div>
                  <label htmlFor={issueId} className="block text-sm font-medium opacity-90">
                    Descreva o problema <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id={issueId}
                    required
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className={cx(inputCls, "min-h-[90px] resize-y")}
                    placeholder="Ex.: Não carrega, tela trincada, não liga, etc."
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Abriremos o WhatsApp em uma nova aba.
                </p>

                <button
                  type="submit"
                  disabled={sending}
                  className={cx(
                    "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium",
                    "bg-green-500 text-white hover:bg-green-600",
                    sending && "opacity-75 cursor-not-allowed",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                  )}
                >
                  {sending ? (
                    <span className="inline-flex items-center gap-2">
                      <Spinner className="h-4 w-4" /> Enviando…
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon className="h-4 w-4" /> Ir para o WhatsApp
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

const inputCls = cx(
  "mt-1 w-full rounded-lg border px-3 py-2 text-sm",
  "bg-white text-gray-900 placeholder:text-gray-400 border-gray-300",
  "focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400",
  "dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:border-neutral-700"
);

// Ícones ------------------------------------------------------
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.181 0 6.167 1.24 8.413 3.488a11.82 11.82 0 013.488 8.41c-.003 6.654-5.284 11.936-11.938 11.936a11.9 11.9 0 01-6.007-1.617L.057 24zm6.597-3.807c1.74 1.037 3.276 1.662 5.392 1.662 5.448 0 9.886-4.434 9.889-9.877.003-5.462-4.415-9.89-9.881-9.893-5.448 0-9.886 4.434-9.889 9.877 0 2.358.912 4.548 2.441 6.205l-.999 3.648 3.047-.622z"/>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.521-.075-.149-.672-1.612-.921-2.206-.242-.58-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.41.248-.69.248-1.282.173-1.41-.074-.128-.272-.198-.57-.347z"/>
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

