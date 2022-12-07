import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import { useDispatch } from "react-redux";

export function ProductModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [addProduct,setAddProduct] = useState({
        "name":"",
        "rating":"",
        "price":"",
        "img":""
    });
    const dispatch = useDispatch();

    const handelAdd=(e)=>{
        let {name,value} = e.target;
        setAddProduct({...addProduct,[name]:value})

    }

    const handleSubmit=()=>{
      console.log(addProduct)
    }
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>➕</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Product Image</FormLabel>
                <Input name="img" onChange={handelAdd} ref={initialRef} placeholder='Product Image' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Product Name</FormLabel>
                <Input name="name" onChange={handelAdd} placeholder='Product Name' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Product Price</FormLabel>
                <Input name="price" onChange={handelAdd} placeholder='Product Price' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Product Rating</FormLabel>
                <Input name="rating" onChange={handelAdd} placeholder='Product Rating' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
                Add Product
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }