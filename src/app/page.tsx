import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";

const getData = async () => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=1&limitLicense=true`
  );
  return await res.json();
};

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <Header />
      <HomePage recipes={data.recipes} />
    </main>
  );
}
