export default function JsonLd({ data }) {
  if (!data) return null;

  const cleanData = Array.isArray(data) ? data.filter(Boolean) : data;

  if (Array.isArray(cleanData) && cleanData.length === 0) {
    return null;
  }

  const payload = JSON.stringify(cleanData).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: payload }}
    />
  );
}
