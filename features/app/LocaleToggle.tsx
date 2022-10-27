import { FormEvent } from 'react';
import { useRouter } from 'next/router';
import { locales } from '../../shared/locale';

export default function LocaleToggle() {
  const router = useRouter();

  function changeLocale(e: FormEvent<HTMLSelectElement>) {
    router.push('/', undefined, { locale: (e.target as HTMLSelectElement).value });
  }

  return (
    <nav>
      <select onChange={changeLocale} defaultValue={router.locale}>
        {locales.map(locale => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </nav>
  );
}
