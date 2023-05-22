import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineSelect } from "react-icons/ai";
import Modal from "../components/Modal/modal";
import { Link } from "react-router-dom";
const initialFormData={
    id:"",
    name:"",
}

const Categories = () => {

    const [formData,setFormData] = useState(initialFormData)
    const [list, setList] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("categoryList")) {
            setList(JSON.parse(localStorage.getItem("categoryList")))
        }
    },[])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (formData.name) {
            //kategori eklenecek

            if (formData.id) {
                //id varsa düzenle işlemi yapılıyor
                let editedList = [
                    ...list.filter(x => x.id !== formData.id),
                    formData
                ];

                setList(editedList);
                localStorage.setItem("categoryList", JSON.stringify(editedList));
            }
            else {

                //ekleme işlemi yapılıyor

                const biggestElemId = list.length > 0 ? list.sort((a, b) => b.id - a.id)[0].id : 0;

                let newList = [
                    ...list,
                    {
                        ...formData,
                        id: biggestElemId + 1
                    }
                ];

                setList(newList);
                localStorage.setItem("categoryList", JSON.stringify(newList));
            }
            setShowModal(false);
            resetForm();
        }



    };
    const resetForm = () => {
        setFormData(initialFormData);
        setFormSubmitted(false);
    };
    const handleInputChange = (e) => {
        if (e.target.type === "checkbox" || e.target.type === "radio") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked
            });
        }
        else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    const removeCategory = () => {
        const deletedList = [...list.filter(x => x.id !== formData.id)]
        setList(deletedList);
        localStorage.setItem("categoryList", JSON.stringify(deletedList));
        setShowDeleteModal(false);
        resetForm();
    };
    return(
        <div className="category-list-header">
            <div className="list-header">
                <h1>Kategori Listesi</h1>
                    <a
                    onClick={() => {
                        setShowModal(true)
                        setFormData(initialFormData)
                    }}
                    >Kategori Ekle</a>
            </div>

            <div className="list">
                <ul className="header"> 
                <li>Sıra</li>
                <li>Id</li>
                <li className="flex-1">Kategori Adı</li>
                <li>Aksiyonlar</li>
                </ul>

                {
                    list && list.sort((a,b) => a.id - b.id).map((ctg, index) => (
                        <ul className="header" key={ctg.id}>
                            <li>{index + 1}</li>
                            <li>{ctg.id}</li>
                            <li className="flex-1">
                                <Link to={"/urunler?ctg=" + ctg.id}>{ctg.name}</Link>
                            </li>
                            <li className="action-buttons">
                                <a href="#"
                                onClick={() => {
                                    setShowModal(true)
                                    setFormData(ctg)
                                }}
                                >
                                    <AiOutlineSelect/>
                                </a>
                                <a href="#"
                                onClick={() => {
                                    setShowDeleteModal(true)
                                    setFormData(ctg)
                                }}
                                >
                                    <AiFillDelete/>
                                </a>
                            </li>
                        </ul>
                    ))
                }


                {
                list.length === 0 &&
                <div className="undefined-text">
                    <p>Kategori bulunamamıştır. Kategori eklemek için <a 
                href="#"
                onClick={() => {
                    setShowModal(true)
                    setFormData(initialFormData)
                }}
                >tıklayınız.</a>
                </p>
                </div>
            }
            </div>
 

           

        {
            showModal && 
            <Modal closeModal={() => {
                setShowModal(false)
            }}>
                <form className="form-edit-ctg" onSubmit={handleFormSubmit}>
                    <div className={formSubmitted && formData.name === "" ? "error" : ""}>
                        <label>Kategori Adı:</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange} 
                        />
                        {formSubmitted && formData.name === "" && <div>Zorunlu alan!</div>}
                    </div>
                    <div className="button-save">
                        <button type="submit">Kaydet</button>
                        <button
                        onClick={() => {
                            setShowModal(false)
                        }}
                        >Vazgeç</button>
                    </div>
                </form>
            </Modal>
        }
        {
            showDeleteModal &&
            <Modal closeModal={() => {
                setShowDeleteModal(false)
            }}>
                <div className="delete-modal">
                <h5>Uyarı!</h5>
                <p>Kategoriyi silmek istediğinizden emin misiniz?</p>
                <div className="removeButtons ">
                    <button
                    onClick={() => {
                        removeCategory();
                        setShowDeleteModal(false)
                    }}
                    >Sil</button>
                    <button
                    onClick={() => {
                        setShowDeleteModal(false)
                    }} 
                    >Vazgeç</button>
                </div>
                </div>
            </Modal>
        }
        </div>
    )
}

export default Categories;