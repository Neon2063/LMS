import React, { useEffect, useState } from 'react';

const StuBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:8000/api/v1/library/getbooks', { credentials: 'include' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data && data.Books) setBooks(data.Books);
        else setError('Unexpected response format');
      } catch (err) {
        setError(err.message || 'Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Books</h2>

      {loading && <p>Loading books...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((b) => (
            <div key={b._id} className="border rounded-lg shadow-sm p-4 bg-white">
              {b.image && <img src={b.image} alt={b.title} className="w-full h-40 object-cover rounded mb-3" />}
              <h3 className="font-semibold text-lg mb-1">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.author} · {b.publication}</p>
              {b.description && <p className="mt-2 text-sm text-gray-700">{b.description}</p>}
              <p className="mt-3 text-xs text-gray-400">{b.publishedDate || (b.createdAt ? new Date(b.createdAt).toLocaleDateString() : '')}</p>
            </div>
          ))}
          {books.length === 0 && <p className="mt-2 col-span-full">No books available.</p>}
        </div>
      )}
    </div>
  );
};

export default StuBooks
