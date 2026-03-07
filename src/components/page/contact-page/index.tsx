"use client";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ContactPage() {
  const tf = useTranslations("footer");
  const t = useTranslations("contactPage");
  const tc = useTranslations("common");

  const contactInfo = [
    { icon: MapPin, color: "text-blue-500", bg: "bg-blue-500/10", label: t("address"), value: tf("address") },
    { icon: Phone, color: "text-emerald-500", bg: "bg-emerald-500/10", label: t("phone"), value: tf("phone") },
    { icon: Mail, color: "text-violet-500", bg: "bg-violet-500/10", label: t("email"), value: tf("email") },
    { icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10", label: t("workingHours"), value: t("workingHoursValue") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-800 py-20 md:py-28">
        <div className="absolute -top-24 right-0 size-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative mx-4 max-w-[1344px] text-center md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase">
              {t("badge")}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t("title")}
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {t("desc")}
            </p>
          </m.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
        <div className="mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info cards */}
            <div className="space-y-5">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <div className="mb-3 h-1 w-10 rounded-full bg-blue-600" />
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {t("infoTitle")}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    {tf("brand")}
                  </p>
                </div>
              </m.div>

              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <m.div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index}
                  >
                    <div className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${item.bg}`}>
                      <Icon className={`size-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">
                        {item.value}
                      </p>
                    </div>
                  </m.div>
                );
              })}
            </div>

            {/* Contact Form */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 sm:p-8"
            >
              <h3 className="mb-6 text-lg font-bold text-slate-900">
                {t("formTitle")}
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase">
                      {t("fullName")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t("fullNamePlaceholder")}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase">
                      {t("phone")}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder={t("phonePlaceholder")}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {t("email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {t("subject")}
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  >
                    <option>{t("subjectStudy")}</option>
                    <option>{t("subjectLabor")}</option>
                    <option>{t("subjectJapanese")}</option>
                    <option>{t("subjectOther")}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder={t("messagePlaceholder")}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30 sm:w-auto"
                >
                  {tc("sendMessage")}
                  <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </m.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {t("mapTitle")}
            </h2>
          </m.div>
          <m.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl ring-1 ring-slate-200/70"
          >
            <iframe
              title="Company location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.886346455853!2d105.81316607561482!3d20.9971924888613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9047745e4f%3A0x990ea8c59191a297!2zMjA4IFAuIFRoxrDhu6NuZyDEkMOsbmgsIFRoxrDhu6NuZyDEkMOsbmgsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1755717834605!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </m.div>
        </div>
      </section>
    </>
  );
}
