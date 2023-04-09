import { Button, Form, Input, Carousel } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";
const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Kullanici Adi"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Kullanici Adi Alani Bos Birakilamaz!",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="E-Mail"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "E-mail Alani Bos Birakilamaz!",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="Sifre"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Sifre Alani Bos Birakilamaz!",
                },
              ]}
            >
              <Input.Password></Input.Password>
            </Form.Item>

            <Form.Item
              label="Sifre Tekrar"
              name={"passwordAgain"}
              rules={[
                {
                  required: true,
                  message: "Sifre Tekrar Alani Bos Birakilamaz!",
                },
              ]}
            >
              <Input.Password></Input.Password>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Kaydol
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center mt-auto absolute left-0 bottom-10 w-full">
            Bir hesabınız var mı? &nbsp;{" "}
            <Link to="/login" className="text-blue-600">
              Şimdi giriş yap
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel className="!h-full px-6">
                <AuthCarousel
                  image="/img/responsive.svg"
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
                <AuthCarousel
                  image="/img/statistic.svg"
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  image="/img/customer.svg"
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  image="/img/admin.svg"
                  title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
