import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <div>
      <select
        onChange={(e) =>
          router.push(
            {
              pathname: router.pathname,
              query: router.query,
            },
            null,
            { locale: e.target.value },
          )
        }
      >
        <option value="de">Deutsch</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
