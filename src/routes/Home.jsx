import ListCategories from "../components/ListCategories.jsx";
import ListPosts from "../components/ListPosts";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet news</h2>
      </div>
      <ListCategories />
      <ListPosts url={'/posts'} />
    </main>
  );
};

export default Home;