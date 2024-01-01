'use client'

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/hello')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <main>
      <div>
        <h1>Response from Netlify Edge Function</h1>
        <p>{message}</p>
      </div>
    </main>
  )
}
