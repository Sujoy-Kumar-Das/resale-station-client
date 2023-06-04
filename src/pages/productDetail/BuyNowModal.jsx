import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";

const BuyNowModal = ({ productDetail }) => {
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  console.log(productDetail);

  return (
    <>
      <Button onClick={openModal}>Buy Now</Button>
      <Modal dismissible show={show} onClose={closeModal}>
        <Modal.Header>{productDetail.model}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  placeholder="name@flowbite.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput id="password1" required type="password" />
              </div>
              <div className=" flex">
                <Button className=" me-5" onClick={closeModal}>Oreder Now</Button>
                <Button color="gray" onClick={closeModal}>
                  <p>Cancel</p>
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BuyNowModal;
