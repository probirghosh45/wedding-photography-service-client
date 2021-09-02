import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import ActionItems from './ActionItems';

const ManageProducts = ({setEditProduct}) => {


    const [items,setItems]=useState([]);

    useEffect(() => {
      axios.get('http://localhost:7500/products')
          .then(response => {
              setItems(response.data);
              // setLoading(false);
          })
          .catch(error => {
              console.log(error);
          })
  }, [])
  
   
  const handleDeleteItem = id => {
    const removedItems = items.filter(item => item._id !== id);
  
    axios.delete(`http://localhost:7500/delete/${id}`)
        .then(response => {
            response && setItems(removedItems);;
        })
        .catch(error => {
            console.log(error);
        })
  
      }


    return (
        <div className="px-5 pt-4 mx-md-4 mt-5 bg-white" style={{ borderRadius: "15px" }}>
        <Table hover borderless responsive>
            <thead className="bg-light">
                <tr>
                    <th>Product's Photo</th>
                    <th>Product's Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            {/* <ClipLoader loading={loading} css={loaderStyle} /> */}
            {
                items.map(item => <ActionItems item={item} key={item._id} handleDeleteItem={handleDeleteItem}  setEditProduct={setEditProduct} />)
            }
        </Table>
    </div>
    );
};

export default ManageProducts;