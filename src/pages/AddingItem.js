import React,{useRef, useState} from "react";
import { Button, Form, Segment, Ref } from "semantic-ui-react";
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 
import {Db} from '../config/FbConfig';


function AddingItem() {

  
    
     // Get a reference to the storage service
     const storage = getStorage();
    

      // Reference to title input
      const titleRef =useRef();
    //Reference to price input
     const priceRef = useRef();
     //Reference to category input
     const categoryRef = useRef();
     // Reference to short_despcription
     const short_descriptionRef = useRef();

     // creating state variable for saving image
      const [image,saveImage] = useState(null);
     //getting image from form handler
     function getImage(event){
      saveImage(event.target.files[0])
    }

     //Form submittion handler
    function submithandler(e){
      e.preventDefault()

      // Create a storage reference from our storage service
     const storageRef = ref(storage,'image'+ Date.now())

     //uploading image
      uploadBytes(storageRef,image).then((snapshot)=>{
        console.log(snapshot)
        getDownloadURL(ref(storage, snapshot.metadata.fullPath)).then((imageUrl)=>{
       
      const formInputs= {
        title: titleRef.current.lastChild.lastChild.value,
        image:imageUrl,
        price: priceRef.current.lastChild.lastChild.value,
        category: categoryRef.current.lastChild.lastChild.value,
        short_description: short_descriptionRef.current.lastChild.lastChild.value
      }
       addDoc(collection(Db, "Products"), formInputs).then(()=>{window.location.reload()})
    })
  })
    
      }


  return (
    <Segment inverted>
      <Form inverted  onSubmit={submithandler} >
        <Form.Group widths="equal">
        <Ref innerRef={titleRef}><Form.Input fluid label="title" placeholder="title" required/></Ref>
         <Form.Input fluid label="image" accept="image/*" type ="file" onChange={getImage} required/>
        </Form.Group>
        <Ref innerRef={priceRef}><Form.Input fluid label="price" type ="number" placeholder="лв.00" required/></Ref>
        <Ref innerRef={categoryRef}><Form.Input fluid label="category" placeholder="category" required/></Ref>
        <Ref innerRef={short_descriptionRef}><Form.Input fluid label="short description" required/></Ref>

        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  );
}
export default AddingItem;
