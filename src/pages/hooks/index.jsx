import { useState, useEffect } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import axios from "axios";
import CardNews from "../../components/element/CardNews";

const HooksPage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = "ef2a252c1e4946f1bd6b7b07df3745ca";
  const apiUrl = "https://newsapi.org/v2/everything";

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(apiUrl, {
        params: {
          q: query ? query : "tech",
          from: "2024-05-05",
          to: "2024-05-05",
          sortBy: "popularity",
          apiKey: apiKey,
        },
      });
      setSearchResults(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error searching:", error);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {

    handleSearch();
  }, []);

  console.log(searchResults);

  return (
    <BaseLayout>
      <div className="w-[90%] mx-auto">
        <div className="w-full flex flex-col relative mt-10">
          <div className="flex mb-10 gap-5">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Masukkan kata kunci pencarian..."
            />
            <button onClick={handleSearch} className="bg-green-400 hover:bg-green-600 rounded-md px-10 py-2">Search</button>
          </div>
          {loading && <p>Loading...</p>}
          <div className="flex flex-wrap gap-5 items-center justify-between">
            {searchResults.map((result, index) => (
              <CardNews
                key={index}
                imageUrl={result.urlToImage}
                title={result.title}
                description={result.description}
                source={result.source.name}
              />
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default HooksPage;
