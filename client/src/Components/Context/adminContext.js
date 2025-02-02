import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { env } from "../../config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("user");
    const [open, setOpen] = useState(false);
    const [brand, setBrand] = useState([]);
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [dashboardProduct, setDashboardProduct] = useState([]);
    const [dashboardOverview, setDashboardOverview] = useState({});
    const [dashboardBarChart, setDashboardBarChart] = useState([])
    const [user, setUser] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        getBrand();
    }, []);

    useEffect(() => {
        getCategory()
    }, []);

    useEffect(() => {
        getproducts()
    }, []);

    useEffect(() => {
        getDashboardProduct()
    }, []);

    useEffect(() => {
        getDashboardProduct()
    }, [products]);


    useEffect(() => {
        getDashboardOverview()
    }, []);

    useEffect(() => {
        getDashboardOverview()
    }, [products]);


    useEffect(() => {
        getDashboardBarChart(new Date().getFullYear())
    }, []);

    useEffect(() => {
        getUser()
    }, []);


    useEffect(() => {
        getOrder()
    }, []);

    const getBrand = async (query) => {
        try {
            let value;
            if (!query) {
                value = await axios.get(`${env.api}/brands`);
            } else {
                value = await axios.get(`${env.api}/brand?q=${query}`);
            }
            setBrand(value.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const addBrand = async (values) => {
        try {
            let user = await axios.post(`${env.api}/brand`, values);
            getBrand();
            const { data } = user;
            const { message, statusCode } = data;
            if (statusCode === 201) {
                navigate("/home/brand");
            } else {
                toast.warn(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editBrand = async (values, id) => {
        try {
            let value = await axios.put(`${env.api}/brand/${id}`, values);
            getBrand();
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                navigate("/home/brand");
            } else {
                toast.warn(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

const deleteBrand = async (id) => {
    try {
      let value = await axios.delete(`${env.api}/brand/${id}`);
      getBrand();
      const { data } = value;
      const { message, statusCode } = data;
      if (statusCode === 200) {
        toast.success(message);
      } else {
        toast.warn(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

    const getCategory = async (query) => {
        try {
            let value;
            if (!query) {
                value = await axios.get(`${env.api}/category`);
            } else {
                value = await axios.get(`${env.api}/category?q=${query}`);
            }
            setCategory(value.data.data);


        } catch (error) {
            console.log(error);
        }
    };

    const addCategory = async (values) => {
        try {
            let user = await axios.post(`${env.api}/addCategory`, values);
            getCategory()
            const { data } = user;
            const { message, statusCode } = data;
            if (statusCode === 201) {
                navigate("/home/category");
            } else {
                toast.warn(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editCategory = async (values, id) => {
        try {
            let value = await axios.put(`${env.api}/category/${id}`, values);
            getCategory()
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                navigate("/home/category");
            } else {
                toast.warn(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteCategory = async (id) => {
        try {
            let value = await axios.delete(`${env.api}/category/${id}`);
            getCategory();
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                toast.success(message);
            } else {
                toast.warn(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // product

    const getproducts = async (query) => {
        try {
            let value;
            if (!query) {
                value = await axios.get(`${env.api}/product`);
            } else {
                value = await axios.get(`${env.api}/products?q=${query}`);
            }
            setProducts(value.data.data);


        } catch (error) {
            console.log(error);
        }
    };

    const addProduct = async (values) => {
        try {
            let user = await axios.post(`${env.api}/addProduct`, values);
            const { data } = user;
            const { message, statusCode } = data;
            if (statusCode === 201) {
                getproducts()
                navigate("/home/products");
            } else {
                toast.warn(message);
            }
        } catch (error) {
            console.log(error);
        }
    };



    const editProduct = async (values, id) => {
        try {
            let value = await axios.put(`${env.api}/product/${id}`, values);
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                getproducts()
                navigate("/home/products");
            } else {
                toast.warn(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            let value = await axios.delete(`${env.api}/product/${id}`);
            const { data } = value;
            const { message, statusCode } = data;
            if (statusCode === 200) {
                getproducts();
                toast.success(message);
            } else {
                toast.warn(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Dashboard

    const getDashboardProduct = async (query) => {
        try {
            let value;
            if (!query) {
                value = await axios.get(`${env.api}/dashboardproduct`);
            } else {
                value = await axios.get(`${env.api}/dashboardproduct?q=${query}`);
            }
            const { data } = value;
            setDashboardProduct(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const getDashboardOverview = async () => {
        try {
            let value = await axios.get(`${env.api}/dashboardoverview`);
            const { data } = value;
            setDashboardOverview(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getDashboardBarChart = async (query) => {
        try {
            console.log(query);
           
                let value = await axios.get(`${env.api}/dashboardbarchart/${query}`);
           
            const { data } = value;
            setDashboardBarChart(data);
        } catch (error) {
            console.log(error);
        }
    };


    const getUser = async () => {
        try {
            let value = await axios.get(`${env.api}/users`);
            const { data } = value;
            setUser(data.data)
        } catch (error) {
            console.log(error);
        }
    };

    const getOrder = async (id) => {
        try {
            let value = await axios.get(`${env.api}/order/${id}`);
            const { data } = value;
            setOrder(data.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AdminContext.Provider value={{
            username, setUsername, brand, open, setOpen, getBrand, addBrand, editBrand, deleteBrand, category, addCategory, editCategory, deleteCategory,
            products, getproducts, addProduct, editProduct, deleteProduct, dashboardProduct, dashboardOverview, getCategory, user, getUser, order,
            getDashboardProduct, getDashboardOverview, dashboardBarChart, getDashboardBarChart, getOrder
        }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContext;
