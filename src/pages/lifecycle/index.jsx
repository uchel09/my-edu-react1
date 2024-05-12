import { Component } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import axios from "axios";
import CardNews from "../../components/element/CardNews";

class LifecyclePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchResults: [],
      loading: false,
    };
    this.apiKey = "ef2a252c1e4946f1bd6b7b07df3745ca";
    this.apiUrl = "https://newsapi.org/v2/everything";
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSearch() {
    try {
      this.setState({ loading: true });
      const response = await axios.get(this.apiUrl, {
        params: {
          q: this.state.query ? this.state.query : "tech",
          from: "2024-05-05",
          to: "2024-05-05",
          sortBy: "popularity",
          apiKey: this.apiKey,
        },
      });
      this.setState({ searchResults: response.data.articles, loading: false });
    } catch (error) {
      console.error("Error searching:", error);
      this.setState({ loading: false });
    }
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  componentDidMount() {
    this.handleSearch();
  }

  render() {
    const { query, searchResults, loading } = this.state;
    return (
      <BaseLayout>
        <div className="w-[90%] mx-auto">
          <div className="w-full flex flex-col relative mt-10">
            <div className="flex mb-10 gap-5">
              <input
                type="text"
                value={query}
                onChange={this.handleChange}
                placeholder="Masukkan kata kunci pencarian..."
              />
              <button
                onClick={this.handleSearch}
                className="bg-green-400 hover:bg-green-600 rounded-md px-10 py-2"
              >
                Search
              </button>
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
  }
}

export default LifecyclePage;
