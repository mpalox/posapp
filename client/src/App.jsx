import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
function App() {
  return (
    <>
      <Header/>
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] pb-64">
          <Categories/>
        </div>
        <div className="flex-[8]">
          Products        
        </div>
        <div className="">
          <div>Cart Totals</div>
        </div>

      </div>
    </>
  );
}

export default App;
