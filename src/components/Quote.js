import { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.api-ninjas.com/v1/quotes?category=knowledge', {
          headers:
            { 'X-Api-Key': 'A5gXbih2P+SXXKb1RLdvfw==7imgYlRKUhRp6KRD' },
        });
        const apiData = await resp.json();
        const body = `${apiData[0].quote} - ${apiData[0].author}`;
        setQuote(body);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div className="quotes">
      <q className="quote">{quote}</q>
    </div>
  );
}

export default Quote;
