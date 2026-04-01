import { getLocale } from "next-intl/server";
import { SettingsClient } from "./settings-client";

export default async function SettingsPage() {
  const locale = await getLocale();
  return <SettingsClient currentLocale={locale} />;
}
