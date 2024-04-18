import { ButtonIcon, ModeToggle } from '.';

const LINKED_IN_URL = process.env.LINKED_IN_URL;
const GIT_HUB_URL = process.env.GIT_HUB_URL;

export default function Header() {
  return (
    <div className="absolute right-10 top-10 flex space-x-2">
      <ButtonIcon href={LINKED_IN_URL} icon={<i class="fa-brands fa-linkedin" />} />

      <ButtonIcon href={GIT_HUB_URL} icon={<i class="fa-brands fa-github" />} />

      <ModeToggle />
    </div>
  );
}
