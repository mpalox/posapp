import { Modal, Form, Input, Select,Button,Card } from "antd";
const CreateBill = ({ isModalOpen, setIsmodalOpen }) => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <Modal
      title="Fatura Olustur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsmodalOpen(false)} 
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name={"costumerName"} label="Musteri Adi" rules={[{ required: true,message:"Musteri Adi Alani Bos Gecilemez" }]}>
          <Input placeholder="Bir Musteri Adi Yaziniz" />
        </Form.Item>

        <Form.Item label="Tel No" name={"phoneNumber"} rules={[{ required: true,message:"Telefon Alani Bos Gecilemez" }]}>
          <Input placeholder="Bir Tel No Yaziniz" maxLength={11} />
        </Form.Item>

        <Form.Item label="Odeme Yontemi" name={"paymentMode"} rules={[{ required: true,message:"Odeme Yontemi Bos Gecilemez" }]}>
          <Select placeholder="Bir Odeme Yontemi Seciniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Karti">Kredi Karti</Select.Option>
          </Select>
        </Form.Item>
       
          <Card>
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
            <div className="flex justify-end">
            <Button
              onClick={() => setIsmodalOpen(true)}
              className="mt-4" type="primary" htmlType="submit"
            >
              Siparis Olustur
            </Button>

            </div>
            
          </Card>
        
      </Form>
    </Modal>
  );
};
export default CreateBill;
