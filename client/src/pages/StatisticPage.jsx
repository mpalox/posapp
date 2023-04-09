import Header from "../components/header/Header";
import StatisticCart from "../components/statistics/StatisticCart";

const StatisticPage = () => {
  
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Istatistikler
        </h1>
        <div className="statistic-section">
            <h2 className="text-lg">
                Hosgeldin {" "}
                <span className="text-green-700 font-bold text-xl">admin</span>
            </h2> 
            <div className="statistic-card grid xl:grid-cols-4 md:grid-col-2 my-10 md:gap-10 gap-4">
                <StatisticCart 
                    title={"Toplam Musteri"}
                    amount={"10"}
                    img={"img/user.png"}/>
                <StatisticCart  title={"Toplam Kazanç"}
                    amount={"266.84 ₺"}
                    img={"img/money.png"}/>
                <StatisticCart  title={"Toplam Satış"}
                    amount={"7"}
                    img={"img/sale.png"}/>
                <StatisticCart  title={"Toplam Ürün"}
                    amount={"26"}
                    img={"img/product.png"}/>
            
            </div>       
        </div>     
      </div>
      
    
    </>
  );
};

export default StatisticPage;
