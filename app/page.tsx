'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Hello from './hello'
import AiComponent from './ai_parse'


export default function Home() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <section>
        <div>
          <h1>Api Test #1</h1>
          <Hello />
        </div>
      </section>

      <section>
        <AiComponent />
      </section>

      <section>
        Dummy block
      </section>

      <section>
        Dummy block
      </section>

    </main>
  )
}
