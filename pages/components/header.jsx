import { useTranslation } from "next-i18next";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <div>
        <Link href="/">
          <h2>
            {/* We simply give t() our translation key, and
                it renders its value in the active locale. */}
            {t("app_title")}
          </h2>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
