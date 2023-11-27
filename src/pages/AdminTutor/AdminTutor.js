import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { storage_bucket } from "./../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import moment from "moment";
import {
  CreateCategoryAction,
  DeleteCategoryAction,
  GetListCategoryAction,
  GetListCategotyAction,
  UpdateCategoryAction,
} from "../../redux/action/CategoryAction";
import { GetListTutorAction } from "../../redux/action/TutorAction";

export default function AdminTutor() {
  const dispatch = useDispatch();
  const { arrTutor } = useSelector((root) => root.TutorReducer);
  console.log(arrTutor);
  let emptyProduct = {
    product_id: "0",
    image_url:""
  };

  const uploadFile = (e) => {
    let file = e.target.files[0];
    let fileRef = ref(storage_bucket, file.name);

    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          const updatedProduct = { ...product, image_url: url }; // Update achivementLogo property in product object
          setProduct(updatedProduct);
        });
      }
    );
  };

  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("Thêm mới gia sư");
  const [products, setProducts] = useState([]);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [tempProduct, setTempProduct] = useState({ ...emptyProduct });
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    const action = GetListTutorAction();
    dispatch(action);
  }, []);
  useEffect(() => {
    setProducts(arrTutor);
  }, [arrTutor]);

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };



  const saveProduct = async () => {
    setSubmitted(true);

    if (product.description) {
      let _products = [...products];
      let _product = { ...product };
      console.log(_product);
      if (product.product_id !== "0") {
        const index = findIndexById(product.id);

        _products[index] = _product;
        const action = await UpdateCategoryAction(product.category_id, product);
        await dispatch(action);
        setProductDialog(false);
        toast.current.show({
          severity: "success",
          summary: "Thành công",
          detail: `Cập nhật gia sư ${product.name} thành công`,
          life: 8000,
          options: {
            className: 'custom-margin-class',
          },
        });
        setText("Chỉnh sửa gia sư");
      } else {
        console.log(_product);
        const action = await CreateCategoryAction( product)
        await dispatch(action);
        toast.current.show({
          severity: "success",
          summary: "Thành công",
          detail: "Tạo  mới gia sư thành công",
          life: 3000,
        });
        setProductDialog(false);
      }

      // setProducts(_products);
      // setProductDialog(false);
      // setProduct(emptyProduct);
    }
  };

  const editProduct = (product) => {
    setText("Chỉnh sửa gia sư");
    setProduct({ ...product });
    setProductDialog(true);
    setTempProduct({ ...product });
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = async () => {
    const action = await DeleteCategoryAction(product.category_id);
    await dispatch(action);
    setDeleteProductDialog(false);
    setProduct(emptyProduct);
    toast.current.show({
      severity: "error",
      summary: "Thành công",
      detail: `Xóa gia sư ${product.name} thành công`,
      life: 3000,
      options: {
        style: {
          zIndex: 100,
          marginTop:'500px'
        },
      },
    });
  };

  const findIndexById = (id) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Deleted  Achivement",
      life: 3000,
    });
  };

  const onInputChange = (e, name) => {
    if (name === "achivementLogo") {
      uploadFile(e); // Call uploadFile function when achivementLogo value changes
    }

    const val = (e.target && e.target.value) || "";
    let _product = { ...product };

    _product[`${name}`] = val;

    setProduct(_product);

    const newValue = e.target.value;

    // Kiểm tra xem newValue có chứa các ký tự đặc biệt không mong muốn
    const forbiddenCharacters = /[@!#$%^&*]/g;

    if (!forbiddenCharacters.test(newValue)) {
      setInputValue(newValue);
      // Thực hiện các xử lý khác tại đây
    }
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2 " style={{ margin: "30px" }}>
        <Button
          label="Thêm mới"
          icon="pi pi-plus"
          severity="success"
          onClick={() => {
            openNew();
            setText("Thêm mới gia sư");
          }}
          style={{ padding: "10px 30px" }}
        />
        {/* <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} /> */}
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <div style={{ margin: "30px" }}>
        <Button
          label="Tải xuống"
          icon="pi pi-upload"
          style={{ marginRight: "50px", padding: "10px 30px" }}
          className="p-button-help"
          onClick={exportCSV}
        />
      </div>
    );
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`${rowData.image_url}`}
        alt={rowData.image}
        className="shadow-2 border-round"
        style={{ width: "64px" }}
      />
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          style={{ marginRight: "20px", borderRadius: "100%" }}
          icon="fa-solid fa-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          style={{ borderRadius: "100%" }}
          icon="fa-solid fa-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0 mb-4" style={{ padding: "15px 15px" }}>
        Quản lý gia sư
      </h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Tìm kiếm..."
          style={{ padding: "10px 0", marginRight: "20px" }}
        />
      </span>
    </div>
  );
  const productDialogFooter = (
    <React.Fragment>
      <Button
        label="Hủy bỏ"
        icon="pi pi-times"
        outlined
        onClick={hideDialog}
        style={{ padding: "10px 30px", marginBottom: "30px" }}
      />
      <Button
        label="Hoàn thành"
        icon="pi pi-check"
        onClick={saveProduct}
        style={{
          padding: "10px 30px",
          marginRight: "15px",
          marginBottom: "30px",
          marginLeft:'30px'
        }}
      />
    </React.Fragment>
  );
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="Đồng ý"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteProduct}
        style={{padding:'10px 20px', marginBottom:'30px'}}
      />
      <Button
        label="Hủy bỏ"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
        style={{padding:'10px 20px', marginBottom:'30px', marginRight:'30px', marginLeft:'30px'}}
      />
    </React.Fragment>
  );

  return (
    <div className="app-main__outer" style={{ margin: "20px 30px" }}>
      <div>
        <Toast ref={toast} />
        <div className="card">
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Đang hiển thị {first} đến {last} trong tổng số {totalRecords} gia sư"
            globalFilter={globalFilter}
            header={header}
            style={{ margin: "30px 0" }}
          >
            <Column
              field="tutor_profile_id"
              header="Mã"
              sortable
              style={{ minWidth: "11rem" }}
            ></Column>

            <Column
              field={user =>user?.user?.last_name}
              header="Tên gia sư"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>

            <Column
              field="description"
              header="Miêu tả"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
{/* 
            <Column
              field={(createAt) =>
                moment(createAt.creation_date).format("DD-MM-YYYY")
              }
              header="Ngày tạo"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column> */}
{/* 
            <Column
              style={{ minWidth: "12rem" }}
              field="image_url"
              header="Hình ảnh"
              body={imageBodyTemplate}
            ></Column> */}

            <Column
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem", marginRight: "100px" }}
            ></Column>
          </DataTable>
        </div>

        <Dialog
          visible={productDialog}
          style={{ width: "35rem", marginTop: "100px", maxHeight: "44rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header={text}
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div style={{ padding: "30px 30px" }}>
            <div className="field">
              <label
                htmlFor="processTypeName"
                className="font-bold"
                style={{ fontWeight: "bold" }}
              >
                Tên gia sư
              </label>
              <br />
              <InputText
                id="name"
                value={product.name}
                onChange={(e) => onInputChange(e, "name")}
                required
                autoFocus
                style={{ padding: "10px 0" }}
              />
            </div>
        
            <div className="field mt-5">
              <label
                htmlFor="description"
                className="font-bold"
                style={{ fontWeight: "bold" }}
              >
                Miêu tả
              </label>
              <InputTextarea
                id="description"
                value={product.description}
                onChange={(e) => onInputChange(e, "description")}
                required
                rows={4}
                cols={25}
              />
            </div>

           
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Thông Báo"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content" style={{margin:'20px 20px'}}>
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Bạn có chắc chắn muốn xóa gia sư <b>{product.name}</b>?
              </span>
            )}
          </div>
        </Dialog>

     
      </div>
    </div>
  );
}
