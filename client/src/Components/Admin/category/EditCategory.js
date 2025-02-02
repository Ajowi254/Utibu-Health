import { useFormik } from "formik";
import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import AdminContext from "../../Context/adminContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

function EditCategory() {
  const {id} = useParams();
  const { category, editCategory } = useContext(AdminContext);
  let viewCategory = category.find((item) => item.id === id);

  const formik = useFormik({
    initialValues: {
      category: viewCategory ? viewCategory.category : '',
    },
    validate: (values) => {
      const errors = {};
      if (values.category.length === 0) {
        errors.category = "Enter your Category";
      }
      return errors;
    },
    onSubmit: (values) => {
     editCategory(values, id);
    },
  });

  return (
    <div className="add-brand">
      <div className="comman_header mt-3 ">Home/Category/Edit Category</div>
      <div className="comman ">
        <div className="comman_head">
          <h6>Edit Category </h6>
        </div>
        <div className="d-flex justify-content-center m-5">
          <form
            onSubmit={(values) => {
              formik.handleSubmit(values);
            }}
          >
            <label htmlFor="exampleInputEmail1" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="category"
            />
            {formik.touched.category && formik.errors.category ? (
              <div className="error"> {formik.errors.category}</div>
            ) : null}
            <button type="submit" className="btn btn-success mt-3">
            <span className='cz' ><FontAwesomeIcon icon={ faFloppyDisk}/></span> Save
            </button>
            <NavLink to="/home/category">
              <button type="submit" className="btn btn-secondary  mt-3 ms-3">
              <span className='cz' ><FontAwesomeIcon icon={ faXmark}/></span>  Cancel
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCategory;