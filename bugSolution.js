```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

function MyComponent() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);
  if (data === null) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error: {error.message}</p>;
  } else {
    return (
      <div>
        <p>Data from API:</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

// pages/api/data.js

export default async function handler(req, res) {
  try {
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = { message: 'Hello from API!' };
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
```