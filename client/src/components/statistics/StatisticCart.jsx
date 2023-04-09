const StatisticCart = ({title,amount,img}) => {
  return (
    <div className="card-item bg-gray-800 p-8 rounded-lg">
    <div className="flex gap-x-4">
        <div className="rounded-full bg-white w-16 h-16 p-3">
            <img src={img} alt=""/>
         </div>
         <div className="text-white">
            <p className="mp-2 text-lg font-medium text-gray-400">
                {title}
            </p>
            <p className="text-xl font-semibold text-gray-200">
                {amount}
            </p>
         </div>
    </div>
</div>
  )
}

export default StatisticCart
