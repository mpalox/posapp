import React from 'react'
import {Modal,Form,Input,Button, message} from "antd"
const Add = ({isAddModalOpen, setIsAddModalOpen,categories,setCategories}) => {
    const [form]=Form.useForm();
    const onFinish = (values)=>{
        try {
            fetch("http://localhost:5000/api/categories/add-category",{
                method:"POST",
                body:JSON.stringify(values),
                headers:{
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });
            message.success("Kategori basariyla eklendi");
            form.resetFields();
            setCategories([...categories,{
                _id:Math.random(),
                title:values.title
            }]);
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <div>
       <Modal   title="Yeni Kategori Ekle"
                open={isAddModalOpen}
                onCancel={()=>setIsAddModalOpen(false)}
                footer={false}
        >
            <Form layout="vertical" onFinish={onFinish} form={form}>
                <Form.Item  name="title" label="Kategori Ekle"
                            rules={[{required:true,message:"Kategori Adi Bos gecilemez!"}]}>
                    <Input />
                </Form.Item>

                <Form.Item className="flex justify-end mb-0">
                    <Button type="primary" htmlType="submit">Olustur</Button>
                </Form.Item>
            </Form>
        </Modal>
    </div>
  )
}

export default Add
