import { Table, Card, Button,Modal } from "antd";
import Header from "../components/header/Header";
import { useState } from "react";

const CartPage = () => {
  const [isModalOpen,setIsmodalOpen]=useState(false)
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <>
      <Header />
      <div className="px-6">
        <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
              <div className="flex justify-between">
                <span>Ara Toplam</span>
                <span>59.00 £</span>
              </div>
              <div className="flex justify-between my-2">
                <span>KDV Toplam % 20</span>
                <span className="text-red-600">+43.92 £</span>
              </div>
              <div className="flex justify-between">
                <b>Toplam</b>
                <b>592.92 £</b>
              </div>
              <Button onClick={()=>setIsmodalOpen(true)} className="mt-4 w-full" type="primary" size="large">Siparis Olustur</Button>
          </Card>

        </div>
      </div>
      <Modal title="Fatura Olustur" open={isModalOpen} footer={false} onCancel={()=>setIsmodalOpen(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      {console.log(isModalOpen)}
    </>
  );
};

export default CartPage;
