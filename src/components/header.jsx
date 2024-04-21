import { ButtonIcon, LanguageToggle, ModeToggle } from '.';

const LINKED_IN_URL = process.env.LINKED_IN_URL;
const GIT_HUB_URL = process.env.GIT_HUB_URL;

export default function Header() {
  return (
    <div className="absolute right-4 top-4 flex space-x-2 md:right-10 md:top-10">
      <ButtonIcon href={LINKED_IN_URL} icon="fa-brands fa-linkedin" />

      <ButtonIcon href={GIT_HUB_URL} icon="fa-brands fa-github" />

      <ModeToggle />

      <LanguageToggle />
    </div>
  );
}
