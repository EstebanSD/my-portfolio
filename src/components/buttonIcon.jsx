'use client';

import { Button } from './ui';

export default function ButtonIcon({ href = '', icon }) {
  return (
    <Button variant="outline" size="icon" onClick={() => window.open(href, '_blank')}>
      <i aria-hidden className={icon} />
    </Button>
  );
}
