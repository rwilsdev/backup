import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const Home: NextPage = () => {
  const [count, setCount] = useState(null);

  function onClick() {
    fetch('/api/count', { method: 'POST' })
      .then((response) => response.text())
      .then(setCount);
  }
  return (
    <>
      <main>
        <Link href="/studio">
          <a>Go to Studio!</a>
        </Link>
        {count && <p>You clicked me {count} times.</p>}
        <button onClick={onClick}>Click Me!</button>
      </main>
    </>
  );
};

export default Home;
